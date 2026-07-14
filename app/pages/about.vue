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

    <div class="bg-white min-h-screen pb-20 md:pb-32 pt-12 md:pt-24">
      <!-- Section 1: Education -->
      <section class="container mx-auto px-6 mb-24 md:mb-32">
        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
        >
          <div class="order-2 lg:order-1 lg:col-span-7">
            <h2 class="text-3xl font-mirage text-primary pb-4">
              Education & Qualifications
            </h2>
            <div class="space-y-6">
              <div v-for="(edu, idx) in education" :key="idx">
                <h4 class="text-lg font-bold text-gray-800 mb-1">
                  {{ edu.title }}
                  <span class="text-gray-500 font-normal ml-1 text-sm"
                    >({{ edu.date }})</span
                  >
                </h4>
                <p class="text-gray-600 leading-relaxed">{{ edu.desc }}</p>
              </div>
            </div>
          </div>
          <div class="order-1 lg:order-2 lg:col-span-5 lg:sticky lg:top-32">
            <img
              src="/about/graduation.png"
              alt="Education"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <!-- Section 2: Appointments & Training -->
      <section class="container mx-auto px-6 mb-24 md:mb-32">
        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
        >
          <div class="order-1 lg:order-1 lg:col-span-5 lg:sticky lg:top-32">
            <img
              src="/about/academic.png"
              alt="Appointments and Training"
              class="w-full h-auto object-cover"
            />
          </div>
          <div class="order-2 lg:order-2 lg:col-span-7 space-y-16">
            <div>
              <h2 class="text-3xl font-mirage text-primary pb-4">
                Appointments & Fellowships
              </h2>
              <div class="space-y-6">
                <div v-for="(fel, idx) in fellowships" :key="idx">
                  <h4 class="text-lg font-bold text-gray-800 mb-1">
                    {{ fel.title }}
                    <span class="text-gray-500 font-normal ml-1 text-sm"
                      >({{ fel.date }})</span
                    >
                  </h4>
                  <p class="text-gray-600 leading-relaxed">{{ fel.desc }}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 class="text-3xl font-mirage text-primary pb-4">
                Speciality Training Courses
              </h2>
              <ul
                class="list-disc space-y-4 text-gray-600 leading-relaxed ml-4"
              >
                <li v-for="(course, idx) in specialityCourses" :key="idx">
                  {{ course }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Research & Publications -->
      <section class="container mx-auto px-6 mb-24 md:mb-32">
        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
        >
          <div class="order-2 lg:order-1 lg:col-span-7 space-y-16">
            <div>
              <h2 class="text-3xl font-mirage text-primary pb-4">
                Research Experience
              </h2>
              <h4 class="text-lg font-bold text-gray-800 mb-2">
                Post Graduate Thesis
              </h4>
              <p class="text-gray-600 leading-relaxed">{{ researchThesis }}</p>
            </div>

            <div>
              <h4 class="text-lg font-bold text-gray-800 mb-4">
                Published Articles (Highlights)
              </h4>
              <ul
                class="list-disc space-y-4 text-gray-600 leading-relaxed ml-4"
              >
                <li v-for="(article, idx) in publishedArticles" :key="idx">
                  {{ article }}
                </li>
              </ul>
            </div>

            <div>
              <h2 class="text-3xl font-mirage text-primary pb-4">
                Presentations
              </h2>
              <ul
                class="list-disc space-y-4 text-gray-600 leading-relaxed ml-4"
              >
                <li v-for="(pres, idx) in presentations" :key="idx">
                  {{ pres }}
                </li>
              </ul>
            </div>
          </div>
          <div class="order-1 lg:order-2 lg:col-span-5 lg:sticky lg:top-32">
            <img
              src="/about/publications.png"
              alt="Research and Publications"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <!-- Section 4: Awards, Memberships & Hobbies -->
      <section class="container mx-auto px-6">
        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
        >
          <div class="order-1 lg:order-1 lg:col-span-5 lg:sticky lg:top-32">
            <img
              src="/about/awards.png"
              alt="Awards and More"
              class="w-full h-auto object-cover"
            />
          </div>
          <div class="order-2 lg:order-2 lg:col-span-7 space-y-16">
            <div>
              <h2 class="text-3xl font-mirage text-primary pb-4">Awards</h2>
              <div class="space-y-6">
                <div v-for="(award, idx) in awards" :key="idx">
                  <h4 class="text-lg font-bold text-gray-800 mb-1">
                    {{ award.title }}
                  </h4>
                  <p class="text-gray-600 leading-relaxed">{{ award.desc }}</p>
                </div>
              </div>
            </div>

            <div class="space-y-16">
              <div>
                <h2 class="text-3xl font-mirage text-primary pb-4">
                  Memberships
                </h2>
                <ul
                  class="list-disc space-y-4 text-gray-600 leading-relaxed ml-4"
                >
                  <li v-for="(mem, idx) in memberships" :key="idx">
                    {{ mem }}
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="text-3xl font-mirage text-primary pb-4">Hobbies</h2>
                <div class="space-y-4">
                  <p
                    v-for="(para, idx) in hobbies"
                    :key="idx"
                    class="text-gray-600 leading-relaxed"
                  >
                    {{ para }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
