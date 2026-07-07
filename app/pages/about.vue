<script setup lang="ts">
import { computed } from "vue";

const education = [
  {
    title: "Australian Orthopaedic Association (AOA) Fellowship",
    date: "April 2026",
    desc: "Shoulder, Elbow and Knee Sports and Arthroplasty Fellowship, Orthoclinic Sydney",
  },
  {
    title: "MRCS",
    date: "March 2024",
    desc: "Royal College of Surgeons, England",
  },
  {
    title: "FIFA Diploma in Football Medicine",
    date: "February 2024",
    desc: "The Fédération Internationale de Football Association",
  },
  {
    title: "M.N.A.M.S",
    date: "October 2023",
    desc: "National Academy of Medical Sciences, India",
  },
  {
    title: "D.N.B. Orthopaedics",
    date: "May 2023",
    desc: "Delhi National Board, India",
  },
  {
    title: "M.S. Orthopaedics",
    date: "June 2019 - May 2022",
    desc: "Maharashtra University of Health Sciences, Grant Medical College and Sir JJ Group of Hospitals, Mumbai, India",
  },
  {
    title: "M.B.B.S.",
    date: "August 2013 - March 2019",
    desc: "Maharashtra University of Health Sciences, Topiwala National Medical College and BYL Nair Charitable Hospital, Mumbai, India",
  },
];

const fellowships = [
  {
    title:
      "Clinical Fellowship in Shoulder, Elbow and Knee Sports Medicine, Arthroscopy and Arthroplasty",
    date: "May 2025 - April 2026",
    desc: "Orthoclinic, Australian Orthopaedic Association (AOA), Sydney, New South Wales, Australia",
  },
  {
    title:
      "Clinical Observership in Paediatric Sports Injuries and Musculoskeletal Trauma",
    date: "April 2025",
    desc: "Ascension Sacred Heart Hospital, Pensacola, Florida, United States of America",
  },
  {
    title:
      "Clinical Fellowship in Arthroscopy, Sports Medicine and Shoulder Arthroplasty",
    date: "February 2024 - March 2025",
    desc: "Ace Arthroscopy Clinic, Jaslok Hospital, Saifee Hospital and Nanavati Hospital, Mumbai",
  },
  {
    title: "Senior Resident",
    date: "October 2022 - January 2024",
    desc: "Topiwala National Medical College and BYL Nair Charitable Hospital, Mumbai, India",
  },
  {
    title: "Registrar",
    date: "August 2022 - October 2022",
    desc: "KB Bandra Bhabha Municipal General Hospital, Bandra, Mumbai, India",
  },
  {
    title: "Resident",
    date: "June 2019 - May 2022",
    desc: "Grant Medical College and Sir JJ Group of Hospitals, Mumbai, India",
  },
];

const memberships = [
  "Bombay Orthopaedic Society",
  "Indian Arthroscopy Society",
];

const specialityCourses = [
  "Advanced Shoulder Surgery Lab by ConMed November 2025, held at Macquarie Universtiy Cadaver Lab, Sydney, Australia",
  "Advanced Knee Arthroscopy Course by Arthrex June 2024, held at Arthrolab (Ramaiah Advanced Learning Centre), Bangalore",
  "Basic Shoulder Arthroscopy Course by Arthrex in March 2024, held at Arthrolab (Ramaiah Advanced Learning Centre), Bangalore",
  "Basic Arthroscopy Course organised by Bombay Orthopaedic Society (BOS) in August 2023, held at Dr. DY Patil Medical College, Navi Mumbai",
  "“Core skills in Knee Replacement Surgery” accredited by Royal College of Surgeons of England, London, held at Dinanath Mangeshkar Hospital, Pune, in July 2023",
  "AO Trauma Course: Advanced Course (Pune, 2024), Blended Course (Amritsar, 2023), Introduction Seminar (Mumbai, 2019)",
  "Advanced Trauma Life Support (ATLS) course held at Topiwala National Medical College and BYL Nair Charitable Hospital, Mumbai, India, in March 2023",
  "Club foot/ Vertical Talus Correction Course held at 42nd SICOT Orthopaedic World Congress, Kuala Lumpur, Malaysia, in September 2022",
  "KEM Post Graduate Training Course (Orthopaedics) held at Seth GS Medical College and KEM Hospital, Mumbai, India, in April 2022",
  "LTMGH Advanced Fracture Fixation Course held at Lokmanya Tilak Municipal Medical College and Hospital, Mumbai, India in September 2021",
  "Osteotomies Around the Paediatric and Adolescent Hip (Basic) course organised by Bombay Orthopaedic Society in August 2021",
  "Basic Course in Biomedical Research (Indian Council of Medical Research and National Institute of Epidemiology) in June 2020",
  "Principles of Plaster Casting Techniques course organised by Pune Orthopaedic Society held at Deenanath Mangeshkar Hospital, Pune, in August 2019",
];

const awards = [
  {
    title: "Vice Chancellor’s Certificate of Merit in Orthopaedics",
    desc: "For securing 5th rank in Maharashtra State in the MS Orthopaedics examinations (2022), awarded by the Maharashtra University of Health Sciences (MUHS), India",
  },
  {
    title: "Best Poster",
    desc: "In the Most Interesting Case Podium Presentation Category at WIROC 2022, Mumbai - Subacute Bacterial Infection Mimicking a Slipped Capital Femoral Epiphysis in an Obese Adolescent Male",
  },
  {
    title: "Dr. A.S Paranjpe intercollegiate Pharmacology Quiz 2015 winner",
    desc: "Held at Seth GS Medical College and KEM Hospital, Mumbai, India",
  },
  {
    title: "Scholarship Award in Medicine",
    desc: "From the J.R.D. Tata Trust - 2014, 2016 and 2017",
  },
];

const researchThesis =
  "A descriptive study to assess the outcomes of femoral supracondylar focal dome osteotomy for frontal plane knee deformities in children and young adults in a tertiary care hospital";

const publishedArticles = [
  "International Journal of Research in Orthopaedics (Jan 2026) - From fracture to function: a Baird and Jackson score-based evaluation of bimalleolar ankle injuries.",
  "Journal of Orthopaedic Case Reports (Sep 2025) - Finding the Optimal Balance – Isolated Posterolateral Corner Reconstruction with Allograft Tendon in a Combined Posterolateral Corner-Posterior Cruciate Ligament Injury: A Case Report.",
  "Journal of Clinical Orthopaedics and Trauma (Aug 2025) - Single-incision anatomic technique yields good outcomes in acute and chronic distal biceps avulsions alike.",
  "Indian Journal of Orthopaedics (May 2025) - A Novel Technique of Femoral Supracondylar Focal Dome Osteotomy for Correction of Frontal Plane Knee Deformities in Children and Young Adults.",
  "Journal of Orthpaedic Case Reports (May 2025) - Management of Chronic Achilles Tendon Rupture with Tibialis Anterior Allograft: A 2-Year Follow-up Study.",
  "... and 24 other peer-reviewed publications in international and national journals.",
];

const presentations = [
  "Delivered a talk on “Positioning in Shoulder Arthroscopy” as teaching faculty at Basic Arthroscopy Course (BOS) in July 2024",
  "BOS Clinical Meets (Topiwala National Medical College 2023, KB Bandra Bhabha Hospital 2022)",
  "Poster presentation at WIROC 2022 – Smashed up elbow in a paediatric child",
  "Paper and Poster presentation at SICOT World Congress 2022 held in Kuala Lampur, Malaysia",
  "Poster presentation at NMOACON 2022 conducted by Navi Mumbai Orthopaedic Association",
  "Paper and Poster presentation at WIROC (Western India Regional Orthopaedic Conference) 2022",
  "Paper and Poster presentation at IOACON 2021 (Indian Orthopaedic Association Conference)",
];

const hobbies = [
  "Outside of the hospital, you’ll probably find me with the guitar, at a gym or playing a sport. Be it football, badminton, cricket, lawn tennis or swimming, I’m always up for a game and give it my best. Throughout my MBBS, I was the captain of the football college team. Recently, I have started pushing myself into newer areas such as skateboarding, which has been fun. I also enjoy running marathons and have completed 12 marathons as a semi-professional runner and I plan for that number to grow.",
  "Music is another go-to hobby of mine; I am a part of an amateur doctor’s band – Tachychordia and have been their lead guitarist for 8 years counting.",
];

const accordionItems = [
  {
    title: "Education & Qualifications",
    id: "education",
    open: true,
    icon: '<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>',
  },
  {
    title: "Appointments & Fellowships",
    id: "fellowships",
    open: true,
    icon: '<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
  },
  {
    title: "Speciality Training Courses",
    id: "speciality",
    open: true,
    icon: '<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>',
  },
  {
    title: "Research Experience",
    id: "research",
    open: true,
    icon: '<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>',
  },
  {
    title: "Awards",
    id: "awards",
    open: true,
    icon: '<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>',
  },
  {
    title: "Presentations",
    id: "presentations",
    open: true,
    icon: '<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>',
  },
  {
    title: "Memberships",
    id: "memberships",
    open: true,
    icon: '<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>',
  },
  {
    title: "Hobbies",
    id: "hobbies",
    open: true,
    icon: '<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
  },
];
</script>

<template>
  <main>
    <PageHeader
      title="Dr. Nihar Modi"
      subtitle="MS (Orth) DNB (Orth), MNAMS"
      :breadcrumbs="[
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
      ]"
    />
    <IntroductionSection />
    <div class="bg-white min-h-screen pb-24">
      <div class="container mx-auto px-6 max-w-3xl">
        <!-- Quote -->
        <!-- <div class="mb-16 flex gap-6 items-start">
          <div
            class="text-[60px] md:text-[80px] text-[#e0eaf3] font-asectica leading-none select-none -mt-4"
          >
            “
          </div>
          <p class="text-xl lg:text-2xl text-gray-600 italic leading-relaxed">
            I believe orthopaedic treatment should not only focus on healing
            bones and joints, but also restoring confidence, mobility, and
            quality of life.
          </p>
        </div> -->

        <UiAccordion :items="accordionItems" :multiple="true" variant="minimal">
          <template #item-content="{ item }">
            <template v-if="item.id === 'education'">
              <div class="pt-2">
                <img src="/about/graduation.png" alt="Education and Qualifications" class="w-full h-auto rounded-xl shadow-sm mb-8 object-cover object-center max-h-[400px]" />
                <div class="space-y-6">
                  <div v-for="(edu, idx) in education" :key="idx">
                    <h4 class="text-base font-bold text-gray-800 mb-1">
                      {{ edu.title }}
                      <span class="text-gray-500 font-normal ml-1"
                        >({{ edu.date }})</span
                      >
                    </h4>
                    <p class="text-gray-600 leading-relaxed">{{ edu.desc }}</p>
                  </div>
                </div>
              </div>
            </template>

            <template v-else-if="item.id === 'fellowships'">
              <div class="space-y-6 pt-2">
                <div v-for="(fel, idx) in fellowships" :key="idx">
                  <h4 class="text-base font-bold text-gray-800 mb-1">
                    {{ fel.title }}
                    <span class="text-gray-500 font-normal ml-1"
                      >({{ fel.date }})</span
                    >
                  </h4>
                  <p class="text-gray-600 leading-relaxed">{{ fel.desc }}</p>
                </div>
              </div>
            </template>

            <template v-else-if="item.id === 'speciality'">
              <ul
                class="list-disc space-y-3 pt-2 text-gray-600 leading-relaxed ml-4"
              >
                <li v-for="(course, idx) in specialityCourses" :key="idx">
                  {{ course }}
                </li>
              </ul>
            </template>

            <template v-else-if="item.id === 'research'">
              <div class="space-y-6 pt-2">
                <div>
                  <h4 class="text-base font-bold text-gray-800 mb-2">
                    Post Graduate Thesis
                  </h4>
                  <p class="text-gray-600 leading-relaxed">
                    {{ researchThesis }}
                  </p>
                </div>
                <div>
                  <h4 class="text-base font-bold text-gray-800 mb-3">
                    Published Articles (Highlights)
                  </h4>
                  <ul
                    class="list-disc space-y-3 text-gray-600 leading-relaxed ml-4"
                  >
                    <li v-for="(article, idx) in publishedArticles" :key="idx">
                      {{ article }}
                    </li>
                  </ul>
                </div>
              </div>
            </template>

            <template v-else-if="item.id === 'awards'">
              <div class="pt-2">
                <img src="/about/awards.png" alt="Awards" class="w-full h-auto rounded-xl shadow-sm mb-8 object-cover object-center max-h-[400px]" />
                <div class="space-y-6">
                  <div v-for="(award, idx) in awards" :key="idx">
                    <h4 class="text-base font-bold text-gray-800 mb-1">
                      {{ award.title }}
                    </h4>
                    <p class="text-gray-600 leading-relaxed">{{ award.desc }}</p>
                  </div>
                </div>
              </div>
            </template>

            <template v-else-if="item.id === 'presentations'">
              <ul
                class="list-disc space-y-3 pt-2 text-gray-600 leading-relaxed ml-4"
              >
                <li v-for="(pres, idx) in presentations" :key="idx">
                  {{ pres }}
                </li>
              </ul>
            </template>

            <template v-else-if="item.id === 'memberships'">
              <ul
                class="list-disc space-y-3 pt-2 text-gray-600 leading-relaxed ml-4"
              >
                <li v-for="(mem, idx) in memberships" :key="idx">
                  {{ mem }}
                </li>
              </ul>
            </template>

            <template v-else-if="item.id === 'hobbies'">
              <div class="space-y-3 pt-2">
                <p
                  v-for="(para, idx) in hobbies"
                  :key="idx"
                  class="text-gray-600 leading-relaxed"
                >
                  {{ para }}
                </p>
              </div>
            </template>
          </template>
        </UiAccordion>
      </div>
    </div>
  </main>
</template>
