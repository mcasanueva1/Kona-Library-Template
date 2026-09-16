const com_idc_clm_metadata = {
  "slideContents": [],
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
      "thumb": "quickLinks.png",
      action: function() {
        relatedCLMV2.open();
      }
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
  "relatedCLM": []
}