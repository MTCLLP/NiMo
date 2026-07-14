export interface FAQ {
  question: string;
  answer: string;
}

export interface ConditionContent {
  slug: string;
  name: string;
  intro: string;
  symptoms: string[];
  diagnosis: string;
  treatments: string[];
  management: string;
  faqs: FAQ[];
}

export const conditionsData: ConditionContent[] = [
  {
    slug: 'sports-injuries',
    name: 'Sports Injuries',
    intro: 'Sports injuries can happen to anyone—from weekend warriors to professional athletes. These injuries often involve damage to the ligaments, tendons, muscles, or cartilage around a joint. We understand how frustrating it can be to sit on the sidelines, which is why our approach focuses on accurate diagnosis, targeted treatments, and a comprehensive rehabilitation plan to get you back to the activities you love safely and quickly.',
    symptoms: [
      'Sudden, severe pain during or after physical activity',
      'Swelling, bruising, or tenderness around the affected area',
      'Inability to put weight on a joint or move it normally',
      'A popping or snapping sound at the time of the injury',
      'Visible deformity in cases of severe injuries like dislocations'
    ],
    diagnosis: 'A thorough clinical examination is the first step. We will assess your range of motion, stability, and pain points. We often use X-rays to rule out fractures and MRI scans to get a detailed view of soft tissues like ligaments and cartilage. We take the time to explain your imaging results so you understand exactly what’s going on.',
    treatments: [
      'R.I.C.E. protocol (Rest, Ice, Compression, Elevation) for minor injuries',
      'Physical therapy and targeted strengthening exercises',
      'Advanced regenerative medicine (like PRP or stem cell therapy) to boost natural healing',
      'Minimally invasive arthroscopic surgery for severe ligament tears (like ACL tears) or cartilage damage',
      'Bracing or supportive devices during the healing phase'
    ],
    management: 'Recovery from a sports injury is a journey. We work closely with physiotherapists to develop a step-by-step rehabilitation program tailored to your sport and goals. Returning to play is done gradually to ensure your body is fully ready, significantly reducing the risk of re-injury.',
    faqs: [
      {
        question: 'How long does it take to recover from a sports injury?',
        answer: 'Recovery time varies widely depending on the injury. A minor sprain might take a few weeks, while recovering from an ACL reconstruction can take 6 to 9 months. We will provide a personalized timeline after your diagnosis.'
      },
      {
        question: 'Do all sports injuries require surgery?',
        answer: 'No. Many sports injuries can be treated conservatively with rest, physical therapy, and regenerative medicine. Surgery is usually reserved for complete tears or injuries that do not respond to non-surgical treatments.'
      },
      {
        question: 'What is regenerative medicine?',
        answer: 'Regenerative medicine uses your body’s own healing mechanisms (like Platelet-Rich Plasma or PRP) to accelerate the repair of damaged tendons, ligaments, and cartilage.'
      }
    ]
  },
  {
    slug: 'shoulder-conditions',
    name: 'Shoulder Conditions',
    intro: 'Your shoulder is the most flexible joint in your body, but this wide range of motion also makes it vulnerable to injury and wear-and-tear. Whether you are dealing with a dull ache from arthritis, the sharp pain of a rotator cuff tear, or the stiffness of a frozen shoulder, we provide expert care to restore your mobility and relieve your pain so you can comfortably perform daily activities again.',
    symptoms: [
      'Pain when lifting your arm or reaching behind your back',
      'A feeling that your shoulder could pop out of its socket',
      'Weakness in your shoulder or arm',
      'Stiffness or inability to rotate your arm normally',
      'Pain that wakes you up at night'
    ],
    diagnosis: 'Diagnosing shoulder pain begins with a physical exam to test your shoulder\'s strength and flexibility. We may use an X-ray to look for arthritis or bone spurs, and an MRI or ultrasound to examine the rotator cuff tendons and other soft tissues in detail.',
    treatments: [
      'Activity modification and anti-inflammatory medications',
      'Steroid injections for rapid pain relief and reduced inflammation',
      'Specialized physical therapy to strengthen the muscles supporting the shoulder',
      'Arthroscopic (keyhole) surgery to repair torn tendons or stabilize the joint',
      'Shoulder replacement surgery for severe, bone-on-bone arthritis'
    ],
    management: 'Management focuses on regaining a full, pain-free range of motion. Following any procedure or injection, a structured physical therapy plan is essential. We will guide you through exercises that start gently and progress to strengthening, ensuring a safe and effective recovery.',
    faqs: [
      {
        question: 'What is a frozen shoulder?',
        answer: 'Frozen shoulder (adhesive capsulitis) is a condition where the shoulder capsule thickens and becomes tight, causing severe pain and stiffness. It usually resolves over time, but physical therapy and injections can significantly speed up the process.'
      },
      {
        question: 'Can a torn rotator cuff heal on its own?',
        answer: 'A complete rotator cuff tear will not heal on its own. However, many partial tears or age-related tears can become pain-free with physical therapy. Surgery is typically recommended for active individuals with complete tears.'
      }
    ]
  },
  {
    slug: 'elbow-conditions',
    name: 'Elbow Conditions',
    intro: 'Elbow pain can severely impact your ability to grip, lift, and perform even simple tasks like opening a jar or typing. Common issues like tennis elbow and golfer\'s elbow are often caused by overuse, while fractures and ligament injuries can result from sudden trauma. We offer a range of treatments designed to eliminate pain and restore the strength and function of your elbow.',
    symptoms: [
      'Pain on the outside (tennis elbow) or inside (golfer\'s elbow) of the joint',
      'Pain that worsens when gripping or lifting objects',
      'Stiffness or a feeling that the elbow is "locked"',
      'Numbness or tingling in your ring and pinky fingers (cubital tunnel syndrome)',
      'Swelling or visible deformity after a fall'
    ],
    diagnosis: 'During your visit, we will gently examine your elbow, checking for tender areas and assessing your range of motion. We often test your grip strength and nerve function. X-rays are used to check for arthritis or fractures, while an MRI may be recommended to evaluate tendons and ligaments.',
    treatments: [
      'Rest, ice, and bracing (like counterforce braces for tennis elbow)',
      'Physical therapy focusing on tendon strengthening and stretching',
      'Advanced injections (like PRP) to promote tendon healing',
      'Nerve decompression surgery for entrapped nerves',
      'Ligament reconstruction (Tommy John surgery) for severe instability'
    ],
    management: 'Elbow recovery relies heavily on balancing rest with targeted exercises. We will teach you how to modify your daily activities or sports techniques to prevent putting excessive strain on the healing tendons. Ergonomic adjustments at work can also play a major role in your long-term recovery.',
    faqs: [
      {
        question: 'Do I have to play tennis to get tennis elbow?',
        answer: 'No! Tennis elbow is simply a term for inflammation of the tendons on the outside of the elbow. It is very common in anyone who performs repetitive gripping or wrist movements, such as carpenters, painters, and office workers.'
      },
      {
        question: 'Are steroid injections good for elbow pain?',
        answer: 'While steroid injections can provide short-term pain relief, they do not heal the tendon and multiple injections can weaken it over time. We often prefer regenerative options like PRP for long-term tendon healing.'
      }
    ]
  },
  {
    slug: 'knee-conditions',
    name: 'Knee Conditions',
    intro: 'The knee is a complex, weight-bearing joint that absorbs a tremendous amount of stress every day. Whether your knee pain is the result of a sudden sports injury (like an ACL or meniscus tear) or years of gradual wear-and-tear leading to arthritis, our goal is to accurately identify the source of your pain and provide treatments that keep you moving comfortably.',
    symptoms: [
      'A popping sensation followed by immediate swelling at the time of injury',
      'Pain that worsens when walking, climbing stairs, or squatting',
      'A feeling that the knee is "giving way" or unstable',
      'Catching, clicking, or locking of the knee joint',
      'Morning stiffness that improves as you move around'
    ],
    diagnosis: 'We will carefully examine your knee for swelling, tenderness, and stability using specific clinical tests. X-rays are the gold standard for diagnosing knee arthritis and bone alignment. An MRI is highly effective for identifying soft tissue injuries like torn ligaments or a damaged meniscus.',
    treatments: [
      'Weight management and low-impact exercise programs',
      'Joint lubricating injections (Hyaluronic acid) or PRP therapy',
      'Arthroscopic surgery to trim or repair a torn meniscus',
      'Ligament reconstruction using minimally invasive techniques',
      'Partial or total knee replacement for end-stage arthritis'
    ],
    management: 'A strong knee requires strong supporting muscles. Regardless of whether you have surgery, rehabilitation will focus on strengthening your quadriceps, hamstrings, and core. We will also advise you on proper footwear and activities that protect your knee joints in the long run.',
    faqs: [
      {
        question: 'What is a meniscus tear?',
        answer: 'The meniscus is a rubbery disc of cartilage that acts as a shock absorber in your knee. It can tear from a sudden twist or degenerate over time. Depending on the tear type and your age, it can be treated with physical therapy or a minor arthroscopic surgery.'
      },
      {
        question: 'Is walking good for knee arthritis?',
        answer: 'Yes! Low-impact activities like walking, swimming, and cycling help keep the joint fluid moving and strengthen the surrounding muscles, which actually reduces pain and protects the joint.'
      }
    ]
  },
  {
    slug: 'joint-replacement-surgery',
    name: 'Joint Replacement Surgery',
    intro: 'When arthritis or severe joint damage causes chronic pain that limits your daily life—like keeping you awake at night or preventing you from walking comfortably—joint replacement surgery can be a life-changing solution. Using state-of-the-art materials and precise surgical techniques, we replace the damaged joint surfaces to eliminate pain and restore smooth, natural movement.',
    symptoms: [
      'Severe joint pain that limits everyday activities (walking, dressing)',
      'Pain that continues even while resting, day or night',
      'Chronic inflammation and swelling that does not improve with rest or medications',
      'Bowing in or out of the leg (in cases of severe knee arthritis)',
      'Inadequate pain relief from physical therapy, injections, and pain medications'
    ],
    diagnosis: 'Determining if you need a joint replacement involves a detailed discussion about how your pain affects your quality of life. We will review your medical history, perform a physical exam, and use advanced X-rays to assess the degree of "bone-on-bone" cartilage loss.',
    treatments: [
      'Total Knee Replacement (TKR)',
      'Total Shoulder Replacement or Reverse Shoulder Replacement',
      'Partial joint replacement (for localized arthritis)',
      'Custom-tailored surgical planning using 3D imaging',
      'Advanced pain management protocols for a comfortable recovery'
    ],
    management: 'Modern joint replacements focus on "rapid recovery." In many cases, patients are walking on the same day as their surgery. We coordinate closely with a physical therapy team to ensure you regain your strength and range of motion safely. Your new joint is designed to give you decades of pain-free activity.',
    faqs: [
      {
        question: 'How long does a joint replacement last?',
        answer: 'Modern joint replacements are highly durable. With proper care and activity modification, the vast majority of joint replacements last 15 to 20 years, and many last a lifetime.'
      },
      {
        question: 'When is the right time to get a joint replacement?',
        answer: 'The right time is when your joint pain is significantly reducing your quality of life, and non-surgical treatments are no longer providing adequate relief. It is a decision we will make together based on your personal goals.'
      }
    ]
  },
  {
    slug: 'arthroscopy',
    name: 'Arthroscopy (Keyhole Surgery)',
    intro: 'Arthroscopy, often referred to as "keyhole surgery," is a minimally invasive surgical technique used to diagnose and treat joint problems. By inserting a tiny camera and specialized instruments through incisions smaller than a buttonhole, we can perform complex repairs with minimal damage to surrounding healthy tissue. This means less pain, smaller scars, and a much faster recovery for you.',
    symptoms: [
      'Unexplained joint pain, swelling, or stiffness',
      'Loose bodies (bone or cartilage fragments) floating in the joint',
      'Torn ligaments (like the ACL in the knee)',
      'Torn cartilage (like a meniscus or labral tear)',
      'Inflamed joint lining (synovitis)'
    ],
    diagnosis: 'While MRI scans are excellent for diagnosing joint issues, arthroscopy provides a direct, high-definition view inside the joint in real-time. It is often used as both a definitive diagnostic tool and a treatment method in the exact same procedure.',
    treatments: [
      'Repairing or trimming torn cartilage (meniscus or labrum)',
      'Reconstructing torn ligaments',
      'Removing loose fragments of bone or cartilage',
      'Removing inflamed joint tissue (synovectomy)',
      'Smoothing out damaged joint surfaces'
    ],
    management: 'Because arthroscopy is minimally invasive, recovery is typically much faster than traditional open surgery. You will likely go home the same day. We will provide a specific physical therapy plan to help you regain your strength and range of motion over the following weeks.',
    faqs: [
      {
        question: 'Is arthroscopy a major surgery?',
        answer: 'While it is a surgical procedure that requires anesthesia, it is considered minimally invasive. It involves much less trauma to the body than traditional "open" surgery, resulting in a quicker and less painful recovery.'
      },
      {
        question: 'Will I have scars after arthroscopy?',
        answer: 'You will have a few very small scars (usually less than a centimeter long) where the arthroscope and instruments were inserted. These typically fade significantly over time.'
      }
    ]
  },
  {
    slug: 'fracture-trauma-care',
    name: 'Fracture & Trauma Care',
    intro: 'A fracture or orthopaedic trauma can happen in an instant, but its effects can be long-lasting without proper care. Whether it is a simple broken bone from a fall or a complex injury from an accident, timely and expert intervention is crucial. Our trauma care is dedicated to aligning and stabilizing your bones perfectly, ensuring they heal correctly to restore maximum function.',
    symptoms: [
      'Intense, immediate pain after a fall, accident, or impact',
      'Visible deformity or the bone piercing the skin (open fracture)',
      'Severe swelling, bruising, and tenderness around the injury site',
      'Inability to move the injured limb or put any weight on it',
      'Numbness or tingling below the site of the injury'
    ],
    diagnosis: 'Trauma care begins with a rapid and comprehensive assessment. We use X-rays to determine the exact location and pattern of the fracture. For complex fractures, especially those involving joints, a CT scan may be required to create a detailed 3D map for surgical planning.',
    treatments: [
      'Immobilization using casts, splints, or braces for stable fractures',
      'Closed reduction (realigning the bone without surgery) under anesthesia',
      'Internal fixation surgery using plates, screws, or rods to hold bones perfectly in place',
      'External fixation for severe trauma with significant soft tissue damage',
      'Comprehensive wound care for open fractures to prevent infection'
    ],
    management: 'Bone healing takes time, usually 6 to 12 weeks. During this period, we closely monitor your progress with follow-up X-rays. As the bone heals, physical therapy becomes critical to prevent joint stiffness and rebuild muscle strength that was lost during immobilization.',
    faqs: [
      {
        question: 'Do all broken bones require surgery?',
        answer: 'No. Many fractures can be treated effectively with a cast or brace, provided the bone pieces are in good alignment. Surgery is necessary when the bones are displaced, shattered, or involve a joint surface.'
      },
      {
        question: 'What is the difference between a fracture and a break?',
        answer: 'Medically, there is no difference! A fracture and a broken bone mean the exact same thing.'
      }
    ]
  }
];
