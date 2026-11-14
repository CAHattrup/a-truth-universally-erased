/* ==========================================================
   FAVORITE PAGES
   Each page starts at the words in "startsWith" and continues
   for about one printed page (roughly 300 words).

   To add a page, copy one entry and change it:
     novel:      pride, sense, mansfield, emma, northanger, or persuasion
     name:       what visitors see in the page list (we name each page as an action)
     startsWith: the first several words of the page, as they appear
                 in the novel. Curly and straight quotation marks both work.

   The more words in startsWith, the more precise the match.
   Pages appear in the list in the order written here, so keep each
   novel's pages in story order. "A random page" is always added last.
   ========================================================== */

const FAVORITE_PAGES = [
  // Pride and Prejudice
  { novel: "pride", name: "The beginning",                     startsWith: "It is a truth universally acknowledged" },
  { novel: "pride", name: "Elizabeth is tolerable at the ball", startsWith: "\"Which do you mean?\" and turning round" },
  { novel: "pride", name: "Mr. Collins proposes",              startsWith: "My reasons for marrying are, first" },
  { novel: "pride", name: "Mr. Darcy proposes",                startsWith: "In vain I have struggled" },
  { novel: "pride", name: "Lydia ruins everything",            startsWith: "As he quitted the room, Elizabeth felt how improbable it was" },
  { novel: "pride", name: "Lady Catherine visits Elizabeth",   startsWith: "The engagement between them is of a peculiar kind" },

  // Sense and Sensibility
  { novel: "sense", name: "The beginning",                     startsWith: "The family of Dashwood had long been settled" },
  { novel: "sense", name: "Edward has sense and goodness",     startsWith: "Of his sense and his goodness,\" continued Elinor" },
  { novel: "sense", name: "Willoughby obliges Mrs. Smith",     startsWith: "Mrs. Dashwood's visit to Lady Middleton took place the next day" },

  // Mansfield Park
  { novel: "mansfield", name: "The beginning",                 startsWith: "About thirty years ago Miss Maria Ward" },
  { novel: "mansfield", name: "Mr. and Miss Crawford arrive",  startsWith: "Such was the state of affairs in the month of July" },
  { novel: "mansfield", name: "The wilderness is refreshing",  startsWith: "This is insufferably hot,\" said Miss Crawford" },

  // Emma
  { novel: "emma", name: "The beginning",                      startsWith: "Emma Woodhouse, handsome, clever, and rich" },
  { novel: "emma", name: "Mr. Elton proposes",                 startsWith: "But Mr. Elton had only drunk wine enough to elevate his spirits" },
  { novel: "emma", name: "Frank Churchill gets his hair cut",  startsWith: "Emma's very good opinion of Frank Churchill was a little shaken" },

  // Northanger Abbey
  { novel: "northanger", name: "The beginning",                startsWith: "No one who had ever seen Catherine Morland" },
  { novel: "northanger", name: "Isabella writes a letter",     startsWith: "I received your two kind letters with the greatest delight" },
  { novel: "northanger", name: "Henry explains his father's conduct", startsWith: "John Thorpe had first misled him." },

  // Persuasion
  { novel: "persuasion", name: "The beginning",                startsWith: "Sir Walter Elliot, of Kellynch Hall" },
  { novel: "persuasion", name: "Mr. Elliot admires Anne",      startsWith: "When they came to the steps, leading upwards from the beach" },
  { novel: "persuasion", name: "Captain Wentworth writes a letter", startsWith: "I can listen no longer in silence" }
];
