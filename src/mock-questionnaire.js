
export default function mockClientIssueQuestionnaire() {
  return [
    {
      issueType: 'Check Engine Light',
      questions: [
        {
          id: '123',
          question: 'Is there a driveability issue accompaning the check engine light? ' +
          'Example: Runs rough, does not make any power, etc.',
          answer: ['Yes', 'No'],
          multipleChoice: true,
        },
        {
          id: '1234',
          question: 'How long has the fault light been on?',
          answer: [''],
          multipleChoice: false,
        },
        {
          id: '12',
          question: 'Did something happen prior to the light coming on?',
          answer: [''],
          multipleChoice: false,
        },
        {
          id: '1',
          question: 'Has another shop attempted to fix the issue or did the issue occur shortly after vehicle service?',
          multipleChoice: false,
          answer: [''],
        },
      ],
    },
    {
      issueType: 'Driveability Issues',
      questions: [
        {
          id: '234',
          question: 'Are you experiencing misfires or hesitations?',
          multipleChoice: true,
          answer: ['Yes', 'No'],
        },
        {
          id: '23456',
          question: 'Is the vehicle driveable?',
          multipleChoice: true,
          answer: ['Yes', 'No'],
        },
        {
          id: '765',
          question: 'Is the issue intermittent? How often?',
          multipleChoice: true,
          answer: [
            'Always',
            'Intermittently',
            'After previous repair',
            'Only happened a few times',
          ],
        },
        {
          id: '7968675',
          question: 'When does it occur',
          multipleChoice: true,
          answer: [
            'Cold',
            'Normal',
            'Hot restart',
            'During warm up',
            'All temperatures',
          ],
        },
        {
          id: '0987',
          question: 'Please describe what is going on?',
          multipleChoice: false,
          answer: [''],
        },
      ],
    },
    {
      issueType: 'Interior Electrical Issue',
      questions: [
        {
          id: '89787',
          question: 'Please select the component category that you are expeirencing the issue.',
          multipleChoice: true,
          answer: [
            'Radio',
            'Seats',
            'Windows',
            'Navigation',
            'Comfort Features',
            'Heating and AC controls',
          ],
        },
        {
          id: '789797',
          question: 'Please describe in as much detail, what happens.',
          multipleChoice: false,
          answer: [],
        },
        {
          id: '897807087',
          question: 'How often does the issue occur?',
          multipleChoice: true,
          answer: [
            'Once',
            'Always',
            'Ocassionally',
            'Every couple of days',
          ],
        },
      ],
    },
    {
      issueType: 'Starting Issues',
      questions: [
        {
          id: '09809',
          question: 'Does the radio, lights, and instrument panel come on?',
          multipleChoice: true,
          answer: ['Yes', 'No'],
        },
        {
          id: '897897',
          question: 'How often does this occur?',
          multipleChoice: true,
          answer: [
            'Once',
            'Always',
            'Ocassionally',
            'Every couple of days',
          ],
        },
        {
          id: '896',
          question: 'Does the vehicle start with a jump start?',
          multipleChoice: true,
          answer: ['Yes', 'No'],
        },
        {
          id: '6567762',
          question: 'Does the vehicle crank? With or with out a jump start.',
          multipleChoice: true,
          answer: ['Yes', 'No'],
        },
      ],
    },
    {
      issueType: 'Noise And Vibration Issue',
      questions: [
        {
          id: '62348',
          question: 'What type of noise are you hearing?',
          multipleChoice: true,
          answer: [
            'None',
            'Hiss, like air excaping',
            'Rattle, marbles in an can',
            'Growl, angry dog type sound',
            'Grind, abrasive metal to metal',
            'Click, similar to clicking a pen',
            'Boom, a sound of a drum or distant thunder',
            'Clunk, metal to metal or hammer hitting an object.',
          ],
        },
        {
          id: '7364',
          question: 'Is there a vibration?',
          multipleChoice: true,
          answer: [
            'None',
            'Always',
            'While in reverse',
            'Only when braking',
            'Only when accelerating',
            'When making left or right turns',
          ],
        },
        {
          id: '90807',
          question: 'What are the road conditions when the noise or vibration occurs?',
          multipleChoice: true,
          answer: [
            'All road surfaces',
            'Smooth road surfaces',
            'Bumpy, uneven, or dirt roads',
          ],
        },
      ],
    },
    {
      issueType: 'Overheating issues',
      questions: [
        {
          id: '963537',
          question: 'How long before the vehicle starts to overheat',
          multipleChoice: true,
          answer: [
            'Within a half an hour',
            'One to two hours',
            'Over two hours',
          ],
        },
        {
          id: '3475',
          question: 'Has the vehicle been repaired recently?',
          multipleChoice: true,
          answer: [
            'No',
            'Yes, but over a month ago',
            'Yes, I was at a shop within a month ago',
          ],
        },
        {
          id: '1237',
          question: 'Is the air conditioning on when the vehicle overheats',
          multipleChoice: true,
          answer: [
            'Yes',
            'No',
          ],
        },
        {
          id: '673954',
          question: 'Are you traveling in the mountains when it occurs?',
          multipleChoice: true,
          answer: [
            'Yes',
            'No',
          ],
        },
        {
          id: '6543',
          question: 'Is there anything you would like to add?',
          multipleChoice: false,
          answer: [
          ],
        },
      ],
    },
  ];
}
