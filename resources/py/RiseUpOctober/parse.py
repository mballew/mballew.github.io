import json
from pprint import pprint
import time

start_time = time.time()

objs = []
dates = []
hashtags = []

fridays = [] #contains the full objects for all of the tweets made on Friday
saturdays = [] #contains the full objects for all of the tweets made on Saturday
sundays = [] #contains the full objects for all of the tweets made on Sunday

fridayRUO = [] #contains the full objects for all of the tweets with #RiseUpOctober
saturdayRUO = []
sundayRUO = []

fridayBlackLivesMatter = []
saturdayBlackLivesMatter = []
sundayBlackLivesMatter = []

fridayBLM = []
saturdayBLM = []
sundayBLM = []

fridaySTN = []
saturdaySTN = []
sundaySTN = []

fridaySPB = []
saturdaySPB = []
sundaySPB = []

fridayHourDict = {} #contains (hour of day, tweet object)


fridayDict = {} #contains key,value pairs (hour of day, number of tweets)
saturdayDict = {} #contains key,value pairs (hour of day, number of tweets)
sundayDict = {} #contains key,value pairs (hour of day, number of tweets)

fridayMostFollowersDict = {} #contains a dictionary with key,value (hour of day, object of most favorited tweet in that hour)
saturdayMostFollowersDict = {}
sundayMostFollowersDict = {}

fridayRUOFollowersDict = {} #contains a dictionary with key,value (hour of day, object of most favrotied tweet with specific hashtag)
saturdayRUOFollowersDict = {}
sundayRUOFollowersDict = {}

fridayBlackLivesMatterFollowersDict = {} #contains a dictionary with key,value (hour of day, object of most favrotied tweet with specific hashtag)
saturdayBlackLivesMatterFollowersDict = {}
sundayBlackLivesMatterFollowersDict = {}

fridayBLMFollowersDict = {} #contains a dictionary with key,value (hour of day, object of most favrotied tweet with specific hashtag)
saturdayBLMFollowersDict = {}
sundayBLMFollowersDict = {}

fridaySTNFollowersDict = {} #contains a dictionary with key,value (hour of day, object of most favrotied tweet with specific hashtag)
saturdaySTNFollowersDict = {}
sundaySTNFollowersDict = {}

fridaySPBFollowersDict = {} #contains a dictionary with key,value (hour of day, object of most favrotied tweet with specific hashtag)
saturdaySPBFollowersDict = {}
sundaySPBFollowersDict = {}

fridayLongestTweetDict = {} #contains a dictionary with key,value (hour of day, object of longest tweet in that hour)

fridayRUODict = {} #contain the key value pairs for the number of tweets in an hour with the specific hashtag
fridayBLMDict = {}
fridayblmDict = {}
fridaySMIDict = {}
fridaySTNDict = {}
fridaySPBDict = {}

saturdayRUODict = {} #contain the key value pairs for the number of tweets in an hour with the specific hashtag
saturdayBLMDict = {}
saturdayblmDict = {}
saturdaySMIDict = {}
saturdaySTNDict = {}
saturdaySPBDict = {}

sundayRUODict = {} #contain the key value pairs for the number of tweets in an hour with the specific hashtag
sundayBLMDict = {}
sundayblmDict = {}
sundaySMIDict = {}
sundaySTNDict = {}
sundaySPBDict = {}

def writeTSV(filename, collection): #there will be a .tsv file for each of the 5 days
	fo = open(filename, "wb")
	fo.write('hour\ttweetvolume\n'.encode("utf-8"))
	for i in range(0,24):
		fo.write((str(i) + '\t' + str(collection[i]) + '\n').encode("utf-8"))
	fo.close()

# def writeJSON(filename, collection):
# 	fo = open(filename, "wb")
# 	for i in range(0,24):
# 		fo.write(str(collection[i]) + '\n')
def writeJSON(filename, collection):
	with open(filename, 'w', encoding="utf-8") as f:
		#json.dump(data[0], f, sort_keys=True)
		for i in range(0,24):
			#pprint(tweet)
			#json.dump(tweet, f, sort_keys=True)
			#f.writelines("\n")
			if (len(collection) > 0):
				json.dump(collection[i], f, sort_keys=True)
				f.writelines("\n")

def writeJSONfreq(filename, collection):
	with open(filename, 'w', encoding="utf-8") as f:
		json.dump(collection, f)
		#json.dump(data[0], f, sort_keys=True)
		# for i in range(0,len(collection)):
		# 	#pprint(tweet)
		# 	#json.dump(tweet, f, sort_keys=True)
		# 	#f.writelines("\n")
		# 	if (len(collection) > 0):
		# 		json.dump(collection[i], f, sort_keys=True)
		# 		f.writelines("\n")

def countHours(dayList, day, dictionary):
	j = 0
	k = None
	# print dayList[0]
	for i in range(0,24): #look for every hour
		count = 0
		for j in range(0,len(dayList)): #check every entry on the particular day
			if day == 'friday':
				if i < 10: #used to see if we need to look for a 0 in front (for example, 04:00)
					k = '0' + str(i)
				else:
					k = str(i)
				if '23 ' + str(k) in dayList[j]['created_at']: #if current hour found, increment the count
					count = count + 1
			if day == 'saturday':
				if i < 10: #used to see if we need to look for a 0 in front (for example, 04:00)
					k = '0' + str(i)
				else:
					k = str(i)
				if '24 ' + str(k) in dayList[j]['created_at']: #if current hour found, increment the count
					count = count + 1
			if day == 'sunday':
				if i < 10: #used to see if we need to look for a 0 in front (for example, 04:00)
					k = '0' + str(i)
				else:
					k = str(i)
				if '25 ' + str(k) in dayList[j]['created_at']: #if current hour found, increment the count
					count = count + 1
		dictionary[i] = count #appends to the dictionary the (hour,count) key,value pair

def countHashtags(dayList, day, hashtag, dictionary):
	j = 0
	k = None
	hashtag.lower()
	# print dayList[0]
	for i in range(0,24): #look for every hour
		count = 0
		for j in range(0,len(dayList)): #check every entry on the particular day
			if day == 'friday':
				if i < 10: #used to see if we need to look for a 0 in front (for example, 04:00)
					k = '0' + str(i)
				else:
					k = str(i)
				for l in range(0, len(objs[j]['entities']['hashtags'])):
					if '23 ' + str(k) in dayList[j]['created_at']: #if current hour found, increment the count
						if objs[j]['entities']['hashtags'][l]['text'] == hashtag:
							count = count + 1
			if day == 'saturday':
				if i < 10: #used to see if we need to look for a 0 in front (for example, 04:00)
					k = '0' + str(i)
				else:
					k = str(i)
				# [x.lower() for x in objs[j]['entities']['hashtags']]
				for l in range(0, len(objs[j]['entities']['hashtags'])):
					if '24 ' + str(k) in dayList[j]['created_at']: #if current hour found, increment the count
						if objs[j]['entities']['hashtags'][l]['text'] == hashtag:
								count = count + 1
			if day == 'sunday':
				if i < 10: #used to see if we need to look for a 0 in front (for example, 04:00)
					k = '0' + str(i)
				else:
					k = str(i)
				# [x.lower() for x in objs[j]['entities']['hashtags']]
				for l in range(0, len(objs[j]['entities']['hashtags'])):
					if '25 ' + str(k) in dayList[j]['created_at']: #if current hour found, increment the count
						if objs[j]['entities']['hashtags'][l]['text'] == hashtag:
								count = count + 1
		dictionary[i] = count #appends to the dictionary the (hour,count) key,value pair

def findUserMostFollowers(dayList, day, dictionary): #finds tweet made by the user with the most followers each hour (hour, tweet obj)
	count = 0
	currentMostFavoriteIndex = 0
	for i in range(0,24):
		count = 0
		for j in range(0,len(dayList)):
			if i < 10:
				if dayList[j]['user']['followers_count'] > count and '23 0' + str(i) in dayList[j]['created_at']:
					count = dayList[j]['user']['followers_count']
					currentMostFavoriteIndex = j
			if i >= 10:
				if dayList[j]['user']['followers_count'] > count and '23 ' + str(i) in dayList[j]['created_at']:
					count = dayList[j]['user']['followers_count']
					currentMostFavoriteIndex = j
			if i < 10:
				if dayList[j]['user']['followers_count'] > count and '24 0' + str(i) in dayList[j]['created_at']:
					count = dayList[j]['user']['followers_count']
					currentMostFavoriteIndex = j
			if i >= 10:
				if dayList[j]['user']['followers_count'] > count and '24 ' + str(i) in dayList[j]['created_at']:
					count = dayList[j]['user']['followers_count']
					currentMostFavoriteIndex = j
			if i < 10:
				if dayList[j]['user']['followers_count'] > count and '25 0' + str(i) in dayList[j]['created_at']:
					count = dayList[j]['user']['followers_count']
					currentMostFavoriteIndex = j
			if i >= 10:
				if dayList[j]['user']['followers_count'] > count and '25 ' + str(i) in dayList[j]['created_at']:
					count = dayList[j]['user']['followers_count']
					currentMostFavoriteIndex = j
		if (len(dayList) > 0):
			dictionary[i] = dayList[currentMostFavoriteIndex] #maps hour with the obj with the highest favorite_count
	# for k in range(0,24):
	# 	print dictionary[k]['favorite_count']

def filterHashtags(dayList, hashtagList, hashtag): #finds tweet made by the user with the most followers each hour (hour, tweet obj)
	for i in range(len(dayList)):
		for j in range(len(dayList[i]['entities']['hashtags'])):
			if dayList[i]['entities']['hashtags'][j]['text'].lower() == hashtag.lower():
				hashtagList.append(dayList[i])

def findLongestTweet(dayList, day, dictionary):
	count = 0
	currentLongestIndex = 0
	for i in range(0,24): #iterate through each hour
		for j in range(0,len(dayList)):
			if len(dayList[j]['text']) > count:
				count = len(dayList[j]['text'])
				currentLongestIndex = j
		dictionary[i] = dayList[currentLongestIndex] #maps hour with the obj with the longest tweet in that hour
	#print len(dictionary[0]['text'])



with open('RiseUpOctober', encoding="utf-8") as f:
	for line in f:
		data = json.loads(line)
		objs.append(data)

# for i in range(0,len(objs)):
# 	dates.append(objs[i]['created_at'])

# for i in range(0,len(objs)):
# 	hashtags.append(obj[i]['entities.hashtags'])

for j in range(0,len(objs)):
	if "Fri" in objs[j]['created_at']:
		# pprint(objs[j]['entities']['hashtags'])
		# print objs[j]['entities']['hashtags']
		fridays.append(objs[j])
	if "Sat" in objs[j]['created_at']:
		saturdays.append(objs[j])
	if "Sun" in objs[j]['created_at']:
		sundays.append(objs[j])

countHours(fridays,'friday',fridayDict)
countHours(saturdays,'saturday',saturdayDict)
countHours(sundays,'sunday',sundayDict)
#print mondayDict
writeTSV("friday.tsv", fridayDict)
writeTSV("saturday.tsv", saturdayDict)
writeTSV("sunday.tsv", sundayDict)


countHashtags(fridays, 'friday', 'RiseUpOctober', fridayRUODict)
countHashtags(fridays, 'friday', 'BlackLivesMatter', fridayBLMDict)
countHashtags(fridays, 'friday', 'BLM', fridayblmDict)
countHashtags(fridays, 'friday', 'StopMassIncarceration', fridaySMIDict)
countHashtags(fridays, 'friday', 'SayTheirNames', fridaySTNDict)
countHashtags(fridays, 'friday', 'StopPoliceBrutality', fridaySPBDict)

countHashtags(saturdays, 'saturday', 'RiseUpOctober', saturdayRUODict)
countHashtags(saturdays, 'saturday', 'BlackLivesMatter', saturdayBLMDict)
countHashtags(saturdays, 'saturday', 'BLM', saturdayblmDict)
countHashtags(saturdays, 'saturday', 'StopMassIncarceration', saturdaySMIDict)
countHashtags(saturdays, 'saturday', 'SayTheirNames', saturdaySTNDict)
countHashtags(saturdays, 'saturday', 'StopPoliceBrutality', saturdaySPBDict)

countHashtags(sundays, 'sunday', 'RiseUpOctober', sundayRUODict)
countHashtags(sundays, 'sunday', 'BlackLivesMatter', sundayBLMDict)
countHashtags(sundays, 'sunday', 'BLM', sundayblmDict)
countHashtags(sundays, 'sunday', 'StopMassIncarceration', sundaySMIDict)
countHashtags(sundays, 'sunday', 'SayTheirNames', sundaySTNDict)
countHashtags(sundays, 'sunday', 'StopPoliceBrutality', sundaySPBDict)


writeTSV("fridayRiseUpOctober.tsv", fridayRUODict)
writeTSV("fridayBlackLivesMatter.tsv", fridayBLMDict)
writeTSV("fridayBLM.tsv", fridayblmDict)
writeTSV("fridayStopMassIncarceration.tsv", fridaySMIDict)
writeTSV("fridaySayTheirNames.tsv", fridaySTNDict)
writeTSV("fridayStopPoliceBrutality.tsv", fridaySPBDict)

writeTSV("saturdayRiseUpOctober.tsv", saturdayRUODict)
writeTSV("saturdayBlackLivesMatter.tsv", saturdayBLMDict)
writeTSV("saturdayBLM.tsv", saturdayblmDict)
writeTSV("saturdayStopMassIncarceration.tsv", saturdaySMIDict)
writeTSV("saturdaySayTheirNames.tsv", saturdaySTNDict)
writeTSV("saturdayStopPoliceBrutality.tsv", saturdaySPBDict)

writeTSV("sundayRiseUpOctober.tsv", sundayRUODict)
writeTSV("sundayBlackLivesMatter.tsv", sundayBLMDict)
writeTSV("sundayBLM.tsv", sundayblmDict)
writeTSV("sundayStopMassIncarceration.tsv", sundaySMIDict)
writeTSV("sundaySayTheirNames.tsv", sundaySTNDict)
writeTSV("sundayStopPoliceBrutality.tsv", sundaySPBDict)

#findLongestTweet(fridays,'friday',fridayDict)
findUserMostFollowers(fridays,'friday',fridayMostFollowersDict)
findUserMostFollowers(saturdays,'saturday',saturdayMostFollowersDict) 
findUserMostFollowers(sundays,'sunday',sundayMostFollowersDict)

writeJSON('fridayFollowers.json', fridayMostFollowersDict)
writeJSON('saturdayFollowers.json', saturdayMostFollowersDict)  
writeJSON('sundayFollowers.json', sundayMostFollowersDict)  

filterHashtags(fridays,fridayRUO,"RiseUpOctober")
filterHashtags(saturdays,saturdayRUO,"RiseUpOctober")
filterHashtags(sundays,sundayRUO,"RiseUpOctober")

filterHashtags(fridays,fridayBlackLivesMatter,"BlackLivesMatter")
filterHashtags(saturdays,saturdayBlackLivesMatter,"BlackLivesMatter")
filterHashtags(sundays,sundayBlackLivesMatter,"BlackLivesMatter")

filterHashtags(fridays,fridayBLM,"BLM")
filterHashtags(saturdays,saturdayBLM,"BLM")
filterHashtags(sundays,sundayBLM,"BLM")

filterHashtags(fridays,fridaySTN,"SayTheirNames")
filterHashtags(saturdays,saturdaySTN,"SayTheirNames")
filterHashtags(sundays,sundaySTN,"SayTheirNames")

filterHashtags(fridays,fridaySPB,"StopPoliceBrutality")
filterHashtags(saturdays,saturdaySPB,"StopPoliceBrutality")
filterHashtags(sundays,sundaySPB,"StopPoliceBrutality")


#-------------------------------------------------------------------
findUserMostFollowers(fridayRUO,'friday',fridayRUOFollowersDict)
findUserMostFollowers(saturdayRUO,'saturday',saturdayRUOFollowersDict)
findUserMostFollowers(sundayRUO,'sunday',sundayRUOFollowersDict)

findUserMostFollowers(fridayBlackLivesMatter,'friday',fridayBlackLivesMatterFollowersDict)
findUserMostFollowers(saturdayBlackLivesMatter,'saturday',saturdayBlackLivesMatterFollowersDict)
findUserMostFollowers(sundayBlackLivesMatter,'sunday',sundayBlackLivesMatterFollowersDict)

findUserMostFollowers(fridayBLM,'friday',fridayBLMFollowersDict)
findUserMostFollowers(saturdayBLM,'saturday',saturdayBLMFollowersDict)
findUserMostFollowers(sundayBLM,'sunday',sundayBLMFollowersDict)

findUserMostFollowers(fridaySTN,'friday',fridaySTNFollowersDict)
findUserMostFollowers(saturdaySTN,'saturday',saturdaySTNFollowersDict)
findUserMostFollowers(sundaySTN,'sunday',sundaySTNFollowersDict)

findUserMostFollowers(fridaySPB,'friday',fridaySPBFollowersDict)
findUserMostFollowers(saturdaySPB,'saturday',saturdaySPBFollowersDict)
findUserMostFollowers(sundaySPB,'sunday',sundaySPBFollowersDict)

writeJSON('fridayFollowers.json', fridayMostFollowersDict)
writeJSON('saturdayFollowers.json', saturdayMostFollowersDict)  
writeJSON('sundayFollowers.json', sundayMostFollowersDict)

writeJSON('fridayRiseUpOctober.json',fridayRUOFollowersDict)
writeJSON('saturdayRiseUpOctober.json',saturdayRUOFollowersDict)
writeJSON('sundayRiseUpOctober.json',sundayRUOFollowersDict)

writeJSON('fridayBlackLivesMatter.json',fridayBlackLivesMatterFollowersDict)
writeJSON('saturdayBlackLivesMatter.json',saturdayBlackLivesMatterFollowersDict)
writeJSON('sundayBlackLivesMatter.json',sundayBlackLivesMatterFollowersDict)

writeJSON('fridayBLM.json',fridayBLMFollowersDict)
writeJSON('saturdayBLM.json',saturdayBLMFollowersDict)
writeJSON('sundayBLM.json',sundayBLMFollowersDict)

writeJSON('fridaySTN.json',fridaySTNFollowersDict)
writeJSON('saturdaySTN.json',saturdaySTNFollowersDict)
writeJSON('sundaySTN.json',sundaySTNFollowersDict)

writeJSON('fridaySPB.json',fridaySPBFollowersDict)
writeJSON('saturdaySPB.json',saturdaySPBFollowersDict)
writeJSON('sundaySPB.json',sundaySPBFollowersDict)


# for i in range(0,len(fridayRUOFollowersDict)):
# 	print fridayRUOFollowersDict[i]['user']['followers_count']
# 	print "\n"


# for i in range(0,len(fridayRUO)):
# 	print "-----"
# 	for j in range(0,len(fridayRUO[i]['entities']['hashtags'])):
# 		print fridayRUO[i]['entities']['hashtags'][j]['text']


# for i in range(0,len(sundayMostFollowersDict)):
# 	print sundayMostFollowersDict[i]['user']['followers_count']



fl = []
hc = 0

def frequency_list(inputList, outputList, hCount):
	found = 0
	count = 1
	intList = []
	for i in range(0,len(inputList)):
		for j in range(0,len(inputList[i]['entities']['hashtags'])):
			for k in range(0,len(intList)):
				if inputList[i]['entities']['hashtags'][j]['text'].lower() == intList[k]["text"].lower():
					intList[k]["size"] += 1
					found = 1
			if found == 0:
				intList.append({"text":inputList[i]['entities']['hashtags'][j]['text'].lower(),"size":1})
				count += 1
				found = 0;

	pprint(count)
	count = 0
	for i in range(0,len(intList)):
		if intList[i]["size"] > 99:
			outputList.append(intList[i])
			count += 1
	pprint(count)
	hCount = count

def normalize(raw):
	for i in range(0,len(raw)):
		if raw[i]["text"] == "blacklivesmatter":
			raw[i]["size"] = 100
		elif raw[i]["text"] == "riseupoctober":
			raw[i]["size"] = 90
		else:
			raw[i]["size"] = raw[i]["size"] / 5240 * 80


frequency_list(objs, fl, hc)

normalize(fl)

writeJSONfreq('wordCloud.json', fl)

pprint("Time: %s" % (time.time()- start_time))
pprint("Hashtags: %s" % hc)