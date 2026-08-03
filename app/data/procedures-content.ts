export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcedureContent {
  slug: string;
  name: string;
  intro: string;
  symptoms: string[];
  diagnosis: string;
  treatments: string[];
  management: string;
  faqs: FAQ[];
}

export const proceduresData: ProcedureContent[] = [
  {
    slug: "knee-surgery",
    name: "Knee Surgery",
    intro:
      "Knee surgery is often recommended to treat conditions that cause chronic pain, instability, or severe limitation in mobility. Whether dealing with a sports injury like an ACL tear or degenerative conditions such as severe osteoarthritis, modern knee surgery techniques, including minimally invasive arthroscopy and joint replacement, aim to restore function and improve your quality of life.",
    symptoms: [
      "Severe or chronic knee pain that limits daily activities",
      "Swelling, stiffness, and reduced range of motion",
      'A feeling of instability or the knee "giving way"',
      "Failure to respond to non-surgical treatments like medication or therapy",
    ],
    diagnosis:
      "A comprehensive diagnosis involves a detailed physical examination to assess the knee's stability, range of motion, and pain points. We utilize advanced imaging techniques such as X-rays to look for bone damage and arthritis, and MRI scans to evaluate soft tissues like ligaments and the meniscus.",
    treatments: [
      "Arthroscopy for minimally invasive repair of cartilage or ligaments",
      "ACL reconstruction for torn ligaments",
      "Partial knee replacement for localized arthritis",
      "Total knee replacement for advanced, widespread osteoarthritis",
    ],
    management:
      "Post-operative recovery focuses heavily on a customised physiotherapy protocol. Early mobilisation is encouraged to prevent stiffness and restore strength. Most patients use walking aids initially and gradually transition to independent walking as their strength improves.",
    faqs: [
      {
        question: "How long does a knee replacement last?",
        answer:
          "Modern knee implants are highly durable. With proper care and rehabilitation, most knee replacements can last 15 to 20 years or even longer.",
      },
      {
        question: "When can I resume sports after ACL surgery?",
        answer:
          "Return to sports is gradual. While light activities might resume sooner, a return to high-impact or pivoting sports typically takes 6 to 9 months of dedicated rehabilitation.",
      },
    ],
  },
  {
    slug: "shoulder-surgery",
    name: "Shoulder Surgery",
    intro:
      "The shoulder is a highly mobile but complex joint, making it susceptible to a variety of injuries and degenerative conditions. From rotator cuff tears and recurrent dislocations to advanced arthritis, shoulder surgery can effectively address pain and restore strength and flexibility. We utilize both advanced keyhole (arthroscopic) techniques and joint replacement options tailored to your specific condition.",
    symptoms: [
      "Persistent shoulder pain, especially at night or when lifting the arm",
      "Weakness in the shoulder or arm",
      "A feeling of the shoulder slipping out of place (instability)",
      "Catching, clicking, or locking sensations during movement",
    ],
    diagnosis:
      "Diagnosis begins with a thorough physical exam focusing on strength, flexibility, and points of tenderness. Imaging such as X-rays and MRI or Ultrasound are critical to view the intricate structures of the rotator cuff, labrum, and joint surfaces.",
    treatments: [
      "Arthroscopic rotator cuff repair",
      "Labral repair for shoulder instability and dislocations",
      "Total shoulder replacement for severe arthritis",
      "Reverse shoulder replacement for complex rotator cuff arthropathy",
    ],
    management:
      "Recovery typically involves wearing a sling for several weeks to protect the repair, followed by a phased physical therapy program. The initial phase focuses on passive motion to prevent stiffness, progressing to active strengthening exercises as healing permits.",
    faqs: [
      {
        question: "Is arthroscopic shoulder surgery painful?",
        answer:
          "Arthroscopy is minimally invasive, which typically results in less pain and a faster recovery compared to open surgery. We also use advanced pain management protocols, including nerve blocks, to keep you comfortable post-surgery.",
      },
      {
        question: "How long until I can drive after shoulder surgery?",
        answer:
          "This depends on the specific procedure, but generally, patients can resume driving once they are out of the sling and have regained sufficient strength and motion, usually around 4 to 6 weeks.",
      },
    ],
  },
  {
    slug: "elbow-surgery",
    name: "Elbow Surgery",
    intro:
      "Elbow issues can significantly impact your daily life, affecting your ability to lift, grip, and perform routine tasks. Whether it's a severe sports injury, chronic conditions like tennis elbow that haven't responded to conservative care, or complex fractures, elbow surgery aims to relieve pain and restore normal arm mechanics.",
    symptoms: [
      "Chronic pain on the inside or outside of the elbow",
      "Loss of range of motion, such as the inability to fully straighten or bend the arm",
      "Numbness or tingling in the fingers (often related to nerve compression at the elbow)",
      'Instability or a feeling of the elbow "giving out"',
    ],
    diagnosis:
      "We conduct a detailed clinical evaluation of the elbow's ligaments, tendons, and nerves. X-rays are used to evaluate bone structure and detect arthritis or fractures, while MRI or EMG (electromyography) may be used to assess soft tissue injuries and nerve function.",
    treatments: [
      "Surgical release and repair for severe Tennis or Golfer's Elbow",
      "Ligament reconstruction (e.g., Tommy John surgery) for instability",
      "Cubital tunnel release to relieve pressure on the ulnar nerve",
      "Surgical fixation of complex elbow fractures",
    ],
    management:
      "Post-operative care for the elbow often requires a careful balance between rest and movement. Depending on the procedure, you may use a splint or brace initially, followed by specialized physical therapy to regain flexibility without stressing the surgical repair.",
    faqs: [
      {
        question: "Will surgery cure my tennis elbow?",
        answer:
          "For the small percentage of patients who do not improve with extensive conservative treatments, surgery is highly successful in relieving pain and restoring function.",
      },
      {
        question: "When can I start using my arm normally after surgery?",
        answer:
          "Basic daily activities can often be resumed within a few weeks, but heavier lifting or sports activities may take several months of progressive rehabilitation depending on the specific surgery.",
      },
    ],
  },
];
