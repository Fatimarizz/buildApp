export const BASE_URL='http://localhost:5000/api/'
export const STRIPE_PUBLISHABLE_KEY=import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY

export const StepperInfo = [
  {
    stepTitle: 'LANGUAGE',
    title: 'What  language is your app built in?',
    src: './step1.png',

    btntext: [
      {
        icon: './us.png',
        text: 'English',
        selected: false
      },
      {
        icon: './spain.png',
        text: 'Spanish',
        selected: false
      },
      {
        icon: './france.png',
        text: 'France',
        selected: true
      },
      {
        icon: './china.png',
        text: 'Chinese',
        selected: false
      },
      {
        icon: './denmark.png',
        text: 'Dutch',
        selected: false
      },
      {
        icon: './saudi-arabia.png',
        text: 'Arabic',
        selected: false
      }
    ]
  },
  {
    stepTitle: 'SOURCE CONTROL SYSTEM',
    title: 'What source control do you use?',
    src: './step2.png',
    btntext: [
      {
        text: 'SCM # 1',
        selected: false
      },
      {
        text: 'SCM # 2',
        selected: true
      },
      {
        text: 'SCM # 3',
        selected: false
      },
      {
        text: 'SCM # 4',
        selected: false
      },
      {
        text: 'SCM # 5',
        selected: false
      },
      {
        text: 'SCM # 6',
        selected: false
      }
    ]
  },
  {
    stepTitle: 'CI/CD TOOL',
    title: 'What CI/CD do you use?',
    src: './step3.png',
    btntext: [
      {
        text: 'CI Tool # 1',
        selected: false
      },
      {
        text: 'CI Tool # 2',
        selected: false
      },
      {
        text: 'CI Tool # 3',
        selected: true
      },
      {
        text: 'CI Tool # 4',
        selected: false
      },
      {
        text: 'CI Tool # 5',
        selected: false
      },
      {
        text: 'CI Tool # 6',
        selected: false
      }
    ]
  },
  {
    stepTitle: 'PIPELINE',
    title: 'What you want the Pipeline to do?',
    src: './step4.png',
    btntext: [
      {
        text: 'Build',
        selected: false
      },
      {
        text: 'Build & Test',
        selected: false
      },
      {
        text: 'Build , Test & Deploy',
        selected: false
      },
      {
        text: 'CI Tool # 1',
        selected: true
      },
      {
        text: 'CI Tool # 2',
        selected: false
      },
      {
        text: 'CI Tool # 3',
        selected: false
      }
    ]
  }
];

export const BillingTypes = ['Billing', 'Support', 'Account Recovery'];
