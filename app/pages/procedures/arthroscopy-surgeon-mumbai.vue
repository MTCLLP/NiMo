<script setup lang="ts">
import { useHead } from "#imports";

useHead({
  title: "Top Arthroscopy Surgeon in Mumbai | Keyhole Surgery",
  meta: [
    {
      name: "description",
      content:
        "Learn about advanced arthroscopy (keyhole surgery) by Dr. Nihar Modi in Mumbai. Minimally invasive treatment for knee, shoulder, and sports injuries with faster recovery.",
    },
  ],
});
</script>

<template>
  <main>
    <PageHeader
      title="Arthroscopy & Keyhole Surgery"
      :breadcrumbs="[
        { name: 'Home', path: '/' },
        { name: 'Procedures', path: '#' },
        { name: 'Arthroscopy', path: '/procedures/arthroscopy-surgeon-mumbai' },
      ]"
    />

    <div class="bg-white min-h-screen pb-20 md:pb-32 pt-12 md:pt-24">
      <section class="container mx-auto px-6 max-w-4xl">
        <h2 class="text-3xl md:text-5xl font-mirage text-primary mb-8">
          Arthroscopy Surgery
        </h2>

        <div class="prose prose-lg max-w-none text-gray-600 space-y-8">
          <p>
            When conservative treatments like physiotherapy or medication are no
            longer effective for joint pain, surgery might be the next step.
            Fortunately, the days of large incisions and long hospital stays are
            often behind us. <strong>Arthroscopy</strong> (commonly known as
            keyhole surgery) is a minimally invasive surgical technique that has
            revolutionized orthopaedics.
          </p>

          <h2 class="text-2xl font-bold text-gray-800 mt-12 mb-4">
            What is Arthroscopy?
          </h2>
          <p>
            Arthroscopy involves making tiny, buttonhole-sized incisions around
            the affected joint. Dr. Nihar Modi inserts an arthroscope—a narrow
            tube attached to a fiber-optic video camera—through one of these
            incisions. The high-definition camera transmits the view inside your
            joint to a high-resolution video monitor in the operating room.
          </p>
          <p>
            This allows for precise diagnosis and treatment. Miniature surgical
            instruments are inserted through the other small incisions to repair
            torn tissues, remove loose bone fragments, or reconstruct ligaments
            [1].
          </p>

          <h2 class="text-2xl font-bold text-gray-800 mt-12 mb-4">
            The Benefits of Keyhole Surgery
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h4 class="font-bold text-lg text-primary mb-2">
                Faster Recovery
              </h4>
              <p class="text-sm">
                Because the muscles and tissues are not subjected to the trauma
                of a large incision, healing time is significantly accelerated.
              </p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h4 class="font-bold text-lg text-primary mb-2">
                Less Post-Operative Pain
              </h4>
              <p class="text-sm">
                Smaller incisions mean less pain and discomfort in the days
                following the surgery, often requiring less pain medication.
              </p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h4 class="font-bold text-lg text-primary mb-2">
                Minimal Scarring
              </h4>
              <p class="text-sm">
                The buttonhole incisions heal to leave very faint, small scars
                compared to traditional open surgeries.
              </p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h4 class="font-bold text-lg text-primary mb-2">
                Lower Infection Risk
              </h4>
              <p class="text-sm">
                Smaller wounds drastically reduce the surface area exposed to
                potential hospital-acquired infections [2].
              </p>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Common Arthroscopic Procedures
          </h2>
          <p>
            Dr. Nihar Modi frequently utilizes arthroscopy to treat a wide array
            of conditions, particularly sports injuries:
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li>
              <strong>Knee Arthroscopy:</strong> Repairing or removing torn
              meniscus cartilage, reconstructing a torn anterior cruciate
              ligament (ACL), or trimming damaged articular cartilage.
            </li>
            <li>
              <strong>Shoulder Arthroscopy:</strong> Repairing rotator cuff
              tears, treating recurrent shoulder dislocations (Bankart repair),
              and removing inflamed tissue or bone spurs.
            </li>
            <li>
              <strong>Ankle Arthroscopy:</strong> Removing loose bone fragments
              or treating cartilage damage in the ankle joint.
            </li>
          </ul>

          <div
            class="bg-primary/5 p-8 rounded-2xl my-12 border border-primary/10"
          >
            <h3 class="text-xl font-bold text-primary mb-4">
              Is Arthroscopy Right For You?
            </h3>
            <p class="text-gray-700">
              While arthroscopy is highly effective, it is not suitable for
              every condition (such as advanced, severe osteoarthritis which may
              require joint replacement). A detailed consultation and MRI review
              with Dr. Nihar Modi will determine the most effective and least
              invasive path forward for your specific joint issue.
            </p>
          </div>

          <hr class="my-12 border-gray-200" />

          <div class="text-sm text-gray-500">
            <h4 class="font-bold mb-2">References:</h4>
            <ol class="list-decimal pl-5 space-y-1">
              <li>
                Jackson RW. "A history of arthroscopy."
                <em
                  >Arthroscopy: The Journal of Arthroscopic & Related
                  Surgery</em
                >. 2010.
              </li>
              <li>
                Babcock HM, et al. "Surgical site infections after arthroscopy:
                outbreak investigation and case-control study."
                <em>Arthroscopy</em>. 2003.
              </li>
            </ol>
          </div>
        </div>

        <div
          class="mt-16 flex flex-col items-center justify-center text-center"
        >
          <h3 class="text-2xl font-mirage text-primary mb-6">
            Looking for a Top Arthroscopy Surgeon in Mumbai?
          </h3>
          <UiButton to="/contact" variant="primary" size="lg">
            Schedule an Arthroscopy Consultation
          </UiButton>
        </div>
      </section>
    </div>
  </main>
</template>
