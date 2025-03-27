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
    bookId: 1, // Geet Bharati
    responses: [
      {
        question: "what songs are included in this book",
        answer: `<p class="text-sm mb-2">Geet Bharati includes various categories of songs for scout and guide activities:</p>
        <p class="text-sm font-semibold mb-1">Prayer Songs:</p>
        <p class="text-sm mb-2">
          • Opening prayers for meetings<br>
          • Meditation songs<br>
          • Gratitude songs<br>
          • Evening prayers
        </p>
        <p class="text-sm font-semibold mb-1">Activity Songs:</p>
        <p class="text-sm mb-2">
          • Marching songs<br>
          • Camp fire songs<br>
          • Action songs<br>
          • Songs of unity and brotherhood
        </p>
        <p class="text-sm font-semibold mb-1">Patriotic Songs:</p>
        <p class="text-sm">
          • National songs<br>
          • Songs about national heroes<br>
          • Regional folk songs<br>
          • Songs celebrating Indian culture
        </p>`
      },
      {
        question: "how should we use songs in scout meetings",
        answer: `Songs play an important role in scout and guide meetings:

        1. Opening ceremonies - begin with a prayer song to set a positive tone
        2. During activities - use action songs to energize the group
        3. While marching - singing keeps everyone in rhythm and builds unity
        4. During breaks - light songs create a relaxed atmosphere
        5. At campfires - special songs create memorable experiences
        6. Closing ceremonies - reflective songs to end on a thoughtful note
        
        Songs help create group identity, teach values, and make meetings more enjoyable. They also help preserve cultural traditions and pass them to the next generation of scouts and guides.`
      }
    ],
    defaultResponses: [
      "Geet Bharati contains songs that help scouts and guides express their commitment to the movement's values through music.",
      "Many songs in this collection celebrate nature and our responsibility to protect the environment.",
      "Learning these songs helps preserve traditional scout and guide culture across generations.",
      "Singing together builds community and helps scouts and guides feel connected to the larger movement."
    ]
  },
  {
    bookId: 2, // Mapping (English Edition)
    responses: [
      {
        question: "how do i read a topographic map",
        answer: `To read a topographic map:

        1. Understand contour lines - closely spaced lines indicate steep terrain, widely spaced lines show gentle slopes
        2. Identify the contour interval - the vertical distance between contour lines (usually noted in the map legend)
        3. Recognize symbols - learn standard symbols for features like buildings, roads, water bodies, and vegetation
        4. Use the scale - convert map distances to real-world distances
        5. Orient the map - align it with your surroundings using landmarks or a compass
        6. Read grid references - use the coordinate system to pinpoint specific locations
        7. Understand colors - green typically represents vegetation, blue for water, brown for contour lines, etc.
        
        Practice is essential - start with simpler maps of familiar areas before progressing to more complex terrain.`
      },
      {
        question: "what are the essential compass skills",
        answer: `Essential compass skills for scouts:

        1. Identifying parts of a compass - baseplate, rotating bezel, direction-of-travel arrow, and magnetic needle
        2. Taking a bearing from a map - align the compass with your intended direction of travel
        3. Following a bearing in the field - hold the compass level and follow the direction-of-travel arrow
        4. Walking on a bearing - use distant landmarks to maintain your direction
        5. Adjusting for magnetic declination - compensate for the difference between true north and magnetic north
        6. Triangulation - using multiple bearings to determine your position
        7. Boxing obstacles - maintaining your overall direction when you must detour around obstacles
        
        Regular practice in different environments is the key to mastering these skills.`
      }
    ],
    defaultResponses: [
      "Map reading is a fundamental navigation skill that allows scouts to explore safely even in unfamiliar terrain.",
      "Modern GPS devices are useful tools, but every scout should master traditional map and compass navigation as a backup.",
      "The skills taught in this mapping guide are essential for hiking, expeditions, and emergency navigation situations."
    ]
  },
  {
    bookId: 3, // Scout Guide Pragati Path
    responses: [
      {
        question: "explain the progression system",
        answer: `<p class="text-sm mb-2">The Pragati Path (Progress Path) for Scouts and Guides consists of several advancement stages:</p>
        <p class="text-sm font-semibold mb-1">For Scouts:</p>
        <p class="text-sm mb-2">
          1. Pravesh (Entry) - Basic scouting knowledge and skills<br>
          2. Pratham Sopan (First Stage) - Building on fundamentals<br>
          3. Dwitiya Sopan (Second Stage) - Developing specialized skills<br>
          4. Tritiya Sopan (Third Stage) - Leadership and advanced skills<br>
          5. Rajya Puraskar (State Award) - Excellence at the state level<br>
          6. Rashtrapati Scout Award (President's Award) - The highest national achievement
        </p>
        <p class="text-sm font-semibold mb-1">For Guides:</p>
        <p class="text-sm">
          Similar progression with stages adapted for the Guide program, culminating in the Rashtrapati Guide Award
        </p>
        <p class="text-sm mt-2">Each level has specific requirements in areas like scouting/guiding skills, service, physical fitness, cultural activities, and character development.</p>`
      },
      {
        question: "what requirements are in each stage",
        answer: "Each stage in the Pragati Path includes requirements in five key areas: scouting/guiding skills, community service, physical development, cultural activities, and character development. As scouts and guides progress through the stages, the requirements become more challenging and require greater independence, leadership, and depth of knowledge. The system is designed to develop well-rounded individuals who can contribute positively to society while continuing to grow personally."
      }
    ],
    defaultResponses: [
      "The Pragati Path provides a structured framework for scouts and guides to progressively develop their skills and character.",
      "Completing each stage requires dedication and perseverance, helping young people build determination and self-discipline.",
      "The badge system recognizes achievements and motivates scouts and guides to continue their development journey."
    ]
  },
  {
    bookId: 8, // Scouting for Boys (Hindi Edition)
    responses: [
      {
        question: "who was baden powell",
        answer: `Lord Robert Baden-Powell (1857-1941) was the founder of the worldwide Scout Movement. 

        He was a British Army officer who served in India and Africa, where he developed many of the scouting techniques he later incorporated into the movement. After writing the military manual "Aids to Scouting," he adapted his ideas for youth training.

        In 1907, he held the first experimental scout camp on Brownsea Island in England. Following this success, he published "Scouting for Boys" in 1908, which sparked the formation of scout troops worldwide.

        Baden-Powell devoted his later life to developing the scouting movement globally, emphasizing character development, citizenship, and outdoor skills. His vision of youth education has influenced millions of young people across the world.`
      },
      {
        question: "what are the key teachings in this book",
        answer: `"Scouting for Boys" covers several fundamental areas:

        1. Character Development - Teaching honesty, trustworthiness, and moral values
        2. Citizenship - Developing responsibility toward community and country
        3. Observation Skills - Learning to notice and interpret details in surroundings
        4. Outdoor Skills - Mastering camping, tracking, and survival techniques
        5. First Aid - Providing emergency assistance and health knowledge
        6. Physical Fitness - Maintaining good health through regular exercise
        7. Self-Reliance - Building confidence through personal achievement
        8. Service to Others - Emphasizing the importance of helping those in need
        
        These principles remain the foundation of scouting worldwide, though they've been adapted to modern contexts and different cultures.`
      }
    ],
    defaultResponses: [
      "This Hindi translation makes Baden-Powell's foundational scouting text accessible to Hindi-speaking scouts across India.",
      "Though written over a century ago, the core principles in 'Scouting for Boys' continue to guide the worldwide scouting movement.",
      "The book combines practical skills with character development in a way that remains relevant for today's youth."
    ]
  },
  {
    bookId: 9, // First Aid Manual
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
      },
      {
        question: "how do i treat a sprain",
        answer: `To treat a sprain, follow the RICE method:

        R - Rest: Stop using the injured area and avoid putting weight on it
        I - Ice: Apply ice wrapped in a cloth for 15-20 minutes every 2-3 hours
        C - Compression: Use an elastic bandage to provide support and reduce swelling
        E - Elevation: Keep the injured area raised above heart level when possible

        Additional guidelines:
        • Do not apply ice directly to the skin
        • Do not wrap compression bandages too tightly
        • Seek medical attention if pain is severe or doesn't improve
        • Avoid heat, alcohol, and activities that cause pain in the first 48 hours
        
        Most sprains begin to improve within 48-72 hours but may take several weeks to fully heal.`
      }
    ],
    defaultResponses: [
      "First aid skills are essential for scouts and can make a crucial difference in emergency situations.",
      "Always remember the primary survey: check for danger, response, airway, breathing, and circulation.",
      "After providing first aid, always seek professional medical help when necessary."
    ]
  },
  {
    bookId: 21, // Wolf Cub Handbook
    responses: [
      {
        question: "what activities do cub scouts do",
        answer: `Cub Scout activities are designed to be age-appropriate and fun while teaching valuable skills:

        1. Games that develop coordination, teamwork, and physical fitness
        2. Simple craft projects that build creativity and manual dexterity
        3. Basic outdoor skills like simple knots and nature identification
        4. Storytelling and skits that develop communication skills
        5. Community service projects suited to younger children
        6. Learning about nature and environmental responsibility
        7. Achievement badges in various interest areas
        8. Pack meetings with ceremonies and recognition
        9. Day outings and supervised camping experiences
        10. Cultural activities that expand knowledge about different traditions
        
        All activities emphasize learning through play and discovery in a supportive environment.`
      },
      {
        question: "how is the cub program different from regular scouts",
        answer: `Key differences between Cub Scouts and Regular Scouts:

        1. Age group - Cubs are typically 8-10 years old, while Scouts are 11-17
        2. Adult involvement - Cubs require more adult supervision and guidance
        3. Program structure - Cubs use a more playful approach based on The Jungle Book theme
        4. Meeting format - Cub meetings are shorter with more varied activities
        5. Outdoor activities - Cubs participate in less challenging outdoor adventures
        6. Advancement - Cubs have a simpler achievement system with age-appropriate challenges
        7. Leadership - Cubs have limited leadership roles, while Scouts emphasize leadership development
        8. Independence - Cubs function with more adult direction, while Scouts gradually develop autonomy
        
        The Cub program is designed as preparation for the full Scout program, building foundational skills through play.`
      }
    ],
    defaultResponses: [
      "The Wolf Cub program uses themes from Rudyard Kipling's 'The Jungle Book' to create an engaging framework for younger scouts.",
      "Cubs learn the basics of scouting through age-appropriate activities that emphasize fun and discovery.",
      "The Cub program focuses on developing confidence, teamwork, and respect through playful learning experiences."
    ]
  },
  {
    bookId: 24, // Rovering to Success (E)
    responses: [
      {
        question: "what is rovering",
        answer: `Rovering is the senior section of the Scout Movement for young adults (typically ages 18-25).

        It focuses on continued personal development, leadership, community service, and advanced outdoor adventures. Rovers operate with greater independence while maintaining the core values and principles of scouting.

        The name comes from the concept of "roving," or journeying with purpose - symbolizing the journey through young adulthood. Rovers often serve as mentors for younger scouts while pursuing their own advancement and service projects.

        The Rover program emphasizes the transition to adult life, helping members develop life skills, career readiness, and civic responsibility while maintaining the adventure and fellowship of scouting.`
      },
      {
        question: "what are the main life lessons in this book",
        answer: `In "Rovering to Success," Baden-Powell describes life as paddling a canoe through uncharted waters, with several "rocks" (challenges) to navigate:

        1. Gambling - Learning responsible decision-making and avoiding harmful risks
        2. Wine (substance abuse) - Maintaining health and self-control
        3. Women (relationships) - Developing respectful, healthy relationships
        4. Extremists and bogus patriots - Thinking independently and avoiding fanaticism
        5. Irreligion - Developing personal spiritual understanding and respect for beliefs
        
        For each challenge, B-P offers practical guidance based on character development, service to others, and personal responsibility. The book emphasizes finding happiness through helping others, appreciating nature, and living with purpose and integrity.`
      }
    ],
    defaultResponses: [
      "Baden-Powell wrote 'Rovering to Success' specifically for young men navigating the challenges of early adulthood.",
      "The book uses the metaphor of paddling a canoe through challenging waters as a guide to navigating life's obstacles.",
      "Though written in 1922, many of the principles in this book remain relevant for young adults today."
    ]
  },
  {
    bookId: 25, // Camping & Hiking
    responses: [
      {
        question: "what should i bring on a hiking trip",
        answer: `Essential items for a scout hiking trip:

        1. Appropriate footwear - Broken-in hiking boots or sturdy walking shoes
        2. Weather-appropriate clothing - Moisture-wicking layers and rain protection
        3. Navigation tools - Map, compass, and possibly GPS as backup
        4. Water - Sufficient for the journey plus water purification method
        5. Food - Nutritious, lightweight items providing adequate energy
        6. First aid kit - Basic supplies for minor injuries
        7. Emergency equipment - Whistle, flashlight, emergency blanket
        8. Sun protection - Hat, sunglasses, and sunscreen
        9. Backpack - Properly fitted with good weight distribution
        10. Personal items - Any medications, identification, and emergency contacts
        
        Always plan according to the specific route, weather forecast, and duration of your hike. Leave your hiking plan with someone responsible.`
      },
      {
        question: "how do i choose a good campsite",
        answer: `Guidelines for selecting a safe and comfortable campsite:

        1. High ground - Choose slightly elevated areas to avoid water collection during rain
        2. Level ground - Find a flat area for comfortable sleeping
        3. Natural shelter - Look for protection from wind, but avoid areas directly under trees
        4. Water source - Camp near (but not too close to) a clean water source
        5. Safe distance - Stay at least 60 meters from water bodies to minimize environmental impact
        6. Hazard assessment - Check for dead branches overhead, ant hills, and poisonous plants
        7. Sun exposure - Consider morning sun position for natural warming
        8. Privacy and space - Maintain appropriate distance from other campers
        9. Local regulations - Always follow designated camping areas and regulations
        10. Leave No Trace - Choose sites where your impact will be minimal
        
        A good campsite contributes significantly to both safety and enjoyment of the camping experience.`
      }
    ],
    defaultResponses: [
      "Camping and hiking help scouts develop self-reliance while fostering appreciation for the natural world.",
      "Proper preparation is essential for safe and enjoyable outdoor adventures.",
      "Learning to camp responsibly includes minimizing environmental impact through Leave No Trace principles."
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
