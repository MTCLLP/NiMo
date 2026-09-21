import AchillesSpectrumFlowchart from '~/components/content/AchillesSpectrumFlowchart.global.vue'
import AchillesThompsonTest from '~/components/content/AchillesThompsonTest.global.vue'
import AchillesDecisionFramework from '~/components/content/AchillesDecisionFramework.global.vue'
import FaiTypesDiagram from '~/components/content/FaiTypesDiagram.global.vue'
import FaiClinicalPathway from '~/components/content/FaiClinicalPathway.global.vue'
import AnkleLigamentsDiagram from '~/components/content/AnkleLigamentsDiagram.global.vue'
import OttawaAnkleRules from '~/components/content/OttawaAnkleRules.global.vue'
import AnkleSurgeryProtocol from '~/components/content/AnkleSurgeryProtocol.global.vue'
import InjuryCausationFramework from '~/components/content/InjuryCausationFramework.global.vue'
import FifaWarmupStructure from '~/components/content/FifaWarmupStructure.global.vue'
import DynamicValgusComparison from '~/components/content/DynamicValgusComparison.global.vue'
import WorkloadRatioZones from '~/components/content/WorkloadRatioZones.global.vue'
import KineticChainPyramid from '~/components/content/KineticChainPyramid.global.vue'

export const contentComponents = {
  AchillesSpectrumFlowchart,
  'achilles-spectrum-flowchart': AchillesSpectrumFlowchart,
  AchillesThompsonTest,
  'achilles-thompson-test': AchillesThompsonTest,
  AchillesDecisionFramework,
  'achilles-decision-framework': AchillesDecisionFramework,
  FaiTypesDiagram,
  'fai-types-diagram': FaiTypesDiagram,
  FaiClinicalPathway,
  'fai-clinical-pathway': FaiClinicalPathway,
  AnkleLigamentsDiagram,
  'ankle-ligaments-diagram': AnkleLigamentsDiagram,
  OttawaAnkleRules,
  'ottawa-ankle-rules': OttawaAnkleRules,
  AnkleSurgeryProtocol,
  'ankle-surgery-protocol': AnkleSurgeryProtocol,
  InjuryCausationFramework,
  'injury-causation-framework': InjuryCausationFramework,
  FifaWarmupStructure,
  'fifa-warmup-structure': FifaWarmupStructure,
  DynamicValgusComparison,
  'dynamic-valgus-comparison': DynamicValgusComparison,
  WorkloadRatioZones,
  'workload-ratio-zones': WorkloadRatioZones,
  KineticChainPyramid,
  'kinetic-chain-pyramid': KineticChainPyramid,
}

export default defineNuxtPlugin((nuxtApp) => {
  for (const [name, component] of Object.entries(contentComponents)) {
    nuxtApp.vueApp.component(name, component)
  }
})
