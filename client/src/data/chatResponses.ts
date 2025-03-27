interface BookResponse {
  bookId: number;
  responses: {
    question: string;
    answer: string;
  }[];
  defaultResponses: string[];
}

export const bookResponses: BookResponse[] = [
  {
    bookId: 1, // Bharat Scouts Handbook
    responses: [
      {
        question: "what are the scout's promise and law",
        answer: `<p class="text-sm font-semibold mb-1">Scout's Promise:</p>
        <p class="text-sm mb-2">
          "On my honor, I promise that I will do my best:<br>
          To do my duty to God and my country,<br>
          To help other people at all times, and<br>
          To obey the Scout Law."
        </p>
        <p class="text-sm font-semibold mb-1">Scout Law:</p>
        <p class="text-sm">
          A Scout is:<br>
          1. Trustworthy<br>
          2. Loyal<br>
          3. Helpful<br>
          4. Friendly<br>
          5. Courteous<br>
          6. Kind<br>
          7. Obedient<br>
          8. Cheerful<br>
          9. Thrifty<br>
          10. Brave<br>
          11. Clean<br>
          12. Reverent
        </p>`
      },
      {
        question: "what badges can i earn",
        answer: `<p class="text-sm mb-2">As a Bharat Scout, you can earn several badges that represent your skills and achievements:</p>
        <p class="text-sm font-semibold mb-1">Proficiency Badges:</p>
        <p class="text-sm mb-2">
          • First Aid<br>
          • Camping<br>
          • Pioneering<br>
          • Navigation<br>
          • Cooking<br>
          • Environmental Conservation<br>
          • Community Service<br>
          • And many more specialized skills
        </p>
        <p class="text-sm font-semibold mb-1">Progress Badges:</p>
        <p class="text-sm">
          • Pravesh (Entry)<br>
          • Pratham Sopan (First Stage)<br>
          • Dwitiya Sopan (Second Stage)<br>
          • Tritiya Sopan (Third Stage)<br>
          • Rajya Puraskar (State Award)<br>
          • Rashtrapati Scout Award (President's Scout Award)
        </p>`
      },
      {
        question: "what is the scout motto",
        answer: "The Scout motto is 'Be Prepared'. This means that scouts should always be ready, mentally and physically, to do their duty and face any challenges that may come their way."
      },
      {
        question: "what should i bring to a camping trip",
        answer: `For a camping trip, scouts should bring:
        
        1. Tent and sleeping bag
        2. Personal first aid kit
        3. Compass and map
        4. Water bottle and purification tablets
        5. Pocket knife (if permitted)
        6. Weather-appropriate clothing
        7. Cooking equipment
        8. Personal hygiene items
        9. Flashlight and extra batteries
        10. Emergency contact information
        
        Always pack according to the duration and location of the trip, and follow the guidance of your scout leader.`
      }
    ],
    defaultResponses: [
      "The Bharat Scouts organization was founded to promote citizenship, character, and self-reliance through outdoor activities and community service.",
      "Scouting helps young people develop leadership skills, self-confidence, and a sense of duty to their community and country.",
      "Regular scout meetings typically include activities that develop skills, team building, planning for camps and events, and working on badge requirements.",
      "The scout uniform represents unity and equality among all scouts, regardless of background or social status."
    ]
  },
  {
    bookId: 2, // Advanced Scout Skills Guide
    responses: [
      {
        question: "what advanced camping skills should i know",
        answer: `Advanced camping skills every senior scout should master:

        1. Navigation with map and compass in challenging terrain
        2. Advanced knot tying and rope work
        3. Weather prediction techniques
        4. Setting up camp in adverse conditions
        5. Natural shelter construction
        6. Water procurement and purification
        7. Cooking without utensils
        8. Leave-no-trace camping principles
        9. Night navigation techniques
        10. Emergency response and wilderness first aid`
      }
    ],
    defaultResponses: [
      "The Advanced Scout Skills Guide covers techniques that help scouts become more self-reliant in outdoor situations.",
      "Advanced scouts should master skills like orienteering, pioneering, and emergency preparedness.",
      "Senior scouts are encouraged to teach and mentor younger scouts while continuing to develop their own leadership abilities."
    ]
  },
  {
    bookId: 3, // Scout Promise & Law Guide
    responses: [
      {
        question: "explain the importance of the scout promise",
        answer: "The Scout Promise is the foundation of scouting ethics. It commits scouts to uphold their duty to their spiritual beliefs, their country, helping others, and following the Scout Law. Making this promise is a significant moment that marks a young person's formal entry into the scouting movement. The promise helps scouts understand their responsibilities and the values they should uphold in their daily lives."
      }
    ],
    defaultResponses: [
      "The Scout Promise & Law Guide helps scouts understand the meaning behind each part of the promise and law.",
      "Living by the scout law means incorporating these principles into your everyday actions and decisions.",
      "The scout promise and law are similar across scouting organizations worldwide, creating a global fellowship of shared values."
    ]
  },
  {
    bookId: 4, // Pioneering Skills Manual
    responses: [
      {
        question: "what are the basic knots every scout should know",
        answer: `Essential knots every scout should master:

        1. Square Knot - For joining two ropes of equal thickness
        2. Bowline - Creates a fixed loop that won't slip
        3. Clove Hitch - For attaching rope to a pole
        4. Sheet Bend - Joining ropes of unequal thickness
        5. Taut-line Hitch - Adjustable knot for tent guy lines
        6. Timber Hitch - For dragging or hoisting logs
        7. Figure Eight - Stops rope from running through a guide
        8. Sheepshank - Shortens a rope temporarily
        
        Practice these regularly until you can tie them quickly and confidently, even in poor light or weather conditions.`
      }
    ],
    defaultResponses: [
      "Pioneering combines rope work, knots, and wood craft to build structures without modern fasteners.",
      "The most important aspect of pioneering is ensuring your structures are safe and secure before use.",
      "Advanced pioneering projects include bridges, towers, and camp facilities that demonstrate engineering principles."
    ]
  },
  {
    bookId: 5, // First Aid for Scouts
    responses: [
      {
        question: "what is in a basic first aid kit",
        answer: `A basic scout first aid kit should contain:

        1. Adhesive bandages in various sizes
        2. Sterile gauze pads
        3. Adhesive tape
        4. Antiseptic wipes
        5. Scissors
        6. Tweezers
        7. Disposable gloves
        8. Triangular bandage
        9. Instant cold pack
        10. First aid manual
        11. Emergency contact information
        12. Personal medications (if needed)
        
        Keep your kit in a waterproof container and check it regularly to replace used or expired items.`
      }
    ],
    defaultResponses: [
      "First aid skills are essential for scouts and can make a crucial difference in emergency situations.",
      "Always remember the primary survey: check for danger, response, airway, breathing, and circulation.",
      "After providing first aid, always seek professional medical help when necessary."
    ]
  },
  {
    bookId: 6, // Leadership Training Manual
    responses: [
      {
        question: "what makes a good leader",
        answer: `Qualities of an effective scout leader:

        1. Leads by example - demonstrates the values and behaviors expected from others
        2. Communicates clearly - ensures everyone understands goals and instructions
        3. Listens actively - values input from team members
        4. Makes fair decisions - considers all perspectives before deciding
        5. Takes responsibility - accepts accountability for outcomes
        6. Shows empathy - understands and respects others' feelings
        7. Adapts to change - remains flexible when plans need adjustment
        8. Resolves conflicts - addresses disagreements constructively
        9. Delegates effectively - assigns tasks based on abilities
        10. Provides feedback - offers constructive guidance for improvement
        
        Leadership in scouting is about service - helping others develop while accomplishing shared goals.`
      }
    ],
    defaultResponses: [
      "Leadership in scouting focuses on servant leadership - putting the needs of others first.",
      "The patrol system helps scouts practice leadership in small groups before taking on larger responsibilities.",
      "Reflection is a critical part of leadership development - learning from both successes and failures."
    ]
  }
];

// Fallback responses if no specific book is selected or no match is found
export const generalResponses = [
  "Scouting helps young people develop valuable life skills like teamwork, leadership, and self-reliance.",
  "The worldwide scouting movement includes millions of young people across over 170 countries.",
  "Scouts learn to appreciate and protect nature through outdoor activities and environmental conservation projects.",
  "Regular participation in scouting activities helps build confidence, character, and a sense of civic responsibility."
];
