export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Module {
  id: number;
  title: string;
  content: string[];
  quiz: QuizQuestion[];
}

export const modules: Module[] = [
  {
    id: 1,
    title: "Understanding Sexual Harassment",
    content: [
      "Sexual harassment is a form of sex discrimination that violates Title VII of the Civil Rights Act of 1964 and the Connecticut Fair Employment Practices Act (Conn. Gen. Stat. §46a-60). All employers in Connecticut with three or more employees are required to provide sexual harassment prevention training.",
      "Sexual harassment is defined as any unwelcome sexual advances, requests for sexual favors, or other verbal or physical conduct of a sexual nature when: (1) submission to such conduct is made either explicitly or implicitly a term or condition of employment; (2) submission to or rejection of such conduct is used as the basis for employment decisions; or (3) such conduct has the purpose or effect of unreasonably interfering with an individual's work performance or creating an intimidating, hostile, or offensive working environment.",
      "There are two primary types of sexual harassment recognized under the law:\n\n**Quid Pro Quo** — This occurs when submission to or rejection of unwelcome sexual conduct is used as a basis for employment decisions such as hiring, firing, promotions, or assignments. Example: A manager implies that an employee will receive a raise in exchange for a date.\n\n**Hostile Work Environment** — This occurs when unwelcome sexual conduct unreasonably interferes with an employee's work performance or creates an intimidating, hostile, or offensive work environment. This can include repeated jokes, comments, images, or unwanted touching.",
      "In the hospitality industry, sexual harassment can come from many sources including managers, coworkers, customers, vendors, and delivery personnel. Under Connecticut law, employers can be held liable for harassment by non-employees (such as customers) if the employer knew or should have known about the conduct and failed to take appropriate corrective action.",
    ],
    quiz: [
      {
        question:
          "Which Connecticut statute specifically prohibits sexual harassment in the workplace?",
        options: [
          "Conn. Gen. Stat. §46a-60",
          "Conn. Gen. Stat. §31-51q",
          "Conn. Gen. Stat. §52-571d",
          "Conn. Gen. Stat. §10-15c",
        ],
        correctIndex: 0,
      },
      {
        question:
          "A manager tells an employee they will get better shifts if they go on a date. What type of harassment is this?",
        options: [
          "Hostile work environment",
          "Quid pro quo",
          "Constructive discharge",
          "Retaliation",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Under Connecticut law, can an employer be liable for harassment by a customer?",
        options: [
          "No, only employee-on-employee harassment counts",
          "Yes, if the employer knew or should have known and failed to act",
          "Only if the customer is a regular",
          "Only if the employee files a police report",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Recognizing Harassment in Hospitality Settings",
    content: [
      "The hospitality industry presents unique challenges for sexual harassment prevention. Employees frequently work in close quarters, during late hours, and interact extensively with the public. Understanding what constitutes harassment in these settings is essential for maintaining a safe workplace.",
      "**Examples of verbal harassment include:**\n- Sexual jokes, comments about someone's body or appearance\n- Repeated unwanted requests for dates after being told no\n- Sexual innuendos or suggestive comments\n- Spreading sexual rumors about a coworker\n- Using sexual or degrading language to describe someone\n- Commenting on someone's clothing in a sexual manner",
      "**Examples of physical harassment include:**\n- Unwanted touching, hugging, kissing, or brushing against someone\n- Blocking someone's path or cornering them\n- Making sexually suggestive gestures\n- Unwanted massage of the neck, shoulders, or any body part\n- Any form of sexual assault",
      "**Examples of visual/digital harassment include:**\n- Displaying sexually explicit images, posters, or screensavers\n- Sharing sexually explicit content via text, email, or social media\n- Staring or leering in a sexually suggestive manner\n- Taking unwanted photographs of coworkers\n- Sending unwanted messages of a sexual nature through any platform",
      "**Important:** Harassment does not have to be motivated by sexual desire. It can include hostile conduct directed at someone because of their sex or gender identity. Additionally, harassment can occur between individuals of any gender. Both men and women can be victims or perpetrators of sexual harassment.",
    ],
    quiz: [
      {
        question:
          "Which of the following is an example of visual sexual harassment?",
        options: [
          "Asking a coworker about their weekend plans",
          "Displaying sexually explicit images in the break room",
          "Giving a coworker a compliment on their presentation",
          "Sharing a work schedule via group text",
        ],
        correctIndex: 1,
      },
      {
        question: "Sexual harassment can only occur between a man and a woman.",
        options: [
          "True",
          "False — harassment can occur between individuals of any gender",
          "True, but only in Connecticut",
          "True, under federal law only",
        ],
        correctIndex: 1,
      },
      {
        question:
          "A coworker repeatedly asks you on dates despite you saying no each time. Is this harassment?",
        options: [
          "No, they are just being friendly",
          "Only if they are your supervisor",
          "Yes, repeated unwanted requests for dates can constitute harassment",
          "Only if they do it in front of other employees",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    id: 3,
    title: "Employer & Employee Responsibilities",
    content: [
      "Under Connecticut law (Public Act 19-16, effective October 1, 2019), all employers with three or more employees must provide two hours of sexual harassment prevention training to all employees. Supervisory employees must receive this training within six months of assuming a supervisory role. All existing employees must also receive periodic supplemental training.",
      "**Employer responsibilities under Connecticut law include:**\n- Providing sexual harassment prevention training to all employees\n- Posting information concerning the illegality of sexual harassment in a prominent and accessible location\n- Establishing and distributing a written policy against sexual harassment\n- Taking immediate and appropriate corrective action when harassment is reported\n- Protecting employees from retaliation for reporting harassment or participating in investigations",
      "**Employee responsibilities include:**\n- Treating all colleagues, customers, and vendors with respect and professionalism\n- Reporting any witnessed or experienced harassment promptly\n- Cooperating with any harassment investigations\n- Not retaliating against anyone who reports harassment\n- Reviewing and understanding the company's harassment prevention policy",
      "**Lyfe Hospitality's commitment:** Lyfe Hospitality maintains a zero-tolerance policy for sexual harassment. Every employee — from kitchen staff to management — is expected to uphold the highest standards of professional conduct. All reports of harassment will be taken seriously, investigated promptly, and handled with appropriate confidentiality.",
    ],
    quiz: [
      {
        question:
          "Under Connecticut Public Act 19-16, how many hours of sexual harassment training must employers provide?",
        options: ["1 hour", "2 hours", "4 hours", "30 minutes"],
        correctIndex: 1,
      },
      {
        question:
          "When must a new supervisor receive sexual harassment prevention training?",
        options: [
          "Within 30 days",
          "Within one year",
          "Within six months of assuming a supervisory role",
          "Before their first day",
        ],
        correctIndex: 2,
      },
      {
        question: "Which of the following is an employer responsibility?",
        options: [
          "Ignoring complaints from part-time employees",
          "Taking immediate and appropriate corrective action when harassment is reported",
          "Only training managers, not all employees",
          "Waiting for a lawsuit before taking action",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 4,
    title: "Reporting Procedures & Legal Remedies",
    content: [
      "If you experience or witness sexual harassment, you should report it immediately. You do not need to confront the harasser directly. There are multiple avenues for reporting, both internal and external.",
      "**Internal reporting at Lyfe Hospitality:**\n- Report directly to your supervisor or manager\n- If your supervisor is the source of the harassment, report to any other manager or the company owner\n- Reports can be made verbally or in writing\n- All reports will be investigated promptly and as confidentially as possible\n- No employee will be retaliated against for making a good-faith report",
      "**External reporting options:**\n- **Connecticut Commission on Human Rights and Opportunities (CHRO):** You may file a complaint within 300 days of the alleged harassment. Contact: 1-800-477-5737 or visit www.ct.gov/chro\n- **U.S. Equal Employment Opportunity Commission (EEOC):** You may file a charge within 300 days. Contact: 1-800-669-4000 or visit www.eeoc.gov\n- You also have the right to consult with a private attorney at any time",
      "**Retaliation is illegal.** Connecticut law prohibits retaliation against anyone who reports harassment, files a complaint, or participates in an investigation. Retaliation can include termination, demotion, schedule changes, or any other adverse employment action taken because of a harassment report. If you believe you have been retaliated against, you should report it immediately through the same channels.",
      "**Remedies available to victims may include:**\n- Back pay and reinstatement\n- Compensatory damages (emotional distress)\n- Punitive damages\n- Attorney's fees and court costs\n- Injunctive relief (court orders to stop the behavior)\n- Under Connecticut law, individual supervisors and managers can be held personally liable for harassment.",
    ],
    quiz: [
      {
        question:
          "How long do you have to file a complaint with the Connecticut CHRO?",
        options: [
          "30 days",
          "90 days",
          "180 days",
          "300 days",
        ],
        correctIndex: 3,
      },
      {
        question:
          "Your manager reduces your hours after you reported a coworker for harassment. This may be an example of:",
        options: [
          "Standard scheduling",
          "Illegal retaliation",
          "Reasonable accommodation",
          "Constructive feedback",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Can individual managers be held personally liable for sexual harassment under Connecticut law?",
        options: [
          "No, only the company is liable",
          "Yes, individual supervisors and managers can be held personally liable",
          "Only if they are the owner",
          "Only in federal court",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 5,
    title: "Bystander Intervention & Prevention Strategies",
    content: [
      "Preventing sexual harassment is everyone's responsibility. Bystander intervention is a critical tool in creating a safe workplace. A bystander is anyone who witnesses or becomes aware of harassment or behavior that could lead to harassment.",
      "**The 5 D's of Bystander Intervention:**\n\n- **Direct:** Speak up and address the behavior directly. Example: \"That comment is inappropriate and needs to stop.\"\n- **Distract:** Create a diversion to interrupt the harassment. Example: Ask the victim a work-related question to remove them from the situation.\n- **Delegate:** Ask someone with more authority to intervene. Example: Notify a manager or supervisor.\n- **Delay:** Check in with the victim after the incident. Example: \"I saw what happened earlier. Are you okay? I can help you report it.\"\n- **Document:** Write down what you witnessed, including dates, times, locations, and any witnesses. This documentation can be valuable in an investigation.",
      "**Prevention strategies for the workplace:**\n- Model respectful behavior in all interactions\n- Speak up when you hear inappropriate jokes or comments, even if no one seems offended\n- Respect personal boundaries — when in doubt, don't touch\n- Be mindful of power dynamics, especially between managers and subordinates\n- Avoid making assumptions about what others find acceptable\n- Support coworkers who report harassment",
      "**Creating a culture of respect at Lyfe Hospitality:**\n\nAs members of the Lyfe Hospitality team, we are ambassadors of respect and professionalism. Our restaurants serve our communities, and that service begins with how we treat each other. Every person deserves to come to work and feel safe, valued, and respected. By completing this training and committing to these principles, you are helping to build a workplace where everyone can thrive.",
    ],
    quiz: [
      {
        question:
          "Which of the following is one of the 5 D's of bystander intervention?",
        options: [
          "Deny",
          "Delegate",
          "Dismiss",
          "Diminish",
        ],
        correctIndex: 1,
      },
      {
        question:
          "A coworker tells an inappropriate joke. Nobody seems offended. What should you do?",
        options: [
          "Laugh along since nobody is offended",
          "Ignore it — it's not your problem",
          "Speak up and let them know the joke is inappropriate",
          "Wait until someone complains to take action",
        ],
        correctIndex: 2,
      },
      {
        question:
          "You witness a customer making sexual comments to a coworker. What is the best course of action?",
        options: [
          "Ignore it — the customer is always right",
          "Tell your coworker to deal with it themselves",
          "Intervene or delegate to a manager, and check in with your coworker",
          "Post about it on social media",
        ],
        correctIndex: 2,
      },
    ],
  },
];
