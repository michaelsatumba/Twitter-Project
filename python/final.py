#!/usr/bin/env python
# coding: utf-8

# In[ ]:


categories = {
    "aa": ["aa", "alcoholic anonymous"],
    "acquisition": ["acquisition"],
    "addiction": ["addiction"],
    "alcohol" : ["alcohol", "henny", "henessy", "vodka"],
    "antidepressants": ["antidepressants"],
    "anxiolytics": ["anxiolytics"],
    "cannabis": ["cannabis"],
    "chem_and_bio": ["chem_and_bio"],
    "comfort": ["comfort"],
    "counseling": ["counseling"],
    "darknet": ["darknet"],
    "delivery": ["delivery"],
    "depressants": ["depressants"],
    "discomfort": ["discomfort"],
    "drug": ["drug"],
    "drug_paraphrenalia": ["paraphrenalia"],
    "drug_quantity": ["drug quantity"],
    "drug_users": ["drug users"],
    "drunk": ["drunk"],
    "effects": ["effects"],
    "energetic": ["energetic"],
    "euphoria": ["euphoria", "euphoric"],
    "finance": ["finance"],
    "hallucinogens": ["hallucinogens", "mushrooms", "lsd"],
    "health": ["health"],
    "hospital": ["hospital"],
    "idu": ["idu"],
    "increased": ["increased"],
    "legal": ["legal"],
    "locations": ["locations", "street corner"],
    "meditation": ["meditation"],
    "mental": ["mental"],
    "nooptropics": ["nooptropics", "nootropics"],
    "numbness": ["numbness"],
    "opioids": ["opioids", "oxycodone", "oxy", "heroin", "morphine"],
    "oral": ["oral", "popping"],
    "overdose": ["overdose", "OD"],
    "physical": ["physical"],
    "physical_withdrawal_symptoms": ["physical withdrawal symptoms"],
    "prescription": ["prescription"],
    "psychedelic": ["psychedelic"],
    "pschological_withdrawal_symptoms": ["pschological withdrawal symptoms"],
    "quitting": ["quitting"],
    "recovery": ["recovery"],
    "recovery_support": ["recovery support"],
    "rehab" : ["rehab", "rehabilitation"],
    "relapse": ["relapse"],
    "seizure": ["seizure"],
    "smoking": ["smoking", "cigarette", "cigs", "squares"],
    "stimulants": ["stimulants", "stims"],
    "street": ["street"],
    "supplements": ["supplements"],
    "therapy": ["therapy"],
    "tobacco": ["tobacco"],
    "tolerance": ["tolerance"],
    "using": ["using", "shooting"],
    "withdrawal": ["withdrawal"]
}


# In[2]:


import Stemmer
import pandas as pd

# Use english stemmer as all keywords are in english
stemmer = Stemmer.Stemmer('en')

dfs = []
for key, values in categories.items():
    words = pd.DataFrame({'category': key, 'term': stemmer.stemWords(values)})
    dfs.append(words)
    
terms_df = pd.concat(dfs)
terms_df


# In[3]:


tweet_db_path = "../database.json"

df = pd.read_json(tweet_db_path)

# filtering out "at's" and http links
for index, row in df.iterrows():
    filtered_tweet_words = []

    for word in row["text"].split(' '):
        if word.startswith("@") and len(word) > 1:
            word = ""
        elif word.startswith("http"):
            word = ""
        filtered_tweet_words.append(word)
    tweet = " ".join(filtered_tweet_words)
    df.at[index, "text"] = tweet

df


# In[4]:


from sklearn.feature_extraction.text import CountVectorizer

stemmer = Stemmer.Stemmer('en')

class StemmedCountVectorizer(CountVectorizer):
    def build_analyzer(self):
        analyzer = super(StemmedCountVectorizer, self).build_analyzer()
        return lambda doc: stemmer.stemWords([w for w in analyzer(doc)])

term_list = list(terms_df.term)

vectorizer = StemmedCountVectorizer(binary = True, vocabulary = term_list)
fitted = vectorizer.fit_transform(df.text)
words_df = pd.DataFrame(fitted.toarray(), columns = vectorizer.get_feature_names())
words_df.head()


# In[5]:


for category_name, rows in terms_df.groupby('category'):
    terms = list(rows['term'])
    print(f"category: {category_name}\nstems: {terms}\n")

    df[category_name] = words_df[terms].any(axis=1).astype(int)


# In[6]:


# 501st tweet in the list contains one instance of the word "Cannabis", capitalized
df['cannabis'][501]


# In[7]:


df['text'][501]


# In[14]:


# tweet we're using as an example
test_tweet = df.at[123, "text"]
test_tweet


# In[ ]:


# Then, perform sentiment analysis on the tweets to figure out if there is a
# correlation between these keywords (from DUI) and a positive vs negative
# sentiment

from transformers import AutoTokenizer, AutoModelForSequenceClassification
from scipy.special import softmax

pretrained_model = open("pretrained_model").read()

model = AutoModelForSequenceClassification.from_pretrained(pretrained_model)
tokenizer = AutoTokenizer.from_pretrained(pretrained_model)

labels = ["negative", "neutral", "positive"]

for index, row in df.iterrows():
#     print(row["text"])
    print(row)
    encoded_tweet = tokenizer(row["text"], return_tensors='pt')

    output = model(**encoded_tweet)

    scores = output[0][0].detach().numpy()
    scores = softmax(scores)

    for i in range(len(scores)):
        l = labels[i]
        s = scores[i]
        print(l, s)
        
    print("\n")


# In[ ]:





# In[ ]:




