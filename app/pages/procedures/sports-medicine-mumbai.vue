<script setup lang="ts">
import { useHead } from "#imports";

useHead({
  title: "Best Sports Medicine Specialist in Mumbai",
  meta: [
    {
      name: "description",
      content:
        "Consult Dr. Nihar Modi, a leading Sports Orthopaedic Surgeon in Mumbai, for expert treatment of ACL tears, meniscus injuries, and shoulder dislocations. Get back in the game safely.",
    },
  ],
});
</script>

<template>
  <main>
    <PageHeader
      title="Sports Medicine & Injuries"
      :breadcrumbs="[
        { name: 'Home', path: '/' },
        { name: 'Procedures', path: '#' },
        { name: 'Sports Medicine', path: '/procedures/sports-medicine-mumbai' },
      ]"
    />

    <div class="bg-white min-h-screen pb-20 md:pb-32 pt-12 md:pt-24">
      <section class="container mx-auto px-6 max-w-4xl">
        <h2 class="text-3xl md:text-5xl font-mirage text-primary mb-8">
          Sports Medicine
        </h2>

        <div class="prose prose-lg max-w-none text-gray-600 space-y-8">
          <p>
            Whether you are a professional athlete or a weekend warrior, a
            sports injury can be a devastating setback. Sports medicine focuses
            not just on treating the injury, but on restoring optimal function
            and getting you back to your active lifestyle as quickly and safely
            as possible.
          </p>

          <h2 class="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Why Specialized Sports Medicine Matters
          </h2>
          <p>
            Sports injuries differ from everyday musculoskeletal problems. They
            often involve high-impact trauma or repetitive stress on ligaments,
            tendons, and cartilage. Treating these requires a specialized
            understanding of biomechanics and tissue healing. A standard
            approach may alleviate pain, but a sports medicine approach ensures
            the joint can withstand the rigorous demands of your specific sport
            [1].
          </p>

          <h2 class="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Common Sports Injuries We Treat
          </h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>
              <strong>ACL & PCL Tears:</strong> Ligament injuries in the knee
              common in football, basketball, and skiing.
            </li>
            <li>
              <strong>Meniscus Tears:</strong> Damage to the shock-absorbing
              cartilage in the knee, often caused by sudden twisting motions.
            </li>
            <li>
              <strong>Shoulder Dislocation & Rotator Cuff Tears:</strong>
              Frequent in overhead sports like tennis, swimming, and cricket.
            </li>
            <li>
              <strong>Tennis Elbow & Golfer's Elbow:</strong> Overuse injuries
              affecting the tendons in the forearm.
            </li>
            <li>
              <strong>Ankle Sprains & Instability:</strong> Recurrent ankle
              issues that affect balance and agility.
            </li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Our Treatment Philosophy: Conservative First
          </h2>
          <p>
            As a holder of the prestigious FIFA Diploma in Football Medicine,
            Dr. Nihar Modi believes in a "conservative-first" approach. This
            means exploring targeted physiotherapy, bracing, and advanced pain
            management (such as Platelet-Rich Plasma or PRP injections) before
            considering surgery.
          </p>
          <p>
            When surgery is unavoidable, Dr. Nihar Modi employs advanced,
            minimally invasive arthroscopic (keyhole) techniques. These modern
            surgical methods result in smaller incisions, less post-operative
            pain, and significantly faster rehabilitation times compared to
            traditional open surgeries [2].
          </p>

          <div
            class="bg-primary/5 p-8 rounded-2xl my-12 border border-primary/10"
          >
            <h3 class="text-xl font-bold text-primary mb-4">
              The Return to Play (RTP) Protocol
            </h3>
            <p class="text-gray-700">
              Recovery doesn't end when the surgical wound heals. Dr. Nihar Modi
              works closely with top physiotherapists to design a phased Return
              to Play protocol. This structured rehabilitation program
              objectively measures your strength, agility, and psychological
              readiness before clearing you to return to the field,
              significantly reducing the risk of re-injury.
            </p>
          </div>

          <hr class="my-12 border-gray-200" />

          <div class="text-sm text-gray-500">
            <h4 class="font-bold mb-2">References:</h4>
            <ol class="list-decimal pl-5 space-y-1">
              <li>
                Maffulli N, Longo UG, Gougoulias N, Loppini M, Denaro V. "Sports
                injuries: a review of outcomes."
                <em>British Medical Bulletin</em>. 2011.
              </li>
              <li>
                Lubowitz JH, Appleby D. "Cost-effectiveness analysis of the most
                common orthopaedic surgery procedures: knee arthroscopy and knee
                ligament reconstruction." <em>Arthroscopy</em>. 2011.
              </li>
            </ol>
          </div>
        </div>

        <div
          class="mt-16 flex flex-col items-center justify-center text-center"
        >
          <h3 class="text-2xl font-mirage text-primary mb-6">
            Looking for the Best Sports Orthopaedic Surgeon in Mumbai?
          </h3>
          <UiButton to="/contact" variant="primary" size="lg">
            Consult Dr. Nihar Modi for Your Sports Injury
          </UiButton>
        </div>
      </section>
    </div>
  </main>
</template>
