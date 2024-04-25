let com_idc_params = {
  "project": {
    "name": "",
    "version": ""
  },
  "options": {
    "debugMode": {
      "active": true,
      "showInspector": true,
    },
    "browserMode": {
        "active": true,
        "simulate": {
            "active": false,
            "mode": "",
            "objects": {
            }
        }
    },
    "mandatoryPopUp": {
      "active": false,
      "element": {
        "id": ""
      }
    },
    "dynamicPresentation": {
      "source": {
        "contentTargeting": {
          "active": false,
          "type": "custom-field",
          "object": "TSF_vod__c",
          "field": "ContentTargeting__c",
          "menu": {
            "standard": {
              "id": "mainMenu"
            },
            "dynamic": {
              "mode": "auto",
              "functionName": ""
            }
          },
          "nonWorkingLinkPopUp": {
            "active": true
          },
          "standaloneModal": {
            "treatStandaloneModalsAsMainSlides": true
          }
        },
        "myPresentations": {
          "active": false,
          "menu": {
            "standard": {
              "id": "mainMenu"
            },
            "dynamic": {
              "mode": "auto",
              "functionName": ""
            }
          },
          "nonWorkingLinkPopUp": {
            "active": true
          },
          "standaloneModal": {
            "treatStandaloneModalsAsMainSlides": true
          }
        },
        "externalFunction": {
          "active": false,
          "functionName": "setProfile",
          "menu": {
            "standard": {
              "id": "mainMenu"
            },
            "dynamic": {
              "mode": "custom",
              "functionName": "setDynamicMenu"
            }
          },
          "nonWorkingLinkPopUp": {
            "active": true
          },
          "standaloneModal": {
            "treatStandaloneModalsAsMainSlides": true
          }
        },
        "hardcodedProfiles": {
          "active": false,
          "profiles": [
          ],
          "default": "",
          "menu": {
            "standard": {
              "id": "mainMenu"
            },
            "dynamic": {
              "mode": "auto",
              "functionName": ""
            }
          },
          "nonWorkingLinkPopUp": {
            "active": true
          },
          "standaloneModal": {
            "treatStandaloneModalsAsMainSlides": true
          }
        }
      },
      "precedence": ["myPresentations", "customField", "hardcodedProfiles", "externalFunction"],
    },
  },
  "commonHTML": {
    "active": true,
    "elements": [
    ]
  },
  "slides": [
  ],
  "standaloneModalGroups": {
    "active": false,
    "indexModal": {
      "id": null,
      "openButton": null,
    },
    "groups": [],
  },
  "utilitiesMenu": {
    "active": false,
    "sets": {
      "mainSlide": {
        "buttonViewState": "off",
        "centerGroup": [],
        "rightGroup": [],
      },
      "standaloneModal": {
        "buttonViewState": "on",
        "appendCloseButtonToRightGroup": true,
        "centerGroup": [],
        "rightGroup": [],
      },
      "regularModals": {
        "bringToFront": {
          "dualButtonForActiveModal": {
            "active": true
          },
          "referencesButton": {
            "active": true,
            "excludeModals": []
          }
        }
      }
    },
  },
  "emailCart": {
    "active": false,
    "components": {
      "openButton": {
        "id": "",
      },
      "modal": {
        "id": ""
      },
      "emailButton": {
        "id": "",
      },
    },
    "vaultInstance": {
        "development": {
          "url": ""
        },
        "release": {
          "url": null
        },
    },
    "templates": [],
    "fragments": []
  },
  "references": {
    "active": false,
    "components": {
      "openButton": {
        "id": "",
      },
      "modal": {
        "id": ""
      },
    },
    "content": {
      "landscape": null,
      "portrait": null
    }
  },
  "interactionSummary": {
    "active": false,
    "fields": {
      "Call2_vod__c": [
        "ID",
        "Call_Channel_vod__c",
        "Call_Date_vod__c",
        "Status_vod__c"
      ],
      "Call2_Key_Message_vod__c": [
        "ID",
        "Call2_vod__c", 
        "Call_Date_vod__c", 
        "Key_Message_vod__c", 
        "Duration_vod__c", 
        "Reaction_vod__c", 
        "Display_Order_vod__c"
      ],
      "Sent_Email_vod__c": [    
        "ID",
        "Email_Fragments_vod__c",
        "Approved_Email_Template_vod__c",
        "Email_Sent_Date_vod__c",
        "Opened_vod__c",
        "Open_Count_vod__c",
        "Last_Open_Date_vod__c",
        "Click_Count_vod__c",
        "Last_Activity_Date_vod__c",
        "Approved_Document_Views_vod__c",
        "Account_Email_vod__c",
        "Status_vod__c",
        "Failure_Msg_vod__c",
      ],
      "Email_Activity_vod__c": [
        "ID",
        "Sent_Email_vod__c",
        "Approved_Document_vod__c",
        "Vault_Doc_ID_vod__c",
        "Vault_Doc_Name_vod__c",
        "Vault_Document_Number_vod__c",
        "Event_type_vod__c",
        "Activity_DateTime_vod__c"
      ]
    },
    "nonEmailCartItems": {
      "templates": [
        {
          "id": null,
          "title": null,
          "thumb": null,
          "vaultId": {
            "development": null,
            "release": null
          },
          "fragments": [
            {
              "id": null,
              "title": null,
              "thumb": null,
              "vaultId": {
                "development": null,
                "release": null
              }
            }
          ]
        },
      ],
    }
  },
  "templates": {
    "slide": {
      "id": "",
      "description": "",
      "pdf": "pdf.pdf",
      "browser": {
        "folder": ""
      },
      "player": {
        "zipName": ""
      },
      "standaloneModal": {
        "id": ""
      },
      "references": {
        "default": {
          "landscape": null,
          "portrait": null
        },
        "references2": {
          "landscape": null,
          "portrait": null
        }
      }
    },
  }
}