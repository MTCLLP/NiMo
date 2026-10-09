export interface FAQ {
  question: string;
  answer: string;
}

export interface SubProcedure {
  name: string;
  description?: string;
  indication?: string;
  technique?: string;
}

export interface SubSurgeryCategory {
  categoryName: string;
  description: string;
  procedures: SubProcedure[];
}

export interface ProcedureContent {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  symptoms: string[];
  diagnosis: string;
  treatments?: string[];
  categories: SubSurgeryCategory[];
  management: string;
  faqs: FAQ[];
  relatedBlogs?: { title: string; slug: string }[];
  relatedConditions?: { title: string; slug: string }[];
}

export const proceduresData: ProcedureContent[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. SHOULDER SURGERY
  // ─────────────────────────────────────────────────────────────
  {
    slug: "shoulder-surgery",
    name: "Shoulder Surgery",
    tagline:
      "Comprehensive keyhole and reconstructive shoulder procedures to restore pain-free motion, stability, and strength.",
    intro:
      "The shoulder is the most mobile joint in the human body, supported by a complex network of tendons, ligaments, and capsule. When injuries or wear compromise these structures, such as rotator cuff tears, recurrent dislocations, labral tears, stiffness, or advanced arthritis, specialised shoulder surgery restores anatomical function. Dr Nihar Modi utilises international fellowship training (Sydney, Australia and Florida, USA) to perform advanced arthroscopic (keyhole) repairs, complex capsulolabral reconstructions, and anatomical or reverse joint replacements tailored to your activity goals.",
    symptoms: [
      "Persistent shoulder pain, particularly at night or when lying on the affected arm",
      "Noticeable weakness when lifting the arm, reaching overhead, or carrying everyday objects",
      "Recurrent feeling of the shoulder slipping out of place, popping, or giving way (instability)",
      "Severe catching, painful clicking, or mechanical grating (crepitus) during rotation",
      "Progressive loss of motion (frozen shoulder or post-traumatic stiffness) unresponsive to therapy",
      "Chronic pain following a previous shoulder operation that failed to provide relief",
    ],
    diagnosis:
      "Every shoulder assessment begins with a focused clinical examination evaluating active versus passive range of motion, muscle strength grading (Jobe, belly-press, external rotation lag tests), and dynamic instability testing (apprehension, relocation, load-and-shift). We utilize high-resolution 3-Tesla MRI or MR Arthrography to visualize the rotator cuff footprint, labrum, and cartilage quality, alongside calibrated digital radiographs to assess bone loss (bony Bankart, Hill-Sachs lesions, glenoid morphology) and acromiohumeral distance.",
    treatments: [
      "Arthroscopic rotator cuff repair (single-row, double-row, and superior capsular reconstruction)",
      "Shoulder instability surgery (arthroscopic Bankart, Latarjet bone block, Remplissage)",
      "Biceps tenodesis and labral debridement",
      "Arthroscopic capsular release for severe frozen shoulder",
      "Anatomic and Reverse Total Shoulder Replacement for advanced arthritis",
    ],
    categories: [
      {
        categoryName: "Rotator Cuff Surgery",
        description:
          "Advanced arthroscopic and reconstructive techniques to repair torn tendons, restore force couples, and manage complex or massive tears.",
        procedures: [
          {
            name: "Arthroscopic rotator cuff repair",
            indication:
              "Symptomatic full-thickness tears causing pain and weakness.",
            technique:
              "Minimally invasive keyhole repair using bio-composite suture anchors to secure torn tendons back to the humeral footprint.",
          },
          {
            name: "Partial-thickness rotator cuff tear repair",
            indication:
              "High-grade articular or bursal-sided tears failing conservative rehabilitation.",
            technique:
              "Tear completion and repair or in-situ trans-tendinous repair preserving intact tendon fibres.",
          },
          {
            name: "Single-row rotator cuff repair",
            indication:
              "Small to moderate mobile tendon tears with good tissue quality.",
            technique:
              "Single line of suture anchors providing anatomical footprint compression.",
          },
          {
            name: "Double-row rotator cuff repair",
            indication:
              "Broad-based crescent or U-shaped tears requiring maximum footprint contact area.",
            technique:
              "Medial and lateral row anchor configuration creating a compressive suture bridge for superior biomechanical strength.",
          },
          {
            name: "Massive rotator cuff tear management",
            indication:
              "Retracted multi-tendon tears (>5 cm) involving supraspinatus and infraspinatus.",
            technique:
              "Interval slides, partial repair, margin convergence, and biologic patch augmentation to restore shoulder force couples.",
          },
          {
            name: "Revision rotator cuff repair",
            indication:
              "Re-tears following previous surgery with recurrent weakness or pain.",
            technique:
              "Removal of failed implants, extensive adhesiolysis, medialized footprint fixation, and graft reinforcement.",
          },
          {
            name: "Superior capsular reconstruction (SCR)",
            indication:
              "Younger active patients with irreparable rotator cuff tears and no severe arthritis.",
            technique:
              "Fascia lata or dermal allograft reconstruction spanning glenoid to greater tuberosity to stabilize the humeral head.",
          },
          {
            name: "Tendon transfer for irreparable rotator cuff tears",
            indication:
              "Chronic irreparable posterosuperior or anterosuperior tears in younger individuals.",
            technique:
              "Latissimus dorsi, lower trapezius, or pectoralis major transfer to restore active external rotation or elevation.",
          },
          {
            name: "Subacromial decompression and acromioplasty",
            indication:
              "Refractory impingement syndrome caused by hooked acromial bone spurs.",
            technique:
              "Arthroscopic burr resection of subacromial spurs and release of the coracoacromial ligament.",
          },
        ],
      },
      {
        categoryName: "Shoulder Instability and Labral Surgery",
        description:
          "Specialized arthroscopic and open procedures to restore glenohumeral stability following traumatic dislocations, subluxations, or labral tears.",
        procedures: [
          {
            name: "Arthroscopic Bankart repair",
            indication:
              "Anterior shoulder dislocation with labral detachment and minimal glenoid bone loss (<15%).",
            technique:
              "Keyhole mobilization of the labrum and re-anchoring to the anterior glenoid rim using suture anchors.",
          },
          {
            name: "Posterior labral repair",
            indication:
              "Posterior shoulder instability common in contact athletes, bench pressers, or seizure patients.",
            technique:
              "Arthroscopic capsulolabral plication and suture anchor fixation of the posteroinferior glenoid rim.",
          },
          {
            name: "SLAP repair",
            indication:
              "Superior labrum anterior-to-posterior tears (Type II SLAP) in throwing athletes.",
            technique:
              "Keyhole reattachment of the superior labrum and long head of biceps anchor to the top of the glenoid.",
          },
          {
            name: "Remplissage procedure",
            indication:
              "Engaging Hill-Sachs humeral head defects co-existing with anterior instability.",
            technique:
              "Arthroscopic infraspinatus and posterior capsule tenodesis directly into the humeral head defect.",
          },
          {
            name: "Latarjet procedure",
            indication:
              "Recurrent instability with critical glenoid bone loss (>15-20%), failed prior Bankart, or high-risk collision athletes.",
            technique:
              "Coracoid process osteotomy and transfer through the subscapularis onto the anterior glenoid rim with screw fixation (the 'triple blocking effect').",
          },
          {
            name: "Glenoid bone block augmentation",
            indication:
              "Significant bone loss where coracoid bone is unsuitable or revision Latarjet is needed.",
            technique:
              "Autologous iliac crest or distal tibial allograft fixation to reconstruct the anterior glenoid articular arc.",
          },
          {
            name: "Revision shoulder instability surgery",
            indication:
              "Recurrent dislocation after previous Bankart or failed open stabilisation.",
            technique:
              "Careful workup of bone defects, capsular stretching, and revised fixation with bone grafting or capsular reconstruction.",
          },
          {
            name: "Multidirectional shoulder instability surgery",
            indication:
              "Generalized joint laxity with multidirectional symptomatic subluxations failing physical therapy.",
            technique:
              "Arthroscopic circumferential capsular plication and rotator interval closure to balance joint volume.",
          },
        ],
      },
      {
        categoryName: "Biceps and Associated Procedures",
        description:
          "Treatments addressing long head of biceps tendonitis, instability, tears, and bicipital groove pathology.",
        procedures: [
          {
            name: "Arthroscopic biceps tenodesis",
            indication:
              "Biceps tendinopathy, subluxation, partial tearing, or SLAP tears in patients over 35.",
            technique:
              "Release of long head of biceps from the superior labrum and secure anchor fixation within the bicipital groove.",
          },
          {
            name: "Open biceps tenodesis",
            indication:
              "Persistent groove tenosynovitis or revision biceps pathology.",
            technique:
              "Mini-open subpectoral or suprapectoral fixation with interference screw or cortical button.",
          },
          {
            name: "Suprapectoral biceps tenodesis",
            indication:
              "Proximal biceps pathology requiring anatomical tensioning at the top of the groove.",
            technique:
              "Arthroscopic or mini-open anchor fixation above the pectoralis major insertion.",
          },
          {
            name: "Subpectoral biceps tenodesis",
            indication:
              "Extensive tenosynovitis involving the entire length of the intertubercular groove.",
            technique:
              "Mini-open fixation below the groove to eliminate all intra-articular and groove pain generators.",
          },
          {
            name: "Biceps tenotomy",
            indication:
              "Older or low-demand patients with painful biceps tendinopathy or complex rotator cuff tears.",
            technique:
              "Simple arthroscopic release of the tendon, offering rapid pain relief and early active mobilization.",
          },
          {
            name: "Combined biceps tenodesis and rotator cuff repair",
            indication:
              "Concomitant supraspinatus/subscapularis tears with unstable or degenerative biceps tendon.",
            technique:
              "Simultaneous keyhole tenodesis and cuff anchor repair through shared portals.",
          },
          {
            name: "Labral debridement",
            indication:
              "Degenerative fraying of the labrum without true mechanical instability.",
            technique:
              "Arthroscopic smoothing of irregular labral edges using radiofrequency probes.",
          },
        ],
      },
      {
        categoryName: "Shoulder Stiffness and Joint Preservation",
        description:
          "Minimally invasive keyhole procedures to restore motion in severe contractures, frozen shoulder, and early joint wear.",
        procedures: [
          {
            name: "Arthroscopic capsular release",
            indication:
              "Refractory frozen shoulder (adhesive capsulitis) failing conservative treatment for 6+ months.",
            technique:
              "360-degree targeted release of the thickened, contracted shoulder capsule and coracohumeral ligament.",
          },
          {
            name: "Arthroscopic adhesiolysis",
            indication:
              "Post-traumatic or post-surgical scar tissue restricting range of motion.",
            technique:
              "Keyhole excision of subacromial and subdeltoid fibrous adhesions to restore gliding planes.",
          },
          {
            name: "Glenohumeral joint debridement",
            indication:
              "Mild to moderate shoulder osteoarthritis with persistent mechanical catching.",
            technique:
              "Lavage of inflammatory enzymes, smoothing of unstable cartilage flaps, and marginal osteophyte debridement.",
          },
          {
            name: "Removal of intra-articular loose bodies",
            indication:
              "Synovial chondromatosis, cartilage chips, or fractured osteophytes causing locking.",
            technique:
              "Arthroscopic retrieval of floating loose fragments under direct high-definition visualization.",
          },
          {
            name: "Treatment of selected cartilage lesions",
            indication:
              "Focal full-thickness cartilage defects on the humeral head or glenoid.",
            technique:
              "Microfracture, biologic chondroplasty, or restorative regenerative matrix techniques.",
          },
          {
            name: "Arthroscopic acromioclavicular (AC) joint excision",
            indication:
              "Painful AC joint arthritis or osteolysis that radiates to the top of the shoulder and neck.",
            technique:
              "Resection of the distal 5-8 mm of the clavicle (Mumford procedure) via keyhole subacromial approach.",
          },
        ],
      },
      {
        categoryName: "Shoulder Reconstruction and Arthroplasty",
        description:
          "Anatomical, reverse, and fracture reconstruction procedures for advanced shoulder arthritis and complex trauma.",
        procedures: [
          {
            name: "Anatomic total shoulder arthroplasty",
            indication:
              "End-stage glenohumeral osteoarthritis with intact, healthy rotator cuff tendons.",
            technique:
              "Resurfacing the humeral head with a metal stem/head and cementing a polyethylene glenoid socket.",
          },
          {
            name: "Reverse total shoulder arthroplasty",
            indication:
              "Cuff tear arthropathy (severe arthritis combined with massive irreparable rotator cuff tear) or complex fractures.",
            technique:
              "Reversing natural anatomy: placing a prosthetic ball (glenosphere) on the socket and a cup on the humerus to recruit the deltoid muscle as prime mover.",
          },
          {
            name: "Shoulder hemiarthroplasty",
            indication:
              "Isolated humeral head osteonecrosis (avascular necrosis) or severe proximal humerus fractures with normal glenoid.",
            technique:
              "Replacing only the humeral head while preserving the native glenoid cartilage.",
          },
          {
            name: "Revision shoulder arthroplasty",
            indication:
              "Loosening, dislocation, periprosthetic infection, or cuff failure following previous replacement.",
            technique:
              "Complex implant removal, bone graft reconstruction, and conversion to reverse shoulder geometry.",
          },
          {
            name: "Proximal humerus fracture fixation and reconstruction",
            indication:
              "Displaced 3-part or 4-part fractures of the upper arm bone.",
            technique:
              "Anatomical reduction and locking plate fixation (PHILOS plate) or primary reverse replacement for head-split osteoporotic fractures.",
          },
        ],
      },
    ],
    management:
      "Post-operative recovery follows a staged biological timeline. Arthroscopic repairs typically involve sling immobilization for 4 to 6 weeks to protect anchor-tendon healing, transitioning to active-assisted range of motion by week 6, and progressive strengthening from month 3 onwards. Shoulder replacements allow gentle pendulum movements within days and progressive functional use by 6 to 12 weeks. Every patient receives a customised rehab protocol coordinated directly with our physiotherapists.",
    faqs: [
      {
        question: "How long do I need to wear a sling after shoulder surgery?",
        answer:
          "For soft tissue repairs (rotator cuff or Bankart repair), a sling is typically worn for 4 to 6 weeks to protect tendon-to-bone biological healing. For procedures like capsular release or subacromial decompression, the sling is worn only for comfort for 2 to 5 days, encouraging immediate movement.",
      },
      {
        question:
          "What is the difference between an Anatomic and a Reverse Shoulder Replacement?",
        answer:
          "An Anatomic replacement replicates your natural ball-and-socket anatomy and requires an intact rotator cuff to function. A Reverse replacement swaps the ball and socket, allowing the large deltoid muscle to lift the arm when the rotator cuff is completely torn or irreparable.",
      },
      {
        question: "When can I drive after shoulder surgery?",
        answer:
          "Patients can generally resume driving once they are completely out of the sling, no longer taking prescription pain medications, and have regained sufficient strength and reaction time—typically around 6 weeks post-surgery.",
      },
    ],
    relatedBlogs: [
      {
        title: "Rotator Cuff Injuries in Sports",
        slug: "rotator-cuff-injuries-in-sports",
      },
      {
        title: "How Do I Know If I Tore My Rotator Cuff?",
        slug: "how-do-i-know-if-i-tore-my-rotator-cuff",
      },
      {
        title: "Shoulder Dislocation Causes and Recovery",
        slug: "shoulder-dislocation-causes-and-recovery",
      },
      {
        title: "Non-Surgical Options for Shoulder Pain",
        slug: "non-surgical-options-for-shoulder-pain",
      },
      {
        title: "Shoulder Rehab Exercises at Home",
        slug: "shoulder-rehab-exercises-at-home",
      },
    ],
    relatedConditions: [
      { title: "Shoulder Conditions", slug: "shoulder-conditions" },
      { title: "Sports Injuries", slug: "sports-injuries" },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. ELBOW SURGERY
  // ─────────────────────────────────────────────────────────────
  {
    slug: "elbow-surgery",
    name: "Elbow Surgery",
    tagline:
      "Precision arthroscopic release, ligament reconstruction, and tendon repair to overcome elbow stiffness, instability, and pain.",
    intro:
      "The elbow is an intricate hinge-and-pivot joint that is highly prone to stiffness, overuse tendinopathies, and ligament tears from throwing, sports, manual work, or traumatic fractures. Because the joint capsule easily develops severe post-traumatic contractures and bony spurs, specialized surgical expertise is crucial to restore full extension and flexion without causing nerve compromise. Dr. Nihar Modi provides comprehensive open and arthroscopic elbow treatments—including Tommy John UCL reconstruction, contracture release, tendon repair, and joint resurfacing—drawing from extensive international fellowship experience.",
    symptoms: [
      "Loss of extension or flexion (inability to straighten or bend your arm to touch your shoulder)",
      "Sharp or burning pain on the outer (lateral) elbow during gripping, twisting, or lifting (Tennis Elbow)",
      "Deep inner (medial) elbow pain and instability during throwing or loaded flexion (Golfer's Elbow or UCL tear)",
      "Frequent joint locking, catching, or sudden painful jamming caused by intra-articular loose bodies",
      "Numbness, tingling, or weakness in the ring and little fingers (ulnar nerve cubital tunnel compression)",
      "Pain and persistent disability following elbow dislocation or fracture",
    ],
    diagnosis:
      "Evaluation requires precise anatomical palpation of the epicondyles, UCL, and radial head, combined with provocative tests (Maudsley test for tennis elbow, moving valgus stress test for UCL insufficiency, and posterolateral rotatory drawer test). Calibrated plain radiographs identify coronoid or olecranon osteophytes, radiohumeral narrowing, and loose calcified bodies. High-resolution 3T MRI, dynamic musculoskeletal ultrasound, and electromyography (EMG/NCS) are used to evaluate tendon ruptures, ligament tears, and nerve entrapments.",
    treatments: [
      "Arthroscopic osteocapsular arthroplasty and contracture release for stiff elbows",
      "Ulnar collateral ligament (UCL) reconstruction and repair (Tommy John surgery)",
      "Distal biceps tendon repair and triceps repair",
      "Common extensor and flexor tendon repair for chronic Tennis and Golfer's elbow",
      "Radial head arthroplasty and elbow fracture-dislocation reconstruction",
    ],
    categories: [
      {
        categoryName: "Elbow Osteocapsular Arthroplasty and Stiffness",
        description:
          "Comprehensive open and arthroscopic procedures to excise bone spurs, release contracted capsules, and restore lost elbow range of motion.",
        procedures: [
          {
            name: "Arthroscopic osteocapsular arthroplasty",
            indication:
              "Elbow arthritis or post-traumatic stiffness with impingement spurs in flexion/extension.",
            technique:
              "Keyhole excision of olecranon and coronoid osteophytes combined with capsule release to restore motion arc.",
          },
          {
            name: "Open osteocapsular arthroplasty",
            indication:
              "Severe post-traumatic stiffness, bridging heterotopic bone, or prior surgery where nerves are encased in scar.",
            technique:
              "Column procedure or open exposure for thorough debridement, capsulectomy, and ulnar nerve neurolysis.",
          },
          {
            name: "Arthroscopic elbow contracture release",
            indication:
              "Loss of extension or flexion (>30° contracture) failing aggressive physical therapy.",
            technique:
              "Minimally invasive keyhole capsulectomy with high precision near vital neurovascular structures.",
          },
          {
            name: "Open elbow contracture release",
            indication:
              "Complex rigid contractures with extensive periarticular scarring.",
            technique:
              "Open anterior and posterior release with mobilization of the brachial artery and median nerve.",
          },
          {
            name: "Anterior capsulectomy",
            indication:
              "Isolated extension loss due to anterior capsule fibrosis.",
            technique:
              "Resection of the anterior capsule from the distal humerus to allow full arm straightening.",
          },
          {
            name: "Posterior capsulectomy",
            indication:
              "Terminal flexion block caused by posterior contracture.",
            technique:
              "Release of the posterior capsule and triceps adhesions to restore deep flexion.",
          },
          {
            name: "Olecranon osteophyte excision",
            indication:
              "Posterior impingement and pain in terminal extension (common in throwers and gymnasts).",
            technique:
              "Trimming the mechanical bony beak on the tip of the olecranon process.",
          },
          {
            name: "Coronoid osteophyte excision",
            indication: "Anterior impingement blocking flexion.",
            technique:
              "Removal of bony spurs from the coronoid process of the ulna.",
          },
          {
            name: "Removal of intra-articular loose bodies",
            indication:
              "Floating bone or cartilage fragments causing sudden locking and joint damage.",
            technique:
              "Arthroscopic extraction from anterior and posterior joint compartments.",
          },
          {
            name: "Arthroscopic elbow debridement",
            indication:
              "Degenerative arthritis, synovitis, or loose articular cartilage fragments.",
            technique:
              "Joint lavage, synovectomy, and smoothing of chondral defects.",
          },
          {
            name: "Post-traumatic elbow stiffness release",
            indication:
              "Refractory stiffness following elbow fracture, dislocation, or prolonged casting.",
            technique:
              "Combined hardware removal, heterotopic ossification excision, and comprehensive capsular release.",
          },
        ],
      },
      {
        categoryName: "Elbow Ligament Surgery",
        description:
          "Reconstructive and restorative procedures for medial and lateral elbow instability in throwing athletes and trauma patients.",
        procedures: [
          {
            name: "Ulnar collateral ligament (UCL) reconstruction",
            indication:
              "Complete tear or chronic insufficiency of the medial UCL in baseball pitchers, javelin throwers, and overhead athletes.",
            technique:
              "The classic 'Tommy John' procedure: docking or figure-of-eight tendon autograft (palmaris longus or gracilis) reconstruction.",
          },
          {
            name: "UCL repair with internal brace augmentation",
            indication:
              "Acute proximal or distal UCL tears with healthy remnant tissue.",
            technique:
              "Primary suture anchor repair reinforced with ultra-strong collagen-coated tape for accelerated return to throwing.",
          },
          {
            name: "Lateral ulnar collateral ligament (LUCL) reconstruction",
            indication:
              "Posterolateral rotatory instability (PLRI) where the elbow clicks, catches, or pops out during pushing up from a chair.",
            technique:
              "Tendon graft reconstruction restoring the primary lateral stabilizer of the elbow.",
          },
          {
            name: "Lateral ligament complex repair",
            indication:
              "Acute traumatic avulsion following an elbow dislocation.",
            technique:
              "Suture anchor fixation of the lateral collateral ligament back to the lateral epicondyle footprint.",
          },
          {
            name: "Posterolateral rotatory instability (PLRI) reconstruction",
            indication:
              "Chronic recurrent rotatory subluxation of the radial head on the capitellum.",
            technique:
              "Anatomical reconstruction of the lateral ulnar collateral ligament using tendon autograft.",
          },
          {
            name: "Medial collateral ligament repair",
            indication:
              "Acute traumatic medial elbow disruption associated with fracture-dislocations.",
            technique:
              "Direct suture repair and anchor reattachment of the anterior bundle of the UCL.",
          },
          {
            name: "Medial collateral ligament reconstruction",
            indication:
              "Chronic valgus instability with attenuated native tissue.",
            technique:
              "Tendon graft reconstruction with anatomical bone tunnels.",
          },
          {
            name: "Revision elbow ligament reconstruction",
            indication:
              "Re-rupture or persistent instability following prior UCL or LUCL surgery.",
            technique:
              "Revision tunnel placement, revision graft harvesting, and biomechanical reinforcement.",
          },
        ],
      },
      {
        categoryName: "Elbow Tendon Surgery",
        description:
          "Advanced repair and reconstruction of major biceps, triceps, and common epicondylar tendon injuries.",
        procedures: [
          {
            name: "Distal biceps tendon repair",
            indication:
              "Complete traumatic rupture of the biceps tendon at the elbow (sudden pop while lifting heavy load).",
            technique:
              "Anatomic reinsertion into the bicipital tuberosity of the radius using an endobutton and interference screw.",
          },
          {
            name: "Distal biceps tendon reconstruction",
            indication:
              "Chronic retracted tears (>4-6 weeks) where the tendon cannot reach its anatomical insertion.",
            technique:
              "Allograft or autograft tissue augmentation to bridge the tendon defect.",
          },
          {
            name: "Triceps tendon repair",
            indication:
              "Avulsion of the triceps tendon from the olecranon after a fall on an outstretched hand.",
            technique:
              "Transosseous suture repair or knotless anchor fixation securing the tendon footprint.",
          },
          {
            name: "Common extensor tendon repair for tennis elbow",
            indication:
              "Refractory lateral epicondylitis (Tennis Elbow) failing 6-12 months of conservative treatment.",
            technique:
              "Excision of pathological angiofibroblastic ECRB tissue and anatomical repair of healthy tendon.",
          },
          {
            name: "Common flexor-pronator tendon repair for golfer's elbow",
            indication:
              "Chronic medial epicondylitis failing injections and physiotherapy.",
            technique:
              "Debridement of degenerate flexor carpi radialis / pronator teres origin and footprint repair.",
          },
          {
            name: "Revision elbow tendon repair",
            indication:
              "Failed prior epicondylar release or tendon repair with ongoing disability.",
            technique:
              "Scar excision, nerve decompression, and tendon augmentation.",
          },
        ],
      },
      {
        categoryName: "Elbow Arthroscopy and Joint Preservation",
        description:
          "Minimally invasive diagnostic and therapeutic keyhole surgery for joint preservation and rapid athletic recovery.",
        procedures: [
          {
            name: "Diagnostic elbow arthroscopy",
            indication:
              "Unexplained pain, catching, or occult intra-articular pathology.",
            technique:
              "Complete 360-degree joint visualization through safe anatomical portals.",
          },
          {
            name: "Therapeutic elbow arthroscopy",
            indication:
              "Multicompartment joint disease requiring simultaneous treatment.",
            technique:
              "Multi-portal access for synovectomy, debridement, and capsule release.",
          },
          {
            name: "Arthroscopic loose-body removal",
            indication: "Loose fragments blocking joint mobility.",
            technique: "Keyhole retrieval without extensive open dissection.",
          },
          {
            name: "Arthroscopic synovectomy",
            indication:
              "Inflammatory arthritis (rheumatoid) or recurrent synovitis.",
            technique:
              "Comprehensive removal of diseased synovial lining using motorized shavers.",
          },
          {
            name: "Treatment of osteochondral lesions",
            indication:
              "Capitellar osteochondritis dissecans (OCD) in young gymnastics or throwing athletes.",
            technique:
              "Arthroscopic microfracture, drilling, fragment fixation, or osteochondral autograft transfer.",
          },
          {
            name: "Arthroscopic debridement for selected degenerative conditions",
            indication: "Early osteoarthritis with mechanical symptoms.",
            technique:
              "Smoothing of joint surfaces and removal of inflammatory cartilage debris.",
          },
          {
            name: "Treatment of throwing-related elbow disorders",
            indication:
              "Valgus extension overload syndrome with posteromedial osteophytes.",
            technique:
              "Targeted decompression of the olecranon fossa and spur excision.",
          },
        ],
      },
      {
        categoryName: "Elbow Reconstruction and Arthroplasty",
        description:
          "Complex fracture fixation, radial head replacement, and total joint arthroplasty for severe trauma and arthritis.",
        procedures: [
          {
            name: "Radial head fracture fixation",
            indication:
              "Displaced, reconstructible Mason Type II/III radial head fractures.",
            technique:
              "Low-profile anatomical headless screw or mini-plate fixation.",
          },
          {
            name: "Radial head arthroplasty",
            indication:
              "Comminuted, non-reconstructible radial head fractures with ligamentous instability (terrible triad).",
            technique:
              "Metallic modular radial head prosthesis restoring lateral column length and valgus stability.",
          },
          {
            name: "Coronoid fracture fixation",
            indication:
              "Coronoid base or anteromedial facet fractures compromising elbow stability.",
            technique:
              "Direct buttress plate or suture-lasso fixation securing the anterior buttress.",
          },
          {
            name: "Elbow fracture-dislocation reconstruction",
            indication:
              "Complex 'Terrible Triad' injuries (dislocation + radial head fracture + coronoid fracture).",
            technique:
              "Systematic reconstruction: coronoid fixation, radial head repair/replacement, and LCL reattachment.",
          },
          {
            name: "Total elbow arthroplasty",
            indication:
              "Severe rheumatoid arthritis, advanced degenerative osteoarthritis, or non-reconstructible distal humerus fractures in older patients.",
            technique:
              "Linked or unlinked semi-constrained elbow joint replacement with humeral and ulnar stems.",
          },
          {
            name: "Selected post-traumatic elbow reconstruction",
            indication:
              "Malunions, nonunions, or chronic instability following severe previous trauma.",
            technique:
              "Corrective osteotomies, bone grafting, and hinged external fixation.",
          },
        ],
      },
    ],
    management:
      "Because the elbow is prone to stiffness, our post-operative protocols emphasize early protected movement. For arthroscopic stiffness releases, continuous passive motion (CPM) or active stretches begin on day 1 to preserve surgical gains. For ligament reconstructions (UCL) and tendon repairs (distal biceps), a hinged brace protects healing for 4 to 6 weeks while allowing progressive range of motion. Throwing athletes transition to an interval throwing program by month 4 to 5.",
    faqs: [
      {
        question:
          "Why does the elbow get stiff so easily after injury or surgery?",
        answer:
          "The elbow joint capsule is uniquely thin and highly reactive. Any trauma, bleeding, or immobilization stimulates rapid myofibroblast activity, producing dense collagen scarring. For this reason, modern elbow surgery utilizes minimally invasive techniques and early motion protocols to prevent contracture.",
      },
      {
        question:
          "What is Tommy John surgery and what is the recovery timeline?",
        answer:
          "Tommy John surgery is an anatomical reconstruction of the ulnar collateral ligament (UCL) using a tendon graft (often palmaris longus). Recovery requires structured progressive rehabilitation, with return to competitive throwing typically taking 10 to 12 months.",
      },
      {
        question: "Can tennis elbow be cured without surgery?",
        answer:
          "Yes, over 90% of tennis elbow cases resolve with non-surgical care, including eccentric strengthening, counterforce bracing, and activity modification. Surgery is reserved for the small minority who suffer chronic pain and functional impairment after 6 to 12 months of structured treatment.",
      },
    ],
    relatedBlogs: [
      {
        title: "Tennis Elbow vs Golfer's Elbow",
        slug: "tennis-elbow-vs-golfers-elbow",
      },
      {
        title: "Elbow Arthroscopy: What to Expect",
        slug: "elbow-arthroscopy-what-to-expect",
      },
      {
        title: "Nutrition for Faster Orthopaedic Recovery",
        slug: "nutrition-for-faster-orthopaedic-recovery",
      },
      {
        title: "When to See an Orthopaedic Sports Surgeon",
        slug: "when-to-see-orthopaedic-sports-surgeon",
      },
    ],
    relatedConditions: [
      { title: "Elbow Conditions", slug: "elbow-conditions" },
      { title: "Sports Injuries", slug: "sports-injuries" },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. KNEE SURGERY
  // ─────────────────────────────────────────────────────────────
  {
    slug: "knee-surgery",
    name: "Knee Surgery",
    tagline:
      "World-class keyhole preservation, ligament reconstruction, osteotomy, and joint arthroplasty to restore native joint function.",
    intro:
      "Knee injuries and degenerative disorders can dramatically alter your quality of life, stopping you from sports, climbing stairs, or walking without pain. As a Sports Orthopaedic and Joint Replacement Surgeon with Australian Orthopaedic Association (AOA) fellowship training, Dr. Nihar Modi specializes in the complete spectrum of knee surgery: from anatomical ACL and multiligament reconstructions, precision meniscal preservation, and biological cartilage repair to joint-preserving osteotomies and modern computer-assisted partial and total knee replacements.",
    symptoms: [
      "Audible 'pop' followed by rapid knee swelling and inability to continue playing sports (ACL or meniscus tear)",
      "A sensation of the knee buckling, giving way, or pivoting abnormally during turning and cutting",
      "True mechanical locking, where the knee gets physically stuck and cannot be fully straightened",
      "Joint line pain aggravated by deep squatting, kneeling, or pivoting movements",
      "Persistent pain, stiffness, and bone-on-bone grating (crepitus) characteristic of advanced osteoarthritis",
      "Progressive bowing of the legs (varus deformity) or knock-knees (valgus deformity)",
    ],
    diagnosis:
      "A thorough clinical evaluation includes Lachman and pivot-shift tests (ACL), posterior drawer test (PCL), dial test (posterolateral corner), McMurray and Thessaly tests (meniscus), and patellar apprehension checks. Diagnostic investigations include weight-bearing long-leg alignment radiographs (scanograms) to calculate mechanical axis deviations, alongside 3-Tesla MRI to evaluate meniscal tear morphology, cartilage depth, and ligamentous fiber continuity.",
    treatments: [
      "Primary and revision ACL/PCL reconstruction (hamstring, patellar tendon, quadriceps tendon)",
      "Multiligament and posterolateral corner (PLC) reconstruction for complex knee dislocations",
      "Advanced all-inside, inside-out, and root repair meniscal surgery",
      "MPFL reconstruction and tibial tubercle osteotomy for patellar instability",
      "Joint preservation: High tibial osteotomy (HTO) and biological cartilage restoration",
      "Total and partial (unicompartmental) knee replacement for advanced osteoarthritis",
    ],
    categories: [
      {
        categoryName: "Cruciate Ligament Surgery",
        description:
          "Anatomical primary and revision reconstruction of the anterior and posterior cruciate ligaments using customized autografts.",
        procedures: [
          {
            name: "Primary ACL reconstruction",
            indication:
              "Complete ACL tear causing rotatory or translational knee instability.",
            technique:
              "Anatomic keyhole tunnel placement and graft fixation restoring native knee biomechanics.",
          },
          {
            name: "Revision ACL reconstruction",
            indication:
              "Re-rupture or graft failure following previous ACL surgery.",
            technique:
              "Evaluation of prior tunnel position, bone loss, biological graft selection, and multi-stage bone grafting if needed.",
          },
          {
            name: "ACL repair in selected cases",
            indication:
              "Acute proximal femoral avulsion tears with excellent remnant tissue within 2-3 weeks.",
            technique:
              "Primary suture anchor reattachment with internal brace reinforcement.",
          },
          {
            name: "ACL reconstruction using hamstring tendon graft",
            indication:
              "Standard primary ACL reconstruction in active individuals.",
            technique:
              "Quadrupled semitendinosus and gracilis autograft with cortical button fixation.",
          },
          {
            name: "ACL reconstruction using bone–patellar tendon–bone graft",
            indication:
              "High-level pivoting, collision, or professional athletes demanding maximum stiffness.",
            technique:
              "Bone-to-bone healing within femoral and tibial tunnels for robust early incorporation.",
          },
          {
            name: "ACL reconstruction using quadriceps tendon graft",
            indication:
              "Modern high-strength graft with excellent cross-sectional area and minimal donor-site morbidity.",
            technique:
              "All-inside or full-thickness autograft with or without bone block.",
          },
          {
            name: "Single-bundle ACL reconstruction",
            indication:
              "Anatomical replacement of the dominant anteromedial bundle.",
            technique:
              "Single femoral and tibial tunnel positioned precisely in the native footprint.",
          },
          {
            name: "Double-bundle ACL reconstruction",
            indication:
              "Recreating both the anteromedial and posterolateral bundles in selected anatomy.",
            technique:
              "Four anatomical tunnels replicating native rotational and translational restraint.",
          },
          {
            name: "Posterior cruciate ligament (PCL) reconstruction",
            indication:
              "Grade III PCL tears or symptomatic chronic posterior sag.",
            technique:
              "Transtibial or tibial inlay reconstruction using high-strength autograft or allograft.",
          },
          {
            name: "Revision PCL reconstruction",
            indication:
              "Recurrent posterior laxity following failed PCL reconstruction.",
            technique:
              "Correction of posterior tibial slope, revision graft placement, and tunnel management.",
          },
          {
            name: "Combined ACL and PCL reconstruction",
            indication:
              "High-energy bicruciate ligament tears and knee dislocations.",
            technique:
              "Simultaneous anatomic reconstruction balancing tension and graft isometry.",
          },
          {
            name: "ACL reconstruction with lateral extra-articular tenodesis (LET)",
            indication:
              "High-risk athletes, revision cases, hyperlaxity, or high-grade pivot shift.",
            technique:
              "Modified Lemaire tenodesis adding a lateral restraint to protect the intra-articular ACL graft.",
          },
          {
            name: "Anterolateral ligament (ALL) reconstruction",
            indication:
              "Associated anterolateral rotatory instability (ALRI) or Segond fracture.",
            technique:
              "Anatomical reconstruction of the ALL running from lateral epicondyle to proximal tibia.",
          },
        ],
      },
      {
        categoryName: "Collateral Ligament and Multiligament Knee Surgery",
        description:
          "Reconstruction of medial, lateral, and complex multiligamentous knee trauma to restore limb-threatening stability.",
        procedures: [
          {
            name: "Medial collateral ligament (MCL) repair",
            indication: "Acute Grade III MCL femoral or tibial bony avulsions.",
            technique:
              "Primary suture anchor repair and ligament augmentation.",
          },
          {
            name: "MCL reconstruction",
            indication:
              "Chronic valgus opening or midsubstance Grade III tears.",
            technique:
              "Anatomic reconstruction restoring both the superficial MCL and posterior oblique ligament (POL).",
          },
          {
            name: "Lateral collateral ligament (LCL) reconstruction",
            indication:
              "Traumatic varus instability and lateral knee disruption.",
            technique:
              "Anatomic fibular head to lateral femoral epicondyle graft reconstruction.",
          },
          {
            name: "Posterolateral corner (PLC) reconstruction",
            indication:
              "Combined injury to LCL, popliteus tendon, and popliteofibular ligament.",
            technique:
              "LaPrade anatomical reconstruction restoring varus and external rotatory stability.",
          },
          {
            name: "Combined ACL and MCL reconstruction",
            indication:
              "Severe contact knee injury with persistent valgus and rotational instability.",
            technique:
              "Single-stage coordinated reconstruction preventing graft overload.",
          },
          {
            name: "Combined ACL and PLC reconstruction",
            indication: "Combined rotatory and hyperextension instability.",
            technique:
              "Simultaneous ACL and anatomic PLC reconstruction to protect the ACL from catastrophic varus stress.",
          },
          {
            name: "Combined PCL and PLC reconstruction",
            indication: "Severe hyperextension and external rotation trauma.",
            technique:
              "Coordinated posterior and posterolateral reconstructive stabilization.",
          },
          {
            name: "Multiligament knee reconstruction",
            indication:
              "Two or more ligaments torn (KD I - KD IV classification).",
            technique:
              "Comprehensive, staged or single-stage reconstruction restoring global joint congruity.",
          },
          {
            name: "Knee dislocation ligament reconstruction",
            indication:
              "High-energy trauma with gross tibiofemoral dislocation requiring emergency reduction.",
            technique:
              "Vascular assessment followed by anatomical multiligamentous repair and reconstruction.",
          },
          {
            name: "Revision multiligament knee reconstruction",
            indication: "Recurrent instability following complex prior trauma.",
            technique:
              "Staged osteotomy, tunnel management, and revision autograft/allograft reconstruction.",
          },
        ],
      },
      {
        categoryName: "Meniscal Surgery and Preservation",
        description:
          "Preservation-first meniscus surgery to repair tears, save native shock absorption, and delay osteoarthritis.",
        procedures: [
          {
            name: "Arthroscopic medial meniscus repair",
            indication:
              "Vertical longitudinal tears in the vascular red-red or red-white zone.",
            technique:
              "Suture repair preserving native shock-absorbing fibrocartilage.",
          },
          {
            name: "Arthroscopic lateral meniscus repair",
            indication:
              "Tears of the highly mobile lateral meniscus in young active patients.",
            technique:
              "Targeted suture fixation with protection of the popliteus tendon and peroneal nerve.",
          },
          {
            name: "All-inside meniscus repair",
            indication:
              "Posterior horn and body tears accessible via keyhole instrumentation.",
            technique:
              "Low-profile peek/suture anchor devices placed entirely through arthroscopic portals.",
          },
          {
            name: "Inside-out meniscus repair",
            indication:
              "Middle third and anterior horn tears requiring robust vertical mattress sutures.",
            technique:
              "Cannula guidance from inside the joint with safe mini-incision retrieval on the capsule.",
          },
          {
            name: "Outside-in meniscus repair",
            indication: "Anterior horn tears.",
            technique:
              "Needle guidance from outside the skin into the joint for precise suture tying.",
          },
          {
            name: "Medial meniscus posterior root repair",
            indication:
              "Root avulsions causing meniscus extrusion and rapid bone-on-bone arthritis.",
            technique:
              "Transtibial pull-out suture technique reattaching the root footprint to bleeding bone.",
          },
          {
            name: "Lateral meniscus posterior root repair",
            indication:
              "Root tears commonly associated with acute ACL ruptures.",
            technique:
              "Anatomical transtibial suture anchor fixation into the tibial plateau.",
          },
          {
            name: "Meniscal radial tear repair",
            indication:
              "Radial splits disrupting circumferential hoop stresses.",
            technique:
              "Two-plane cross-stitch and horizontal mattress suture repair.",
          },
          {
            name: "Meniscal ramp lesion repair",
            indication:
              "Hidden meniscocapsular separations in the posteromedial corner associated with ACL tears.",
            technique:
              "Posteromedial portal visualization and direct capsulomeniscal repair.",
          },
          {
            name: "Horizontal cleavage tear repair",
            indication:
              "Delaminating tears in active individuals, often with parameniscal cysts.",
            technique:
              "Cyst decompression and stacked vertical mattress suture repair.",
          },
          {
            name: "Partial meniscectomy",
            indication:
              "Irreparable, complex, degenerate, or macerated tears in the avascular white-white zone.",
            technique:
              "Minimal resection trimming only the unstable leaf, preserving the stable peripheral rim.",
          },
          {
            name: "Discoid meniscus saucerisation and repair",
            indication:
              "Congenitally enlarged, thick discoid meniscus that tears or snaps in children and adolescents.",
            technique:
              "Reshaping the meniscus into a normal crescent profile combined with peripheral stabilization.",
          },
          {
            name: "Meniscal transplantation",
            indication:
              "Young patients with prior total meniscectomy and unicompartmental joint-line pain without severe arthritis.",
            technique:
              "Cryopreserved donor meniscal allograft transplantation with bone plugs or bridge.",
          },
          {
            name: "Meniscal centralisation procedure",
            indication: "Extruded meniscus causing loss of joint cushioning.",
            technique:
              "Suture anchor fixation pulling the extruded meniscus body back onto the tibial plateau rim.",
          },
        ],
      },
      {
        categoryName: "Patellofemoral and Patellar Instability Surgery",
        description:
          "Corrective and stabilizing procedures for kneecap dislocations, maltracking, and patellofemoral cartilage wear.",
        procedures: [
          {
            name: "Medial patellofemoral ligament (MPFL) reconstruction",
            indication:
              "Recurrent patellar dislocations after rupture of the primary medial checkrein.",
            technique:
              "Anatomical reconstruction using a gracilis autograft anchored to the patella and femoral Schöttle's point.",
          },
          {
            name: "Tibial tubercle osteotomy (TTO)",
            indication:
              "Patellar maltracking, elevated TT-TG distance (>20mm), patella alta, or lateral facet arthritis.",
            technique:
              "Fulkerson or Elmslie-Trillat realignment: medializing, anteriorizing, or distalizing the tibial tubercle with screw fixation.",
          },
          {
            name: "Patellar realignment procedures",
            indication: "Lateral patellar tilt and mild subluxation.",
            technique:
              "Combined lateral retinacular lengthening and medial capsular reefing.",
          },
          {
            name: "Trochleoplasty",
            indication:
              "Severe high-grade trochlear dysplasia (flat or domed groove) causing persistent instability.",
            technique:
              "Deepening the femoral groove to create a stable bony valley for the patella.",
          },
          {
            name: "Combined MPFL reconstruction and TTO",
            indication:
              "Patellar dislocation co-existing with significant bony malalignment.",
            technique:
              "Simultaneous soft tissue ligament reconstruction and bony realignment.",
          },
          {
            name: "Osteochondral fracture fixation following patellar dislocation",
            indication:
              "Shearing osteochondral fractures off the patella or lateral femoral condyle.",
            technique:
              "Bioabsorbable pin or headless compression screw fixation of the cartilage-bone fragment.",
          },
          {
            name: "Revision patellar instability surgery",
            indication:
              "Persistent dislocation or pain following failed previous stabilization.",
            technique:
              "CT-based 3D assessment of coronal/torsional alignment and revision MPFL/TTO surgery.",
          },
        ],
      },
      {
        categoryName: "Cartilage Restoration and Joint Preservation",
        description:
          "Biologic, cellular, and osteochondral techniques to repair focal cartilage holes and prevent premature arthritis.",
        procedures: [
          {
            name: "Arthroscopic chondroplasty",
            indication:
              "Superficial cartilage fraying causing mechanical irritation.",
            technique:
              "Gentle radiofrequency and mechanical smoothing of unstable cartilage edges.",
          },
          {
            name: "Microfracture for selected cartilage defects",
            indication:
              "Small (<1.5 cm²) full-thickness cartilage defects in low-demand patients.",
            technique:
              "Puncturing the subchondral bone plate with awls to recruit bone marrow stem cells and fibrocartilage healing.",
          },
          {
            name: "Osteochondral autograft transfer (OATS)",
            indication:
              "Focal full-thickness cartilage defects (1-2.5 cm²) in active individuals.",
            technique:
              "Harvesting cylindrical bone-cartilage plugs from low-weight-bearing knee zones and transferring them into the defect.",
          },
          {
            name: "Osteochondral allograft transplantation",
            indication:
              "Large cartilage defects (>2.5 cm²) or avascular necrosis.",
            technique:
              "Fresh cadaveric donor bone-cartilage core transplantation providing mature hyaline cartilage.",
          },
          {
            name: "Cartilage restoration using cell-based techniques",
            indication:
              "Large symptomatic cartilage defects requiring true hyaline-like repair.",
            technique:
              "Autologous chondrocyte implantation (ACI/MACI) or bone-marrow aspirate concentrate (BMAC) scaffolding.",
          },
          {
            name: "Osteochondritis dissecans (OCD) fixation",
            indication:
              "Unstable or separated OCD fragments in adolescents and young adults.",
            technique:
              "Subchondral drilling and bioabsorbable pin or headless screw fixation.",
          },
          {
            name: "Arthroscopic loose-body removal",
            indication: "Detached cartilage fragments causing locking.",
            technique: "Keyhole retrieval under continuous fluid lavage.",
          },
          {
            name: "Meniscus and cartilage preservation procedures",
            indication: "Co-existing cartilage defect and meniscal tear.",
            technique:
              "Simultaneous meniscal repair and biologic cartilage matrix restoration.",
          },
        ],
      },
      {
        categoryName: "Osteotomy and Alignment Correction",
        description:
          "Joint-preserving bone realignment to offload arthritic compartments and preserve native joints in younger, active patients.",
        procedures: [
          {
            name: "High tibial osteotomy (HTO)",
            indication:
              "Isolated medial compartment osteoarthritis in active patients with bowleg (varus) alignment.",
            technique:
              "Medial opening-wedge or lateral closing-wedge osteotomy of the tibia fixed with a rigid locking plate, shifting load to the healthy lateral compartment.",
          },
          {
            name: "Distal femoral osteotomy (DFO)",
            indication:
              "Isolated lateral compartment osteoarthritis with knock-knee (valgus) alignment.",
            technique:
              "Opening or closing wedge osteotomy of the distal femur secured with a specialized plate.",
          },
          {
            name: "Corrective osteotomy for malalignment",
            indication: "Multi-apical or post-traumatic angular deformities.",
            technique:
              "Precision computer-planned corrective bone cuts to restore a neutral mechanical axis.",
          },
          {
            name: "Osteotomy combined with ligament reconstruction",
            indication:
              "Chronic ACL or PCL deficiency co-existing with severe varus/valgus alignment.",
            technique:
              "Simultaneous bone realignment to normalize slope and joint load, protecting the ligament graft.",
          },
          {
            name: "Osteotomy combined with meniscal root repair",
            indication:
              "Medial meniscus root tear in an overloaded varus knee.",
            technique:
              "HTO realignment combined with arthroscopic root repair to optimize biological healing.",
          },
          {
            name: "Osteotomy combined with cartilage restoration",
            indication:
              "Focal cartilage defect located in the overloaded compartment.",
            technique:
              "Offloading osteotomy paired with OATS or cell-based cartilage grafting.",
          },
        ],
      },
      {
        categoryName: "Tendon and Extensor Mechanism Surgery",
        description:
          "Acute and chronic repair and reconstruction of the patellar and quadriceps tendons.",
        procedures: [
          {
            name: "Patellar tendon repair",
            indication:
              "Complete traumatic rupture of the patellar tendon (inability to extend the knee or perform a straight leg raise).",
            technique:
              "Transosseous suture tunnels or high-strength suture anchors reinforced with non-absorbable internal bracing.",
          },
          {
            name: "Quadriceps tendon repair",
            indication:
              "Avulsion of the quadriceps tendon off the superior pole of the patella.",
            technique:
              "Anatomical transosseous suture repair restoring continuity of the knee extensor mechanism.",
          },
          {
            name: "Chronic extensor mechanism reconstruction",
            indication:
              "Neglected, retracted, or failed previous tendon repairs.",
            technique:
              "Allograft extensor mechanism reconstruction (Achilles allograft or whole extensor mechanism graft).",
          },
          {
            name: "Tendon augmentation and revision procedures",
            indication: "Poor tendon tissue quality or re-rupture.",
            technique:
              "Synthetic mesh or autogenous semitendinosus augmentation.",
          },
        ],
      },
      {
        categoryName: "Knee Arthroplasty and Reconstruction",
        description:
          "Precision partial and total joint resurfacing for end-stage osteoarthritis, eliminating pain and restoring lifestyle independence.",
        procedures: [
          {
            name: "Total knee arthroplasty (TKA)",
            indication:
              "End-stage tricompartmental osteoarthritis, severe pain, stiffness, and bone-on-bone joint loss.",
            technique:
              "Precision resurfacing of the femoral condyles, tibial plateau, and patella with biocompatible cobalt-chromium/titanium implants and ultra-high-molecular-weight polyethylene.",
          },
          {
            name: "Unicompartmental knee arthroplasty (UKA / Partial Knee)",
            indication:
              "End-stage osteoarthritis strictly confined to the medial or lateral compartment with intact cruciate ligaments.",
            technique:
              "Resurfacing only the damaged compartment, preserving all native ligaments, normal kinematics, and offering faster recovery.",
          },
          {
            name: "Revision knee arthroplasty",
            indication:
              "Implant loosening, polyethylene wear, instability, periprosthetic infection, or fracture.",
            technique:
              "Extraction of failed implants, reconstructive sleeves/cones for bone loss, and semi-constrained or hinged revision implants.",
          },
          {
            name: "Selected post-traumatic knee reconstruction",
            indication:
              "Complex secondary osteoarthritis following tibial plateau or distal femoral fractures.",
            technique:
              "Hardware removal, deformity correction, and customized joint replacement.",
          },
        ],
      },
    ],
    management:
      "Rehabilitation is tailored to the exact procedure. Arthroscopic meniscectomies allow immediate weight-bearing and return to daily activities in 2 to 4 weeks. Meniscal repairs and ligament reconstructions (ACL/PCL) utilize a phased protocol: protective bracing and crutches for 2 to 6 weeks, active range of motion by week 6, running at 3 to 4 months, and sport-specific clearance at 6 to 9 months based on objective functional testing. Joint replacement patients stand and walk on the day of surgery under multimodal pain protocols.",
    faqs: [
      {
        question:
          "When should a meniscus tear be repaired rather than trimmed?",
        answer:
          "Whenever possible, especially in young or active patients, we prioritize repairing the meniscus. Preserving the meniscus protects your knee cartilage from future osteoarthritis. We trim (partial meniscectomy) only when the tear is complex, macerated, or located in the avascular white-white zone where biological healing cannot occur.",
      },
      {
        question:
          "How do I choose between a Partial Knee Replacement and a Total Knee Replacement?",
        answer:
          "If cartilage wear is strictly isolated to the inner (medial) half of your knee and your ACL and other compartments are completely healthy, a Partial Knee Replacement offers a smaller incision, faster recovery, and a more natural-feeling knee. If wear involves multiple compartments, a Total Knee Replacement provides the most durable, long-term solution.",
      },
      {
        question:
          "What is the return-to-sport timeline after ACL reconstruction?",
        answer:
          "Biological graft maturation and neuromuscular recovery take time. While running begins around 3 to 4 months, a safe return to cutting, pivoting, and contact sports typically requires 9 to 12 months, accompanied by passing rigorous functional and strength hop tests.",
      },
    ],
    relatedBlogs: [
      {
        title: "Knee Replacement vs Arthroscopy",
        slug: "knee-replacement-vs-arthroscopy",
      },
      {
        title: "Meniscus Tears Explained for Active Patients",
        slug: "meniscus-tear-guide-for-active-patients",
      },
      {
        title: "ACL Tears: Symptoms, Diagnosis & Treatment",
        slug: "acl-tear-symptoms-diagnosis-treatment",
      },
      {
        title: "Understanding Common Sports Knee Injuries",
        slug: "understanding-common-sports-knee-injuries",
      },
      {
        title: "The Complete Guide to Sports Injury Prevention",
        slug: "complete-guide-to-sports-injury-prevention",
      },
    ],
    relatedConditions: [
      { title: "Knee Conditions", slug: "knee-conditions" },
      { title: "Joint Replacement Surgery", slug: "joint-replacement-surgery" },
      { title: "Sports Injuries", slug: "sports-injuries" },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. REVISION AND COMPLEX SPORTS SURGERY
  // ─────────────────────────────────────────────────────────────
  {
    slug: "revision-complex-sports-surgery",
    name: "Revision & Complex Sports Surgery",
    tagline:
      "Specialized reconstructive solutions for failed prior surgeries, recurrent joint instability, and multi-ligament trauma.",
    intro:
      "When a previous ligament reconstruction, rotator cuff repair, or joint stabilization fails—or when high-energy sports trauma results in a catastrophic multi-ligament knee dislocation—standard primary surgical procedures are insufficient. Revision surgery demands specialized orthopaedic expertise: meticulously identifying the mode of initial failure (technical tunnel malposition, unaddressed bone loss, slope abnormalities, or biological non-incorporation) and deploying advanced reconstructive solutions. Dr. Nihar Modi provides complex tertiary sports surgery, combining international fellowship training with cutting-edge graft and joint preservation techniques.",
    symptoms: [
      "Recurrent episodes of giving way or instability after previous ACL, PCL, or shoulder surgery",
      "Persistent pain, swelling, and inability to return to athletic activities following prior intervention",
      "Noticeable limb deformity, hyperextension, or abnormal rotational laxity",
      "Severe joint stiffness, arthrofibrosis, or painful hardware from previous operations",
      "High-energy multi-ligament knee dislocation involving two or more torn ligaments",
      "Failed previous rotator cuff repair with recurrent muscle weakness and inability to lift the arm",
    ],
    diagnosis:
      "Revision evaluation begins with a forensic analysis of all prior operative notes, arthroscopy photographs, and implant records. We utilize 3D CT reconstructions to assess prior tunnel size, convergence, and osteolysis; weight-bearing long-leg alignment scanograms to detect mechanical axis shifts and posterior tibial slope abnormalities; and 3T MRI to evaluate graft rupture, secondary restraints, and muscle quality (Goutallier fatty infiltration staging).",
    treatments: [
      "Revision ACL and PCL reconstruction with staged bone grafting if tunnels are expanded",
      "Complex multiligament knee and knee dislocation reconstruction (KD I - KD V)",
      "Revision shoulder stabilization (Latarjet and Eden-Hybinette bone block transfers)",
      "Revision rotator cuff repair with patch augmentation or tendon transfers",
      "Revision elbow UCL and LUCL reconstruction",
    ],
    categories: [
      {
        categoryName: "Complex Reconstructive Sports Procedures",
        description:
          "Dedicated revision and multi-structure surgical procedures addressing failed previous operations and complex joint trauma.",
        procedures: [
          {
            name: "Revision ACL reconstruction",
            indication:
              "Failed primary ACL graft with recurrent knee instability, rotatory laxity, or tunnel osteolysis.",
            technique:
              "Single or two-stage reconstruction: tunnel bone grafting if dilated, anatomical re-tunneling, alternative autograft (quadriceps/patellar tendon), and lateral extra-articular tenodesis (LET).",
          },
          {
            name: "Revision PCL reconstruction",
            indication: "Recurrent posterior instability or failed PCL graft.",
            technique:
              "Revision anatomical tunnel placement, slope-correcting osteotomy if indicated, and robust tendon graft fixation.",
          },
          {
            name: "Revision multiligament knee reconstruction",
            indication:
              "Failed previous multiligament repair with complex global knee laxity.",
            technique:
              "Comprehensive re-mapping of all anatomical footprints, staging with alignment osteotomies when necessary, and allograft/autograft multi-ligament reconstruction.",
          },
          {
            name: "Revision shoulder instability surgery",
            indication:
              "Recurrent dislocation after failed soft-tissue Bankart repair or failed bone block.",
            technique:
              "Latarjet coracoid transfer, iliac crest autograft, or distal tibial allograft reconstruction for critical glenoid bone deficiency.",
          },
          {
            name: "Revision rotator cuff repair",
            indication:
              "Re-tear of rotator cuff tendons with ongoing pain and loss of elevation.",
            technique:
              "Adhesiolysis, mobilization of retracted tendon, medialized footprint repair, and extracellular matrix (ECM) patch reinforcement.",
          },
          {
            name: "Revision elbow ligament reconstruction",
            indication:
              "Failed Tommy John surgery or recurrent posterolateral rotatory instability (LUCL failure).",
            technique:
              "Removal of failed anchors, anatomical revision tunnel creation, and tendon graft reconstruction.",
          },
          {
            name: "Revision meniscal repair",
            indication:
              "Re-tear of a previously repaired meniscus in an active patient.",
            technique:
              "Debridement of fibrous scar, biological trephination/marrow venting, and revision all-inside or inside-out suture fixation.",
          },
          {
            name: "Complex knee dislocation reconstruction",
            indication:
              "High-energy knee dislocation involving multiple torn ligaments (cruciates + collaterals) with capsular disruption.",
            technique:
              "Emergency neurovascular protection followed by single-stage or staged anatomic multiligament reconstruction.",
          },
          {
            name: "Combined ligament reconstruction procedures",
            indication: "Concurrent ACL + MCL + ALL or PCL + PLC injuries.",
            technique:
              "Coordinated anatomical tunnel drilling avoiding convergence and synchronized graft tensioning.",
          },
          {
            name: "Complex joint-preserving surgery",
            indication:
              "Young patients with combined ligament instability, cartilage loss, and malalignment.",
            technique:
              "Holistic triad surgery: osteotomy alignment correction + biological cartilage grafting + ligament stabilization in a single care pathway.",
          },
        ],
      },
    ],
    management:
      "Revision surgery protocols are highly customized. Because bone tunnels, biologic grafts, and soft tissue restraints require extended protection, recovery often involves initial non-weight bearing or protected hinge bracing for 4 to 6 weeks. A dedicated rehabilitation program focuses on restoring full passive extension, progressive muscular re-education, and strict functional criteria before any return to pivoting activities.",
    faqs: [
      {
        question:
          "Why do ACL reconstructions fail, and when is revision surgery needed?",
        answer:
          "The most common causes of ACL reconstruction failure are non-anatomical tunnel placement, unaddressed secondary instability (such as meniscal root tears or anterolateral rotatory laxity), steep posterior tibial slope, or premature return to high-risk sport. Revision surgery is indicated when a patient experiences recurrent giving way or instability.",
      },
      {
        question: "What is a two-stage revision ACL surgery?",
        answer:
          "If previous bone tunnels are severely widened (tunnel osteolysis >14mm) or placed incorrectly so they overlap with new anatomical tunnels, a two-stage approach is safest: Stage 1 involves removing old hardware and packing the tunnels with bone graft. After 4 to 6 months of bone healing, Stage 2 places the new ACL graft into pristine bone.",
      },
      {
        question:
          "Can an irreparable rotator cuff tear still be treated in revision surgery?",
        answer:
          "Yes. For irreparable rotator cuff tears where the tendon cannot be reattached, options include Superior Capsular Reconstruction (SCR), tendon transfers (such as lower trapezius or latissimus dorsi), or Reverse Total Shoulder Arthroplasty if advanced arthritis is present.",
      },
    ],
    relatedBlogs: [
      {
        title: "ACL Tears: Symptoms, Diagnosis & Treatment",
        slug: "acl-tear-symptoms-diagnosis-treatment",
      },
      {
        title: "When to See an Orthopaedic Sports Surgeon",
        slug: "when-to-see-orthopaedic-sports-surgeon",
      },
      {
        title: "Nutrition for Faster Orthopaedic Recovery",
        slug: "nutrition-for-faster-orthopaedic-recovery",
      },
      {
        title: "The Complete Guide to Sports Injury Prevention",
        slug: "complete-guide-to-sports-injury-prevention",
      },
    ],
    relatedConditions: [
      { title: "Sports Injuries", slug: "sports-injuries" },
      { title: "Knee Conditions", slug: "knee-conditions" },
      { title: "Shoulder Conditions", slug: "shoulder-conditions" },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. ARTHROSCOPIC SURGERY
  // ─────────────────────────────────────────────────────────────
  {
    slug: "arthroscopic-surgery",
    name: "Arthroscopic Surgery",
    tagline:
      "Minimally invasive keyhole procedures for shoulder, elbow, and knee joints offering faster healing and minimal tissue disruption.",
    intro:
      "Arthroscopy, commonly known as keyhole surgery, represents one of the greatest advancements in modern sports medicine and orthopaedics. Rather than making large open incisions that cut through overlying muscles, the surgeon inserts a high-definition 4K camera (arthroscope) and precision micro-instruments through tiny 4 to 5 mm skin portals. This allows direct, magnified visualization of intra-articular structures, enabling meticulous anatomical repairs with minimal blood loss, minimal post-operative pain, and rapid return to active life. Dr. Nihar Modi performs advanced arthroscopic procedures across the shoulder, elbow, and knee joints.",
    symptoms: [
      "Persistent joint pain that has not responded to physical therapy, medications, or rest",
      "Catching, clicking, popping, or mechanical locking sensations within the shoulder, elbow, or knee",
      "Joint swelling, recurrent effusions, or fluid buildup following sports or physical activity",
      "Instability or a feeling that the joint is slipping out of its normal anatomical alignment",
      "Stiffness or loss of normal joint range of motion following previous trauma or inflammation",
    ],
    diagnosis:
      "Arthroscopic evaluation begins with a detailed non-invasive diagnostic workup: specialized provocative clinical tests to isolate the injured ligament or tendon, followed by dedicated high-resolution 3T MRI to confirm internal derangements. Diagnostic arthroscopy also serves as the ultimate gold standard, allowing direct microscopic inspection and mechanical probe testing of cartilage firmness, ligament tension, and labral attachment.",
    treatments: [
      "Minimally invasive shoulder, elbow, and knee keyhole procedures",
      "Arthroscopic ligament reconstruction (ACL, PCL, and capsular ligaments)",
      "Arthroscopic meniscus and labrum repair using all-inside suture anchors",
      "Keyhole cartilage restoration, microfracture, and biological matrix procedures",
      "Arthroscopic capsular release and synovectomy for joint stiffness",
    ],
    categories: [
      {
        categoryName: "Minimally Invasive Arthroscopic Procedures",
        description:
          "Specialized keyhole joint procedures across shoulder, elbow, and knee restoring anatomy with minimal surgical trauma.",
        procedures: [
          {
            name: "Shoulder arthroscopy",
            indication:
              "Rotator cuff tears, labral tears (Bankart/SLAP), impingement, biceps tendonitis, and frozen shoulder.",
            technique:
              "Multi-portal keyhole visualization of the glenohumeral joint and subacromial space using specialized suture passers and anchors.",
          },
          {
            name: "Elbow arthroscopy",
            indication:
              "Elbow contracture, osteophytes, loose bodies, osteochondritis dissecans (OCD), and synovitis.",
            technique:
              "Precise portal access through anterior and posterior safe zones to decompress the joint and excise bone spurs.",
          },
          {
            name: "Knee arthroscopy",
            indication:
              "Meniscus tears, ACL/PCL tears, cartilage defects, loose bodies, and patellar tracking issues.",
            technique:
              "Two or three tiny portals around the patellar tendon providing complete inspection and repair of the knee compartments.",
          },
          {
            name: "Arthroscopic ligament reconstruction",
            indication:
              "Cruciate ligament tears (ACL/PCL) and extra-articular augmentations.",
            technique:
              "Endoscopic tunnel drilling and anatomical graft passage under continuous 4K camera monitoring.",
          },
          {
            name: "Arthroscopic meniscus repair",
            indication:
              "Traumatic meniscal tears in vascular red-red and red-white zones.",
            technique:
              "All-inside, inside-out, and outside-in suture repair preserving native shock-absorbing tissue.",
          },
          {
            name: "Arthroscopic cartilage procedures",
            indication:
              "Focal full-thickness cartilage defects and chondral flaps.",
            technique:
              "Chondroplasty, microfracture, and biologic scaffold placement through keyhole instruments.",
          },
          {
            name: "Arthroscopic loose-body removal",
            indication:
              "Floating bone or cartilage fragments causing painful joint locking.",
            technique:
              "Complete compartment inspection and extraction using specialized grasping forceps.",
          },
          {
            name: "Arthroscopic debridement",
            indication:
              "Inflammatory synovitis, fibrous impingement, or frayed soft tissue borders.",
            technique:
              "Gentle mechanized shaving and radiofrequency coblation of unstable tissue margins.",
          },
          {
            name: "Arthroscopic capsular release",
            indication:
              "Severe joint contractures (frozen shoulder or stiff elbow).",
            technique:
              "Circumferential division of scarred capsule under direct magnified visualization, protecting adjacent nerves.",
          },
          {
            name: "Arthroscopic synovectomy",
            indication:
              "Inflammatory rheumatoid arthritis, pigmented villonodular synovitis (PVNS), or recurrent synovitis.",
            technique:
              "Thorough removal of diseased hypervascular synovial tissue across all joint recesses.",
          },
        ],
      },
    ],
    management:
      "Because arthroscopic surgery does not cut through major muscle bellies, post-operative recovery is significantly faster and less painful than open surgery. Most procedures are performed on a day-care basis (home the same day). Dressing removal occurs within days, and early protected range of motion begins immediately, transitioning into sports-specific conditioning under guided physiotherapy.",
    faqs: [
      {
        question:
          "What are the primary advantages of arthroscopic (keyhole) surgery over open surgery?",
        answer:
          "Keyhole surgery uses tiny 4 to 5 mm incisions, resulting in significantly less tissue trauma, lower infection rates, minimal blood loss, dramatically reduced post-operative pain, and faster return to work and athletics compared to traditional open procedures.",
      },
      {
        question:
          "Is arthroscopic surgery done under general or regional anaesthesia?",
        answer:
          "Arthroscopic surgery is typically performed under regional nerve blocks (which keep the limb completely numb and pain-free for 12 to 24 hours post-operatively) combined with light sedation or general anaesthesia for maximum patient comfort.",
      },
      {
        question: "Can an arthroscopy cure bone-on-bone knee arthritis?",
        answer:
          "No. Arthroscopy is highly effective for mechanical issues (such as repairable meniscus tears or loose bodies), but landmark clinical trials have shown it cannot reverse or cure bone-on-bone osteoarthritis. When cartilage is completely worn away, joint resurfacing or replacement is the definitive treatment.",
      },
    ],
    relatedBlogs: [
      {
        title: "Elbow Arthroscopy: What to Expect",
        slug: "elbow-arthroscopy-what-to-expect",
      },
      {
        title: "Knee Replacement vs Arthroscopy",
        slug: "knee-replacement-vs-arthroscopy",
      },
      {
        title: "Rotator Cuff Injuries in Sports",
        slug: "rotator-cuff-injuries-in-sports",
      },
      {
        title: "Meniscus Tears Explained for Active Patients",
        slug: "meniscus-tear-guide-for-active-patients",
      },
    ],
    relatedConditions: [
      { title: "Arthroscopy (Keyhole Surgery)", slug: "arthroscopy" },
      { title: "Sports Injuries", slug: "sports-injuries" },
      { title: "Knee Conditions", slug: "knee-conditions" },
      { title: "Shoulder Conditions", slug: "shoulder-conditions" },
      { title: "Elbow Conditions", slug: "elbow-conditions" },
    ],
  },
];
