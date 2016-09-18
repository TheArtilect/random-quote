
function startPage(){



  function randomQuote() {
    var quote = "";
    var quotesHash = {
      0: ['Crush your enemies, see them driven before you and hear the lamentation of their women.', 'Conan, The Barbarian'],
      1: ['Curiosity killed the cat, but for awhile, I was a suspect.', 'Steven Wright'],
      2: ['Looks like I just picked a bouquet of oopsie daisies.', "Stan Smith"],
      3: ["All that we see or seem is, but a dream within a dream.", "Edgar Allan Poe"],
      4: ["They call'em fingers, but I've never seen them fing.....oh there they go!", "Otto, the Bus Driver"],
      5: ["Well buddy, you're in love with Melissa.  What a mess...", "Peter Griffin"],
      6: ["I use Instagram to compensate for my low self esteem is a bunch of words my therapist said.", "Dom Mazzetti"],
      7: ["Of all the things in me to admire, she picked my apathy. That’s disheartening.", "Shane"],
      8: ["It's on the island I wind my endless ways.  The island, that's all the earth I know.", "Samuel Beckett"],
      9: ["Me fail english?  That's unpossible.", "Ralph Wiggum"],
      10: ["When she sees you'll do anything she says, she's bound to respect you.", "Milhouse von Houten"],
      11: ["Just because I don't care doesn't mean I don't understand.", "Homer Simpson"],
      12: ["I never wanted to kill myself over anything major. It’s always the little things that do me in.", "Bill Burr"],
      13: ["I love my dog. I hate bankers. I have issues with women. In my head, I’m a great guy.", "Bill Burr"],
      14: ["My eyes! The googles do nothing!", "Radioactive Man"],
      15: ["Inflammable means flammable?  What a country.", "Dr. Nick"],
      16: ["OMAHA!", 'Peyton Manning'],
      17: ["Why do I fall in love with every woman I see who shows me the least bit of attention?", "Joel Barish"],
      18: ["The dead know only one thing: it is better to be alive.", "Private Joker"],
      19: ["Time's funny. When you're a kid, it passes slowly, and next thing you're fifty and your childhood fits into a rusty little box.", "Bretodeau"],
      20: ["My name is Puggy and I live in a tree. I hope I didn't ruin anything for you.", "Puggy"],
      21: ["They carried all they could bear, and then some, including a silent awe for the power of the things they carried.", "Tim O'Brien"],
      22: ["Bird law in this country is not governed by reason.", "Charlie Kelly"],
      23: ["Hummingbirds are a legal tender.", "Charlie Kelly"],
      24: ["I'm having feelings again, like some kind of 14 year old kid or something.  You remember feelings, right?", "Dennis Reynolds"],
      25: ["Bro, when you tack on mass, you sacrifice flexibility. That's just a straight up fact.", "Ronald 'Mac' McDonald"],
      26: ["What she gon' do?", "Gaps Martin"],
      27: ["Wisdom without knowledge is like a spoon without soup.", "Anuj P."],
      28: ["Poo-tee-weet.", "Fritz T."],
      29: ["MMMMMMM ...sacrilicious.", "Homer Simpson"],
      30: ["If you want him to live, you should roll him over to his stomach.  Remember, IF...", "Dr. Hibbert"],
      31: ["I told my dad about a dream I had and asked what it meant, he said 'it means you were sleeping'.", "Steven Wright"],
      32: ["Hell is other people.", "Jean-Paul Sarte"],
      33: ["Realize that sleeping on a futon when you're 30 is not the worst thing. You know what's worse, sleeping in a king bed next to a wife you're not really in love with but for some reason you married, and you got a couple kids, and you got a job you hate. You'll be laying there fantasizing about sleeping on a futon. There's no risk when you go after a dream. There's a tremendous amount to risk to playing it safe.", "Bill Burr"],
      34: ["I EAT STICKERS ALL THE TIME, DUDE!", "Charlie Kelly"],
      35: ["I got food poisoning today. I don't know when I'll use it.", "Steven Wright"],
      36: ["...because of the implication.", "Dennis Reynolds"],
      37: ["Demonstrate value. Engage physically. Nurture dependence. Neglect emotionally. Inspire hope. Separate entirely.", "Dennis Reynolds"],
      38: ["Do my worst, eh? Smithers, release the robotic Richard Simmons!", "C. Montgomery Burns"],
      39: ["What is this word, spa? I feel like you're starting to a say a word and you're not finishing it. Are you trying to say spaghetti? Are you taking me for a spaghetti day?", "Charlie Kelly"],
      40: ["I'm not fat. I'm cultivating mass.", "Ronald 'Mac' McDonald"],
      41: ["It depends on what the meaning of the word 'is' is.", "Bill Clinton"],
      42: ["Smoke some cigarettes. The smoke will suffocate the bacteria in your stomach.", "Ronald 'Mac' McDonald"],
      43: ["I don't know. I'm not gonna sit here and try and get inside the mind of a dog. I mean, that's God's work. Well, not that I believe in God.", "Rickety Cricket"],
      44: ["I love you, but that hasn't helped at all.", "Unknown"],
      45: ["There is a theory which states that if ever anybody discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory which states that this has already happened.", "Douglas Adams"],
      46: ["To me this is not yelling. I am not yelling. I'm just passionate about my opinions and I want to tell you all of them before you start talking again.", "Bill Burr"],
      47: ["There he goes. One of God's own prototypes. A high-powered mutant of some kind never even considered for mass production. Too weird to live, and too rare to die.", "Raoul Duke"],
      48: ["Strange memories on this nervous night in Las Vegas. Has it been five years? Six? It seems like a lifetime, the kind of peak that never comes again. San Francisco in the middle sixties was a very special time and place to be a part of. But no explanation, no mix of words or music or memories can touch that sense of knowing that you were there and alive in that corner of time in the world. Whatever it meant.", "Raoul Duke"],
      49: ["With a bit of luck, his life was ruined forever. Always thinking that just behind some narrow door in all of his favorite bars, men in red woolen shirts are getting incredible kicks from things he'll never know.", "Raoul Duke"],
      50: ["There was madness in any direction, at any hour. You could strike sparks anywhere. There was a fantastic universal sense that whatever we were doing was right, that we were winning.", "Raoul Duke"],
      51: ["And that, I think, was the handle - that sense of inevitable victory over the forces of old and evil. Not in any mean or military sense; we didn't need that. Our energy would simply prevail. We had all the momentum; we were riding the crest of a high and beautiful wave. So now, less than five years later, you can go up on a steep hill in Las Vegas and look west, and with the right kind of eyes you can almost see the high-water mark - that place where the wave finally broke and rolled back.", "Raoul Duke"],
      52: ["The fact that we live at the bottom of a deep gravity well, on the surface of a gas covered planet going around a nuclear fireball 90 million miles away and think this to be normal is obviously some indication of how skewed our perspective tends to be.", "Douglas Adams"],
      53: ["We are going to die, and that makes us the lucky ones. Most people are never going to die because they are never going to be born. The potential people who could have been here in my place but who will in fact never see the light of day outnumber the sand grains of Arabia. Certainly those unborn ghosts include greater poets than Keats, scientists greater than Newton. We know this because the set of possible people allowed by our DNA so massively exceeds the set of actual people. In the teeth of these stupefying odds it is you and I, in our ordinariness, that are here.We privileged few, who won the lottery of birth against all odds, how dare we whine at our inevitable return to that prior state from which the vast majority have never stirred?", "Dr. Richard Dawkins"],
      54: ["Why was I born handsome instead of rich?", "Ralph Cifaretto"],
      55: ["Mrs. Krabappel and Principal Skinner were in the closet making babies, and I saw one of the babies, and then the baby looked at me.", "Ralph Wiggum"],
      56: ["Hodor.", "Brandon Stark"],
      57: ["It's not easy to juggle a pregnant wife and a troubled child, but somehow I managed to fit in eight hours of TV a day.", "Homer Simpson"],
      58: ["Maybe, just once, someone will call me 'Sir' without adding, 'You/re making a scene’", "Homer Simpson"],
      59: ["Looking up into the night sky is looking into infinity—distance is incomprehensible and therefore meaningless.", "Douglas Adams"],
      60: ["If Barbie is so popular, why do you have to buy her friends?", "Steven Wright"],
      61: ["I believe that Gandhi’s views were the most enlightened of all the political men in our time. We should strive to do things in his spirit: not to use violence in fighting for our cause, but by non-participation in anything you believe is evil.", "Albert Einstein"],
      62: ["WHY SHOULD THEY BE HAPPY?!?!", "Ted Buckland"],
      63: ["Midway on our life's journey, I found myself in dark woods, the right road lost.", "Dante"],
      64: ["There is surely nothing other than the single purpose of the moment. A man's whole life is a succession of moment after moment. If one fully understands the present moment, there is nothing left to do, and nothing else to pursue.", "Ghost Dog"],
      65: ["I do dimly perceive that whilst everything around me is ever changing, ever dying, there is underlying all that change, a living power that is changeless, that holds all together, that creates, dissolves, and recreates.", "Mahatma Gandhi"],
      66: ["These pretzels are making me thirsty!","Cosmo Kramer"],
      67: ["Jerry, just remember:  It's not a lie if you believe it.", "George Costanza"],
      68: ["The year was 1968. We were on recon in a steaming Mekong delta. An overheated private removed his flack jacket, revealing a T-shirt with an ironed-on sporting the MAD slogan 'Up with Mini-skirts!'. Well, we all had a good laugh, even though I didn't quite understand it. But our momentary lapse of concentration allowed 'Charlie' to get the drop on us. I spent the next three years in a POW camp, forced to subsist on a thin stew made of fish, vegetables, prawns, coconut milk, and four kinds of rice. I came close to madness trying to find it here in the States, but they just can't get the spices right!", "Principal Skinner"],
      69: ["Hey, Super-Nintendo Chalmers.", "Ralph Wiggum"],
      70: ["I got a problem, can you relate?  I got a woman callin' love hate.", "Eric Clapton"],
      71: ["At the Festivus dinner, you gather your family around, and tell them all the ways they have disappointed you over the past year.", "Frank Costanza"],
      72: ["Let me understand, you got the hen, the chicken and the rooster. The rooster goes with the chicken. So, who's having sex with the hen?", "Frank Costanza"],
      73: ["People make life so much worse than it has to be.", "Larry David"],
      74: ["A date is an experience you have with another person that makes you appreciate being alone.", "Larry David"],
      75: ["Welcome, newcomers. The tradition of Festivus begins with the airing of grievances. I got a lot of problems with you people! And now you're gonna hear about it!", "Frank Costanza"],
      76: ["It's like those hip musicains and their complicated shoes.", "George Costanza"],
      77: ["The sea was angry that day my friends, like an old man trying to send back soup in a deli.", "George Costanza"],
      78: ["SERENITY NOW!", 'Frank Costanza'],
      79: ["That's gold, Jerry.  GOLD!", "Kenny Bania"],
      80: ["There is always some madness in love.  But there is also always some reason in madness.", "Friedrich Nietzsche"],
      81: ["I can assure the police do not take prisoners out of their cells and race them... Anymore.", "Chief Wiggum"],
      82: ["The chances of finding out what’s really going on in the universe are so remote, the only thing to do is hang the sense of it and keep yourself occupied.", "Douglas Adams"],
      83: ["Not unnaturally, many elevators imbued with intelligence and precognition became terribly frustrated with the mindless business of going up and down, up and down, experimented briefly with the notion of going sideways, as a sort of existential protest, demanded participation in the decision-making process and finally took to squatting in basements sulking.", "Douglas Adams"],
      84: ["It is known that there are an infinite number of worlds, simply because there is an infinite amount of space for them to be in. However, not every one of them is inhabited. Therefore, there must be a finite number of inhabited worlds. Any finite number divided by infinity is as near to nothing as makes no odds, so the average population of all the planets in the Universe can be said to be zero. From this it follows that the population of the whole Universe is also zero, and that any people you may meet from time to time are merely the products of a deranged imagination.", "Douglas Adams"],
      85: ["George, this is a little too much for me. Escaped convicts, fugitive sex... I've got a cockfight to focus on.", "Jerry Seinfeld"],
      86: ["It's the kung pao!  Geoge likes his chicken spicy!!", "George Costanza"],
      87: ["Isosceles.  You know, I love the name Isosceles.  If I had a kid, I would name him Isosceles.  Isosceles Kramer.", "Cosmo Kramer"]


      // 22: ["lsdhflsdh flsd hflsdhf lsdhfls dfhlsd fhlsdhf lsdhfls dhfls hdflshdfls dhfls hdflshdfl shdfl shdlf hsdlfhsdlfhsldkfh sldkhf sldfhsdf", 'hsdofhlsdfhlsdkhflsdhflsdf']
    };

    var randomNum = Math.floor((Math.random() * (Object.keys(quotesHash).length)));

    var quoteQuote = quotesHash[randomNum][0];
    var quoteAuthor = quotesHash[randomNum][1];
    quote = '"' + quoteQuote + '"' + ' - ' + quoteAuthor;

    $(".quote").text(quoteQuote);
    $(".author").text(quoteAuthor);


    if (quote.length <= 150){
       $("#twitter").show();
       $('.tweet').attr('href', 'https://twitter.com/intent/tweet/?text=' + quote);
    } else {
      $("#twitter").css("display", "none");
    }

  };

    $("#newquote").on("click", function(){
      randomQuote();
    });


}

$(document).ready(startPage);
$(document).on('page:load', startPage);
