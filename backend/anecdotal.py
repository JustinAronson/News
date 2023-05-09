# anecdotal stuff ahhhhh

# 1 = maybe anecdotal
# 5 = definitely anecdotal

anecdotalDict = {"I": 1,
 "me": 1,
 "my": 1,
 "we": 1,
 "our": 1,
 "said": 1,
 "personal^l": 2,
 "personally": 3,
 "point of view": 2,
 "opinion": 2,
 "In my experience": 3,
 "In my personal experience": 5,
 "As far as I know": 4,
 "I've seen": 4,
 "I've heard": 5,
 "In my view": 4,
 "I think": 4,
 "To the best of my knowledge": 3,
 "I heard": 5,
 "According to a friend of mine": 5,
 "According to my": 3,
 "It seems to me": 5,
 "It looks to me": 5,
 "It appears to me": 5,
 "I believe": 4,
 "As I understand it": 4,
 "Alleged": 4,
 "Apparent": 2,
 "Supposed": 3,
 "If you ask me": 5,
 "Rumor has it": 5,
 "It's rumored": 5,
 "people say": 5,
 "once told me": 5,
 "It's been said": 5,
 "It's possible": 2,
 "It's likely": 3,
 "It's plausible": 4,
 "it seems": 3,
 "As I see it": 2,
 "From my point of view": 3,
 "I feel": 2,
 "I suppose": 2,
 "I guess": 4,
 "As far as I'm concerned": 2}

anecdotalRegex = r"""I|me|my|we|our|said|personal^l|personally|point of view|opinion|In my experience|In my personal experience|As far as I know|
I've seen|I've heard|In my view|I think|To the best of my knowledge|I heard|
According to a friend of mine|According to my|It seems to me|It looks to me|
It appears to me|I believe|As I understand it|Alleged|Apparent|Supposed|If you ask me|
Rumor has it|It's rumored|people say|once told me|It's been said|It's possible|It's likely|
It's plausible|it seems|As I see it|From my point of view|I feel|I suppose|I guess|As far as I'm concerned """