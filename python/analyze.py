import random
from sklearn.model_selection import train_test_split
from cProfile import label
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.linear_model import LogisticRegression
import json

# data = []
# data_labels = []

labelled_json = open("../labelled.json").read()
# unlabelled_json = open("../database.json").read()

labelled = json.loads(labelled_json)
# unlabelled = json.loads(unlabelled_json)

# print(labelled)

train = []
train_labels = []

for tweet in labelled[u"data"]:
    text = tweet[u"tweet"][u"text"]
    train.append(text)
    sentiment = tweet[u"sentiment"]
    train_labels.append(sentiment)

vectorizer = CountVectorizer(
    analyzer='word',
    lowercase=False,
)

features = vectorizer.fit_transform(
    train
)

features_nd = features.toarray()


X_train, X_test, y_train, y_test = train_test_split(
    features_nd,
    train_labels,
    train_size=0.75,
    random_state=1234)


# print(features_nd)






















# log_model = LogisticRegression()

# log_model = log_model.fit(
#     X=X_train,
#     y=y_train,
# )

# y_pred = log_model.predict(X_test)

# for i in range(0, len(X_test)):
#     print(y_pred[0])
#     ind = features_nd.tolist().index(X_test[i].tolist())
#     print(train[ind].strip())
