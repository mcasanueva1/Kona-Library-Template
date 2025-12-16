let com_idc_params = {
  "project": {
    "name": "",
    "version": ""
  },
  "options": {
    "debugMode": {
      "active": true,
      "showInspector": false,
    },
    "browserMode": {
        "active": true,
        "simulate": {
            "active": false,
            "mode": "",
            "objects": {
              "Account": {
                "ID": "0010Y00000B6V0IQAV",
                "Salutation": "Dr.",
                "Name": "John Smith",
                "Profile__c": "Progressive",
              },
              "User": {
                  "ID": "0050Y000000Yf7EQAS",
                  "Name": "Peter Sales Rep",
              }
            }
        }
    },
    "mandatoryPopUp": {
      "active": false,
      "element": {
        "id": ""
      }
    },
    "mediaDetection": {
      "active": false,
      "watermark": false,
      "mediaPopup": false,
      "reloadAfterAccountSelectionAlert": false,
      "labels": {
        "reloadAfterAccountSelectionMessage": "The slide will be reloaded to reflect the selected account",
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
        "callflows": {
          "active": false,
          "flows": [
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
    "linkOverride": {
      "active": false,
      "global": "",
    },
    "alternateModals": [
    ],
    "btnFeedback": {
      "sound": false,
      "visual": true
    },
    "adjustImagesPath": "common"
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
        "buttonViewState": "on",
        "bringToFront": {
          "dualButtonForActiveModal": {
            "active": true
          },
          "referencesButton": {
            "active": true,
            "excludeModals": [
              "sitemap",
              "preCall",
              "resources",
              "emailCart",
              "quickLinks",
            ]
          },
          "sitemapButton": {
            "active": false,
            "buttoId": null,
            "excludeModals": []
          }
        }
      },
      "dynamicPresentation": {
        "contentTargeting": {
          "mainSlide": {
            "buttonViewState": "off",
            "centerGroup": [
            ],
            "rightGroup": [
            ],
          },
          "standaloneModal": {
            "buttonViewState": "on",
            "appendCloseButtonToRightGroup": true,
            "centerGroup": [
            ],
            "rightGroup": [
            ],
          },
          "regularModals": {
            "buttonViewState": "on",
            "bringToFront": {
              "dualButtonForActiveModal": {
                "active": true
              },
              "referencesButton": {
                "active": true,
                "excludeModals": []
              },
              "sitemapButton": {
                "active": false,
                "buttoId": null,
                "excludeModals": []
              }
            }
          }
        },
        "myPresentations": {
          "mainSlide": {
            "buttonViewState": "off",
            "centerGroup": [
            ],
            "rightGroup": [
            ],
          },
          "standaloneModal": {
            "buttonViewState": "on",
            "appendCloseButtonToRightGroup": true,
            "centerGroup": [
            ],
            "rightGroup": [
            ],
          },
          "regularModals": {
            "buttonViewState": "on",
            "bringToFront": {
              "dualButtonForActiveModal": {
                "active": true
              },
              "referencesButton": {
                "active": true,
                "excludeModals": []
              },
              "sitemapButton": {
                "active": false,
                "buttoId": null,
                "excludeModals": []
              }
            }
          }
        },
        "callflows": {
          "mainSlide": {
            "buttonViewState": "off",
            "centerGroup": [
            ],
            "rightGroup": [
            ],
          },
          "standaloneModal": {
            "buttonViewState": "on",
            "appendCloseButtonToRightGroup": true,
            "centerGroup": [
            ],
            "rightGroup": [
            ],
          },
          "regularModals": {
            "buttonViewState": "on",
            "bringToFront": {
              "dualButtonForActiveModal": {
                "active": true
              },
              "referencesButton": {
                "active": true,
                "excludeModals": []
              },
              "sitemapButton": {
                "active": false,
                "buttoId": null,
                "excludeModals": []
              }
            }
          }
        },
        "externalFunction": {
          "mainSlide": {
            "buttonViewState": "off",
            "centerGroup": [
            ],
            "rightGroup": [
            ],
          },
          "standaloneModal": {
            "buttonViewState": "on",
            "appendCloseButtonToRightGroup": true,
            "centerGroup": [
            ],
            "rightGroup": [
            ],
          },
          "regularModals": {
            "buttonViewState": "on",
            "bringToFront": {
              "dualButtonForActiveModal": {
                "active": true
              },
              "referencesButton": {
                "active": true,
                "excludeModals": []
              },
              "sitemapButton": {
                "active": false,
                "buttoId": null,
                "excludeModals": []
              }
            }
          }
        }
      }
    },
    "clickstreamTracking": {
      "active": true,
    }
  },
  "emailCart": {
    "active": false,
    "options": {
      "showItemsStatus": false
    },
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
          "url": "https://vv-agency-idc.veevavault.com"
        },
        "release": {
          "url": null
        },
    },
    "templates": [],
    "fragments": [],
    "labels": {
      "sent_1_time": "Sent 1 time",
      "sent_n_times": "Sent ##count## times",
      "not_sent": "Not sent",
      "opened": "Opened",
      "not_opened": "Not opened",
      "not_available": "Not available",
    }
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
    "options": {
      "minRows": {
        "previousInteractions": 8,
        "emails": 7
      },
      "groupViewsForSameSlide": true,
      "considerSavedCalls": false,
      "considerCallsWithOtherPresentations": false,
      "considerEmailsWithOtherTemplates": false,
    },
    "testModel": {
      "calls": {
        "min": 1,
        "max": 6,
      },
      "emails": {
        "min": 1,
        "max": 6,
      },
    },
    "components": {
      "openButton": {
        "id": "",
      },
      "modal": {
        "id": "",
      },
      "tab": {
        "id": "interactionSummaryTab",
      },
    },
    "fields": {
      "Call2_vod__c": [
        "ID",
        "Call_Channel_vod__c",
        "Call_Datetime_vod__c",
        "Status_vod__c"
      ],
      "Call2_Key_Message_vod__c": [
        "ID",
        "Call2_vod__c",
        "Call_Date_vod__c",
        "Start_Time_vod__c",
        "Key_Message_vod__c",
        "Duration_vod__c",
        "Reaction_vod__c",
        "Display_Order_vod__c",
        "Key_Message_Name_vod__c",
        "Clm_Presentation_Name_vod__c"
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
        "Status_vod__c",
      ],
      "Email_Activity_vod__c": [
        "ID",
        "Sent_Email_vod__c",
        "Approved_Document_vod__c",
        "Vault_Doc_ID_vod__c",
        "Vault_Doc_Name_vod__c",
        "Vault_Document_Number_vod__c",
        "Activity_DateTime_vod__c",
        "Event_type_vod__c"
      ]
    },
    "nonEmailCartItems": {
      "templates": [],
    },
    "labels": {
      "thisPresentation": "This Presentation",
      "interactionSummary_title1": "What has been going on with ",
      "interactionSummary_title2": "",
      "summary_Interactions_noData": "<strong>No previous interactions</strong> with this IVA or related materials/RTEs",
      "summary_Interactions_oneInteration": "<strong>One interaction (||date||)</strong> recorded with this IVA or related materials/RTEs",
      "summary_Interactions_multipleInterations": "<strong>Multiple interactions</strong> recorded with this IVA or related materials/RTEs, most recently on ||date||",
      "summary_Slides_noData": "<strong>No activity data</strong> recorded for this IVA",
      "summary_Slides_oneSlide": "<strong>One slide</strong> has been discussed on ||date||",
      "summary_Slides_multipleSlides": "<strong>Several slides</strong> been discussed, most recently on ||date||",
      "summary_Slides_nextBestContent": "Next Best Content is available for the next call",
      "summary_Email_noData": "<strong>No emails were sent</strong> from this IVA",
      "summary_Email_oneEmail": "<strong>One email sent</strong> on ||date|| (||status||)",
      "summary_Email_multipleEmails": "<strong>Multiple emails sent</strong>, most recently on ||date|| (||status||)",
      "summary_Email_status_opened": "opened",
      "summary_Email_status_notOpened": "not opened",
      "summary_RelatedCLM_noData": "<strong>No activity data</strong> recorded for materials linking from this IVA",
      "summary_RelatedCLM_oneView": "<strong>One related material (||material||)</strong> was discussed on ||date||",
      "summary_RelatedCLM_multipleViews": "<strong>Multiple related materials</strong> were discussed, most recently on ||date|| (||material||)",
      "tabBtn_previousInteractions": "Previous Interactions",
      "tabBtn_slides": "Slides",
      "tabBtn_emails": "Emails",
      "tabBtn_relatedCLM": "Quick Links",
      "prevInt_filter_all": "All",
      "prevInt_filter_approvedEmail": "Approved Email",
      "prevInt_filter_inPerson": "In Person",
      "prevInt_filter_video": "Video Call",
      "prevInt_value_inPerson": "In Person",
      "prevInt_value_video": "Video Call",
      "prevInt_value_approvedEmail": "Approved Email",
      "prevInt_value_saved": "Saved",
      "prevInt_value_submitted": "Submitted",
      "prevInt_value_planned": "Planned",      
      "prevInt_value_opened": "Opened",
      "prevInt_value_notOpened": "Not Opened",
      "prevInt_label_fragmentName": "Fragment Name",
      "prevInt_label_linksTo": "Links To",
      "prevInt_label_timesClicked": "Times Clicked",
      "prevInt_value_IVA": "IVA",
      "prevInt_label_displayOrder": "Display",
      "prevInt_label_slideDescription": "Slide Description",
      "prevInt_label_reaction": "Reaction",
      "prevInt_label_duration": "Duration",
      "slides_filter_all": "All",
      "slides_filter_discussed": "Discussed",
      "slides_filter_notDiscussed": "Not Discussed",
      "slides_filter_recommended": "Next Best Content",
      "slides_sort_default": "Sort",
      "slides_sort_mostRecentlyDiscussed": "Most Recently Discussed",
      "slides_sort_moreTimeSpentOn": "More Time Spent On",
      "slides_launch_nextBestContent": "Start recommended flow",
      "slides_label_lastView": "Last View",
      "slides_label_reaction": "Reaction",
      "slides_label_duration": "Duration",
      "slides_label_totalViews": "Total Views",
      "emails_sort_default": "Sort",
      "emails_sort_mostRecentlySent": "Most Recently Sent",
      "emails_sort_moreOpens": "Higher Open Rate",
      "emails_sort_moreClicks": "Higher Click Through Rate",
      "emails_label_expandAll": "Expand All",
      "emails_label_collapseAll": "Collapse All",
      "emails_label_lastTime": "Last Time",
      "emails_label_allTimes": "All Times",
      "emails_label_date": "Date",
      "emails_label_sent": "Sent",
      "emails_label_opened": "Opened",
      "emails_label_clicked": "Clicked",
      "emails_value_fragment": "Fragment",
      "emails_value_yes": "Yes",
      "emails_value_no": "No",
      "emails_value_sent": "Sent",
      "emails_value_notSent": "Not Sent",
      "relatedCLM_filter_all": "All",
      "relatedCLM_filter_discussed": "Discussed",
      "relatedCLM_filter_notDiscussed": "Not Discussed",
      "relatedCLM_sort_default": "Sort",
      "relatedCLM_sort_mostRecentlyDiscussed": "Most Recently Discussed",
      "relatedCLM_label_lastView": "Last View",
      "relatedCLM_label_totalViews": "Total Views",
    },
    "visibility": {
      "coverSummary": false,
      "tabs": {
        "previousInteractions": true,
        "slides": true,
        "emails": true,
        "relatedCLM": false,
      },
      "fields": {
        "previousInteractions": {
          "status": true,
          "pres_reaction": true,
          "pres_duration": true,
          "email_timesClicked": true
        },
        "slides": {
          "lastView": true,
          "reaction": true,
          "duration": true,
          "totalViews": true
        },
        "emails": {
          "lastTimeSent_date": true,
          "lastTimeSent_open": true,
          "lastTimeSent_click": true,
          "allTimesSent_sent": true,
          "allTimesSent_open": true,
          "allTimesSent_click": true
        },
        "relatedCLM": {
          "lastView": true,
          "totalViews": true
        },
      }
    },
    "nextBestContent": {
      "clm": {
        "active": false,
        "source": {
          "call": "",
          "browser": ""
        },
        "dynamicCallflowName": ""
      },
    }
  },
  "relatedCLM": [],
  "websites": [],
  "schemaRelatedVars": {
    "activeSchema": "iDC",
    "vars": []
  },
  "quickLinks": {
    "options": {
      "showDetails": false,
    },
    "labels": {
      "january_short": "Jan",
      "february_short": "Feb",
      "march_short": "Mar",
      "april_short": "Apr",
      "may_short": "May",
      "june_short": "Jun",
      "july_short": "Jul",
      "august_short": "Aug",
      "september_short": "Sep",
      "october_short": "Oct",
      "november_short": "Nov",
      "december_short": "Dec",
      "discussed_1_time": "Discussed 1 time",
      "discussed_n_times": "Discussed ##count## times",
      "not_discussed": "Not discussed yet",
      "last_discussed": "##shortMonth## ##day##, ##year##",
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
      }
    },
    "relatedCLM": {
      "id": "",
      "vaultExternalID": {
        "presentation": "", 
        "keyMessage": "", 
      },
    },
    "website": {
      "id": "",
      "url": ""
    },
    "schemaRelatedVar": {
      "token": "{{token}}",
      "value": {
        "iDC": "",
        "Client1": "",
        "Client2": ""
      }
    },
  }
}