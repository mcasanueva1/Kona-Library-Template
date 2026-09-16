const com_idc_clm_metadata = {
  "slideContents": [
    {
      "id": "slide01",
      "content": "Slide 01: Cover Page. This slide is the entry point of the presentation and contains the following interactive elements: Primary button that opens Modal 1. Secondary button 1 that opens Modal 1. Secondary button 2 that opens Modal 1. Drop modal trigger used to show additional information. Link that opens Slide 02 in standalone modal mode. Link that navigates to Slide 03. Complex navigation link that opens Slide 04 directly in tab instance 2. Link element with an empty flag value (behavior determined at runtime). Conditional link that opens a related CLM presentation, which becomes disabled if the related CLM is unavailable. External link that opens a website in the browser."
    },
    {
      "id": "slide02",
      "content": "Slide 02: Standalone Modal. This slide behaves as a pop-up modal that is coded as a separate slide. The main close control in the utilities menu returns the user to the opener slide. The modal can also be closed by tapping on the background area outside the pop-up, which sends the user back to the opener. Additionally, there is a secondary close button inside the modal that also returns to the opener slide."
    },
    {
      "id": "slide02b",
      "content": "Slide 02b: Standalone Modal Example. This slide is a second example of a standalone modal implemented as its own slide. It opens from a trigger on another slide and behaves like a pop-up overlay. The main close control returns the user to the opener slide, and tapping on the background outside the modal also closes it and navigates back to the opener. A secondary close button inside the modal provides an additional way to dismiss the modal and return to the opener slide."
    },
    {
      "id": "slide03",
      "content": "Slide 03: Image Source Examples. This slide showcases images loaded from different source locations to validate asset resolution and styling. It includes images referenced from slide.css, images referenced from common.css, images referenced directly in the slide-specific index.html file, and images referenced globally in the common index.html file."
    },
    {
      "id": "slide04",
      "content": "Slide 04: Tab Modal Behavior. This slide demonstrates a tab-based interaction pattern. It includes a tab cover area plus associated content that is displayed together with the tab cover. The tab component has three instances (Tab 1, Tab 2, and Tab 3) and behaves like a tab modal, opening on top of the underlying content instead of navigating away. Additionally, the slide contains a complex navigation link back to Slide 01 that not only opens Slide 01 but also triggers Modal 1 within that slide.",
      "isNew": true,
      "whatIsNew": "Tab modal behavior and complex navigation link"
    },
    {
    "id": "slide05a",
    "content": "Slide 05a: Dynamic Navigation Example. This slide is part of a three-slide set used to demonstrate dynamic navigation logic. It contains no actual content and exists only to support navigation flows triggered programmatically or from other slides."
    },
    {
      "id": "slide05b",
      "content": "Slide 05b: Dynamic Navigation with Simulated Profile. This slide is part of the dynamic navigation set. It contains no visual content, but includes a multi-element that is automatically selected based on the data-simulated-profile attribute. This attribute determines the default navigation entry point, making Slide 05b the default target accessed by the presentation when no specific tab or state is provided.",
      "isNew": true,
      "whatIsNew": "The multi element linked to data-simulated-profile field"
    },
    {
      "id": "slide05c",
      "content": "Slide 05c: Dynamic Navigation Example. This slide completes the dynamic navigation trio. It contains no display content and is used strictly for demonstrating and testing logic-driven navigation between slides."
    },
    {
      "id": "slide06",
      "content": "Slide 06: Tab Component with Simulated Profile Auto-Selection. This slide presents another example of a tab-based interaction model. It includes three tab instances, but Tab 3 is automatically selected by default using the body attribute data-simulated-profile. This attribute determines the initial tab state when the slide loads, allowing the presentation to simulate profile-specific navigation behavior."
    },
    {
      "id": "slide07",
      "content": "Slide 07: PDF Slide Example. This slide does not contain HTML elements. Instead, it displays a PDF directly as the slide content. It is used to demonstrate how the presentation handles embedded PDF slides within the CLM environment."
    },
    {
      "id": "slide08",
      "content": "Slide 08: Mandatory ISI Slide. This slide serves as the mandatory ISI (Important Safety Information) screen. It is shown automatically after the first slide is viewed, regardless of user interaction. Once displayed, the slide redirects the user to the intended target slide based on navigation logic, ensuring compliance while maintaining the presentation flow."
    }
  ],
  "functionalities": {
    "emailCart": {
      "name": "Email Cart",
      "description": "Allows the user to select and collect items during the presentation and generate a unified summary email at the end of the interaction. This feature supports real-time selection, stores the chosen elements throughout the call, and prepares a consolidated message that can be sent directly to the HCP.",
      "isNew": true,
      "whatIsNew": "Non-working emails are flagged; stats added to each item (sent, opened)",
      "thumb": "emailCart.png",
      action: function() {
        com.idc.emailCart.ui.elements.modal.open()
      }
    },
    "preCall": {
      "name": "Interaction Summary",
      "description": "Displays previous engagement from the HCP, including previously viewed slides, opened quicklinks, and received emails. This helps the user understand past interactions and prepare a more relevant pre-call plan.",
      "isNew": true,
      "whatIsNew": "Cover summary details and support for quick links",
      "thumb": "interactionSummary.png",
      action: function() {
        preCall.open();
      }
    },
    "quicklinks": {
      "name": "Quick Links",
      "description": "Provides fast access to supporting materials such as PDFs, related CLM presentations, external resources, or internal assets. Quicklinks allow users to open additional content without disrupting the main navigation flow.",
      "isNew": true,
      "whatIsNew": "Non-working items are flagged; stats added to each item (discussed/not discussed)",
      "thumb": "quickLinks.png"
    },
    "references": {
      "name": "References",
      "description": "Shows a consolidated list of citations, data sources, and scientific references used throughout the presentation. This ensures transparency and supports compliance by centralizing all referenced materials.",
      "thumb": "references.png",
      action: function() {
        referencesModal.open();
      }
    },
    "emailButton": {
      "name": "Email Button",
      "description": "Allows the user to send a single predefined email directly from the presentation. Unlike the email cart, this feature sends a single message rather than a consolidated summary of selected items.",
      "thumb": "emailButton.png"
    },
    "uiQuickTour": {
      "name": "UI Quick Tour",
      "description": "Provides on-screen guidance explaining how to interact with the presentation’s interface, including navigation patterns, modals, tabs, and interactive elements. This helps users understand the available UI behaviors and ensures a smoother experience.",
      "thumb": "uiQuickTour.png"
    },
    "aiChat": {
      "name": "aiDC: CLM Training & Planning Assistant",
      "description": "Helps you understand how the presentation works and prepare for your next call. It explains slide content and functionalities, and summarizes previous account engagement to support safe and effective pre-call planning.",
      "isNew": true,
      "whatIsNew": "This is an entire new functionality",
      "thumb": "aiDC.png"
    }
  },
  "relatedCLM": [
    {
      "id": "CDER-Drug-Safety-Priorities",
      "pages": [
        {
          "number": 1,
          "content": "Cover page for CDER Drug Safety Priorities 2015–2016: Initiatives and Innovation. Establishes the FDA/CDER focus on drug safety."
        },
        {
          "number": 2,
          "content": "Table of contents. The report is organized around lifecycle safety oversight, safety science, operations/management, and communication."
        },
        {
          "number": 3,
          "content": "Introduction by Janet Woodcock. Frames drug safety as a multidisciplinary, lifecycle effort supported by innovation, surveillance, partnerships, and communication."
        },
        {
          "number": 4,
          "content": "Explains FDA/CDER's responsibility for drug safety across the product lifecycle. Introduces three pillars: safety science, operations/management, and safety communications."
        },
        {
          "number": 5,
          "content": "Describes early safety review through IND and NDA processes. Emphasizes multidisciplinary review teams and benefit-risk assessment before approval."
        },
        {
          "number": 6,
          "content": "Infographic: premarket drug lifecycle. Shows drug development from discovery, animal testing, IND, clinical phases, NDA submission, labeling, inspection, and approval."
        },
        {
          "number": 7,
          "content": "Infographic: postmarketing lifecycle. Shows post-approval surveillance through FAERS, MedWatch, Sentinel, Safety First, Safe Use, labeling, and communications."
        },
        {
          "number": 8,
          "content": "Details the Safety First Initiative. It gives postmarket safety the same organizational attention as premarket review and supports actions such as REMS, labeling changes, studies, or withdrawal."
        },
        {
          "number": 9,
          "content": "Introduces Advancing Drug Safety Science. Focuses on digital tools, data sources, and methods to predict, detect, and prevent drug-related adverse events."
        },
        {
          "number": 10,
          "content": "Describes JumpStart, CDER's digital review platform. It helps reviewers assess submission data quality and identify safety/efficacy concerns more efficiently."
        },
        {
          "number": 11,
          "content": "Introduces postmarketing surveillance through MedWatch, FAERS, and Sentinel. FAERS is described as the passive adverse-event reporting system."
        },
        {
          "number": 12,
          "content": "Explains FAERS strengths and limitations. It helps identify safety signals but cannot calculate adverse-event incidence because reports are selective and underreported."
        },
        {
          "number": 13,
          "content": "Shows growth in adverse-event reports from 2004–2015. Introduces Sentinel as an active surveillance system using real-world healthcare data."
        },
        {
          "number": 14,
          "content": "Describes Sentinel's 2015–2016 milestones. Mini-Sentinel became the full Sentinel System, ARIA was integrated into FDA operations, and data partner access expanded."
        },
        {
          "number": 15,
          "content": "Introduces safety research priorities through SRIG. Lists seven priority areas, including postmarket data access, risk management, communications, product quality, predictive models, trial analysis, and biomarkers."
        },
        {
          "number": 16,
          "content": "Gives examples of active research projects. Topics include suicide risk detection, consumer reactions to labeling, computer modeling of adverse events, and safety-signal factors."
        },
        {
          "number": 17,
          "content": "Visual overview of mechanisms supporting CDER safety research. Includes FDA centers, federal agencies, academia, consortia, grants, contracts, fellowships, and CDER offices."
        },
        {
          "number": 18,
          "content": "Introduces the Division of Applied Regulatory Science. DARS develops assays, toxicity models, and computational tools to support regulatory decisions."
        },
        {
          "number": 19,
          "content": "Continues DARS examples. Covers cardiotoxicity modeling, biomarker standards, adverse-event prediction tools, and target-based safety profiling."
        },
        {
          "number": 20,
          "content": "Introduces public-private partnerships in safety science. Explains FDA's Critical Path Initiative and how PPPs address shared drug safety and development challenges."
        },
        {
          "number": 21,
          "content": "Gives examples of PPPs. Covers biomarker qualification, genetic predictors of serious adverse events, cardiac safety research, and collaborative drug-development science."
        },
        {
          "number": 22,
          "content": "Opens the operations and management section. Describes internal enhancements, opioid response, medication harm reduction, product quality, generics, compounding, and supply chain oversight."
        },
        {
          "number": 23,
          "content": "Discusses the 2015 GAO report. CDER acknowledges the need to improve tracking of postmarketing safety issues, especially PMRs/PMCs and tracked safety issues."
        },
        {
          "number": 24,
          "content": "Details CDER's response to GAO findings. Focuses on improving data accuracy for postmarketing requirements, commitments, and tracked safety issues."
        },
        {
          "number": 25,
          "content": "Introduces the opioid addiction and abuse crisis. Frames opioid misuse as a drug safety issue and lists FDA goals around safer use, abuse reduction, treatment, and overdose reversal."
        },
        {
          "number": 26,
          "content": "Describes FDA's opioid action plan. Includes expanded advisory committee use, pediatric labeling review, abuse-deterrent formulations, and stronger warning/safety information."
        },
        {
          "number": 27,
          "content": "Continues opioid actions. Covers REMS improvements, prescriber training, generic abuse-deterrent formulation guidance, and support for naloxone and treatment options."
        },
        {
          "number": 28,
          "content": "Introduces the Safe Use Initiative. Focuses on preventable medication harms and collaborative projects to reduce misuse, errors, and inappropriate prescribing."
        },
        {
          "number": 29,
          "content": "Lists Safe Use projects. Includes opioid post-surgical risk prediction, hypoglycemia risk scoring, bleeding-risk tools, stakeholder collaborations, and medication safety research."
        },
        {
          "number": 30,
          "content": "Introduces drug product quality as a safety issue. Describes manufacturing risks, shortages, and the creation of the Office of Pharmaceutical Quality."
        },
        {
          "number": 31,
          "content": "Continues product quality and generic drug oversight. Covers quality risk dashboards, lifecycle risk assessment, and surveillance of generic drug quality and equivalence."
        },
        {
          "number": 32,
          "content": "Introduces compounded drugs and supply chain security. Explains how compounding can meet patient needs but can also create serious risks when performed improperly."
        },
        {
          "number": 33,
          "content": "Continues compounding and supply chain oversight. Describes inspections, enforcement, guidance, outsourcing facilities, and drug supply chain security measures."
        },
        {
          "number": 34,
          "content": "Opens the communications section. OCOMM is presented as CDER's main public interface for drug safety information and responses to public inquiries."
        },
        {
          "number": 35,
          "content": "Covers social media and online communication tools. Includes Facebook, Twitter, podcasts, web content, Drug Trials Snapshots, and mobile outreach."
        },
        {
          "number": 36,
          "content": "Covers webinars, videos, and email updates. OCOMM used training webinars, Drug Info Rounds videos, and email bulletins to disseminate safety information."
        },
        {
          "number": 37,
          "content": "Explains Drug Safety Communications and Safety Labeling Changes. DSCs provide actionable safety updates; SLCs update labels when postmarket risks emerge."
        },
        {
          "number": 38,
          "content": "Details the new SLC database/platform. Real-time searchable labeling updates are intended to improve downstream distribution to healthcare systems and information vendors."
        },
        {
          "number": 39,
          "content": "Covers risk communication research. OCOMM studies how audiences understand, recall, and act on drug safety information, including opioid and DSC messaging."
        },
        {
          "number": 40,
          "content": "Closing page. Summarizes CDER's safety system as adaptive, multidisciplinary, technology-enabled, and designed to support both safety oversight and therapeutic innovation."
        }
      ]
    },
    {
      "id": "EndurantJr_26R1_ProductInfo",
      "pages": [
        {
          "number": 1,
          "content": "Product overview for Endurant Junior®, a fictional nutritionally complete pediatric formula for children aged 1+ who may need supplemental or sole-source nutrition. Highlights plant-based protein, balanced macro/micronutrients, fiber, and use under healthcare supervision."
        },
        {
          "number": 2,
          "content": "Describes nutritional composition: carbohydrates for energy, plant-derived protein for growth, lipids for calories and vitamin absorption, plus vitamins, minerals, B-complex, and fiber to support development and digestive tolerance."
        },
        {
          "number": 3,
          "content": "Explains the benefits of each nutrient group. Covers carbohydrates for energy/brain growth, plant protein for tissue growth, lipids for essential fatty acids and caloric density, fiber for GI health, and vitamins for immunity, bones, antioxidant protection, and metabolism."
        },
        {
          "number": 4,
          "content": "Positions the product in the context of enteral nutrition and real-food/plant-based formula trends. Uses four headline statistics about GI symptoms, blenderized tube feeding, plant-based food interest, and household food allergies."
        },
        {
          "number": 5,
          "content": "Provides clinical considerations for nutritional management. Emphasizes patient assessment, individualized supplementation, monitoring of growth/diet/GI tolerance/hydration, and avoiding use in patients allergic to components."
        }
      ]
    },
    {
      "id": "EndurantJr_26R1_RWE",
      "pages": [
        {
          "number": 1,
          "content": "Introduces real-world pediatric care settings where children may need specialized nutritional support due to feeding difficulties, chronic illness, allergies, GI disorders, or increased metabolic demands. Lists potential use environments: outpatient clinics, inpatient units, home enteral nutrition, and long-term care."
        },
        {
          "number": 2,
          "content": "Patient Case 1: 9-year-old in an outpatient clinic with reduced appetite and inadequate intake. Endurant Junior is used between meals; observed outcomes show improved caloric intake, protein intake, and meal consistency."
        },
        {
          "number": 3,
          "content": "Patient Case 2: 18-month-old inpatient recovering from a condition with increased metabolic demands. Endurant Junior is added to support caloric/nutrient intake; observed outcomes show improved intake and regularized meal consistency during hospital care."
        },
        {
          "number": 4,
          "content": "Patient Case 3: 5-year-old in a home enteral nutrition program needing long-term supplementation. Endurant Junior is incorporated under healthcare supervision; observed outcomes show more consistent nutrient intake and improved caloric/protein intake."
        }
      ]
    },
    {
      "id": "DummyPresentation",
      "slides": [
        {
          "id": "slide01",
          "content": "Cover page. Entry point of the presentation introducing the main topic and navigation elements."
        },
        {
          "id": "slide02",
          "content": "Study design. Presents the methodology, structure, and approach of the clinical study or research framework."
        },
        {
          "id": "slide03",
          "content": "Efficacy page. Displays key efficacy data, outcomes, and results demonstrating the product's effectiveness."
        }
      ]
    }
  ]
}