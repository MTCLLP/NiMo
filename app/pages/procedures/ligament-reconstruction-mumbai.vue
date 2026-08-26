<script setup lang="ts">
import { useHead } from "#imports";

useHead({
  title: "Ligament Reconstruction Specialist in Mumbai | ACL & PCL Tears",
  meta: [
    {
      name: "description",
      content:
        "Expert ligament reconstruction by Dr. Nihar Modi in Mumbai. Advanced arthroscopic treatment for ACL, PCL, and sports-related ligament injuries to restore joint stability.",
    },
  ],
});
</script>

<template>
  <main>
    <PageHeader
      title="Ligament Reconstruction"
      :breadcrumbs="[
        { name: 'Home', path: '/' },
        { name: 'Procedures', path: '#' },
        {
          name: 'Ligament Reconstruction',
          path: '/procedures/ligament-reconstruction-mumbai',
        },
      ]"
    />

    <div class="bg-white min-h-screen pb-20 md:pb-32 pt-12 md:pt-24">
      <section class="container mx-auto px-6 max-w-4xl">
        <h2 class="text-3xl md:text-5xl font-mirage text-primary mb-8">
          Ligament Reconstruction Surgery
        </h2>

        <div class="prose prose-lg max-w-none text-gray-600 space-y-8">
          <p>
            Ligaments are strong bands of tissue that connect bones to one
            another, providing critical stability to your joints. When a
            ligament is severely torn—often during sports, sudden twisting
            motions, or trauma—it cannot heal on its own. This leads to a
            sensation of the joint "giving way" or buckling.
          </p>
          <p>
            Ligament Reconstruction is an advanced surgical procedure designed
            to replace the torn ligament with a healthy substitute (a graft),
            restoring the normal mechanics and stability of the joint.
          </p>

          <h2 class="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Common Ligament Injuries We Treat
          </h2>
          <p>
            While any joint can suffer ligament damage, the knee is the most
            commonly affected area, especially among athletes. Dr. Nihar Modi
            specializes in:
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li>
              <strong>ACL (Anterior Cruciate Ligament) Tears:</strong> The most
              common sports injury, often requiring surgical reconstruction to
              allow a safe return to cutting and pivoting sports like football
              or basketball.
            </li>
            <li>
              <strong>PCL (Posterior Cruciate Ligament) Tears:</strong> Often
              caused by direct impact to the front of the knee, such as in a
              dashboard injury during a car accident.
            </li>
            <li>
              <strong>MCL/LCL Injuries:</strong> Injuries to the ligaments on
              the sides of the knee, which are often treated conservatively but
              may require surgery if completely ruptured alongside other
              ligaments.
            </li>
            <li>
              <strong>Multi-Ligament Knee Injuries:</strong> Complex cases
              involving two or more torn ligaments, requiring highly specialized
              surgical planning [1].
            </li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-800 mt-12 mb-4">
            How is the Reconstruction Performed?
          </h2>
          <p>
            Dr. Nihar Modi performs ligament reconstruction using
            <strong>minimally invasive arthroscopy (keyhole surgery)</strong>.
            Instead of stitching the torn ends together (which is rarely
            successful for ligaments like the ACL), a new ligament is created
            using a graft.
          </p>
          <div class="bg-gray-50 p-6 rounded-xl border border-gray-100 my-6">
            <h4 class="font-bold text-lg text-primary mb-2">Types of Grafts</h4>
            <ul class="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong>Autograft:</strong> Tissue taken from your own body,
                such as the hamstring tendon, patellar tendon, or quadriceps
                tendon. This is the gold standard for most active individuals as
                it poses zero risk of rejection.
              </li>
              <li>
                <strong>Allograft:</strong> Tissue sourced from a donor. This is
                often used for older patients or complex multi-ligament
                reconstructions to minimize surgical time and trauma.
              </li>
            </ul>
          </div>
          <p>
            The chosen graft is secured into place using specialized
            bio-absorbable or titanium screws and buttons, acting as a scaffold
            upon which new ligament tissue will grow over time [2].
          </p>

          <h2 class="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Recovery & Return to Sport
          </h2>
          <p>
            Successful ligament reconstruction is a partnership between the
            surgeon and the patient. While the surgery provides the structural
            stability, a rigorous, phased physiotherapy program is vital for
            success.
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li>
              <strong>0-4 Weeks:</strong> Focus on reducing swelling, regaining
              full range of motion (especially extension), and activating the
              quadriceps muscles.
            </li>
            <li>
              <strong>1-3 Months:</strong> Gradual strengthening exercises and
              balance training.
            </li>
            <li>
              <strong>4-6 Months:</strong> Introduction of running, jumping, and
              sport-specific drills.
            </li>
            <li>
              <strong>6-9+ Months:</strong> Final objective testing and gradual
              return to competitive play.
            </li>
          </ul>

          <hr class="my-12 border-gray-200" />

          <div class="text-sm text-gray-500">
            <h4 class="font-bold mb-2">References:</h4>
            <ol class="list-decimal pl-5 space-y-1">
              <li>
                Kaeding CC, et al. "A prospective randomized comparison of
                anterior cruciate ligament reconstruction with patellar tendon
                or hamstring tendon autografts."
                <em>American Journal of Sports Medicine</em>. 2011.
              </li>
              <li>
                Prodromos CC, et al. "A meta-analysis of the incidence of
                anterior cruciate ligament tears as a function of gender, sport,
                and a knee injury-reduction regimen." <em>Arthroscopy</em>.
                2007.
              </li>
            </ol>
          </div>
        </div>

        <div
          class="mt-16 flex flex-col items-center justify-center text-center"
        >
          <h3 class="text-2xl font-mirage text-primary mb-6">
            Looking for a Ligament Reconstruction Specialist in Mumbai?
          </h3>
          <UiButton to="/contact" variant="primary" size="lg">
            Consult Dr. Nihar Modi for Ligament Injury
          </UiButton>
        </div>
      </section>
    </div>
  </main>
</template>
