"use strict";

if (com == null) var com = {};
if (com.idc == undefined) com.idc = {};

com.idc.clm = {
  varsTemplate: {
    project: {
      name: null,
      version: null,
      persistentDataKey: null,
      sessionDataKey: null,
    },
    session: {
      id: null,
      isNewSession: null,
      isAnActualCall: null,
    },
    screen: {
      orientation: null,
      scale: 1,
    },
    options: {
      htmlSlideId: null,
      debugMode: {
        active: null,
        showInspector: null,
      },
      browserMode: {
        active: null,
        simulate: {
          active: null,
          mode: null,
          objects: {},
        },
      },
      mandatoryPopUp: {
        active: null,
        element: {
          id: null,
        },
      },
      dynamicPresentation: {
        source: {
          contentTargeting: {
            // CONTENT TARGETING: a custom field that will contain a list of slides for the account
            active: null,
            type: null, // custom-field or dynamic-attribute
            object: null, // for custom-field, the object name (Account or TSF_vod__c)
            field: null, // for custom-field or dynamic-attribute name
            menu: {
              standard: {
                // standard menu will be hidden if a dynamic presentation is in place
                id: null,
              },
              dynamic: {
                mode: null, // auto or custom
                functionName: null, // function to manually populate the dynamic menu
              },
            },
            nonWorkingLinkPopUp: {
              active: null, //if true, will display an alert popup if the user taps on a non-working link
            },
            standaloneModal: {
              treatStandaloneModalsAsMainSlides: null,
            },
          },
          myPresentations: {
            // CUSTOM PRESENTATION: created by the rep using My Presentations
            active: null,
            menu: {
              standard: {
                // standard menu will be hidden if a dynamic presentation is in place
                id: null,
              },
              dynamic: {
                mode: null, // auto or custom
                functionName: null, // function to manually populate the dynamic menu
              },
            },
            nonWorkingLinkPopUp: {
              active: null,
            },
            standaloneModal: {
              treatStandaloneModalsAsMainSlides: null,
            },
          },
          externalFunction: {
            // EXTERNAL FUNCTION: as a source that will return a list of slides for the account
            active: null,
            functionName: null,
            menu: {
              standard: {
                // standard menu will be hidden if a dynamic presentation is in place
                id: null,
              },
              dynamic: {
                mode: null, // auto or custom
                functionName: null, // function to manually populate the dynamic menu
              },
            },
            nonWorkingLinkPopUp: {
              active: null,
            },
            standaloneModal: {
              treatStandaloneModalsAsMainSlides: null,
            },
          },
          callflows: {
            // CALLFLOWS: in config file
            active: true,
            flows: [],
            default: null, //default callflow
            menu: {
              standard: {
                // standard menu will be hidden if a dynamic presentation is in place
                id: null,
              },
              dynamic: {
                mode: null, // auto or custom
                functionName: null, // function to manually populate the dynamic menu
              },
            },
            nonWorkingLinkPopUp: {
              active: null,
            },
            standaloneModal: {
              treatStandaloneModalsAsMainSlides: null,
            },
          },
        },
        precedence: [],
        ui: {
          menu: {
            standard: {
              // standard menu will be hidden if a dynamic presentation is in place
              id: null,
            },
            dynamic: {
              forContentTargeting: {
                mode: null, // auto or custom
                functionName: null, // function to manually populate the dynamic menu
              },
              forMyPresentations: {
                mode: null,
                functionName: null,
              },
              forExternalFunction: {
                mode: null,
                functionName: null,
              },
              forCallflows: {
                mode: null,
                functionName: null,
              },
            },
          },
          nonWorkingLinkPopUp: {
            active: null,
          },
        },
      },
      linkOverride: {
        active: null,
        global: null,
      },
    },
    commonHTML: {
      active: null,
      elements: [],
    },
    slides: [
      {
        id: null,
        description: null,
        browser: {
          folder: null,
        },
        player: {
          zipName: null,
        },
        standaloneModal: {
          isStandalone: null,
          modalId: null,
        },
        pdf: {
          isPDF: null,
          pdfName: null,
        },
        references: {
          disabled: null,
          default: {
            landscape: null,
            portrait: null,
          },
        },
        doNotConsiderInMainSequence: null,
      },
    ],
    standaloneModalGroups: {
      active: null,
      indexModal: {
        id: null,
        openButton: null,
      },
      groups: [
        {
          id: null,
          slides: [],
          mandatorySequence: false,
          visibility: {
            indexButton: true,
            paginator: true,
            arrows: true,
          },
        },
      ],
    },
    utilitiesMenu: {
      active: null,
      sets: {
        mainSlide: {
          buttonViewState: null,
          centerGroup: [],
          rightGroup: [],
        },
        standaloneModal: {
          buttonViewState: null,
          appendCloseButtonToRightGroup: null,
          centerGroup: [],
          rightGroup: [],
        },
        regularModals: {
          buttonViewState: null,
          bringToFront: {
            dualButtonForActiveModal: {
              active: null,
            },
            referencesButton: {
              active: null,
              excludeModals: [],
            },
          },
        },
        dynamicPresentation: {
          contentTargeting: {
            mainSlide: {
              buttonViewState: null,
              centerGroup: [],
              rightGroup: [],
            },
            standaloneModal: {
              buttonViewState: null,
              appendCloseButtonToRightGroup: null,
              centerGroup: [],
              rightGroup: [],
            },
            regularModals: {
              buttonViewState: null,
              bringToFront: {
                dualButtonForActiveModal: {
                  active: null,
                },
                referencesButton: {
                  active: null,
                  excludeModals: [],
                },
              },
            },
          },
          myPresentations: {
            mainSlide: {
              buttonViewState: null,
              centerGroup: [],
              rightGroup: [],
            },
            standaloneModal: {
              buttonViewState: null,
              appendCloseButtonToRightGroup: null,
              centerGroup: [],
              rightGroup: [],
            },
            regularModals: {
              buttonViewState: null,
              bringToFront: {
                dualButtonForActiveModal: {
                  active: null,
                },
                referencesButton: {
                  active: null,
                  excludeModals: [],
                },
              },
            },
          },
          externalFunction: {
            mainSlide: {
              buttonViewState: null,
              centerGroup: [],
              rightGroup: [],
            },
            standaloneModal: {
              buttonViewState: null,
              appendCloseButtonToRightGroup: null,
              centerGroup: [],
              rightGroup: [],
            },
            regularModals: {
              buttonViewState: null,
              bringToFront: {
                dualButtonForActiveModal: {
                  active: null,
                },
                referencesButton: {
                  active: null,
                  excludeModals: [],
                },
              },
            },
          },
          callflows: {
            mainSlide: {
              buttonViewState: null,
              centerGroup: [],
              rightGroup: [],
            },
            standaloneModal: {
              buttonViewState: null,
              appendCloseButtonToRightGroup: null,
              centerGroup: [],
              rightGroup: [],
            },
            regularModals: {
              buttonViewState: null,
              bringToFront: {
                dualButtonForActiveModal: {
                  active: null,
                },
                referencesButton: {
                  active: null,
                  excludeModals: [],
                },
              },
            },
          },
        },
      },
    },
    navigation: {
      actualSlidesSequence: [], //to account for custom presentations, content targeting, popups
      allAvaliableSlides: [], //all slides in the presentation or dynamic presentation, including standalone modals
      currentSlide: {
        id: null,
        index: null,
        isFirst: null,
        isLast: null,
        isStandalone: null,
      },
      nextSlide: {
        id: null,
        index: null,
        isFirst: null,
        isLast: null,
      },
      prevSlide: {
        id: null,
        index: null,
        isFirst: null,
        isLast: null,
      },
      lastSlide: {
        actual: {
          //actual most recent slide in the sequence (could be standalone or PDF)
          id: null,
          index: null,
        },
        main: {
          //most recent slide in the sequence which is not a standalone or a PDF
          id: null,
          index: null,
        },
      },
      dynamicPresentation: {
        active: null,
        source: null, //contentTargeting, myPresentations, externalFunction, callflows
        callflow: null, //for callflows, active callflow name
        isMixed: null, //for myPresentations, if the presentation is mixed (slides from other CLMs)
        treatStandaloneModalsAsMainSlides: null,
      },
      overWrite: {
        nextSlide: null,
        prevSlide: null,
      },
    },
    emailCart: {
      active: null,
      mode: null,
      vaultURL: null,
      components: {
        openButton: {
          id: null,
        },
        modal: {
          id: null,
        },
        emailButton: {
          id: null,
        },
      },
      templates: [
        {
          id: null,
          title: null,
          thumb: null,
          vaultId: null,
          crmId: null,
          selected: null,
        },
      ],
      fragments: [
        {
          id: null,
          title: null,
          thumb: null,
          vaultId: null,
          crmId: null,
          selected: null,
          linksTo: null,
        },
      ],
    },
    references: {
      active: null,
      components: {
        openButton: {
          id: null,
        },
        modal: {
          id: null,
        },
      },
      content: {
        landscape: null,
        portrait: null,
      },
    },
    metadata: {
      account: {
        id: null,
        name: null,
        salutation: null,
      },
      keyMessage: {
        id: null,
        mediaFileName: null,
        disableActions: null,
        iOSResolution: null,
      },
    },
    interactionSummary: {
      active: null,
      minRows: {
        previousInteractions: null,
        emails: null,
      },
      groupViewsForSameSlide: null,
      considerDraftCalls: null,
      testModel: {
        calls: {
          min: null,
          max: null,
        },
        emails: {
          min: null,
          max: null,
        },
      },
      components: {
        openButton: {
          id: null,
        },
        modal: {
          id: null,
        },
        tab: {
          id: null,
        },
      },
      fields: {
        Call2_vod__c: [],
        Call2_Key_Message_vod__c: [],
        Sent_Email_vod__c: [],
        Email_Activity_vod__c: [],
      },
      labels: {},
      visibility: {
        tabs: {
          previousInteractions: null,
          slides: null,
          emails: null,
        },
        fields: {
          previousInteractions: {
            pres_reaction: null,
            pres_duration: null,
            email_opened: null,
            email_timesClicked: null,
          },
          slides: {
            lastView: null,
            reaction: null,
            duration: null,
            totalViews: null,
          },
          emails: {
            lastTimeSent_date: null,
            lastTimeSent_open: null,
            lastTimeSent_click: null,
            allTimesSent_sent: null,
            allTimesSent_open: null,
            allTimesSent_click: null,
          },
        },
      },
      nonEmailCartItems: {
        templates: [
          {
            id: null,
            title: null,
            thumb: null,
            vaultId: null,
            crmId: null,
            fragments: [
              {
                id: null,
                title: null,
                thumb: null,
                vaultId: null,
                crmId: null,
                linksTo: null,
              },
            ],
          },
        ],
      },
      nextBestContent: {
        clm: {
          active: null,
          source: null,
          source: {
            call: null,
            browser: null
          },
          dynamicCallflowName: null,
        },
      },
      input: {
        Call2_vod__c: [],
        Call2_Key_Message_vod__c: [],
        Sent_Email_vod__c: [],
        Email_Activity_vod__c: [],
        Next_Best_Content_CLM: [],
      },
      output: {
        ready: null,
        account: {
          id: null,
          name: null,
          salutation: null,
        },
        timeline: [
          {
            id: null, //crmId or sent email or call
            date: null,
            time: null,
            datetime: null,
            time_AMPM: null,
            type: null, //email or call
            email: {
              id: null,
              title: null,
              opens: null, //count
              clicks: null, //count
              fragments: [
                {
                  id: null,
                  title: null,
                  clicks: null, //count
                  linksTo: null,
                },
              ],
            },
            call: {
              channel: null, //face-to-face or remote
              slides: [
                {
                  id: null,
                  title: null,
                  reaction: null, //positive, neutral, negative
                  duration: null, //seconds
                },
              ],
            },
          },
        ],
        slides: [
          {
            id: null,
            title: null,
            status: null, //discussed / not discussed
            mostRecentCall: {
              date: null, //date
              reaction: null, //positive, neutral, negative
              duration: null, //seconds
            },
            overall: {
              reaction: {
                positive: null,
                neutral: null,
                negative: null,
              },
              timesDisplayed: null,
              duration: {
                total: null, //seconds
                average: null, //seconds
              },
              allCallDates: [],
            },
            nextBestContent: {
              recommended: null,
              order: null,
            },
          },
        ],
        emails: [
          {
            id: null,
            crmId: null,
            title: null,
            thumbnail: null,
            status: null, //sent / not sent
            mostRecentSent: {
              sentEmailID: null, //id
              date: null, //date
              opens: null, //clicks
              clicks: null, //count
            },
            mostRecentOpen: {
              sentEmailID: null, //id
              date: null, //date
              clicks: null, //count
            },
            overall: {
              sent: null,
              sentDates: [],
              opens: null,
              openDates: [],
              openRate: null,
              clicks: null,
              clickRate: null,
            },
            fragments: [
              {
                id: null,
                crmId: null,
                title: null,
                status: null, //sent / not sent
                mostRecentSent: {
                  sentEmailID: null, //id
                  date: null, //date
                  clicks: null, //boolean
                },
                mostRecentClick: {
                  sentEmailID: null, //id
                  date: null, //date
                  emailActivityID: null, //id
                },
                overall: {
                  sent: null,
                  sentDates: [],
                  clicks: null,
                  clickDates: [],
                  clickRate: null,
                },
              },
            ],
          },
        ],
      },
    },
  },
  persistentDataTemplate: {
    session: {
      navigationHistory: [],
      selectedCallflow: null,
      selectedEmailCartItems: [],
      selectedStandaloneGroup: null,
    },
    commonHTML: {},
    complexLinks: {
      fromSlide: null,
      toSlide: null,
      originatorType: null,
      element: {
        type: null,
        id: null,
        instance: null,
      },
    },
    backFromStandalone: [{ slideId: null, elements: [{ id: null, properties: [{ name: null, type: null, value: null }] }] }],
  },
  init: async function () {
    //instantiate vars and persistentData objects
    this.vars = JSON.parse(JSON.stringify(this.varsTemplate));
    this.persistentData = JSON.parse(JSON.stringify(this.persistentDataTemplate));

    //config read settings
    this.readSettings();

    //common html
    if (this.vars.options.htmlSlideId == "Common") {
      this.saveCommonHTMLandRedirect();
      return;
    }

    //set up inspector
    if (this.vars.options.debugMode.active) com.idc.ui.inspector.init();

    //obtain/generate session identifier
    await this.setSessionIdentifier();

    //load or reset persistent data
    this.definePersistentDataKey();
    if (this.vars.session.isNewSession) {
      await this.resetPersistentData();
    } else {
      await this.loadPersistentData();
    }

    //set slides sequence and current slide
    await this.identifyActualSlidesSequence(); //actual slides sequence for standard presentations, custom presentations, content targeting, other
    this.setCurrentSlideProperties(); //is first or last, next/prev slides or last visited slide for standalone

    //track current slide navigation
    this.addSlideToNavHistory(this.vars.navigation.currentSlide.id);

    //load email cart
    if (this.vars.emailCart.active) {
      this.loadEmailCart();
    }

    //init elements
    this.uiInit();

    //set body vars
    this.setBodyVars();

    //ended
    com.idc.util.log("Completed com.idc.clm.init()");

    //konaReady event
    com.idc.util.dispatchEvent("konaReady", {
      isNewSession: this.vars.session.isNewSession,
    });

    //post init tasks
    await this.getDataForContextObjects();

    //konaAfterContextObjects event
    com.idc.util.dispatchEvent("konaAfterContextObjects", {});

    //interaction summary
    if (this.vars.interactionSummary.active && this.vars.session.isAnActualCall) {
      this.interactionSummaryModel();
    }
  },

  /*configuration -----------------------------------------*/
  readSettings: function () {
    let vars = this.vars;
    let util = com.idc.util;

    util.log("com.idc.clm.readSettings()");

    //project name and settings
    vars.project.name = util.readSetting(com_idc_params, "project.name", "string", "ProjectName");
    vars.project.version = util.readSetting(com_idc_params, "project.version", "string", "1.0");

    //slide id from slide/index.html
    vars.options.htmlSlideId = util.getElementAttribute(document.querySelector("body"), "data-slide-id");

    //options
    vars.options.debugMode.active = util.readSetting(com_idc_params, "options.debugMode.active", "boolean", true);
    vars.options.debugMode.showInspector = util.readSetting(com_idc_params, "options.debugMode.showInspector", "boolean", true);

    vars.options.browserMode.active = util.readSetting(com_idc_params, "options.browserMode.active", "boolean", true);
    vars.options.browserMode.simulate.active = util.readSetting(com_idc_params, "options.browserMode.simulate.active", "boolean", false);
    if (vars.options.browserMode.simulate.active) {
      vars.options.browserMode.simulate.mode = util.readSetting(com_idc_params, "options.browserMode.simulate.mode", "string", "media");
      vars.options.browserMode.simulate.objects = util.readSetting(com_idc_params, "options.browserMode.simulate.objects", "object", {});
    }

    if (com_idc_params.options.linkOverride) {
      vars.options.linkOverride.active = util.readSetting(com_idc_params, "options.linkOverride.active", "boolean", true);
      if (vars.options.linkOverride.active) {
        vars.options.linkOverride.global = util.readSetting(com_idc_params, "options.linkOverride.global", "string", null);
      }
    }

    //common html
    vars.commonHTML.active = util.readSetting(com_idc_params, "commonHTML.active", "boolean", true);
    vars.commonHTML.elements = util.readSetting(com_idc_params, "commonHTML.elements", "object", []);

    //mandatory popUp
    vars.options.mandatoryPopUp.active = util.readSetting(com_idc_params, "options.mandatoryPopUp.active", "boolean", false);
    vars.options.mandatoryPopUp.element.id = util.readSetting(com_idc_params, "options.mandatoryPopUp.element.id", "string", null);

    //dynamic presentation
    {
      //content targeting source
      vars.options.dynamicPresentation.source.contentTargeting.active = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.contentTargeting.active",
        "boolean",
        false
      );
      vars.options.dynamicPresentation.source.contentTargeting.type = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.contentTargeting.type",
        "string"
      );
      vars.options.dynamicPresentation.source.contentTargeting.object = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.contentTargeting.object",
        "string"
      );
      vars.options.dynamicPresentation.source.contentTargeting.field = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.contentTargeting.field",
        "string"
      );
      //content targeting standard menu
      vars.options.dynamicPresentation.source.contentTargeting.menu.standard.id = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.contentTargeting.menu.standard.id",
        "string"
      );
      //content targeting dynamic menu
      vars.options.dynamicPresentation.source.contentTargeting.menu.dynamic.mode = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.contentTargeting.menu.dynamic.mode",
        "string"
      );
      vars.options.dynamicPresentation.source.contentTargeting.menu.dynamic.functionName = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.contentTargeting.menu.dynamic.functionName",
        "string"
      );
      //content targeting alert popup
      vars.options.dynamicPresentation.source.contentTargeting.nonWorkingLinkPopUp.active = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.contentTargeting.nonWorkingLinkPopUp.active",
        "boolean",
        false
      );
      //content targeting treat standalone as main slides
      vars.options.dynamicPresentation.source.contentTargeting.standaloneModal.treatStandaloneModalsAsMainSlides = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.contentTargeting.standaloneModal.treatStandaloneModalsAsMainSlides",
        "boolean",
        false
      );

      //my presentations source
      vars.options.dynamicPresentation.source.myPresentations.active = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.myPresentations.active",
        "boolean",
        false
      );
      //my presentations standard menu
      vars.options.dynamicPresentation.source.myPresentations.menu.standard.id = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.myPresentations.menu.standard.id",
        "string"
      );
      //my presentations dynamic menu
      vars.options.dynamicPresentation.source.myPresentations.menu.dynamic.mode = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.myPresentations.menu.dynamic.mode",
        "string"
      );
      vars.options.dynamicPresentation.source.myPresentations.menu.dynamic.functionName = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.myPresentations.menu.dynamic.functionName",
        "string"
      );
      //my presentations alert popup
      vars.options.dynamicPresentation.source.myPresentations.nonWorkingLinkPopUp.active = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.myPresentations.nonWorkingLinkPopUp.active",
        "boolean",
        false
      );
      //my presentations treat standalone as main slides
      vars.options.dynamicPresentation.source.myPresentations.standaloneModal.treatStandaloneModalsAsMainSlides = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.myPresentations.standaloneModal.treatStandaloneModalsAsMainSlides",
        "boolean",
        false
      );

      //external function source
      vars.options.dynamicPresentation.source.externalFunction.active = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.externalFunction.active",
        "boolean",
        false
      );
      vars.options.dynamicPresentation.source.externalFunction.functionName = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.externalFunction.functionName",
        "string"
      );
      //external function standard menu
      vars.options.dynamicPresentation.source.externalFunction.menu.standard.id = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.externalFunction.menu.standard.id",
        "string"
      );
      //external function dynamic menu
      vars.options.dynamicPresentation.source.externalFunction.menu.dynamic.mode = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.externalFunction.menu.dynamic.mode",
        "string"
      );
      vars.options.dynamicPresentation.source.externalFunction.menu.dynamic.functionName = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.externalFunction.menu.dynamic.functionName",
        "string"
      );
      //external function alert popup
      vars.options.dynamicPresentation.source.externalFunction.nonWorkingLinkPopUp.active = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.externalFunction.nonWorkingLinkPopUp.active",
        "boolean",
        false
      );
      //external function treat standalone as main slides
      vars.options.dynamicPresentation.source.externalFunction.standaloneModal.treatStandaloneModalsAsMainSlides = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.externalFunction.standaloneModal.treatStandaloneModalsAsMainSlides",
        "boolean",
        false
      );

      //callflows source
      vars.options.dynamicPresentation.source.callflows.active = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.callflows.active",
        "boolean",
        false
      );
      vars.options.dynamicPresentation.source.callflows.flows = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.callflows.flows",
        "object",
        []
      );
      vars.options.dynamicPresentation.source.callflows.default = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.callflows.default",
        "string"
      );
      //callflows standard menu
      vars.options.dynamicPresentation.source.callflows.menu.standard.id = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.callflows.menu.standard.id",
        "string"
      );
      //callflows dynamic menu
      vars.options.dynamicPresentation.source.callflows.menu.dynamic.mode = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.callflows.menu.dynamic.mode",
        "string"
      );
      vars.options.dynamicPresentation.source.callflows.menu.dynamic.functionName = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.callflows.menu.dynamic.functionName",
        "string"
      );
      //callflows alert popup
      vars.options.dynamicPresentation.source.callflows.nonWorkingLinkPopUp.active = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.callflows.nonWorkingLinkPopUp.active",
        "boolean",
        false
      );
      //callflows treat standalone as main slides
      vars.options.dynamicPresentation.source.callflows.standaloneModal.treatStandaloneModalsAsMainSlides = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.callflows.standaloneModal.treatStandaloneModalsAsMainSlides",
        "boolean",
        false
      );

      //precedence
      vars.options.dynamicPresentation.precedence = util.readSetting(com_idc_params, "options.dynamicPresentation.precedence", "object", []);
    }

    //slides
    const slideTemplate = vars.slides.splice(0)[0];
    vars.slides = com_idc_params.slides.map((slide) => {
      const newSlide = JSON.parse(JSON.stringify(slideTemplate));
      newSlide.id = util.readSetting(slide, "id", "string", "SlideId");
      newSlide.description = util.readSetting(slide, "description", "string", "SlideDescription");
      newSlide.browser.folder = util.readSetting(slide, "browser.folder", "string", "BrowserFolder");
      newSlide.player.zipName = util.readSetting(slide, "player.zipName", "string", "ZipName");

      //read standalone settings
      if (slide.hasOwnProperty("standaloneModal")) {
        newSlide.standaloneModal.isStandalone = true;
        newSlide.standaloneModal.modalId = util.readSetting(slide, "standaloneModal.id", "string", null);
      } else {
        newSlide.standaloneModal.isStandalone = false;
      }

      //read pdf settings
      if (slide.hasOwnProperty("pdf")) {
        newSlide.pdf.isPDF = true;
        newSlide.pdf.pdfName = util.readSetting(slide, "pdf", "string", null);
      } else {
        newSlide.pdf.isPDF = false;
      }

      //do not consider in main sequence
      newSlide.doNotConsiderInMainSequence = util.readSetting(slide, "doNotConsiderInMainSequence", "boolean", false);

      //references settings
      if (slide.hasOwnProperty("references")) {
        newSlide.references = util.readSetting(slide, "references", "object", null);
      }

      return newSlide;
    });

    //utilities menu
    if (com_idc_params.utilitiesMenu) {
      vars.utilitiesMenu.active = util.readSetting(com_idc_params, "utilitiesMenu.active", "boolean", false);

      //main slide
      vars.utilitiesMenu.sets.mainSlide.buttonViewState = util.readSetting(com_idc_params, "utilitiesMenu.sets.mainSlide.buttonViewState", "string", null);
      vars.utilitiesMenu.sets.mainSlide.centerGroup = util.readSetting(com_idc_params, "utilitiesMenu.sets.mainSlide.centerGroup", "object", []);
      vars.utilitiesMenu.sets.mainSlide.rightGroup = util.readSetting(com_idc_params, "utilitiesMenu.sets.mainSlide.rightGroup", "object", []);

      //standalone modal
      vars.utilitiesMenu.sets.standaloneModal.buttonViewState = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.standaloneModal.buttonViewState",
        "string",
        null
      );
      vars.utilitiesMenu.sets.standaloneModal.appendCloseButtonToRightGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.standaloneModal.appendCloseButtonToRightGroup",
        "boolean",
        false
      );
      vars.utilitiesMenu.sets.standaloneModal.centerGroup = util.readSetting(com_idc_params, "utilitiesMenu.sets.standaloneModal.centerGroup", "object", []);
      vars.utilitiesMenu.sets.standaloneModal.rightGroup = util.readSetting(com_idc_params, "utilitiesMenu.sets.standaloneModal.rightGroup", "object", []);

      //regular modals
      vars.utilitiesMenu.sets.regularModals.buttonViewState = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.regularModals.buttonViewState",
        "string",
        null
      );
      vars.utilitiesMenu.sets.regularModals.bringToFront.dualButtonForActiveModal.active = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.regularModals.bringToFront.dualButtonForActiveModal.active",
        "boolean",
        false
      );
      vars.utilitiesMenu.sets.regularModals.bringToFront.referencesButton.active = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.regularModals.bringToFront.referencesButton.active",
        "boolean",
        false
      );
      vars.utilitiesMenu.sets.regularModals.bringToFront.referencesButton.excludeModals = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.regularModals.bringToFront.referencesButton.excludeModals",
        "object",
        []
      );

      //dynamic presentation / contentTargeting / main slide
      vars.utilitiesMenu.sets.dynamicPresentation.contentTargeting.mainSlide.buttonViewState = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.contentTargeting.mainSlide.buttonViewState",
        "string",
        null,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.contentTargeting.mainSlide.centerGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.contentTargeting.mainSlide.centerGroup",
        "object",
        [],
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.contentTargeting.mainSlide.rightGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.contentTargeting.mainSlide.rightGroup",
        "object",
        [],
        false
      );

      //dynamic presentation / contentTargeting / standalone modal
      vars.utilitiesMenu.sets.dynamicPresentation.contentTargeting.standaloneModal.buttonViewState = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.contentTargeting.standaloneModal.buttonViewState",
        "string",
        null,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.contentTargeting.standaloneModal.appendCloseButtonToRightGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.contentTargeting.standaloneModal.appendCloseButtonToRightGroup",
        "boolean",
        false,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.contentTargeting.standaloneModal.centerGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.contentTargeting.standaloneModal.centerGroup",
        "object",
        [],
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.contentTargeting.standaloneModal.rightGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.contentTargeting.standaloneModal.rightGroup",
        "object",
        [],
        false
      );

      //dynamic presentation / contentTargeting / regular modals
      vars.utilitiesMenu.sets.dynamicPresentation.contentTargeting.regularModals.buttonViewState = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.contentTargeting.regularModals.buttonViewState",
        "string",
        null,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.contentTargeting.regularModals.bringToFront.dualButtonForActiveModal.active = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.contentTargeting.regularModals.bringToFront.dualButtonForActiveModal.active",
        "boolean",
        false,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.contentTargeting.regularModals.bringToFront.referencesButton.active = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.contentTargeting.regularModals.bringToFront.referencesButton.active",
        "boolean",
        false,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.contentTargeting.regularModals.bringToFront.referencesButton.excludeModals = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.contentTargeting.regularModals.bringToFront.referencesButton.excludeModals",
        "object",
        [],
        false
      );

      //dynamic presentation / myPresentations / main slide
      vars.utilitiesMenu.sets.dynamicPresentation.myPresentations.mainSlide.buttonViewState = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.myPresentations.mainSlide.buttonViewState",
        "string",
        null,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.myPresentations.mainSlide.centerGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.myPresentations.mainSlide.centerGroup",
        "object",
        [],
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.myPresentations.mainSlide.rightGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.myPresentations.mainSlide.rightGroup",
        "object",
        [],
        false
      );

      //dynamic presentation / myPresentations / standalone modal
      vars.utilitiesMenu.sets.dynamicPresentation.myPresentations.standaloneModal.buttonViewState = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.myPresentations.standaloneModal.buttonViewState",
        "string",
        null,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.myPresentations.standaloneModal.appendCloseButtonToRightGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.myPresentations.standaloneModal.appendCloseButtonToRightGroup",
        "boolean",
        false,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.myPresentations.standaloneModal.centerGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.myPresentations.standaloneModal.centerGroup",
        "object",
        [],
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.myPresentations.standaloneModal.rightGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.myPresentations.standaloneModal.rightGroup",
        "object",
        [],
        false
      );

      //dynamic presentation / myPresentations / regular modals
      vars.utilitiesMenu.sets.dynamicPresentation.myPresentations.regularModals.buttonViewState = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.myPresentations.regularModals.buttonViewState",
        "string",
        null,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.myPresentations.regularModals.bringToFront.dualButtonForActiveModal.active = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.myPresentations.regularModals.bringToFront.dualButtonForActiveModal.active",
        "boolean",
        false,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.myPresentations.regularModals.bringToFront.referencesButton.active = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.myPresentations.regularModals.bringToFront.referencesButton.active",
        "boolean",
        false,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.myPresentations.regularModals.bringToFront.referencesButton.excludeModals = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.myPresentations.regularModals.bringToFront.referencesButton.excludeModals",
        "object",
        [],
        false
      );

      //dynamic presentation / externalFunction / main slide
      vars.utilitiesMenu.sets.dynamicPresentation.externalFunction.mainSlide.buttonViewState = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.externalFunction.mainSlide.buttonViewState",
        "string",
        null,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.externalFunction.mainSlide.centerGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.externalFunction.mainSlide.centerGroup",
        "object",
        [],
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.externalFunction.mainSlide.rightGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.externalFunction.mainSlide.rightGroup",
        "object",
        [],
        false
      );

      //dynamic presentation / externalFunction / standalone modal
      vars.utilitiesMenu.sets.dynamicPresentation.externalFunction.standaloneModal.buttonViewState = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.externalFunction.standaloneModal.buttonViewState",
        "string",
        null,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.externalFunction.standaloneModal.appendCloseButtonToRightGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.externalFunction.standaloneModal.appendCloseButtonToRightGroup",
        "boolean",
        false,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.externalFunction.standaloneModal.centerGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.externalFunction.standaloneModal.centerGroup",
        "object",
        [],
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.externalFunction.standaloneModal.rightGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.externalFunction.standaloneModal.rightGroup",
        "object",
        [],
        false
      );

      //dynamic presentation / externalFunction / regular modals
      vars.utilitiesMenu.sets.dynamicPresentation.externalFunction.regularModals.buttonViewState = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.externalFunction.regularModals.buttonViewState",
        "string",
        null,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.externalFunction.regularModals.bringToFront.dualButtonForActiveModal.active = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.externalFunction.regularModals.bringToFront.dualButtonForActiveModal.active",
        "boolean",
        false,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.externalFunction.regularModals.bringToFront.referencesButton.active = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.externalFunction.regularModals.bringToFront.referencesButton.active",
        "boolean",
        false,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.externalFunction.regularModals.bringToFront.referencesButton.excludeModals = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.externalFunction.regularModals.bringToFront.referencesButton.excludeModals",
        "object",
        [],
        false
      );

      //dynamic presentation / callflows / main slide
      vars.utilitiesMenu.sets.dynamicPresentation.callflows.mainSlide.buttonViewState = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.callflows.mainSlide.buttonViewState",
        "string",
        null,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.callflows.mainSlide.centerGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.callflows.mainSlide.centerGroup",
        "object",
        [],
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.callflows.mainSlide.rightGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.callflows.mainSlide.rightGroup",
        "object",
        [],
        false
      );

      //dynamic presentation / callflows / standalone modal
      vars.utilitiesMenu.sets.dynamicPresentation.callflows.standaloneModal.buttonViewState = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.callflows.standaloneModal.buttonViewState",
        "string",
        null,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.callflows.standaloneModal.appendCloseButtonToRightGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.callflows.standaloneModal.appendCloseButtonToRightGroup",
        "boolean",
        false,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.callflows.standaloneModal.centerGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.callflows.standaloneModal.centerGroup",
        "object",
        [],
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.callflows.standaloneModal.rightGroup = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.callflows.standaloneModal.rightGroup",
        "object",
        [],
        false
      );

      //dynamic presentation / callflows / regular modals
      vars.utilitiesMenu.sets.dynamicPresentation.callflows.regularModals.buttonViewState = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.callflows.regularModals.buttonViewState",
        "string",
        null,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.callflows.regularModals.bringToFront.dualButtonForActiveModal.active = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.callflows.regularModals.bringToFront.dualButtonForActiveModal.active",
        "boolean",
        false,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.callflows.regularModals.bringToFront.referencesButton.active = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.callflows.regularModals.bringToFront.referencesButton.active",
        "boolean",
        false,
        false
      );
      vars.utilitiesMenu.sets.dynamicPresentation.callflows.regularModals.bringToFront.referencesButton.excludeModals = util.readSetting(
        com_idc_params,
        "utilitiesMenu.sets.dynamicPresentation.callflows.regularModals.bringToFront.referencesButton.excludeModals",
        "object",
        [],
        false
      );
    }

    //standalone modal groups
    if (com_idc_params.standaloneModalGroups) {
      vars.standaloneModalGroups.active = util.readSetting(com_idc_params, "standaloneModalGroups.active", "boolean", false);

      const standaloneModalGroupTemplate = vars.standaloneModalGroups.groups.splice(0)[0];
      vars.standaloneModalGroups.groups = com_idc_params.standaloneModalGroups.groups.map((group) => {
        const newGroup = JSON.parse(JSON.stringify(standaloneModalGroupTemplate));
        newGroup.id = util.readSetting(group, "id", "string", null);
        newGroup.slides = util.readSetting(group, "slides", "object", []);

        newGroup.mandatorySequence = util.readSetting(group, "mandatorySequence", "boolean", false);
        newGroup.visibility.indexButton = util.readSetting(group, "visibility.indexButton", "boolean", true);
        newGroup.visibility.paginator = util.readSetting(group, "visibility.paginator", "boolean", true);
        newGroup.visibility.arrows = util.readSetting(group, "visibility.arrows", "boolean", true);

        return newGroup;
      });

      //index modal
      vars.standaloneModalGroups.indexModal.id = util.readSetting(com_idc_params.standaloneModalGroups, "indexModal.id", "string", null);
      vars.standaloneModalGroups.indexModal.openButton = util.readSetting(com_idc_params.standaloneModalGroups, "indexModal.openButton", "string", null);
    }

    //email cart
    if (com_idc_params.emailCart) {
      //selected vault instance (development or release)
      let selectedVault = com_idc_params.emailCart.vaultInstance.development.selected
        ? "development"
        : com_idc_params.emailCart.vaultInstance.release.selected
        ? "release"
        : "development";

      //active
      vars.emailCart.active = util.readSetting(com_idc_params, "emailCart.active", "boolean", false);

      //vault url
      vars.emailCart.vaultURL = util.readSetting(com_idc_params, `emailCart.vaultInstance.${selectedVault}.url`, "string", null);

      //components
      vars.emailCart.components.openButton.id = util.readSetting(com_idc_params, "emailCart.components.openButton.id", "string", null);
      vars.emailCart.components.modal.id = util.readSetting(com_idc_params, "emailCart.components.modal.id", "string", null);
      vars.emailCart.components.emailButton.id = util.readSetting(com_idc_params, "emailCart.components.emailButton.id", "string", null);

      //templates
      const template = vars.emailCart.templates.splice(0)[0];
      vars.emailCart.templates = com_idc_params.emailCart.templates.map((item) => {
        const newTemplate = JSON.parse(JSON.stringify(template));
        newTemplate.id = util.readSetting(item, "id", "string", null);
        newTemplate.title = util.readSetting(item, "title", "string", null);
        newTemplate.thumb = util.readSetting(item, "thumb", "string", null);
        newTemplate.vaultId = util.readSetting(item, `vaultId.${selectedVault}`, "string", null);

        return newTemplate;
      });

      //fragments
      const fragment = vars.emailCart.fragments.splice(0)[0];
      vars.emailCart.fragments = com_idc_params.emailCart.fragments.map((item) => {
        const newFragment = JSON.parse(JSON.stringify(fragment));
        newFragment.id = util.readSetting(item, "id", "string", null);
        newFragment.title = util.readSetting(item, "title", "string", null);
        newFragment.thumb = util.readSetting(item, "thumb", "string", null);
        newFragment.linksTo = util.readSetting(item, "linksTo", "string", null);
        newFragment.vaultId = util.readSetting(item, `vaultId.${selectedVault}`, "string", null);

        return newFragment;
      });

      //mode
      if (vars.emailCart.fragments.length == 0 || vars.emailCart.templates.length > 1) {
        vars.emailCart.mode = "templates"; //if no fragments, or more than one template, use templates
      } else {
        vars.emailCart.mode = "fragments"; //if one template and one or more fragments, use fragments
      }
    }

    //references modal
    if (com_idc_params.references) {
      //active
      vars.references.active = util.readSetting(com_idc_params, "references.active", "boolean", false);

      //open button and modal
      vars.references.components.openButton.id = util.readSetting(com_idc_params, "references.components.openButton.id", "string", null);
      vars.references.components.modal.id = util.readSetting(com_idc_params, "references.components.modal.id", "string", null);

      //all references content
      vars.references.content.landscape = util.readSetting(com_idc_params, "references.content.landscape", "string", null);
      vars.references.content.portrait = util.readSetting(com_idc_params, "references.content.portrait", "string", null);
    }

    //interaction summary
    if (com_idc_params.interactionSummary) {
      vars.interactionSummary.active = util.readSetting(com_idc_params, "interactionSummary.active", "boolean", false);

      //min rows for previous interactions
      vars.interactionSummary.minRows.previousInteractions = util.readSetting(com_idc_params, "interactionSummary.minRows.previousInteractions", "number", 1);

      //min rows for emails
      vars.interactionSummary.minRows.emails = util.readSetting(com_idc_params, "interactionSummary.minRows.emails", "number", 1);

      //group views for same slide
      vars.interactionSummary.groupViewsForSameSlide = util.readSetting(com_idc_params, "interactionSummary.groupViewsForSameSlide", "boolean", null);

      //consider draft calls (no need for Status_vod__c == "Approved_vod")
      vars.interactionSummary.considerDraftCalls = util.readSetting(com_idc_params, "interactionSummary.considerDraftCalls", "boolean", false);

      //components
      vars.interactionSummary.components.openButton.id = util.readSetting(com_idc_params, "interactionSummary.components.openButton.id", "string", null);
      vars.interactionSummary.components.modal.id = util.readSetting(com_idc_params, "interactionSummary.components.modal.id", "string", null);
      vars.interactionSummary.components.tab.id = util.readSetting(com_idc_params, "interactionSummary.components.tab.id", "string", null);

      //labels
      vars.interactionSummary.labels = util.readSetting(com_idc_params, "interactionSummary.labels", "object", null);

      //test model
      vars.interactionSummary.testModel.calls.min = util.readSetting(com_idc_params, "interactionSummary.testModel.calls.min", "number", 1);
      vars.interactionSummary.testModel.calls.max = util.readSetting(com_idc_params, "interactionSummary.testModel.calls.max", "number", 5);
      vars.interactionSummary.testModel.emails.min = util.readSetting(com_idc_params, "interactionSummary.testModel.emails.min", "number", 1);
      vars.interactionSummary.testModel.emails.max = util.readSetting(com_idc_params, "interactionSummary.testModel.emails.max", "number", 5);

      vars.interactionSummary.fields.Call2_vod__c = util.readSetting(com_idc_params, "interactionSummary.fields.Call2_vod__c", "object", []);
      vars.interactionSummary.fields.Call2_Key_Message_vod__c = util.readSetting(
        com_idc_params,
        "interactionSummary.fields.Call2_Key_Message_vod__c",
        "object",
        []
      );
      vars.interactionSummary.fields.Sent_Email_vod__c = util.readSetting(com_idc_params, "interactionSummary.fields.Sent_Email_vod__c", "object", []);
      vars.interactionSummary.fields.Email_Activity_vod__c = util.readSetting(com_idc_params, "interactionSummary.fields.Email_Activity_vod__c", "object", []);

      //this module relies on Email Cart configuration ()
      if (com_idc_params.emailCart) {
        //selected vault instance (development or release)
        let selectedVault = com_idc_params.emailCart.vaultInstance.development.selected
          ? "development"
          : com_idc_params.emailCart.vaultInstance.release.selected
          ? "release"
          : "development";

        //templates
        const template = vars.interactionSummary.nonEmailCartItems.templates.splice(0)[0];
        vars.interactionSummary.nonEmailCartItems.templates = com_idc_params.interactionSummary.nonEmailCartItems.templates.map((item) => {
          const newTemplate = JSON.parse(JSON.stringify(template));
          newTemplate.id = util.readSetting(item, "id", "string", null);
          newTemplate.title = util.readSetting(item, "title", "string", null);
          newTemplate.thumb = util.readSetting(item, "thumb", "string", null);
          newTemplate.vaultId = util.readSetting(item, `vaultId.${selectedVault}`, "string", null);

          //fragments
          const fragment = newTemplate.fragments.splice(0)[0];
          newTemplate.fragments = item.fragments.map((item) => {
            const newFragment = JSON.parse(JSON.stringify(fragment));
            newFragment.id = util.readSetting(item, "id", "string", null);
            newFragment.title = util.readSetting(item, "title", "string", null);
            newFragment.thumb = util.readSetting(item, "thumb", "string", null);
            newFragment.linksTo = util.readSetting(item, "linksTo", "string", null);
            newFragment.vaultId = util.readSetting(item, `vaultId.${selectedVault}`, "string", null);

            return newFragment;
          });

          return newTemplate;
        });
      }

      //visibility
      vars.interactionSummary.visibility = util.readSetting(
        com_idc_params,
        "interactionSummary.visibility",
        "object",
        com.idc.clm.varsTemplate.interactionSummary.visibility
      );

      //nextBestContent
      vars.interactionSummary.nextBestContent = util.readSetting(
        com_idc_params,
        "interactionSummary.nextBestContent",
        "object",
        com.idc.clm.varsTemplate.interactionSummary.nextBestContent
      );
    }
  },
  setSessionIdentifier: function () {
    let util = com.idc.util;

    return new Promise((resolve) => {
      let vars = this.vars;

      util.log("com.idc.clm.setSessionIdentifier()");

      //session data key
      vars.project.sessionDataKey = `com_idc_data_sessionData__${(vars.project.name + vars.project.version).replace(/\s+/g, "").toLowerCase()}`;

      //locally stored session identifier, used to compare with platform identifier to check if it's a new session
      let storedIdentifier = window.sessionStorage.getItem(vars.project.sessionDataKey);
      let wasEmpty;
      if (!storedIdentifier) {
        wasEmpty = true;
        storedIdentifier = `com_idc_clm_sessionIdentifier__${Math.round(Math.random() * 10000)}`; //storedIdentifier is empty -> generate new
        window.sessionStorage.setItem(vars.project.sessionDataKey, storedIdentifier); //store new session identifier
      } else {
        wasEmpty = false;
      }

      if (vars.options.browserMode.active) {
        vars.session.id = storedIdentifier; //browserMode will always be "new session = false" unless the stored identifier is deleted
        if (wasEmpty) {
          vars.session.isNewSession = true; //if storedIdentifier was empty, it's a new session
        } else {
          vars.session.isNewSession = false; //if storedIdentifier was not empty, it's not a new session
        }
        let isAnActualCall = false; //default for browser mode
        if (vars.options.browserMode.simulate.active) {
          if (vars.options.browserMode.simulate.mode == "call") {
            isAnActualCall = true; //simulated call
          }
        }
        vars.session.isAnActualCall = isAnActualCall;
        resolve();
      } else {
        com.veeva.clm.getDataForCurrentObject("Call", "ID", (data) => {
          if (data.success) {
            vars.session.isAnActualCall = true; //Veeva retrieved a call id >> it is an actual call
            vars.session.id = data.Call.ID; //Use the retrieved call id as session identifier

            if (data.Call.ID == storedIdentifier) {
              vars.session.isNewSession = false; //retrieved call id does not match storedIdentifier >> is new session
            } else {
              vars.session.isNewSession = true;
              window.sessionStorage.setItem(vars.project.sessionDataKey, vars.session.id); //store new session identifier
            }

            resolve();
          } else {
            vars.session.isAnActualCall = false; //Veeva did not retrieve a call id >> it is not an actual call
            vars.session.id = storedIdentifier; //media mode will always be "new session = false" unless the stored identifier is deleted

            if (wasEmpty) {
              vars.session.isNewSession = true; //if storedIdentifier was empty, it's a new session
            } else {
              vars.session.isNewSession = false; //if storedIdentifier was not empty, it's not a new session
            }

            resolve();
          }
        });
      }
    });
  },
  setStandardSlidesSequence: function () {
    let util = com.idc.util;
    let vars = this.vars;
    util.log("com.idc.clm.setStandardSlidesSequence()");
    //flag as a standard presentation
    vars.navigation.dynamicPresentation.active = false;
    //standard presentation: all slides except standalone modals, PDF slides and slides flagged not to be considered in main sequence
    vars.navigation.actualSlidesSequence = [];
    vars.slides.forEach((slide) => {
      if (!slide.standaloneModal.isStandalone && !slide.pdf.isPDF && !slide.doNotConsiderInMainSequence) {
        vars.navigation.actualSlidesSequence.push(slide.id);
      }
    });
    //all available slides
    vars.slides.forEach((slide) => {
      vars.navigation.allAvaliableSlides.push(slide.id);
    });
  },
  setDynamicSlidesSequence: function (activeMode) {
    let util = com.idc.util;
    let vars = this.vars;
    util.log("com.idc.clm.setDynamicSlidesSequence()");
    //is a dynamic presentation
    vars.navigation.dynamicPresentation.active = true;
    //dynamic presentation type
    vars.navigation.dynamicPresentation.source = activeMode.name;
    //callflow?
    if (activeMode.name == "callflows") {
      vars.navigation.dynamicPresentation.callflow = activeMode.callflow;
    }
    //myPresentations: isMixed?
    if (activeMode.name == "myPresentations") {
      vars.navigation.dynamicPresentation.isMixed = activeMode.isMixed;
    }
    //treat modals as main slides
    vars.navigation.dynamicPresentation.treatStandaloneModalsAsMainSlides =
      vars.options.dynamicPresentation.source[activeMode.name].standaloneModal.treatStandaloneModalsAsMainSlides;
    //assign the sequence of the first active mode
    vars.navigation.actualSlidesSequence = [];
    activeMode.slidesSequence.forEach((slideId) => {
      let slide = this.findSlide(slideId);
      let isStandalone = slide.standaloneModal.isStandalone;
      let treatStandaloneModalsAsMainSlides = vars.navigation.dynamicPresentation.treatStandaloneModalsAsMainSlides;
      let isPDF = slide.pdf.isPDF;

      if ((!isStandalone || (isStandalone && treatStandaloneModalsAsMainSlides)) && !isPDF) {
        vars.navigation.actualSlidesSequence.push(slide.id);
      }
    });
    //assign all available slides
    vars.navigation.allAvaliableSlides = activeMode.slidesSequence;
  },
  identifyActualSlidesSequence: function () {
    let util = com.idc.util;

    return new Promise((resolve) => {
      (async () => {
        util.log("com.idc.clm.identifyActualSlidesSequence()");

        //eval settings to see a dynamic presentation mode is enabled
        let activeDynamicPresentationModes = [];
        let dynamicPresVars = this.vars.options.dynamicPresentation;
        if (dynamicPresVars.source.contentTargeting.active) {
          activeDynamicPresentationModes.push({
            name: "contentTargetting",
            precedence: dynamicPresVars.precedence.indexOf("contentTargetting"),
            slidesSequence: await this.contentTargeting(),
          });
        }
        if (dynamicPresVars.source.myPresentations.active) {
          let myPresentationsRes = await this.myPresentations();
          if (myPresentationsRes) {
            activeDynamicPresentationModes.push({
              name: "myPresentations",
              precedence: dynamicPresVars.precedence.indexOf("myPresentations"),
              slidesSequence: myPresentationsRes.slidesSequence,
              isMixed: myPresentationsRes.isMixedPresentation,
            });
          }
        }
        if (dynamicPresVars.source.externalFunction.active) {
          activeDynamicPresentationModes.push({
            name: "externalFunction",
            precedence: dynamicPresVars.precedence.indexOf("externalFunction"),
            slidesSequence: await this.externalFunction(),
          });
        }
        if (dynamicPresVars.source.callflows.active) {
          let callflows = await this.callflows();
          if (callflows) {
            activeDynamicPresentationModes.push({
              name: "callflows",
              precedence: dynamicPresVars.precedence.indexOf("callflows"),
              callflow: callflows.name,
              slidesSequence: callflows.sequence,
            });
          }
        }

        //sort active dynamic modes by precedence
        activeDynamicPresentationModes.sort((a, b) => {
          return a.precedence - b.precedence;
        });

        //remove items with empty slidesSequence
        activeDynamicPresentationModes = activeDynamicPresentationModes.filter((item) => {
          return Array.isArray(item.slidesSequence) && Array.isArray(item.slidesSequence) && item.slidesSequence.length > 0;
        });

        //identify active source
        let activeDynamicPresentationMode = null;
        if (activeDynamicPresentationModes.length > 0) {
          activeDynamicPresentationMode = activeDynamicPresentationModes[0];
        }

        //active or standard
        if (activeDynamicPresentationMode) {
          //it is a dynamic presentation
          com.idc.clm.setDynamicSlidesSequence(activeDynamicPresentationMode);
        } else {
          //it is a standard presentation
          com.idc.clm.setStandardSlidesSequence();
        }

        //standalone modal group
        if (this.persistentData.session.selectedStandaloneGroup) {
          let groupId = this.persistentData.session.selectedStandaloneGroup;
          if (groupId && this.validateStandaloneGroup(groupId, this.vars.options.htmlSlideId)) {
            this.activateStandaloneGroup(groupId);
          } else {
            this.deActivateStandaloneGroup();
          }
        }

        resolve();
      })();
    });
  },
  setCurrentSlideProperties: function () {
    let navVars = this.vars.navigation;
    let util = com.idc.util;
    let slideId = this.vars.options.htmlSlideId;
    let isStandalone = this.findSlide(slideId).standaloneModal.isStandalone;
    let isDynamicPresentation = navVars.dynamicPresentation.active;
    let treatStandaloneModalsAsMainSlides = navVars.dynamicPresentation.treatStandaloneModalsAsMainSlides;

    util.log("com.idc.clm.setCurrentSlide()");

    navVars.currentSlide.id = slideId;

    //is current slide a standalone modal?
    navVars.currentSlide.isStandalone = isStandalone;

    if (!isStandalone || (isStandalone && isDynamicPresentation && treatStandaloneModalsAsMainSlides)) {
      //properties of a common slide (or a standalone modal acting as a common slide in a dynamic presentation)******

      //index of current slide in actual slides sequence
      navVars.currentSlide.index = navVars.actualSlidesSequence.indexOf(navVars.currentSlide.id);

      //is the slide part of the actual slides sequence?
      if (navVars.currentSlide.index >= 0) {
        //is current slide first in actual slides sequence?
        navVars.currentSlide.isFirst = navVars.currentSlide.index == 0;

        //is current slide last in actual slides sequence?
        navVars.currentSlide.isLast = navVars.currentSlide.index == navVars.actualSlidesSequence.length - 1;

        //prev slide in actual slides sequence
        if (!navVars.currentSlide.isFirst) {
          if (!navVars.prevSlide) navVars.prevSlide = JSON.parse(JSON.stringify(this.varsTemplate.navigation.prevSlide));
          navVars.prevSlide.index = navVars.currentSlide.index - 1;
          navVars.prevSlide.id = navVars.actualSlidesSequence[navVars.prevSlide.index];
          navVars.prevSlide.isFirst = navVars.prevSlide.index == 0;
          navVars.prevSlide.isLast = false;
        }

        //next slide in actual slides sequence
        if (!navVars.currentSlide.isLast) {
          if (!navVars.nextSlide) navVars.nextSlide = JSON.parse(JSON.stringify(this.varsTemplate.navigation.nextSlide));
          navVars.nextSlide.index = navVars.currentSlide.index + 1;
          navVars.nextSlide.id = navVars.actualSlidesSequence[navVars.nextSlide.index];
          navVars.nextSlide.isFirst = false;
          navVars.nextSlide.isLast = navVars.nextSlide.index == navVars.actualSlidesSequence.length - 1;
        }
      } else {
        //use all available slides to find the cosest prev/next slide
        let contextArr = this.vars.navigation.allAvaliableSlides.filter((slideId) => {
          return slideId == navVars.currentSlide.id || navVars.actualSlidesSequence.includes(slideId);
        });

        //index of current slide context array
        let contextIndex = contextArr.indexOf(navVars.currentSlide.id);

        //is current slide first context array?
        navVars.currentSlide.isFirst = contextIndex == 0;

        //is current slide last context array?
        navVars.currentSlide.isLast = contextIndex == contextArr.length - 1;

        //prev slide context array
        if (!navVars.currentSlide.isFirst) {
          if (!navVars.prevSlide) navVars.prevSlide = JSON.parse(JSON.stringify(this.varsTemplate.navigation.prevSlide));
          navVars.prevSlide.id = contextArr[contextIndex - 1];
          navVars.prevSlide.index = navVars.actualSlidesSequence.indexOf(navVars.prevSlide.id);
          navVars.prevSlide.isFirst = navVars.prevSlide.index == 0;
          navVars.prevSlide.isLast = false;
        }

        //next slide context array
        if (!navVars.currentSlide.isLast) {
          if (!navVars.nextSlide) navVars.nextSlide = JSON.parse(JSON.stringify(this.varsTemplate.navigation.nextSlide));
          navVars.nextSlide.id = contextArr[contextIndex + 1];
          navVars.nextSlide.index = navVars.actualSlidesSequence.indexOf(navVars.nextSlide.id);
          navVars.nextSlide.isFirst = false;
          navVars.nextSlide.isLast = navVars.nextSlide.index == navVars.actualSlidesSequence.length - 1;
        }
      }

      delete navVars.lastSlide; //used to return to last visited slide from standalone modal
    } else {
      //properties of a standalone slide ****************************************************************************

      //last visited non-standalone / non-pdf slide
      this.persistentData.session.navigationHistory.every((slideId) => {
        if (slideId != navVars.currentSlide.id) {
          if (!this.findSlide(slideId).standaloneModal.isStandalone && !this.findSlide(slideId).pdf.isPDF) {
            if (!navVars.lastSlide) navVars.lastSlide = JSON.parse(JSON.stringify(this.varsTemplate.navigation.lastSlide));
            navVars.lastSlide.main.id = slideId;
            navVars.lastSlide.main.index = navVars.actualSlidesSequence.indexOf(slideId);
            return false;
          } else {
            return true;
          }
        } else {
          return true;
        }
      });

      //actual last slide
      this.persistentData.session.navigationHistory.every((slideId) => {
        if (slideId != navVars.currentSlide.id) {
          if (!navVars.lastSlide) navVars.lastSlide = JSON.parse(JSON.stringify(this.varsTemplate.navigation.lastSlide));
          navVars.lastSlide.actual.id = slideId;
          navVars.lastSlide.actual.index = navVars.actualSlidesSequence.indexOf(slideId);
          return false;
        } else {
          return true;
        }
      });

      delete navVars.prevSlide; //do not apply for standalone modal
      delete navVars.nextSlide; //do not apply for standalone modal
    }
  },
  findSlide: function (slideId, abbreviated) {
    return this.vars.slides.find((slide) => {
      if (abbreviated) {
        return slide.id.includes(slideId);
      } else {
        return slide.id == slideId;
      }
    });
  },
  addSlideToNavHistory: async function (slideId) {
    return new Promise((resolve) => {
      (async () => {
        let util = com.idc.util;
        let slide = this.findSlide(slideId);

        if (slide) {
          util.log("com.idc.clm.addSlideToNavHistory()");

          let addSlide = true;
          let navHis = this.persistentData.session.navigationHistory;

          //do not add if current slide = most recent slide in history
          if (navHis.length > 0) {
            if (navHis[0] == slideId) addSlide = false;
          }

          if (addSlide) {
            navHis.unshift(slideId);
            await this.updatePersistentData();
          }
        }
      })();
      resolve();
    });
  },
  getDataForContextObjects: function () {
    let util = com.idc.util;

    return new Promise((resolve) => {
      (async () => {
        //only for actual calls
        if (this.vars.options.browserMode.active) {
          resolve();
          return;
        }

        util.log("com.idc.clm.getDataForContextObjects()");

        //Account (ID, name, salutation)
        if (this.vars.session.isAnActualCall) {
          //id
          await new Promise((resolve) => {
            com.veeva.clm.getDataForCurrentObject("Account", "ID", (data) => {
              if (data.success) {
                this.vars.metadata.account.id = data.Account.ID;
                resolve();
              }
            });
          });
          //account name
          await new Promise((resolve) => {
            com.veeva.clm.getDataForCurrentObject("Account", "Name", (data) => {
              if (data.success) {
                this.vars.metadata.account.name = data.Account.Name;
                resolve();
              }
            });
          });
          //salutation
          await new Promise((resolve) => {
            com.veeva.clm.getDataForCurrentObject("Account", "Salutation", (data) => {
              if (data.success) {
                this.vars.metadata.account.salutation = data.Account.Salutation;
                resolve();
              }
            });
          });
        }

        //Key_Message_vod__c (ID, file name, disable actions and ios resolution)
        {
          await new Promise((resolve) => {
            com.veeva.clm.getDataForCurrentObject("KeyMessage", "ID", (data) => {
              if (data.success) {
                this.vars.metadata.keyMessage.id = data.KeyMessage.ID;
                resolve();
              }
            });
          });
          //key message media file name
          await new Promise((resolve) => {
            com.veeva.clm.getDataForCurrentObject("KeyMessage", "Media_File_Name_vod__c", (data) => {
              if (data.success) {
                this.vars.metadata.keyMessage.mediaFileName = data.KeyMessage.Media_File_Name_vod__c;
                resolve();
              }
            });
          });
          //key message disable actions
          await new Promise((resolve) => {
            com.veeva.clm.getDataForCurrentObject("KeyMessage", "Disable_Actions_vod__c", (data) => {
              if (data.success) {
                this.vars.metadata.keyMessage.disableActions = data.KeyMessage.Disable_Actions_vod__c;
                resolve();
              }
            });
          });
          //key message iOS resolution
          await new Promise((resolve) => {
            com.veeva.clm.getDataForCurrentObject("KeyMessage", "iOS_Resolution_vod__c", (data) => {
              if (data.success) {
                this.vars.metadata.keyMessage.iOSResolution = data.KeyMessage.iOS_Resolution_vod__c;
                resolve();
              }
            });
          });
        }

        //Approved_Document_vod__c for email cart and non email cart (get crmID for templates and fragments)
        if (this.vars.emailCart.active) {
          let itemsArray = [];
          this.vars.emailCart.templates
            .map((item) => {
              return {
                id: item.id,
                vaultId: item.vaultId,
                group: "templates",
              };
            })
            .forEach((item) => {
              itemsArray.push(item);
            });
          this.vars.emailCart.fragments
            .map((item) => {
              return {
                id: item.id,
                vaultId: item.vaultId,
                group: "fragments",
              };
            })
            .forEach((item) => {
              itemsArray.push(item);
            });

          if (this.vars.interactionSummary.active) {
            this.vars.interactionSummary.nonEmailCartItems.templates.forEach((template) => {
              itemsArray.push({
                id: template.id,
                vaultId: template.vaultId,
                group: "nonEmailCartTemplates",
              });

              template.fragments.forEach((fragment) => {
                itemsArray.push({
                  id: fragment.id,
                  vaultId: fragment.vaultId,
                  group: "nonEmailCartFragments",
                  template: template.id,
                });
              });
            });
          }

          for (let item of itemsArray) {
            await new Promise((resolve) => {
              com.veeva.clm.getApprovedDocument(this.vars.emailCart.vaultURL, item.vaultId, (data) => {
                if (data.success && data.Approved_Document_vod__c) {
                  if (item.group == "templates" || item.group == "fragments") {
                    //email cart templates or fragments
                    this.vars.emailCart[item.group].find((element) => {
                      return element.id == item.id;
                    }).crmId = data.Approved_Document_vod__c.ID;
                  } else {
                    //interaction summary templates or fragments
                    switch (item.group) {
                      case "nonEmailCartTemplates":
                        this.vars.interactionSummary.nonEmailCartItems.templates.find((element) => {
                          return element.id == item.id;
                        }).crmId = data.Approved_Document_vod__c.ID;
                        break;
                      case "nonEmailCartFragments":
                        this.vars.interactionSummary.nonEmailCartItems.templates
                          .find((element) => {
                            return element.id == item.template;
                          })
                          .fragments.find((element) => {
                            return element.id == item.id;
                          }).crmId = data.Approved_Document_vod__c.ID;
                        break;
                    }
                  }
                } else {
                  util.log(`com.idc.clm.getDataForContextObjects: could not retrieve CRM ID for ${item.id} (${item.group}): ${item.vaultId} + ${this.vars.emailCart.vaultURL}`);
                  util.log(data.message);
                }
                resolve();
              });
            });
          }
        }

        //Call2_Key_Message_vod__c for current slides
        if (this.vars.interactionSummary.active && this.vars.session.isAnActualCall) {
          let keyMessageIDsAndZipNames = await new Promise((resolve) => {
            com.veeva.clm.queryRecord("Key_Message_vod__c", ["ID", "Media_File_Name_vod__c"], null, [], null, (data) => {
              if (data.success) {
                resolve(data.Key_Message_vod__c);
              } else {
                util.log(`com.idc.clm.getDataForContextObjects: failed to retrieve Key_Message_vod__c IDs ${data.message}`);
              }
            });
          });
          keyMessageIDsAndZipNames = keyMessageIDsAndZipNames.filter((keyMessage) => {
            return this.vars.slides.find((slide) => slide.player.zipName == keyMessage.Media_File_Name_vod__c);
          });

          let callKeyMessageRecords;
          if (keyMessageIDsAndZipNames && this.vars.metadata.account.id) {
            callKeyMessageRecords = await new Promise((resolve) => {
              let zipNamesWhereClause = keyMessageIDsAndZipNames
                .map((keyMessage) => {
                  return `Key_Message_vod__c = "${keyMessage.ID}" OR`;
                })
                .join(" ")
                .slice(0, -3);

              let whereClause = `Account_vod__c = "${this.vars.metadata.account.id}" AND (${zipNamesWhereClause})`;

              com.veeva.clm.queryRecord(
                "Call2_Key_Message_vod__c",
                this.vars.interactionSummary.fields.Call2_Key_Message_vod__c,
                whereClause,
                [],
                null,
                (data) => {
                  if (data.success) {
                    resolve(data.Call2_Key_Message_vod__c);
                  } else {
                    util.log(`com.idc.clm.getDataForContextObjects: failed to retrieve Call2_Key_Message_vod__c records ${data.message}`);
                  }
                }
              );
            });
          }

          //add media file name to callKeyMessageRecords
          if (callKeyMessageRecords) {
            callKeyMessageRecords.forEach((callKeyMessage) => {
              callKeyMessage.Key_Message_vod__c = {
                Media_File_Name_vod__c: keyMessageIDsAndZipNames.find((keyMessage) => {
                  return keyMessage.ID == callKeyMessage.Key_Message_vod__c;
                }).Media_File_Name_vod__c,
              };
            });
          }

          if (callKeyMessageRecords) {
            this.vars.interactionSummary.input.Call2_Key_Message_vod__c = callKeyMessageRecords;
          }
        }

        //Call2_vod__c for Call key messages records
        if (this.vars.interactionSummary.active && this.vars.session.isAnActualCall) {
          let callRecords;
          if (this.vars.interactionSummary.input.Call2_Key_Message_vod__c.length > 0 && this.vars.metadata.account.id) {
            callRecords = await new Promise((resolve) => {
              let whereClause = this.vars.interactionSummary.input.Call2_Key_Message_vod__c.map((callKeyMessage) => {
                return `ID = "${callKeyMessage.Call2_vod__c}" OR`;
              })
                .join(" ")
                .slice(0, -3);

              if (this.vars.interactionSummary.considerDraftCalls) {
                whereClause = `Account_vod__c = "${this.vars.metadata.account.id}" AND (${whereClause})`;
              } else {
                whereClause = `Status_vod__c = "Submitted_vod" AND Account_vod__c = "${this.vars.metadata.account.id}" AND (${whereClause})`;
              }

              com.veeva.clm.queryRecord("Call2_vod__c", this.vars.interactionSummary.fields.Call2_vod__c, whereClause, [], null, (data) => {
                if (data.success) {
                  resolve(data.Call2_vod__c);
                } else {
                  util.log(`com.idc.clm.getDataForContextObjects: failed to retrieve Call2_vod__c records ${data.message}`);
                }
              });
            });
          }
          if (callRecords) {
            this.vars.interactionSummary.input.Call2_vod__c = callRecords;
          }
        }

        //Sent_Email_vod__c for account and templates
        if (this.vars.interactionSummary.active && this.vars.session.isAnActualCall && this.vars.emailCart.active) {
          let sentEmailRecords;          
          if (this.vars.emailCart.templates && this.vars.metadata.account.id) {
            sentEmailRecords = await new Promise((resolve) => {
              let allTemplates = this.vars.emailCart.templates.concat(this.vars.interactionSummary.nonEmailCartItems.templates);

              let whereClause = allTemplates
                .filter((template) => {
                  return template.crmId;
                })
                .map((template) => {
                  return `Approved_Email_Template_vod__c = "${template.crmId}" OR`;
                })
                .join(" ")
                .slice(0, -3);

              whereClause = `(Status_vod__c = "Sent_vod" OR Status_vod__c = "Delivered_vod") AND Account_vod__c = "${this.vars.metadata.account.id}" AND (${whereClause})`;

              com.veeva.clm.queryRecord("Sent_Email_vod__c", this.vars.interactionSummary.fields.Sent_Email_vod__c, whereClause, [], null, (data) => {
                if (data.success) {
                  resolve(data.Sent_Email_vod__c);
                } else {
                  util.log(`com.idc.clm.getDataForContextObjects: failed to retrieve Sent_Email_vod__c records ${data.message}`);
                }
              });
            });
          }
          if (sentEmailRecords) {
            this.vars.interactionSummary.input.Sent_Email_vod__c = sentEmailRecords;
          }
        }

        //Email_Activity_vod__c for sent emails
        if (this.vars.interactionSummary.active && this.vars.session.isAnActualCall && this.vars.emailCart.active) {
          let emailActivityRecords;
          if (this.vars.interactionSummary.input.Sent_Email_vod__c) {
            emailActivityRecords = await new Promise((resolve) => {
              let whereClause = this.vars.interactionSummary.input.Sent_Email_vod__c.map((sentEmail) => {
                return `Sent_Email_vod__c = "${sentEmail.ID}" OR`;
              })
                .join(" ")
                .slice(0, -3);

              com.veeva.clm.queryRecord("Email_Activity_vod__c", this.vars.interactionSummary.fields.Email_Activity_vod__c, whereClause, [], null, (data) => {
                if (data.success) {
                  resolve(data.Email_Activity_vod__c);
                } else {
                  util.log(`com.idc.clm.getDataForContextObjects: failed to retrieve Email_Activity_vod__c records ${data.message}`);
                }
              });
            });
          }

          if (emailActivityRecords) {
            this.vars.interactionSummary.input.Email_Activity_vod__c = emailActivityRecords;
          }
        }

        //Next best content CLM
        if (this.vars.interactionSummary.active && this.vars.session.isAnActualCall && this.vars.interactionSummary.nextBestContent.clm.active) {
          let sourceFnc = this.vars.interactionSummary.nextBestContent.clm.source.call;
          if (sourceFnc !== "undefined" && sourceFnc !== "" && typeof window[sourceFnc] === "function") {
            let nextBestContentCLM = await window[sourceFnc]();
            if (Array.isArray(nextBestContentCLM) && nextBestContentCLM.length > 0) {
              this.vars.interactionSummary.input.Next_Best_Content_CLM = nextBestContentCLM;
            }
          }
        }

        resolve();
      })();
    });
  },
  setBodyVars: function () {
    //screen orientation
    document.querySelector("body").setAttribute("data-screen-orientation", this.vars.screen.orientation);

    //call/media/browser
    let mode;
    let isSimulatedMode = false;
    if (this.vars.options.browserMode.active) {
      if (this.vars.options.browserMode.simulate.active) {
        mode = this.vars.options.browserMode.simulate.mode; //simulated mode
        isSimulatedMode = true;
      } else {
        mode = "browser";
      }
    } else {
      if (navigator.userAgent.match(/iPad/i)) {
        if (this.vars.session.isAnActualCall) {
          mode = "call";
        } else {
          mode = "media";
        }
      }
    }
    document.querySelector("body").setAttribute("data-mode", mode);
    document.querySelector("body").setAttribute("data-is-simulated-mode", isSimulatedMode);

    //debug mode
    document.querySelector("body").setAttribute("data-debug-mode", this.vars.options.debugMode.active);

    //is dynamic presentation
    document.querySelector("body").setAttribute("data-is-dynamic-presentation", this.vars.navigation.dynamicPresentation.active);
    if (this.vars.navigation.dynamicPresentation.active) {
      document.querySelector("body").setAttribute("data-dynamic-presentation-source", this.vars.navigation.dynamicPresentation.source);
    } else {
      document.querySelector("body").setAttribute("data-dynamic-presentation-source", "");
    }
    if (this.vars.navigation.dynamicPresentation.active && this.vars.navigation.dynamicPresentation.source == "callflows") {
      document.querySelector("body").setAttribute("data-dynamic-presentation-callflow", this.vars.navigation.dynamicPresentation.callflow);
    } else {
      document.querySelector("body").setAttribute("data-dynamic-presentation-callflow", "");
    }

    //is standalone modal slide
    document.querySelector("body").setAttribute("data-is-standalone-modal-slide", this.vars.navigation.currentSlide.isStandalone);

    //is standalone modal group active
    document.querySelector("body").setAttribute("data-active-standalone-group", this.persistentData.session.selectedStandaloneGroup);
  },

  /*persistent data ---------------------------------------*/
  definePersistentDataKey: function () {
    this.vars.project.persistentDataKey = `com_idc_data_persistentData__${(this.vars.project.name + this.vars.project.version)
      .replace(/\s+/g, "")
      .toLowerCase()}`;
  },
  loadPersistentData: function () {
    com.idc.util.log("com.idc.clm.loadPersistentData()");

    return new Promise((resolve) => {
      //ToDo: use field as alternative to window.localStorage
      let retrievedData = window.localStorage.getItem(this.vars.project.persistentDataKey);
      let jsonData = {};
      try {
        jsonData = JSON.parse(retrievedData);
      } catch (err) {
        com.idc.util.log(`com.idc.loadPersistentData: ${err}`);
      }

      //compare main structure of retreived data vs project template
      if (jsonData != null && Object.keys(jsonData).toString() == Object.keys(this.persistentData).toString()) {
        this.persistentData = jsonData;
      }

      resolve();
    });
  },
  updatePersistentData: function () {
    return new Promise((resolve) => {
      //ToDo: use field as alternative to window.localStorage
      window.localStorage.setItem(this.vars.project.persistentDataKey, JSON.stringify(this.persistentData));
      resolve();
    });
  },
  resetPersistentData: function () {
    return new Promise((resolve) => {
      //ToDo: use field as alternative to window.localStorage

      window.localStorage.removeItem(this.vars.project.persistentDataKey);

      this.persistentData = JSON.parse(JSON.stringify(this.persistentDataTemplate));

      resolve();
    });
  },

  /*navigation --------------------------------------------*/
  gotoSlide: async function (slideId) {
    //account for abbreviated links
    if (slideId && slideId.endsWith("..")) {
      let slideFound = com.idc.clm.findSlide(slideId.replace("..", ""), true);
      if (slideFound) {
        slideId = slideFound.id;
      }
    }

    //do not proceed if slide is not among available slides
    if (com.idc.clm.vars.navigation.allAvaliableSlides.findIndex((slide) => slide === slideId) < 0) return;

    let slide = this.findSlide(slideId);

    //if slide PDF, add to nav history before redirecting
    if (slide.pdf.isPDF) {
      await this.addSlideToNavHistory(slideId);
    }

    //redirect
    if (this.vars.options.browserMode.active) {
      let path;
      if (!slide.pdf.isPDF) {
        //html slide
        path = `../${slide.browser.folder}/index.html`;
      } else {
        //pdf slide
        path = `../${slide.browser.folder}/${slide.pdf.pdfName}`;
      }
      window.location.replace(path);
    } else {
      //Veeva library code
      com.veeva.clm.gotoSlide(this.findSlide(slideId).player.zipName);
    }
  },
  goNextSlide: function () {
    //myPresentation - mixed presentation
    if (
      this.vars.navigation.dynamicPresentation.active &&
      this.vars.navigation.dynamicPresentation.source == "myPresentations" &&
      this.vars.navigation.dynamicPresentation.isMixed
    ) {
      com.veeva.clm.nextSlide();
      return;
    }

    //overWrite
    if (this.vars.navigation.overWrite.nextSlide) {
      this.gotoSlide(this.vars.navigation.overWrite.nextSlide);
      return;
    }

    //standard
    if (!this.vars.navigation.currentSlide.isLast) {
      this.gotoSlide(this.vars.navigation.nextSlide.id);
      return;
    }
  },
  goPrevSlide: function () {
    //myPresentation - mixed presentation
    if (
      this.vars.navigation.dynamicPresentation.active &&
      this.vars.navigation.dynamicPresentation.source == "myPresentations" &&
      this.vars.navigation.dynamicPresentation.isMixed
    ) {
      com.veeva.clm.prevSlide();
      return;
    }

    //overWrite
    if (this.vars.navigation.overWrite.prevSlide) {
      this.gotoSlide(this.vars.navigation.overWrite.prevSlide);
      return;
    }

    //standard
    if (!this.vars.navigation.currentSlide.isFirst) {
      this.gotoSlide(this.vars.navigation.prevSlide.id);
      return;
    }
  },
  isBackFromStandAloneSlide: function () {
    let isBackFromStandAlone = false;
    let navHis = this.persistentData.session.navigationHistory;
    let currentSlideId = this.vars.navigation.currentSlide.id;
    if (navHis.length > 2) {
      isBackFromStandAlone = navHis[0] == currentSlideId && navHis[2] == currentSlideId && this.findSlide(navHis[1]).standaloneModal.isStandalone;
    }
    return isBackFromStandAlone;
  },
  handleSwipeNavigation: function (pSwipe) {
    let vars = com.idc.clm.vars;
    let persistentData = com.idc.clm.persistentData;
    let isDynamicPresentation = vars.navigation.dynamicPresentation.active;
    let isStandalone = vars.navigation.currentSlide.isStandalone;
    let isStandaloneGroupActive = persistentData.session.selectedStandaloneGroup;
    let isAModalBeingDisplayed = com.idc.util.getElementAttribute(document.querySelector("body"), "data-modal-state") == "active";
    let treatStandaloneModalsAsMainSlides = vars.navigation.dynamicPresentation.treatStandaloneModalsAsMainSlides;

    //standard slide
    if (!isStandalone) {
      if (!isDynamicPresentation && isAModalBeingDisplayed) {
        return; //do nothing if modal is open in a normal presentation
      }
      //go next or prev slide
      switch (pSwipe.direction) {
        case "left":
          com.idc.clm.goNextSlide();
          break;
        case "right":
          com.idc.clm.goPrevSlide();
          break;
      }
    }

    //standalone modal in dynamic presentation treated as main slide
    if (isStandalone && isDynamicPresentation && treatStandaloneModalsAsMainSlides) {
      //go next or prev slide
      switch (pSwipe.direction) {
        case "left":
          com.idc.clm.goNextSlide();
          break;
        case "right":
          com.idc.clm.goPrevSlide();
          break;
      }
    }

    //standalone modal part of standalone modal group active
    if (isStandalone && isStandaloneGroupActive) {
      //go next or prev slide
      switch (pSwipe.direction) {
        case "left":
          if (vars.navigation.overWrite.nextSlide) com.idc.clm.goNextSlide();
          break;
        case "right":
          if (vars.navigation.overWrite.prevSlide) com.idc.clm.goPrevSlide();
          break;
      }
    }
  },
  navigationOverwrite: function (type, slideId) {
    //do not proceed if it is a dynamic presentation
    if (this.vars.navigation.dynamicPresentation.active) {
      return;
    }

    switch (type) {
      case "next":
        this.vars.navigation.overWrite.nextSlide = slideId;
        break;
      case "prev":
        this.vars.navigation.overWrite.prevSlide = slideId;
        break;
    }
  },

  /*dyamic presentation -----------------------------------*/
  contentTargeting: function () {
    return new Promise((resolve) => {
      (async () => {
        //only for actual calls
        if (!this.vars.session.isAnActualCall) {
          resolve();
          return;
        }

        //get account ID
        let accountId = await new Promise((resolve) => {
          com.veeva.clm.getDataForCurrentObject("Account", "ID", (data) => {
            if (data.success) {
              resolve(data.Account.ID);
            } else {
              resolve();
            }
          });
        });

        if (!accountId) {
          resolve(); //unable to retrieve account >> media mode
        }

        //get params
        let type = this.vars.options.dynamicPresentation.source.contentTargeting.type;
        let object = this.vars.options.dynamicPresentation.source.contentTargeting.object;
        let field = this.vars.options.dynamicPresentation.source.contentTargeting.field;

        //placeholder for slides sequence input
        let slidesSequenceInput;

        //read data
        switch (type) {
          case "dynamic-attribute":
            slidesSequenceInput = await new Promise((resolve) => {
              com.veeva.clm.queryRecord(
                "Dynamic_Attribute_vod__c",
                ["Dynamic_Attribute_Value_Text_Area_vod__c"],
                'WHERE Account_vod__c = "' + accountId + '" AND Dynamic_Attribute_Name_vod__c = "' + field + '"',
                [],
                null,
                (data) => {
                  if (data.success) {
                    if (data.Dynamic_Attribute_vod__c.length > 0) {
                      resolve(data.Dynamic_Attribute_vod__c[0].Dynamic_Attribute_Value_Text_Area_vod__c.split(",").map((item) => item.trim()));
                    } else {
                      resolve();
                    }
                  } else {
                    resolve();
                  }
                }
              );
            });
            break;
          case "custom-field":
            switch (object) {
              case "Account":
                slidesSequenceInput = await new Promise((resolve) => {
                  com.veeva.clm.getDataForCurrentObject("Account", field, (data) => {
                    if (data.success) {
                      resolve(data.Account[field].split(",").map((item) => item.trim()));
                    } else {
                      resolve();
                    }
                  });
                });
                break;
              case "TSF_vod__c":
                //get user ID
                let userId = await new Promise((resolve) => {
                  com.veeva.clm.getDataForCurrentObject("User", "ID", (data) => {
                    if (data.success) {
                      resolve(data.User.ID);
                    } else {
                      resolve();
                    }
                  });
                });

                //get territory id
                let territoryId = await new Promise((resolve) => {
                  com.veeva.clm.queryRecord("UserTerritory2Association", ["UserId", "Territory2Id"], "WHERE UserId = '" + userId + "'", [], null, (data) => {
                    if (data.success) {
                      if (data.UserTerritory2Association.length > 0) {
                        resolve(data.UserTerritory2Association[0].Territory2Id);
                      } else {
                        resolve();
                      }
                    } else {
                      resolve();
                    }
                  });
                });

                //get territory name
                let territoryName = await new Promise((resolve) => {
                  com.veeva.clm.queryRecord("Territory2", ["Name"], "WHERE ID = '" + territoryId + "'", [], null, (data) => {
                    if (data.success) {
                      if (data.Territory2.length > 0) {
                        resolve(data.Territory2[0].Name);
                      } else {
                        resolve();
                      }
                    } else {
                      resolve();
                    }
                  });
                });

                //get TSF record for the account
                slidesSequenceInput = await new Promise((resolve) => {
                  com.veeva.clm.queryRecord(
                    "TSF_vod__c",
                    ["Territory_vod__c, Account_vod__c, " + field],
                    "WHERE Account_vod__c = '" + accountId + "' AND Territory_vod__c = '" + territoryName + "'",
                    [],
                    null,
                    (data) => {
                      if (data.success) {
                        if (data.TSF_vod__c.length > 0) {
                          resolve(data.TSF_vod__c[0][field].split(",").map((item) => item.trim()));
                        } else {
                          resolve();
                        }
                      } else {
                        resolve();
                      }
                    }
                  );
                });

                break;
            }
            break;
        }

        if (slidesSequenceInput) {
          //identify slide ids
          let slidesSequence = [];
          slidesSequenceInput.forEach((item) => {
            let slide;
            if (item.indexOf(".zip") > -1) {
              //input is a zip name
              slide = this.vars.slides.find((slide) => {
                return slide.player.zipName == item;
              });
            } else {
              //input is a slideId (ToDo: consider a slide "alias" to simplify the input)
              slide = this.vars.slides.find((slide) => {
                return slide.id == item;
              });
            }
            if (slide) slidesSequence.push(slide.id);
          });

          resolve(slidesSequence);
        } else {
          resolve();
        }
      })();
    });
  },
  myPresentations: function () {
    return new Promise((resolve) => {
      (async () => {
        //only in iPad
        if (!/iPad/.test(navigator.userAgent)) {
          resolve();
          return;
        }

        //get presentation ID
        let presentationId = await new Promise((resolve) => {
          com.veeva.clm.getDataForCurrentObject("Presentation", "ID", (data) => {
            if (data.success) {
              resolve(data.Presentation.ID);
            }
          });
        });

        //get key messages IDs
        let keyMessageIds = await new Promise((resolve) => {
          com.veeva.clm.queryRecord(
            "Clm_Presentation_Slide_vod__c",
            ["Key_Message_vod__c"],
            `Clm_Presentation_vod__c = "${presentationId}"`,
            ["Display_Order_vod__c, ASC"],
            null,
            (data) => {
              if (data.success) {
                resolve(data.Clm_Presentation_Slide_vod__c.map((item) => item.Key_Message_vod__c));
              }
            }
          );
        });

        //get key messages zip names
        let keyMessageZipNames = await new Promise((resolve) => {
          let whereClause = keyMessageIds
            .map((item) => {
              return `ID = "${item}" OR`;
            })
            .join(" ")
            .slice(0, -3);

          com.veeva.clm.queryRecord("Key_Message_vod__c", ["ID", "Media_File_Name_vod__c"], whereClause, [], null, (data) => {
            if (data.success) {
              resolve(
                data.Key_Message_vod__c.sort((a, b) => {
                  return keyMessageIds.indexOf(a.ID) - keyMessageIds.indexOf(b.ID); //sort data.Key_Message_vod__c by keyMessageIds
                }).map((item) => item.Media_File_Name_vod__c)
              ); //keep just the zip name
            }
          });
        });

        //set standard presentation zip names array for comparison
        let standardPresZips = this.vars.slides.map((item) => item.player.zipName);

        //check if retrieved zip names list is the same as in config
        let isSame = standardPresZips.every((item) => {
          return keyMessageZipNames.includes(item);
        });

        //if not same, return actual slides sequence
        if (!isSame) {
          let slidesSequence = [];

          //mixed presentation flag
          let isMixedPresentation = false;

          //identify slide ids
          keyMessageZipNames.forEach((item) => {
            let slide;
            if (item.indexOf(".zip") > -1) {
              //input is a zip name
              slide = this.vars.slides.find((slide) => {
                return slide.player.zipName == item;
              });
            } else {
              //input is a slideId
              slide = this.vars.slides.find((slide) => {
                return slide.id == item;
              });
            }
            if (slide) {
              //found slide in config.js
              slidesSequence.push(slide.id);
            } else {
              //key message not found in config.js >> mixed custom presentation
              isMixedPresentation = true;
            }
          });

          resolve({ slidesSequence: slidesSequence, isMixedPresentation: isMixedPresentation }); //the presentation is custom: return a sequence of slide ids based on the input + mixed presentation flag
        } else {
          resolve({ slidesSequence: null, isMixedPresentation: null }); //the presentation is standard, return nothing
        }
      })();
    });
  },
  externalFunction: function () {
    return new Promise((resolve) => {
      let functionName = this.vars.options.dynamicPresentation.source.externalFunction.functionName;
      let slidesSequenceInput = window[functionName]();
      let slidesSequence = [];

      if (Array.isArray(slidesSequenceInput)) {
        //identify slide ids
        slidesSequenceInput.forEach((item) => {
          let slide;
          if (item.indexOf(".zip") > -1) {
            //input is a zip name
            slide = this.vars.slides.find((slide) => {
              return slide.player.zipName == item;
            });
          } else {
            //input is a slideId
            slide = this.vars.slides.find((slide) => {
              return slide.id == item;
            });
          }
          if (slide) slidesSequence.push(slide.id);
        });
      }

      if (slidesSequence.length == 0) {
        com.idc.util.log(`com.idc.clm.externalFunction: no slides found in ${functionName}()} ${slidesSequenceInput}`);
      }

      resolve(slidesSequence);
    });
  },
  callflows: function () {
    return new Promise((resolve) => {
      (async () => {
        let defaultCallflowParam = this.vars.options.dynamicPresentation.source.callflows.default;
        let selectedCallflow = null;

        //get slides for dynamic callflows
        for (let callflow of this.vars.options.dynamicPresentation.source.callflows.flows) {
          if (callflow.source) {
            let sourceFnc = callflow.source;
            if (sourceFnc !== "undefined" && sourceFnc !== "" && typeof window[sourceFnc] === "function") {
              let dyncamicCallflowSlides = await window[sourceFnc]();
              if (Array.isArray(dyncamicCallflowSlides) && dyncamicCallflowSlides.length > 0) {
                callflow.slides = dyncamicCallflowSlides;
              }
            }
          }
        }

        //identify selected callflow (could be stored as a session variable, or passed as a function or text parameter)
        //check if persistent session data contains a callflow selection
        if (this.persistentData.session.selectedCallflow) {
          if (this.vars.options.dynamicPresentation.source.callflows.flows.find((callflow) => callflow.name == this.persistentData.session.selectedCallflow)) {
            selectedCallflow = this.persistentData.session.selectedCallflow;
          }
        } else {
          //check if defaultCallflowParam is a function and returns a valid callflow name
          if (typeof window[defaultCallflowParam] == "function") {
            let functionOutput = window[defaultCallflowParam]();
            if (this.vars.options.dynamicPresentation.source.callflows.flows.find((callflow) => callflow.name == functionOutput)) {
              selectedCallflow = functionOutput;
            }
          } else {
            //check is defaultCallflowParam is a valid callflow name
            if (this.vars.options.dynamicPresentation.source.callflows.flows.find((callflow) => callflow.name == defaultCallflowParam)) {
              selectedCallflow = defaultCallflowParam;
            }
          }
        }

        let slidesSequence = [];
        if (selectedCallflow) {
          let callflow = this.vars.options.dynamicPresentation.source.callflows.flows.find((callflow) => callflow.name == selectedCallflow);
          let slidesSequenceInput = callflow.slides;

          if (Array.isArray(slidesSequenceInput)) {
            //identify slide ids
            slidesSequenceInput.forEach((item) => {
              let slide;
              if (item.indexOf(".zip") > -1) {
                //input is a zip name
                slide = this.vars.slides.find((slide) => {
                  return slide.player.zipName == item;
                });
              } else {
                //input is a slideId
                slide = this.vars.slides.find((slide) => {
                  return slide.id == item;
                });
              }
              if (slide) slidesSequence.push(slide.id);
            });
          }

          if (!slidesSequence || slidesSequence.length == 0) {
            com.idc.util.log(`com.idc.clm.callflows: unable to retrieve slides for callflow ${selectedCallflow}`);
          }
        }

        resolve({ name: selectedCallflow, sequence: slidesSequence });
      })();
    });
  },
  setCallflow: function (callflowName) {
    let selectedCallflow = null;

    //validate if harcoded callflows are active
    if (!this.vars.options.dynamicPresentation.source.callflows.active) {
      com.idc.util.log(`com.idc.clm.setCallflow: callflows source is inactive`);
      return;
    }

    //validate callflow name
    if (this.vars.options.dynamicPresentation.source.callflows.flows.find((callflow) => callflow.name == callflowName)) {
      selectedCallflow = callflowName;
    } else {
      com.idc.util.log(`com.idc.clm.setCallflow: invalid callflow name ${callflowName}`);
    }

    //retrieve slides sequence
    let slidesSequence = [];

    if (selectedCallflow) {
      let callflow = this.vars.options.dynamicPresentation.source.callflows.flows.find((callflow) => callflow.name == selectedCallflow);
      let slidesSequenceInput = callflow.slides;

      if (Array.isArray(slidesSequenceInput)) {
        //identify slide ids
        slidesSequenceInput.forEach((item) => {
          let slide;
          if (item.indexOf(".zip") > -1) {
            //input is a zip name
            slide = this.vars.slides.find((slide) => {
              return slide.player.zipName == item;
            });
          } else {
            //input is a slideId
            slide = this.vars.slides.find((slide) => {
              return slide.id == item;
            });
          }
          if (slide) slidesSequence.push(slide.id);
        });
      }

      if (slidesSequence.length == 0) {
        com.idc.util.log(`com.idc.clm.setCallflow: unable to retrieve slides for callflow ${selectedCallflow}`);
      }
    }

    if (slidesSequence.length > 0) {
      //set persistent callflow selection (for the session)
      this.persistentData.session.selectedCallflow = selectedCallflow;
      this.updatePersistentData();

      //set slides sequence
      this.setDynamicSlidesSequence({
        name: "callflows",
        slidesSequence: slidesSequence,
        callflow: callflowName,
      });

      //set current slide properties
      this.setCurrentSlideProperties();

      //standalone close button hidden flag
      if (this.vars.navigation.currentSlide.isStandalone) {
        let standaloneModalId = this.findSlide(this.vars.navigation.currentSlide.id).standaloneModal.modalId;
        document.querySelector(`#${standaloneModalId}`).closeButtonHiddenFlag();
      }

      //dynamic menu and navigation
      com.idc.ui.dynamicPresentation.setMenu(this.vars.navigation.actualSlidesSequence);
      com.idc.ui.dynamicPresentation.setAlertPopup();
      com.idc.ui.core.link.flagNonWorkingLinks();

      //set body vars
      this.setBodyVars();
    }
  },
  unSetCallflow: function () {
    //clear persistent callflow selection (for the session)
    this.persistentData.session.selectedCallflow = null;
    this.updatePersistentData();

    //set standard slides sequence
    this.setStandardSlidesSequence();

    //set current slide properties
    this.setCurrentSlideProperties();

    //standalone close button hidden flag
    if (this.vars.navigation.currentSlide.isStandalone) {
      let standaloneModalId = this.findSlide(this.vars.navigation.currentSlide.id).standaloneModal.modalId;
      document.querySelector(`#${standaloneModalId}`).closeButtonHiddenFlag();
    }

    //standard menu and navigation
    com.idc.ui.dynamicPresentation.unSetMenu();
    com.idc.ui.dynamicPresentation.unSetAlertPopup();
    com.idc.ui.core.link.unFlagNonWorkingLinks();

    //set body vars
    this.setBodyVars();
  },

  /*standalone groups -------------------------------------*/
  validateStandaloneGroup: function (group, slideId) {
    let groupIsValid = true;

    //no groups defined >> return false
    if (!this.vars.standaloneModalGroups.active) return false;

    //is dynamic presentation >> return false
    if  (this.vars.navigation.dynamicPresentation.active) {
      com.idc.util.log("com.idc.clm.validateStandaloneGroup: dynamic presentation / unable to activate standalone group");
      return false;
    }

    //find group
    let groupObj = this.vars.standaloneModalGroups.groups.find((item) => {
      return item.id == group;
    });
    if (!groupObj) {
      com.idc.util.log(`com.idc.clm.validateStandaloneGroup: group ${group} not found`);
      groupIsValid = false;
    }

    //find slide
    if (slideId) {
      if (!groupObj.slides.includes(slideId)) {
        com.idc.util.log(`com.idc.clm.validateStandaloneGroup: slide ${slideId} not found in group ${group}`);
        groupIsValid = false;
      }
    }

    return groupIsValid;
  },
  activateStandaloneGroup: function (group) {
    this.persistentData.session.selectedStandaloneGroup = group;
    this.updatePersistentData();
    this.setBodyVars();
  },
  deActivateStandaloneGroup: function () {
    this.persistentData.session.selectedStandaloneGroup = null;
    this.updatePersistentData();
    this.setBodyVars();
  },

  /*interaction summary -----------------------------------*/
  interactionSummaryTestData: function () {
    const minCalls = this.vars.interactionSummary.testModel.calls.min;
    const maxCalls = this.vars.interactionSummary.testModel.calls.max;
    const minEmails = this.vars.interactionSummary.testModel.emails.min;
    const maxEmails = this.vars.interactionSummary.testModel.emails.max;

    let considerEmailData = JSON.parse(this.vars.interactionSummary.visibility.tabs.emails);

    //account (use simulate object from config if available)
    if (this.vars.options.browserMode.simulate.objects.Account) {
      this.vars.metadata.account.name = this.vars.options.browserMode.simulate.objects.Account.Name;
      this.vars.metadata.account.id = this.vars.options.browserMode.simulate.objects.Account.ID;
      this.vars.metadata.account.salutation = this.vars.options.browserMode.simulate.objects.Account.Salutation;
    } else {
      this.vars.metadata.account.name = "John Smith";
      this.vars.metadata.account.id = "00000000000000001";
      this.vars.metadata.account.salutation = "Dr.";
    }

    //Approved_Document_vod__c crmId (browserMode only)
    if (this.vars.options.browserMode.active) {
      let crmIdCount = 0;
      if (this.vars.emailCart.active) {
        this.vars.emailCart.templates.forEach((template) => {
          template.crmId = "0000000000000000" + (crmIdCount + 10);
          crmIdCount++;
        });
        this.vars.emailCart.fragments.forEach((fragment) => {
          fragment.crmId = "0000000000000000" + (crmIdCount + 10);
          crmIdCount++;
        });
      }
      this.vars.interactionSummary.nonEmailCartItems.templates.forEach((template) => {
        template.crmId = "0000000000000000" + (crmIdCount + 10);
        crmIdCount++;
        template.fragments.forEach((fragment) => {
          fragment.crmId = "0000000000000000" + (crmIdCount + 10);
          crmIdCount++;
        });
      });
    }

    //Call2_vod__c
    let Call2_vod__c = [];
    for (let i = 0; i < Math.floor(Math.random() * maxCalls) + minCalls; i++) {
      let callDate = new Date();
      callDate.setDate(callDate.getDate() - Math.floor(Math.random() * 30));

      let callChannel = Math.random() < 0.5 ? "Video_vod" : "Face_to_face_vod";

      let Call2_vod__c_Record = {
        ID: "00000000000000000" + i,
        Call_Channel_vod__c: callChannel,
        Call_Datetime_vod__c: callDate.toISOString(),
        Status_vod__c: "Submitted_vod",
      };

      Call2_vod__c.push(Call2_vod__c_Record);
    }
    Call2_vod__c.forEach((record) => {
      Object.keys(record).forEach((field) => {
        if (this.vars.interactionSummary.fields.Call2_vod__c.indexOf(field) < 0) {
          delete record[field];
        }
      });
    });
    this.vars.interactionSummary.input.Call2_vod__c = Call2_vod__c;

    //Call2_Key_Message_vod__c
    let Call2_Key_Message_vod__c = [];
    let Call2_Key_Message_vod__c_Counter = 0;
    Call2_vod__c.forEach((call) => {
      let displayOrderCounter = 0;
      let secondsCounter = 0;

      this.vars.slides.forEach((slide) => {
        if (Math.random() < 0.3) return;

        let reaction = ["Positive", "Neutral", "Negative", "", "", ""][Math.floor(Math.random() * 6)];

        let startTime = new Date(call.Call_Datetime_vod__c);
        secondsCounter += Math.floor(Math.random() * 30) + 1;
        startTime.setSeconds(startTime.getSeconds() + secondsCounter);

        let Call2_Key_Message_vod__c_Record = {
          Display_Order_vod__c: displayOrderCounter + 1,
          Reaction_vod__c: reaction,
          Key_Message_vod__c: {
            Media_File_Name_vod__c: slide.browser.folder + ".zip",
            testModel: {
              slideId: slide.id,
            },
          },
          Duration_vod__c: Math.floor(Math.random() * 30) + 1,
          Call2_vod__c: call.ID,
          ID: "0000000000000000" + (Call2_Key_Message_vod__c_Counter + 10),
          Start_Time_vod__c: startTime.toISOString(),
        };

        Call2_Key_Message_vod__c.push(Call2_Key_Message_vod__c_Record);

        Call2_Key_Message_vod__c_Counter++;
        displayOrderCounter++;
      });
    });
    Call2_Key_Message_vod__c.forEach((record) => {
      Object.keys(record).forEach((field) => {
        if (this.vars.interactionSummary.fields.Call2_Key_Message_vod__c.indexOf(field) < 0) delete record[field];
      });
    });
    this.vars.interactionSummary.input.Call2_Key_Message_vod__c = Call2_Key_Message_vod__c;

    //Sent_Email_vod__c
    let Sent_Email_vod__c = [];
    let Sent_Email_vod__c_Counter = 0;
    let aeArray = [];
    if (considerEmailData) {
      {
        this.vars.emailCart.templates
          .map((item) => {
            return {
              id: item.id,
              vaultId: item.vaultId,
              crmId: item.crmId,
              group: "templates",
            };
          })
          .forEach((item) => {
            aeArray.push(item);
          });
        this.vars.emailCart.fragments
          .map((item) => {
            return {
              id: item.id,
              vaultId: item.vaultId,
              crmId: item.crmId,
              group: "fragments",
            };
          })
          .forEach((item) => {
            aeArray.push(item);
          });

        this.vars.interactionSummary.nonEmailCartItems.templates.forEach((template) => {
          aeArray.push({
            id: template.id,
            vaultId: template.vaultId,
            crmId: template.crmId,
            group: "nonEmailCartTemplates",
          });

          template.fragments.forEach((fragment) => {
            aeArray.push({
              id: fragment.id,
              vaultId: fragment.vaultId,
              crmId: fragment.crmId,
              group: "nonEmailCartFragments",
              template: template.id,
            });
          });
        });
      }

      for (let i = 0; i < Math.floor(Math.random() * maxEmails) + minEmails; i++) {
        let emailDate = new Date();
        emailDate.setDate(emailDate.getDate() - Math.floor(Math.random() * 30));

        let emailOpened = Math.random() < 0.7 ? 1 : 0;

        let openEmailDate;
        let openCount;
        let clickCount;
        if (emailOpened) {
          openEmailDate = new Date(); //has to be after emailDate
          openEmailDate.setDate(emailDate.getDate() + Math.floor(Math.random() * 3));

          openCount = Math.floor(Math.random() * 6) + 1;

          clickCount = Math.floor(Math.random() * 6);
        }

        let templatesArr = aeArray.filter((item) => item.group == "templates" || item.group == "nonEmailCartTemplates");
        let templateIndex = Math.floor(Math.random() * templatesArr.length);
        let template = templatesArr[templateIndex];
        let fragments;
        if (template.group == "templates") {
          fragments = aeArray.filter((item) => item.group == "fragments");
        } else {
          fragments = aeArray.filter((item) => item.group == "nonEmailCartFragments" && item.template == template.id);
        }

        let Sent_Email_vod__c_Record = {
          Opened_vod__c: emailOpened,
          Email_Sent_Date_vod__c: emailDate.toISOString(),
          Approved_Email_Template_vod__c: template.crmId,
          ID: "0000000000000000" + (Sent_Email_vod__c_Counter + 10),
          Click_Count_vod__c: clickCount ? clickCount : 0,
          Last_Open_Date_vod__c: openEmailDate ? openEmailDate.toISOString() : "",
          Last_Activity_Date_vod__c: openEmailDate ? openEmailDate.toISOString() : "",
          Open_Count_vod__c: openCount ? openCount : 0,
          Status_vod__c: "Delivered_vod",
          Email_Fragments_vod__c: fragments.map((item) => item.crmId).join(","),
        };

        Sent_Email_vod__c.push(Sent_Email_vod__c_Record);

        Sent_Email_vod__c_Counter++;
      }
      Sent_Email_vod__c.forEach((record) => {
        Object.keys(record).forEach((field) => {
          if (this.vars.interactionSummary.fields.Sent_Email_vod__c.indexOf(field) < 0) delete record[field];
        });
      });
    }
    this.vars.interactionSummary.input.Sent_Email_vod__c = Sent_Email_vod__c;

    //Email_Activity_vod__c
    let Email_Activity_vod__c = [];
    let Email_Activity_vod__c_Counter = 0;

    if (considerEmailData) {
      Sent_Email_vod__c.forEach((sentEmail) => {
        if (!sentEmail.Opened_vod__c) return;

        let activitiesArr = [];
        for (let i = 0; i < sentEmail.Open_Count_vod__c; i++) {
          activitiesArr.push("Opened_vod");
        }
        for (let i = 0; i < sentEmail.Click_Count_vod__c; i++) {
          activitiesArr.push("Clicked_vod");
        }

        activitiesArr.forEach((activityType) => {
          let vaultDocID;
          let vaultDocName;
          let vaultDocNumber;
          let fragmentId;
          if (activityType == "Clicked_vod") {
            if (!sentEmail.Email_Fragments_vod__c) return;
            let fragmentsArr = sentEmail.Email_Fragments_vod__c.split(",");
            let fragmentIndex = Math.floor(Math.random() * fragmentsArr.length);
            let fragment = aeArray.find((item) => item.crmId == fragmentsArr[fragmentIndex]);

            if (!fragment) return;

            vaultDocID = fragment.vaultId;
            vaultDocName = fragment.id;
            vaultDocNumber = fragment.crmId;
            fragmentId = fragment.crmId;
          }

          let Email_Activity_vod__c_Record = {
            Activity_DateTime_vod__c: sentEmail.Last_Activity_Date_vod__c,
            Vault_Doc_ID_vod__c: vaultDocID ? vaultDocID : "",
            Sent_Email_vod__c: sentEmail.ID,
            Vault_Doc_Name_vod__c: vaultDocName ? vaultDocName : "",
            Event_type_vod__c: activityType,
            Vault_Document_Number_vod__c: vaultDocNumber ? vaultDocNumber : "",
            ID: "0000000000000000" + (Email_Activity_vod__c_Counter + 10),
            Approved_Document_vod__c: fragmentId ? fragmentId : "",
          };

          Email_Activity_vod__c.push(Email_Activity_vod__c_Record);

          Email_Activity_vod__c_Counter++;
        });
      });
      Email_Activity_vod__c.forEach((record) => {
        Object.keys(record).forEach((field) => {
          if (this.vars.interactionSummary.fields.Email_Activity_vod__c.indexOf(field) < 0) delete record[field];
        });
      });
    }

    this.vars.interactionSummary.input.Email_Activity_vod__c = Email_Activity_vod__c;

    //Next Best Content CLM
    let sourceFnc = this.vars.interactionSummary.nextBestContent.clm.source.browser;
    if (sourceFnc !== "undefined" && sourceFnc !== "" && typeof window[sourceFnc] === "function") {
      let nextBestContentCLM = window[sourceFnc]();
      if (Array.isArray(nextBestContentCLM) && nextBestContentCLM.length > 0) {
        this.vars.interactionSummary.input.Next_Best_Content_CLM = nextBestContentCLM;
      }
    }
  },
  interactionSummaryModel: function () {
    let vars = this.vars;

    //test data: browser mode and simulated call
    if (vars.options.browserMode.active) {
      this.interactionSummaryTestData();
    }

    //account --------------------------------------------
    vars.interactionSummary.output.account.id = vars.metadata.account.id;
    vars.interactionSummary.output.account.name = vars.metadata.account.name;
    vars.interactionSummary.output.account.salutation = vars.metadata.account.salutation;

    //timeline -------------------------------------------
    {
      const timeLineTemplate = vars.interactionSummary.output.timeline.splice(0)[0];

      //call records to add CLM views to timeline
      vars.interactionSummary.input.Call2_vod__c.forEach((call) => {
        if (!call.Status_vod__c == "Submitted_vod") return; //only submitted calls

        let record = JSON.parse(JSON.stringify(timeLineTemplate));

        //delete email branch
        delete record.email;

        //set type and channel
        record.id = call.ID;
        record.type = "call";
        record.call.channel = call.Call_Channel_vod__c;

        //set date
        let tmpDate = call.Call_Datetime_vod__c;
        let recordDate, recordTime, recordAMPM;
        if (tmpDate) {
          if (tmpDate.indexOf("T") > 0) {
            recordDate = tmpDate.split("T")[0];
            let tmpHour = parseInt(tmpDate.split("T")[1].split(":")[0]);
            if (tmpHour > 12) {
              recordTime = tmpHour - 12 + ":" + tmpDate.split("T")[1].split(":").slice(1, 2).join(":");
            } else {
              recordTime = tmpHour + ":" + tmpDate.split("T")[1].split(":").slice(1, 2).join(":");
            }
            recordAMPM = tmpHour >= 12 ? "PM" : "AM";
          }
        }
        record.datetime = tmpDate;
        record.date = recordDate;
        record.time = recordTime;
        record.time_AMPM = recordAMPM;

        //slides (call key message records for current call)
        let slideTemplate = record.call.slides.splice(0)[0];
        vars.interactionSummary.input.Call2_Key_Message_vod__c.filter((callKeyMessage) => callKeyMessage.Call2_vod__c == call.ID) //call key message records for current call
          .sort((a, b) => a.Display_Order_vod__c - b.Display_Order_vod__c) //sort by display order
          .forEach((callKeyMessage) => {
            let slideRecord = JSON.parse(JSON.stringify(slideTemplate));

            //search slide in config.js
            let slide;
            if (callKeyMessage.Key_Message_vod__c.testModel) {
              slide = vars.slides.find((slide) => slide.id == callKeyMessage.Key_Message_vod__c.testModel.slideId); //testModel workaround as slides will still no have media file name
            } else {
              slide = vars.slides.find((slide) => slide.player.zipName == callKeyMessage.Key_Message_vod__c.Media_File_Name_vod__c);
            }

            if (!slide) return;

            //populate slide record
            slideRecord.id = slide.id;
            slideRecord.title = slide.description;
            slideRecord.displayOrder = callKeyMessage.Display_Order_vod__c;
            slideRecord.duration = Math.round(callKeyMessage.Duration_vod__c);
            slideRecord.reaction = callKeyMessage.Reaction_vod__c;

            //add to array
            record.call.slides.push(slideRecord);
          });

        //for consecutive views of same slide, keep one record, add up time, keep last reaction
        if (vars.interactionSummary.groupViewsForSameSlide) {
          let newSlidesArr = [];
          let prevSlideId = null;
          for (let i = 0; i < record.call.slides.length; i++) {
            let slide = record.call.slides[i];
            if (slide.id != prevSlideId) {
              newSlidesArr.push(slide);
            } else {
              newSlidesArr[newSlidesArr.length - 1].duration += slide.duration;
              if (slide.reaction) {
                newSlidesArr[newSlidesArr.length - 1].reaction = slide.reaction;
              }
            }
            prevSlideId = slide.id;
          }
          record.call.slides = newSlidesArr;
        }

        //add to timeline
        vars.interactionSummary.output.timeline.push(record);
      });

      //email records
      vars.interactionSummary.input.Sent_Email_vod__c.forEach((sentEmail) => {
        if (!sentEmail.Email_Sent_Date_vod__c) return; //only sent emails (no saved)

        let record = JSON.parse(JSON.stringify(timeLineTemplate));

        //delete call branch
        delete record.call;

        //set type
        record.id = sentEmail.ID;
        record.type = "email";

        //set date
        let tmpDate = sentEmail.Email_Sent_Date_vod__c;
        let recordDate, recordTime, recordAMPM;
        if (tmpDate.indexOf("T") > 0) {
          recordDate = tmpDate.split("T")[0];
          let tmpHour = parseInt(tmpDate.split("T")[1].split(":")[0]);
          if (tmpHour > 12) {
            recordTime = tmpHour - 12 + ":" + tmpDate.split("T")[1].split(":").slice(1, 2).join(":");
          } else {
            recordTime = tmpHour + ":" + tmpDate.split("T")[1].split(":").slice(1, 2).join(":");
          }
          recordAMPM = tmpHour >= 12 ? "PM" : "AM";
        }
        record.datetime = tmpDate;
        record.date = recordDate;
        record.time = recordTime;
        record.time_AMPM = recordAMPM;

        //search tempalte in email template or non-email cart items
        let template, templateType;
        {
          //try to find in email cart templates
          template = vars.emailCart.templates.find((template) => template.crmId == sentEmail.Approved_Email_Template_vod__c);
          if (template) {
            templateType = "emailCart";
          }
          //try to find in non email cart templates
          if (!template) {
            template = vars.interactionSummary.nonEmailCartItems.templates.find((template) => template.crmId == sentEmail.Approved_Email_Template_vod__c);
            templateType = "nonEmailCartItems";
          }
          if (!template) return;
        }

        //populate template record
        record.email.id = template.id;
        record.email.title = template.title;
        record.email.opens = sentEmail.Open_Count_vod__c;
        record.email.clicks = 0;

        //fragments
        let fragmentTemplate = record.email.fragments.splice(0)[0];

        if (sentEmail.Email_Fragments_vod__c) {
          let fragmentIDs = sentEmail.Email_Fragments_vod__c.split(",");
          fragmentIDs.forEach((fragmentID) => {
            //search fragment
            let fragment;
            if (templateType == "emailCart") {
              fragment = vars.emailCart.fragments.find((fragment) => fragment.crmId == fragmentID);
            } else {
              fragment = template.fragments.find((fragment) => fragment.crmId == fragmentID);
            }
            if (!fragment) return;
  
            //populate fragment record
            let fragmentRecord = JSON.parse(JSON.stringify(fragmentTemplate));
            fragmentRecord.id = fragment.id;
            fragmentRecord.title = fragment.title;
            fragmentRecord.linksTo = fragment.linksTo;
            fragmentRecord.clicks = 0;
  
            vars.interactionSummary.input.Email_Activity_vod__c.filter(
              (emailActivity) => emailActivity.Sent_Email_vod__c == sentEmail.ID && emailActivity.Approved_Document_vod__c == fragment.crmId
            ).forEach((emailActivity) => {
              if (!emailActivity.Approved_Document_vod__c) return; //only events for approved documents (email fragments)
              if (emailActivity.Event_type_vod__c != "Clicked_vod") return; //only click events
  
              //increment fragment clicks
              fragmentRecord.clicks++;
  
              //increment email clicks
              record.email.clicks++;
            });
  
            //add to array
            record.email.fragments.push(fragmentRecord);
          });
        }

        //add to timeline
        vars.interactionSummary.output.timeline.push(record);
      });

      //sort timeline by date
      vars.interactionSummary.output.timeline.sort((a, b) => {
        return new Date(b.datetime) - new Date(a.datetime);
      });
    }

    //slides ---------------------------------------------
    {
      const slideTemplate = vars.interactionSummary.output.slides.splice(0)[0];

      vars.slides.forEach((slide) => {
        let record = JSON.parse(JSON.stringify(slideTemplate));

        //populate id and title
        record.id = slide.id;
        record.title = slide.description;

        //search call key message records for this slide
        let callKeyMessageRecords = vars.interactionSummary.input.Call2_Key_Message_vod__c.filter(function (callKeyMessage) {
          if (callKeyMessage.Key_Message_vod__c.testModel) {
            return callKeyMessage.Key_Message_vod__c.testModel.slideId == slide.id;
          } else {
            return callKeyMessage.Key_Message_vod__c.Media_File_Name_vod__c == slide.player.zipName;
          }
        }) //only call key message records for this slide
          .filter(
            (callKeyMessage) =>
              vars.interactionSummary.input.Call2_vod__c.find((call) => call.ID == callKeyMessage.Call2_vod__c && call.Status_vod__c == "Submitted_vod") //only call key message records for submitted calls
          )
          .sort((a, b) => new Date(b.Start_Time_vod__c) - new Date(a.Start_Time_vod__c)); //sort by start time

        //discussed/not discussed and mostRecentCall info
        if (callKeyMessageRecords.length > 0) {
          record.status = "discussed";

          let tmpDate = callKeyMessageRecords[0].Start_Time_vod__c;
          let recordDate, recordTime, recordAMPM;
          if (tmpDate) {
            if (tmpDate.indexOf("T") > 0) {
              recordDate = tmpDate.split("T")[0];
              let tmpHour = parseInt(tmpDate.split("T")[1].split(":")[0]);
              if (tmpHour > 12) {
                recordTime = tmpHour - 12 + ":" + tmpDate.split("T")[1].split(":").slice(1, 2).join(":");
              } else {
                recordTime = tmpHour + ":" + tmpDate.split("T")[1].split(":").slice(1, 2).join(":");
              }
              recordAMPM = tmpHour >= 12 ? "PM" : "AM";
            }
          }
          record.mostRecentCall.date = recordDate;
          record.mostRecentCall.time = recordTime;
          record.mostRecentCall.time_AMPM = recordAMPM;
          record.mostRecentCall.duration = Math.round(callKeyMessageRecords[0].Duration_vod__c);
          record.mostRecentCall.reaction = callKeyMessageRecords[0].Reaction_vod__c;
        } else {
          record.status = "notDiscussed";
        }

        //overal duration and reaction
        record.overall.timesDisplayed = callKeyMessageRecords.length;
        record.overall.duration.total = callKeyMessageRecords.reduce((acc, callKeyMessage) => {
          return acc + callKeyMessage.Duration_vod__c;
        }, 0);
        record.overall.duration.average = record.overall.timesDisplayed > 0 ? record.overall.duration.total / record.overall.timesDisplayed : 0;
        record.overall.reaction.positive = callKeyMessageRecords.reduce((acc, callKeyMessage) => {
          return callKeyMessage.Reaction_vod__c == "Positive" ? acc + 1 : acc;
        }, 0);
        record.overall.reaction.neutral = callKeyMessageRecords.reduce((acc, callKeyMessage) => {
          return callKeyMessage.Reaction_vod__c == "Neutral" ? acc + 1 : acc;
        }, 0);
        record.overall.reaction.negative = callKeyMessageRecords.reduce((acc, callKeyMessage) => {
          return callKeyMessage.Reaction_vod__c == "Negative" ? acc + 1 : acc;
        }, 0);

        //round numbers
        record.overall.duration.total = Math.round(record.overall.duration.total);
        record.overall.duration.average = Math.round(record.overall.duration.average);

        //all call dates
        record.overall.callDates = callKeyMessageRecords.map((callKeyMessage) => callKeyMessage.Start_Time_vod__c);

        //add to array
        vars.interactionSummary.output.slides.push(record);
      });

      //next best content
      if (vars.interactionSummary.nextBestContent.clm.active) {
        vars.interactionSummary.input.Next_Best_Content_CLM.forEach((item) => {
          let slideIndex = vars.interactionSummary.output.slides.findIndex(function (slide) {
            if (item.zipName) {
              let tmpSlide = vars.slides.find((s) => s.player.zipName == item.zipName);
              if (tmpSlide) {
                return slide.id == tmpSlide.id;
              }
            } else {
              if (item.id) {
                return slide.id == item.id;
              }
            }
          });
          if (slideIndex >= 0) {
            vars.interactionSummary.output.slides[slideIndex].nextBestContent.recommended = true;
            if (Number.isInteger(item.order)) {
              vars.interactionSummary.output.slides[slideIndex].nextBestContent.order = item.order;
            }
          }
        });
      }
    }

    //emails ---------------------------------------------
    {
      const emailTemplate = vars.interactionSummary.output.emails.splice(0)[0];

      //email cart items
      vars.emailCart.templates.forEach((template) => {
        let record = JSON.parse(JSON.stringify(emailTemplate));

        //populate id and title
        record.id = template.id;
        record.title = template.title;
        record.crmId = template.crmId;
        record.isEmailCart = true;
        record.thumbnail = template.thumb;

        //fragments (only for first email template in email cart)
        let indexOfTemplate = vars.emailCart.templates.findIndex((item) => item.id == template.id);
        if (indexOfTemplate == 0) {
          let fragmentTemplate = record.fragments.splice(0)[0];
          vars.emailCart.fragments.forEach((fragment) => {
            let fragmentRecord = JSON.parse(JSON.stringify(fragmentTemplate));

            //populate id and title
            fragmentRecord.id = fragment.id;
            fragmentRecord.title = fragment.title;
            fragmentRecord.crmId = fragment.crmId;

            //add to array
            record.fragments.push(fragmentRecord);
          });

          if (!vars.emailCart.fragments || vars.emailCart.fragments.length == 0) {
            record.fragments = [];
          }
        } else {
          record.fragments = [];
        }

        //add to array
        vars.interactionSummary.output.emails.push(record);
      });

      //non-email cart items
      vars.interactionSummary.nonEmailCartItems.templates.forEach((template) => {
        let record = JSON.parse(JSON.stringify(emailTemplate));

        //populate id and title
        record.id = template.id;
        record.title = template.title;
        record.crmId = template.crmId;
        record.thumbnail = template.thumb;

        //fragments
        let fragmentTemplate = record.fragments.splice(0)[0];
        template.fragments.forEach((fragment) => {
          let fragmentRecord = JSON.parse(JSON.stringify(fragmentTemplate));

          //populate id and title
          fragmentRecord.id = fragment.id;
          fragmentRecord.title = fragment.title;
          fragmentRecord.crmId = fragment.crmId;

          //add to array
          record.fragments.push(fragmentRecord);
        });
        if (template.fragments.length == 0) {
          record.fragments = [];
        }

        //add to array
        vars.interactionSummary.output.emails.push(record);
      });

      //activity
      vars.interactionSummary.output.emails.forEach((email) => {
        //sent emails for this template
        let sentEmails = vars.interactionSummary.input.Sent_Email_vod__c.sort(
          (a, b) => new Date(b.Email_Sent_Date_vod__c) - new Date(a.Email_Sent_Date_vod__c)
        ).filter((sentEmail) => sentEmail.Approved_Email_Template_vod__c == email.crmId && sentEmail.Email_Sent_Date_vod__c);

        //status: sent/not sent
        if (sentEmails.length > 0) {
          email.status = "sent";
        } else {
          email.status = "notSent";
        }

        //most recent email
        let mostRecentEmail;
        if (sentEmails.length > 0) {
          mostRecentEmail = sentEmails[0];
        }
        if (mostRecentEmail) {
          email.mostRecentSent.sentEmailID = mostRecentEmail.ID;

          let tmpDate = mostRecentEmail.Email_Sent_Date_vod__c;
          let recordDate, recordTime, recordAMPM;
          if (tmpDate.indexOf("T") > 0) {
            recordDate = tmpDate.split("T")[0];
            let tmpHour = parseInt(tmpDate.split("T")[1].split(":")[0]);
            if (tmpHour > 12) {
              recordTime = tmpHour - 12 + ":" + tmpDate.split("T")[1].split(":").slice(1, 2).join(":");
            } else {
              recordTime = tmpHour + ":" + tmpDate.split("T")[1].split(":").slice(1, 2).join(":");
            }
            recordAMPM = tmpHour >= 12 ? "PM" : "AM";
          }
          email.mostRecentSent.date = recordDate;
          email.mostRecentSent.time = recordTime;
          email.mostRecentSent.time_AMPM = recordAMPM;

          email.mostRecentSent.opens = mostRecentEmail.Open_Count_vod__c;
          email.mostRecentSent.clicks = mostRecentEmail.Click_Count_vod__c;
        }

        //most recent open email
        let mostRecentOpen;
        if (sentEmails.length > 0) {
          mostRecentOpen = sentEmails.find((sentEmail) => sentEmail.Opened_vod__c);
        }
        if (mostRecentOpen) {
          email.mostRecentOpen.sentEmailID = mostRecentOpen.ID;

          let tmpDate = mostRecentOpen.Email_Sent_Date_vod__c;
          let recordDate, recordTime, recordAMPM;
          if (tmpDate.indexOf("T") > 0) {
            recordDate = tmpDate.split("T")[0];
            let tmpHour = parseInt(tmpDate.split("T")[1].split(":")[0]);
            if (tmpHour > 12) {
              recordTime = tmpHour - 12 + ":" + tmpDate.split("T")[1].split(":").slice(1, 2).join(":");
            } else {
              recordTime = tmpHour + ":" + tmpDate.split("T")[1].split(":").slice(1, 2).join(":");
            }
            recordAMPM = tmpHour >= 12 ? "PM" : "AM";
          }
          email.mostRecentOpen.date = recordDate;
          email.mostRecentOpen.time = recordTime;
          email.mostRecentOpen.time_AMPM = recordAMPM;

          email.mostRecentOpen.clicks = mostRecentOpen.Click_Count_vod__c;
        }

        //overall
        email.overall.sent = sentEmails.length;
        email.overall.sentDates = sentEmails.map((sentEmail) => sentEmail.Email_Sent_Date_vod__c);
        email.overall.opens = sentEmails.reduce((acc, sentEmail) => {
          return acc + sentEmail.Open_Count_vod__c;
        }, 0);
        email.overall.openDates = sentEmails.filter((sentEmail) => sentEmail.Opened_vod__c).map((sentEmail) => sentEmail.Email_Sent_Date_vod__c);
        email.overall.clicks = sentEmails.reduce((acc, sentEmail) => {
          return acc + sentEmail.Click_Count_vod__c;
        }, 0);

        email.fragments.forEach((fragment) => {
          //sent emails for this fragment
          let sentEmailsForThisFragment = sentEmails.filter(
            (sentEmail) => sentEmail.Email_Fragments_vod__c && sentEmail.Email_Fragments_vod__c.indexOf(fragment.crmId) > -1
          );

          if (sentEmailsForThisFragment.length > 0) {
            fragment.status = "sent";
          } else {
            fragment.status = "notSent";
          }

          //most recent email
          let mostRecentEmailForFragment;
          if (sentEmailsForThisFragment.length > 0) {
            mostRecentEmailForFragment = sentEmailsForThisFragment[0];
          }
          if (mostRecentEmailForFragment) {
            fragment.mostRecentSent.sentEmailID = mostRecentEmailForFragment.ID;

            let tmpDate = mostRecentEmailForFragment.Email_Sent_Date_vod__c;
            let recordDate, recordTime, recordAMPM;
            if (tmpDate.indexOf("T") > 0) {
              recordDate = tmpDate.split("T")[0];
              let tmpHour = parseInt(tmpDate.split("T")[1].split(":")[0]);
              if (tmpHour > 12) {
                recordTime = tmpHour - 12 + ":" + tmpDate.split("T")[1].split(":").slice(1, 2).join(":");
              } else {
                recordTime = tmpHour + ":" + tmpDate.split("T")[1].split(":").slice(1, 2).join(":");
              }
              recordAMPM = tmpHour >= 12 ? "PM" : "AM";
            }
            fragment.mostRecentSent.date = recordDate;
            fragment.mostRecentSent.time = recordTime;
            fragment.mostRecentSent.time_AMPM = recordAMPM;

            fragment.mostRecentSent.clicks = 0;
          }

          //clicks count for most recent email
          if (mostRecentEmailForFragment) {
            let clicksCountForMostRecentEmail = vars.interactionSummary.input.Email_Activity_vod__c.filter(
              (emailActivity) =>
                emailActivity.Sent_Email_vod__c == mostRecentEmailForFragment.ID &&
                emailActivity.Approved_Document_vod__c == fragment.crmId &&
                emailActivity.Event_type_vod__c == "Clicked_vod"
            ).length;
            fragment.mostRecentSent.clicks = clicksCountForMostRecentEmail;
          }

          //most recent email with clicks for fragment
          let mostRecentEmailWithClicksForFragment;
          if (sentEmailsForThisFragment.length > 0) {
            mostRecentEmailWithClicksForFragment = sentEmailsForThisFragment
              .sort((a, b) => new Date(b.Email_Sent_Date_vod__c) - new Date(a.Email_Sent_Date_vod__c))
              .find((sentEmail) => {
                return vars.interactionSummary.input.Email_Activity_vod__c.sort(
                  (a, b) => new Date(b.Activity_DateTime_vod__c) - new Date(a.Activity_DateTime_vod__c)
                ).find(
                  (emailActivity) =>
                    emailActivity.Sent_Email_vod__c == sentEmail.ID &&
                    emailActivity.Approved_Document_vod__c == fragment.crmId &&
                    emailActivity.Event_type_vod__c == "Clicked_vod"
                );
              });
          }

          //most recent activity for fragment
          let mostRecentEmailActivityForFragment;
          if (mostRecentEmailWithClicksForFragment) {
            mostRecentEmailActivityForFragment = vars.interactionSummary.input.Email_Activity_vod__c.sort(
              (a, b) => new Date(b.Activity_DateTime_vod__c) - new Date(a.Activity_DateTime_vod__c)
            ).find(
              (emailActivity) =>
                emailActivity.Sent_Email_vod__c == mostRecentEmailWithClicksForFragment.ID &&
                emailActivity.Approved_Document_vod__c == fragment.crmId &&
                emailActivity.Event_type_vod__c == "Clicked_vod"
            );
          }

          //most recent click
          if (mostRecentEmailWithClicksForFragment && mostRecentEmailActivityForFragment) {
            fragment.mostRecentClick.sentEmailID = mostRecentEmailWithClicksForFragment.ID;

            let tmpDate = mostRecentEmailActivityForFragment.Activity_DateTime_vod__c;
            let recordDate, recordTime, recordAMPM;
            if (tmpDate) {
              if (tmpDate.indexOf("T") > 0) {
                recordDate = tmpDate.split("T")[0];
                let tmpHour = parseInt(tmpDate.split("T")[1].split(":")[0]);
                if (tmpHour > 12) {
                  recordTime = tmpHour - 12 + ":" + tmpDate.split("T")[1].split(":").slice(1, 2).join(":");
                } else {
                  recordTime = tmpHour + ":" + tmpDate.split("T")[1].split(":").slice(1, 2).join(":");
                }
                recordAMPM = tmpHour >= 12 ? "PM" : "AM";
              }
            }
            fragment.mostRecentClick.date = recordDate;
            fragment.mostRecentClick.time = recordTime;
            fragment.mostRecentClick.time_AMPM = recordAMPM;

            fragment.mostRecentClick.emailActivityID = mostRecentEmailActivityForFragment.ID;
          }

          //overall
          fragment.overall.sent = sentEmailsForThisFragment.length;
          fragment.overall.sentDates = sentEmailsForThisFragment.map((sentEmail) => sentEmail.Email_Sent_Date_vod__c);
          fragment.overall.clicks = vars.interactionSummary.input.Email_Activity_vod__c.filter(
            (emailActivity) =>
              sentEmailsForThisFragment.find((sentEmail) => sentEmail.ID == emailActivity.Sent_Email_vod__c) &&
              emailActivity.Approved_Document_vod__c == fragment.crmId &&
              emailActivity.Event_type_vod__c == "Clicked_vod"
          ).length;
          fragment.overall.clickDates = vars.interactionSummary.input.Email_Activity_vod__c.filter(
            (emailActivity) =>
              sentEmailsForThisFragment.find((sentEmail) => sentEmail.ID == emailActivity.Sent_Email_vod__c) &&
              emailActivity.Approved_Document_vod__c == fragment.crmId &&
              emailActivity.Event_type_vod__c == "Clicked_vod"
          ).map((emailActivity) => emailActivity.Activity_DateTime_vod__c);

          //remove duplicates
          fragment.overall.sentDates = [...new Set(fragment.overall.sentDates)];
          fragment.overall.clickDates = [...new Set(fragment.overall.clickDates)];
        });
      });

      //open rate, click rate
      vars.interactionSummary.output.emails.forEach((email) => {
        email.overall.openRate = email.overall.opens > 0 ? email.overall.opens / email.overall.sent : 0;
        email.overall.clickRate = email.overall.clicks > 0 ? email.overall.clicks / email.overall.sent : 0;

        email.fragments.forEach((fragment) => {
          fragment.overall.clickRate = fragment.overall.clicks > 0 ? fragment.overall.clicks / email.overall.sent : 0;
        });
      });
    }

    vars.interactionSummary.output.ready = true;
  },

  /*common html -------------------------------------------*/
  commonElementDataKey: function (elementId) {
    return `com_idc_data_commonHTML__${(this.vars.project.name + this.vars.project.version).replace(/\s+/g, "").toLowerCase()}__${elementId}`;
  },
  saveCommonHTMLandRedirect: function () {
    let util = com.idc.util;
    let redirectSeconds = 3;

    //save elements
    this.vars.commonHTML.elements.forEach((commonElementId) => {
      let selector = `[data-common-html="${commonElementId}"]`;
      if (document.querySelector(selector)) {
        let elementDataKey = this.commonElementDataKey(commonElementId);
        let elementJSON = util.htmlToJSON(selector);
        window.localStorage.setItem(elementDataKey, JSON.stringify(elementJSON));
      }
    });

    //set slide to redirect to: previous slide (if specified in the URL) or to the first slide
    {
      const url = new URL(window.location.href);
      const searchParams = url.searchParams;

      let paramId = searchParams.get("redirect");
      let redirectSlide = this.findSlide(paramId);
      if (!redirectSlide) {
        redirectSlide = this.vars.slides[0];
      }

      //alert and timer
      let alertDiv = document.createElement("div");
      alertDiv.setAttribute("id", "__redirectAlertDiv");
      alertDiv.style.position = "absolute";
      alertDiv.style.zIndex = "1000";
      alertDiv.style.backgroundColor = "#ddd";
      alertDiv.style.color = "#000";
      alertDiv.style.padding = "10px";
      if (document.body.querySelector('[data-type="com.idc.ui.mainContent"]')) {
        document.body.querySelector('[data-type="com.idc.ui.mainContent"]').appendChild(alertDiv);
      } else {
        document.body.appendChild(alertDiv);
      }

      let count = 0;
      let redirect = true;
      setInterval(() => {
        count++;
        let alertDiv = document.querySelector("#__redirectAlertDiv");
        if (redirectSeconds - count > 0 && alertDiv) {
          alertDiv.innerHTML = `Redirecting to ${redirectSlide.id} in ${
            redirectSeconds - count
          } seconds... [<span style="color:blue; text-decoration:underline" id="#__redirectAlertDiv__Cancel">cancel</span>]`;
        }
      }, 1000);

      document.querySelector("#__redirectAlertDiv").addEventListener("click", () => {
        document.querySelector("#__redirectAlertDiv").remove();
        redirect = false;
      });

      //redirect
      setTimeout(() => {
        if (redirect) {
          let path = `../${redirectSlide.browser.folder}/index.html`;
          window.location.replace(path);
        }
      }, redirectSeconds * 1000);
    }
  },
  loadCommonHTML: function () {
    let util = com.idc.util;

    let processedItems = [];

    this.vars.commonHTML.elements.forEach((commonElementId) => {

      if (processedItems.includes(commonElementId)) {
        com.idc.util.log(
          `com.idc.clm.loadCommonHTML: duplicated id "${commonElementId}"`
        );
        return;
      } else {
        processedItems.push(commonElementId);
      }

      let elementDataKey = this.commonElementDataKey(commonElementId);
      let commonElement = window.localStorage.getItem(elementDataKey);
      let elementPlaceholder = document.querySelector(`[data-common-html="${commonElementId}"]`);
      if (!commonElement && elementPlaceholder) {
        com.idc.util.log(
          `com.idc.clm.loadCommonHTML: ${commonElementId} not found in localStorage. Please refresh navigate to common/index.html to refresh common elements`
        );
      }
      if (commonElement && elementPlaceholder) {
        util.jsonToHTML(JSON.parse(commonElement), commonElementId, elementPlaceholder, "replace");
      }
    });
  },

  /*ui ----------------------------------------------------*/
  uiInit: function () {
    com.idc.util.log("com.idc.clm.uiInit()");

    //load common html
    if (this.vars.options.browserMode.active && this.vars.commonHTML.active) {
      this.loadCommonHTML();
    }

    //screen resize event (orientation, scale and center)
    com.idc.ui.screenSize.onResize();
    com.idc.ui.screenSize.onOrientationChange();
    com.idc.ui.screenSize.checkOrientation();
    com.idc.ui.screenSize.scaleAndCenter();

    //awake elements
    com.idc.ui.core.accordion.awake();
    com.idc.ui.core.modal.awake();
    com.idc.ui.core.menu.awake();
    com.idc.ui.core.multi.awake();
    com.idc.ui.core.tab.awake();
    com.idc.ui.core.navigationArrows.awake();
    com.idc.ui.core.link.awake();

    //utilities menu
    com.idc.ui.core.utilitiesMenu.awake();

    //standard or standalone functionality
    if (!this.vars.navigation.currentSlide.isStandalone) {
      //set arrows visibility (depending on slide position)
      com.idc.ui.core.navigationArrows.setArrowsVisibility();
      //restore or reset persistent properties if back from standalone modal
      if (this.isBackFromStandAloneSlide()) {
        com.idc.ui.common.backFromStandalone.restorePersistentStylesAndClasses();
      } else {
        com.idc.ui.common.backFromStandalone.resetPersistentPropertiesStylesAndClasses();
      }
    } else {
      //open standalone modal
      let standaloneModalId = this.findSlide(this.vars.navigation.currentSlide.id).standaloneModal.modalId;
      document.querySelector(`#${standaloneModalId}`).open();
    }

    //swipe functionality
    if (/iPad/.test(navigator.userAgent)) {
      //iPad
      com.idc.ui.common.swipeListener(document, "iPad", this.handleSwipeNavigation);
    } else {
      //other
      com.idc.ui.common.swipeListener(document, "other", this.handleSwipeNavigation);
    }

    //mandatory popUp if necessary
    if (this.vars.options.mandatoryPopUp.active && this.vars.session.isNewSession) {
      let mandatoryPopUpEl = document.querySelector(`#${this.vars.options.mandatoryPopUp.element.id}`);
      if (mandatoryPopUpEl) {
        mandatoryPopUpEl.open();
      }
    }

    //dynamic menu and navigation if necessary
    if (this.vars.navigation.dynamicPresentation.active) {
      com.idc.ui.dynamicPresentation.setMenu(this.vars.navigation.actualSlidesSequence);
      com.idc.ui.dynamicPresentation.setAlertPopup();
      com.idc.ui.core.link.flagNonWorkingLinks();
    }

    //email cart if necessary
    if (this.vars.emailCart.active) {
      com.idc.ui.emailCart.init();
    }

    //references if necessary
    if (this.vars.references.active) {
      com.idc.ui.core.references.init();
    }

    //interaction summary if necessary
    if (this.vars.interactionSummary.active) {
      //wait for output.ready
      if (this.vars.session.isAnActualCall) {
        let waitInterval = setInterval(() => {
          if (this.vars.interactionSummary.output.ready) {
            clearInterval(waitInterval);
            com.idc.ui.interactionSummary.init();
          }
        }, 1000);
      } else {
        com.idc.ui.interactionSummary.disableOpenButton();
      }
    }

    //complex links >> set element if necessary
    if (this.persistentData.complexLinks.element.id) {
      //is the "from slide" the previous slide or 1 before the previous slide?
      let fromSlide = this.persistentData.complexLinks.fromSlide;
      let navigationHistory = this.persistentData.session.navigationHistory;
      let isPrevSlide = navigationHistory.length > 1 && navigationHistory[1] == fromSlide;
      let isPrevSlideMinus1 = navigationHistory.length > 2 && navigationHistory[2] == fromSlide;
      if (isPrevSlide || isPrevSlideMinus1) {
        //is the current slide the target slide?
        if (this.persistentData.complexLinks.toSlide == this.vars.navigation.currentSlide.id) {
          com.idc.ui.common.setComplexLinkElement();
          //clear data
          this.persistentData.complexLinks = JSON.parse(JSON.stringify(this.persistentDataTemplate.complexLinks));
          this.updatePersistentData();
        }
      } else {
        //clear data
        this.persistentData.complexLinks = JSON.parse(JSON.stringify(this.persistentDataTemplate.complexLinks));
        this.updatePersistentData();
      }
    }
  },

  /*email -------------------------------------------------*/
  loadEmailCart: function () {
    let selectedEmailCartItems = this.persistentData.session.selectedEmailCartItems;

    if (selectedEmailCartItems.length > 0) {
      this.updateEmailCart(this.persistentData.session.selectedEmailCartItems);
    }
  },
  updateEmailCart: function (selectedItems) {
    let vars = com.idc.clm.vars;

    //update status
    this.vars.emailCart[vars.emailCart.mode].forEach((item) => {
      if (selectedItems.includes(item.id)) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });

    //set persistent data
    this.persistentData.session.selectedEmailCartItems = selectedItems;
    this.updatePersistentData();
  },
  launchApprovedEmail: function (selectedOnly) {
    let vars = com.idc.clm.vars;
    let util = com.idc.util;

    let templateID = null;
    let fragmentIDs = [];

    if (!vars.session.isAnActualCall) {
      util.log("com.idc.clm.launchApprovedEmail: not an actual call");
      return;
    }

    if (this.vars.emailCart.mode == "fragments") {
      if (this.vars.emailCart.templates.length > 0) {
        templateID = this.vars.emailCart.templates[0].crmId;
      }
      if (selectedOnly) {
        //email cart functionality (template/selected fragments)
        fragmentIDs = this.vars.emailCart.fragments.filter((item) => item.selected).map((item) => item.crmId);
      } else {
        //email button functionality (template/all fragments)
        fragmentIDs = this.vars.emailCart.fragments.map((item) => item.crmId);
      }
    }
    if (this.vars.emailCart.mode == "templates") {
      if (selectedOnly) {
        //email cart functionality (selected template only)
        if (this.vars.emailCart.templates.length > 0) {
          templateID = this.vars.emailCart.templates.find((item) => item.selected).crmId;
        }
      } else {
        //email button functionality
        templateID = this.vars.emailCart.templates[0].crmId;
      }
    }

    com.veeva.clm.launchApprovedEmail(templateID, fragmentIDs, (result) => {
      util.log(result);
    });
  },
};

com.idc.util = {
  log: (pText) => {
    let debugMode = com.idc.clm.vars.options.debugMode.active;

    console.log(JSON.stringify(pText, null, 4));
    if (debugMode && com.idc.ui.inspector.isActive()) com.idc.ui.inspector.addLog(pText);
  },

  getDeviceType: function () {},

  htmlToJSON: function (pSelector) {
    const element = document.querySelector(pSelector);
    let result = [];

    const childNode = parse(element);
    if (childNode !== null) {
      result.push(childNode);
    }

    function parse(pEl) {
      let parsedElement = {};

      //get type
      parsedElement.type = pEl.nodeName;

      //do not proceed if type = comment
      if (parsedElement.type === "#comment") return;

      //get text
      if (parsedElement.type === "#text") {
        if (pEl.nodeValue.trim() !== "") {
          parsedElement.text = pEl.nodeValue.trim();
        } else {
          return;
        }
      }

      //get attributes
      if (typeof pEl.getAttributeNames === "function") {
        parsedElement.attributes = [];
        pEl.getAttributeNames().forEach((attributeName, index) => {
          let attribute = {};
          attribute[attributeName] = pEl.getAttribute(attributeName);
          parsedElement.attributes.push(attribute);
        });
      }

      //child nodes
      if (typeof pEl.childNodes === "object") {
        if (pEl.childNodes.length > 0) {
          parsedElement.childNodes = [];

          pEl.childNodes.forEach((childNode) => {
            const parsedChildNode = parse(childNode);
            if (parsedChildNode) {
              parsedElement.childNodes.push(parsedChildNode);
            }
          });
        }
      }

      return parsedElement;
    }

    //log to console
    log(result);

    //return
    return result;
  },

  jsonToHTML: function (pItem, pId, pTarget, pMethod) {
    const target = pTarget;
    const container = document.createElement("DIV");

    if (document.querySelector(`#${pId}`)) {
      document.querySelector(`#${pId}`).remove();
    }

    function add(pContainer, pItem, pId) {
      let element;

      //if (!pItem) return;

      if (pItem.type === "#text") {
        if (pItem.hasOwnProperty("text")) {
          element = document.createTextNode(pItem.text);
        }
      } else {
        if (pItem.type == "#comment") return;
        //set type
        element = document.createElement(pItem.type);

        //set attributes other than id
        pItem.attributes.forEach((attributeContainer) => {
          let attribute = attributeContainer;
          if (Object.keys(attribute !== "id")) {
            element.setAttribute(Object.keys(attribute)[0], Object.values(attribute)[0]);
          }
        });

        //set id
        if (typeof pId != "undefined" && pId !== null) {
          element.setAttribute("id", pId);
        }
        //child nodes
        if (pItem.hasOwnProperty("childNodes")) {
          pItem.childNodes.forEach((childNode) => {
            add(element, childNode);
          });
        }
      }

      if (typeof element !== "undefined") {
        pContainer.appendChild(element);
      }
    }

    add(container, pItem[0], pId);

    const elementRef = container.childNodes[0];

    switch (pMethod) {
      case "before":
        target.parentNode.insertBefore(container.childNodes[0], target);
        break;
      case "replace":
        target.parentNode.replaceChild(container.childNodes[0], target);
        break;
      case "child":
      default:
        target.appendChild(container.childNodes[0]);
    }

    return elementRef;
  },

  waitForElm: (pContext, pSelector) => {
    return new Promise((resolve) => {
      if (pContext.querySelector(pSelector)) {
        return resolve(pContext.querySelector(pSelector));
      }

      const observer = new MutationObserver((mutations) => {
        if (pContext.querySelector(pSelector)) {
          resolve(pContext.querySelector(pSelector));
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  },

  executeParameterFunction: (pFunction, pParam) => {
    if (pFunction !== "undefined" && pFunction !== "" && typeof window[pFunction] === "function") {
      if (!pParam) {
        return window[pFunction]();
      } else {
        return window[pFunction](pParam);
      }
    } else {
      com.idc.util.log(`com.idc.util.executeParameterFunction ERROR: ${pFunction} is not a function`);
    }
  },

  getElementAttribute: (pEl, pName) => {
    return pEl.hasAttribute(pName) ? (pEl.getAttribute(pName) !== "" ? pEl.getAttribute(pName) : "") : "";
  },

  readSetting: (pSettingsObj, pKeyChain, pType, pDefault, pLog) => {
    const pKeysArr = pKeyChain.split(".");
    let value = null;
    try {
      value = pSettingsObj[pKeysArr[0]];
      for (let i = 1; i < pKeysArr.length; i++) {
        value = value[pKeysArr[i]];
      }
    } catch (err) {
      if (typeof pLog == "undefined" || pLog == true) {
        com.idc.util.log(`readSetting ${pKeyChain} error: ${err}`);
      }
    }

    //true / false as text
    if (pType === "boolean" && typeof value === "string") {
      if (value.toLowerCase() == "true") {
        value = true;
      } else {
        if (value.toLowerCase() == "false") {
          value = false;
        }
      }
    }

    return value === null ? pDefault : typeof value === pType ? value : pDefault;
  },

  dispatchEvent: function (eventName, eventDetail) {
    let event = new CustomEvent(eventName, { detail: eventDetail });
    document.dispatchEvent(event);
  },

  getSharedResourcesPath: function () {
    let path = "";

    for (let item in document.getElementsByTagName("script")) {
      let scriptTag = document.getElementsByTagName("script")[item];
      if (scriptTag.src) {
        if (scriptTag.src.indexOf("common/") >= 0) {
          if (!com.idc.clm.vars.options.browserMode.active) {
            path = "common/";
          } else {
            path = "../common/";
          }
          continue;
        } else {
          if (scriptTag.src.indexOf("shared/") >= 0) {
            path = "./shared/";
            continue;
          }
        }
      }
    }

    return path;
  },

  setLabels: function (pEl, pDictionary) {
    if (pEl && pDictionary) {
      pEl.querySelectorAll("[data-label]").forEach((el) => {
        let label = pDictionary[el.getAttribute("data-label")];
        if (label && label !== "") {
          el.innerHTML = label;
        }
      });
    }
  },
};

com.idc.ui = {
  core: {
    accordion: {
      selector: '[data-type="com.idc.ui.core.accordion"]',
      collection: [],
      awake: function () {
        document.querySelectorAll(this.selector).forEach((el) => {
          //set attributes or buttons to validate
          const toValidate = {
            attributes: [],
            other: ["instances"],
          };

          if (this.isHTMLValid(el, toValidate)) {
            //retrieve or set accordion id
            let el_id;
            if (el.id === "") {
              el_id = com.idc.ui.common.generateUniqueId("com_idc_ui_core_accordion", this.collection);
              el.id = el_id;
              el.setAttribute("id", el_id);
              el.codeGeneratedId = true;
            } else {
              el_id = el.id;
            }

            //collection (do not proceed if already exists)
            if (this.collection.indexOf(el_id) >= 0) {
              if (document.querySelector(`#${el_id}`)) {
                if (el.activated) {
                  //do not proceed if element has already been activated
                  return;
                } else {
                  //the element exists in the collection and dom, but has not been activated (e.g. html code has been replaced)
                }
              } else {
                //element has been removed from DOM, remove from collection
                this.collection.splice(this.collection.indexOf(el_id), 1);
              }
            } else {
              //add to accordions collection
              this.collection.push(el_id);
            }

            //flag elements as activated
            el.activated = true;

            //view state
            el.viewState = {
              activeInstance: null,
            };

            //components collection
            el.components = {
              instances: [],
            };

            //components: instances (buttons and content)
            el.querySelectorAll(':scope > [data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.core.accordion.button"]').forEach((button) => {
              const instance = {
                name: button.getAttribute("data-instance"),
                button: {
                  element: button,
                },
                content: {
                  element: el.querySelector(
                    `:scope > [data-type="com.idc.ui.core.accordion.content"][data-instance="${button.getAttribute("data-instance")}"]`
                  ),
                },
                params: com.idc.ui.common.readElementOptions(button, {
                  beforeOpen: null,
                  afterOpen: null,
                  beforeClose: null,
                  afterClose: null,
                  initialState: null, //'open' will set the instance open by default
                }),
                viewState: null,
              };
              el.components.instances.push(instance);
            });

            //params
            el.params = com.idc.ui.common.readElementOptions(el, {
              oneByOne: true, //if 'true', just one instance at a time can be open
            });

            //assign functions and events
            el.itemClick = this.itemClick;
            el.setInstance = this.setInstance;
            el.getActiveInstance = this.getActiveInstance;
            el.closeAll = this.closeAll;
            el.openAll = this.openAll;
            el.overwriteParameterFunction = this.overwriteParameterFunction;
            el.resetToDefaults = this.resetToDefaults;

            el.components.instances.forEach((instance) => {
              instance.button.element.addEventListener("click", (event) => {
                el.itemClick(event.currentTarget.getAttribute("data-instance"));
              });
              instance.executeBeforeOpen = com.idc.ui.common.executeFunction.beforeOpen;
              instance.executeAfterOpen = com.idc.ui.common.executeFunction.afterOpen;
              instance.executeBeforeClose = com.idc.ui.common.executeFunction.beforeClose;
              instance.executeAfterClose = com.idc.ui.common.executeFunction.afterClose;
            });

            //reset to defaults
            el.resetToDefaults();

            //restore saved state if returned from standalone pop-up
            if (com.idc.clm.isBackFromStandAloneSlide()) {
              let activeInstances = com.idc.ui.common.backFromStandalone.getPersistentProperty(
                com.idc.clm.vars.navigation.currentSlide.id,
                el.id,
                "activeInstances"
              );
              if (activeInstances !== null) {
                //display all active instances
                activeInstances.value.forEach((instanceName) => {
                  el.setInstance(instanceName, true);
                });
              }
            }
          }
        });
      },
      itemClick: function (pInstance) {
        let instances = this.components.instances;

        const instanceIndex = instances.findIndex((instance) => {
          return instance.name === pInstance;
        });
        if (instances[instanceIndex].viewState === "on") {
          //execute before close
          instances[instanceIndex].executeBeforeClose();

          //close
          this.setInstance(pInstance, false);

          //execute after close
          instances[instanceIndex].executeAfterClose();
        } else {
          //execute before open
          instances[instanceIndex].executeBeforeOpen();

          //open
          this.setInstance(pInstance, true);

          //execute after open
          instances[instanceIndex].executeAfterOpen();
        }
      },
      setInstance: function (pInstance, pActive) {
        this.components.instances.forEach((instance) => {
          if (instance.name === pInstance) {
            //instance
            if (pActive) {
              //open
              instance.button.element.setAttribute("data-view-state", "on");
              instance.content.element.setAttribute("data-view-state", "on");
              instance.viewState = "on";

              //set active instance (only if OneByOne)
              if (this.params.oneByOne) {
                this.viewState.activeInstance = pInstance;
              }
            } else {
              //close
              instance.button.element.setAttribute("data-view-state", "off");
              instance.content.element.setAttribute("data-view-state", "off");
              instance.viewState = "off";

              //clear active instance (only if OneByOne)
              if (this.params.oneByOne) {
                this.viewState.activeInstance = null;
              }

              //reset child objects (revert to default state)
              com.idc.ui.common.resetChildElements(instance.content.element);
            }
          } else {
            //close all the rest if only one instance can be open at a time
            if (this.params.oneByOne && pActive) {
              instance.button.element.setAttribute("data-view-state", "off");
              instance.content.element.setAttribute("data-view-state", "off");
              instance.viewState = "off";

              if (this.params.oneByOne) {
                this.viewState.activeInstance = null;
              }

              //reset child objects (revert to default state)
              com.idc.ui.common.resetChildElements(instance.content.element);
            }
          }
        });

        //save state (active instances)
        if (!this.codeGeneratedId) {
          //only if the element has an ID defined in the HTML
          let activeInstances = [];
          this.components.instances.forEach((instance) => {
            if (instance.viewState === "om") {
              activeInstances.push(instance.name);
            }
          });

          com.idc.ui.common.backFromStandalone.setPersistentProperty(
            com.idc.clm.vars.navigation.currentSlide.id,
            this.id,
            "activeInstances",
            "viewState",
            activeInstances
          );
        }

        //recently set flag (prevent from resetting before 1 sec after being set)
        this.recentlySet = true;
        setTimeout(() => {
          this.recentlySet = false;
        }, 1000);
      },
      getActiveInstance: function () {
        const activeInstanceIndex = this.components.instances.findIndex((instance) => {
          return instance.viewState === "om";
        });
        if (activeInstanceIndex >= 0) {
          return this.components.instances[activeInstanceIndex];
        }
      },
      closeAll: function () {
        this.components.instances.forEach((instance) => {
          instance.button.element.setAttribute("data-view-state", "off");
          instance.content.element.setAttribute("data-view-state", "off");
          instance.viewState = "off";

          //reset child objects (revert to default state)
          com.idc.ui.common.resetChildElements(instance.content.element);
        });
      },
      openAll: function () {
        if (!this.params.oneByOne) {
          this.components.instances.forEach((instance) => {
            instance.button.element.setAttribute("data-view-state", "om");
            instance.content.element.setAttribute("data-view-state", "om");
            instance.viewState = "om";
          });
        }
      },
      isHTMLValid: function (pElement, pToValidate) {
        let errorList = "";

        //attributes
        pToValidate.attributes.forEach((attribute) => {
          if (com.idc.util.getElementAttribute(pElement, attribute) === "") {
            errorList = `${errorList} missing ${attribute} attribute; `;
          }
        });

        //instances and buttons
        if (pToValidate.other.indexOf("instances") >= 0) {
          const buttonCount = pElement.querySelectorAll(
            ':scope > [data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.core.accordion.button"]'
          ).length;
          const contentCount = pElement.querySelectorAll(':scope > [data-type="com.idc.ui.core.accordion.content"]').length;

          if (buttonCount !== contentCount) {
            errorList = `${errorList} number of buttons and content instances do not match; `;
          }
        }

        if (errorList !== "") com.idc.util.log(`${com.idc.util.getElementAttribute(pElement, "data-type")} ${pElement.id}: ${errorList}`);

        return errorList === "";
      },
      overwriteParameterFunction: function (pInstance, pEvent, pFunction) {
        let instances = this.components.instances;

        if (typeof pFunction === "function") {
          const instanceIndex = instances.findIndex((instance) => {
            return instance.name === pInstance;
          });

          switch (pEvent) {
            case "beforeOpen":
              instances[instanceIndex].executeBeforeOpen = pFunction;
              break;
            case "afterOpen":
              instances[instanceIndex].executeAfterOpen = pFunction;
              break;
            case "beforeClose":
              instances[instanceIndex].executeBeforeClose = pFunction;
              break;
            case "afterClose":
              instances[instanceIndex].executeAfterClose = pFunction;
              break;
          }
        }
      },
      resetToDefaults: function () {
        if (this.recentlySet) return;

        //any instance set to open by default?
        if (this.components.instances.findIndex((instance) => instance.params.initialState === "open") >= 0) {
          //open instances if set by param
          this.components.instances.forEach((instance) => {
            if (instance.params.initialState === "open") {
              this.setInstance(instance.name, true);
            }
          });
        } else {
          //no instances set to open by default
          this.closeAll();
        }
      },
    },
    link: {
      selector: '[data-type="com.idc.ui.core.link"]',
      collection: [],
      awake: function () {
        document.querySelectorAll(this.selector).forEach((el) => {
          //set attributes or buttons to validate
          const toValidate = {
            attributes: [],
            other: [],
          };

          if (this.isHTMLValid(el, toValidate)) {
            //retrieve or set link id
            let el_id;
            if (el.id === "") {
              el_id = com.idc.ui.common.generateUniqueId("com_idc_ui_core_link", this.collection);
              el.id = el_id;
              el.setAttribute("id", el_id);
              el.codeGeneratedId = true;
            } else {
              el_id = el.id;
            }

            //collection (do not proceed if already exists)
            if (this.collection.indexOf(el_id) >= 0) {
              if (document.querySelector(`#${el_id}`)) {
                if (el.activated) {
                  //do not proceed if element has already been activated
                  return;
                } else {
                  //the element exists in the collection and dom, but has not been activated (e.g. html code has been replaced)
                }
              } else {
                //element has been removed from DOM, remove from collection
                this.collection.splice(this.collection.indexOf(el_id), 1);
              }
            } else {
              //add to accordions collection
              this.collection.push(el_id);
            }

            //flag elements as activated
            el.activated = true;

            //params
            el.params = com.idc.ui.common.readElementOptions(el, {
              elId: null, //target slide element id (complex link)
              elType: null, //target slide element type (complex link)
              elInstance: null, //target slide element instance (complex link tab/accordion/multi)
            });

            el.addEventListener("click", (evt) => {
              let vars = com.idc.clm.vars;
              let persistentData = com.idc.clm.persistentData;
              //do not proceed if non-working-link or disabled
              if (el.getAttribute("data-non-working-link") || el.getAttribute("data-view-state") == "disabled") return;

              //target id
              let targetId = com.idc.util.getElementAttribute(el, "data-target-id")
                ? com.idc.util.getElementAttribute(el, "data-target-id")
                : com.idc.util.getElementAttribute(el, "data-target-id-fnc")
                ? com.idc.util.executeParameterFunction(com.idc.util.getElementAttribute(el, "data-target-id-fnc"))
                : "";

              //override function
              let overrideFnc;
              if (com.idc.clm.vars.options.linkOverride.active) {
                let localOverrideFnc = com.idc.util.getElementAttribute(el, "data-link-override-fnc");
                let globalOverrideFnc = com.idc.clm.vars.options.linkOverride.global;

                if (localOverrideFnc) {
                  overrideFnc = localOverrideFnc;
                } else {
                  if (globalOverrideFnc) {
                    overrideFnc = globalOverrideFnc;
                  }
                }
              }

              //standalone modal group (not in dynamic presentation mode or eval function)
              let standaloneGroup = com.idc.util.getElementAttribute(el, "data-standalone-group");
              if (standaloneGroup) {
                if (!overrideFnc) {
                  if (com.idc.clm.validateStandaloneGroup(standaloneGroup, targetId)) {
                    com.idc.clm.activateStandaloneGroup(standaloneGroup);
                  }
                } else {
                  com.idc.util.log("com.idc.ui.core.link: link eval function / unable to activate standalone group");
                }
              }

              //complex link >> update persistent data
              if (el.params.elId) {
                persistentData.complexLinks.fromSlide = vars.navigation.currentSlide.id;
                persistentData.complexLinks.toSlide = targetId;
                persistentData.complexLinks.originatorType = "link";
                persistentData.complexLinks.element.type = el.params.elType;
                persistentData.complexLinks.element.id = el.params.elId;
                persistentData.complexLinks.element.instance = el.params.elInstance;
                com.idc.clm.updatePersistentData();
              }

              //goto slide
              if (targetId != "" && !overrideFnc) {
                com.idc.clm.gotoSlide(targetId);
              }

              //override function
              if (overrideFnc) {
                com.idc.util.executeParameterFunction(overrideFnc, { targetId: targetId });
              }
            });
          }
        });
      },
      isHTMLValid: function (pElement, pToValidate) {
        let errorList = "";

        //attributes
        pToValidate.attributes.forEach((attribute) => {
          if (com.idc.util.getElementAttribute(pElement, attribute) === "") {
            errorList = `${errorList} missing ${attribute} attribute; `;
          }
        });

        let targetId = com.idc.util.getElementAttribute(pElement, "data-target-id");
        if (!targetId) {
          let targetIdFnc = com.idc.util.getElementAttribute(pElement, "data-target-id-fnc");
          if (targetIdFnc) {
            targetId = com.idc.util.executeParameterFunction(targetIdFnc);
          }
        }

        let targetIdEmptyFlag = com.idc.util.getElementAttribute(pElement, "data-target-id-empty-flag");

        if (targetId) {
          let slideFound;
          //if target id ends with .. perform and approximate search
          if (targetId && targetId.endsWith("..")) {
            slideFound = com.idc.clm.findSlide(targetId.replace("..", ""), true);
          } else {
            slideFound = com.idc.clm.findSlide(targetId);
          }
          //validate
          if (!slideFound && !targetIdEmptyFlag) {
            errorList = `${errorList} invalid target id ${targetId}; `;
          }
        }

        if (errorList !== "") com.idc.util.log(`${com.idc.util.getElementAttribute(pElement, "data-type")} ${pElement.id}: ${errorList}`);

        return errorList === "";
      },
      flagNonWorkingLinks: function () {
        //flag non-working links
        document.querySelectorAll(this.selector).forEach((el) => {
          let vars = com.idc.clm.vars;

          if (!com.idc.util.getElementAttribute(el, "data-target-id")) return; //do not proceed if no target id

          if (vars.navigation.allAvaliableSlides.findIndex((slide) => slide === com.idc.util.getElementAttribute(el, "data-target-id")) < 0) {
            el.setAttribute("data-non-working-link", true);

            el.addEventListener("click", (evt) => {
              if (vars.options.dynamicPresentation.source[vars.navigation.dynamicPresentation.source].nonWorkingLinkPopUp.active) {
                if (com_idc_ui_nonworkinglink_popup) {
                  com_idc_ui_nonworkinglink_popup.open();
                }
              }
            });
          } else {
            el.removeAttribute("data-non-working-link");
          }
        });
      },
      unFlagNonWorkingLinks: function () {
        //unflag non-working links
        document.querySelectorAll(this.selector).forEach((el) => {
          el.removeAttribute("data-non-working-link");
        });
      },
    },
    menu: {
      selector: '[data-type="com.idc.ui.core.menu"]',
      collection: [],
      awake: function () {
        document.querySelectorAll(this.selector).forEach((el) => {
          //set attributes or buttons to validate
          const toValidate = {
            attributes: [],
            other: [],
          };

          if (this.isHTMLValid(el, toValidate)) {
            //retrieve or set link id
            let el_id;
            if (el.id === "") {
              el_id = com.idc.ui.common.generateUniqueId("com_idc_ui_core_menu", this.collection);
              el.id = el_id;
              el.setAttribute("id", el_id);
              el.codeGeneratedId = true;
            } else {
              el_id = el.id;
            }

            //collection (do not proceed if already exists)
            if (this.collection.indexOf(el_id) >= 0) {
              if (document.querySelector(`#${el_id}`)) {
                if (el.activated) {
                  //do not proceed if element has already been activated
                  return;
                } else {
                  //the element exists in the collection and dom, but has not been activated (e.g. html code has been replaced)
                }
              } else {
                //element has been removed from DOM, remove from collection
                this.collection.splice(this.collection.indexOf(el_id), 1);
              }
            } else {
              //add to accordions collection
              this.collection.push(el_id);
            }

            //flag elements as activated
            el.activated = true;

            //set active instance
            this.setActiveInstance();
          }
        });
      },
      setActiveInstance: function () {
        document.querySelectorAll(this.selector).forEach((el) => {
          el.querySelectorAll(`[data-sub-type="com.idc.ui.core.menu.button"]`).forEach((button) => {
            let correspondsToCurrentSlide;
            let targetId = button.getAttribute("data-target-id");
            if (targetId && targetId.endsWith("..")) {
              correspondsToCurrentSlide = com.idc.clm.vars.navigation.currentSlide.id.includes(targetId.replace("..", ""));
            } else {
              correspondsToCurrentSlide = com.idc.clm.vars.navigation.currentSlide.id == targetId;
            }

            if (correspondsToCurrentSlide) {
              button.setAttribute("data-view-state", "on");
            } else {
              button.setAttribute("data-view-state", "off");
            }
          });
        });
      },
      isHTMLValid: function (pElement, pToValidate) {
        let errorList = "";

        //attributes
        pToValidate.attributes.forEach((attribute) => {
          if (com.idc.util.getElementAttribute(pElement, attribute) === "") {
            errorList = `${errorList} missing ${attribute} attribute; `;
          }
        });

        if (errorList !== "") com.idc.util.log(`${com.idc.util.getElementAttribute(pElement, "data-type")} ${pElement.id}: ${errorList}`);

        return errorList === "";
      },
    },
    modal: {
      selector: '[data-type="com.idc.ui.core.modal.popUp"],[data-type="com.idc.ui.core.modal.dropDown"],[data-type="com.idc.ui.core.modal.modalObject"]',
      collection: [],
      activeModalsStack: [],
      awake: function () {
        //for each of the following:
        document.querySelectorAll(this.selector).forEach((el) => {
          //set attributes or buttons to validate
          const toValidate = {
            attributes: ["id"],
          };

          if (this.isHTMLValid(el, toValidate)) {
            //retrieve or set modal id
            let el_id;
            if (el.id === "") {
              el_id = com.idc.ui.common.generateUniqueId("com_idc_ui_core_modal", this.collection);
              el.id = el_id;
              el.setAttribute("id", el_id);
              el.codeGeneratedId = true;
            } else {
              el_id = el.id;
            }

            //collection (do not proceed if already exists)
            if (this.collection.indexOf(el_id) >= 0) {
              if (document.querySelector(`#${el_id}`)) {
                if (el.activated) {
                  //do not proceed if element has already been activated
                  return;
                } else {
                  //the element exists in the collection and dom, but has not been activated (e.g. html code has been replaced)
                }
              } else {
                //element has been removed from DOM, remove from collection
                this.collection.splice(this.collection.indexOf(el_id), 1);
              }
            } else {
              //add to accordions collection
              this.collection.push(el_id);
            }

            //flag elements as activated
            el.activated = true;

            //element type
            el.type = this.getType(el.getAttribute("data-type"));

            //view state
            el.viewState = {};
            el.viewState.visible = false;
            el.viewState.initialTop = el.offsetTop;

            //components collection (open button, close button, dual button, back modal)
            el.components = {};

            //params
            el.params = com.idc.ui.common.readElementOptions(el, {
              preventCloseOnBackModalTap: false, //deactivates close action on back modal
              backModalStyle: null, //used to assign a class to back modal
              beforeOpen: null,
              afterOpen: null,
              beforeClose: null,
              afterClose: null,
              closeAction: null, //"opener" or slideId
              elId: null, //back slide element id (complex link)
              elType: null, //back slide element type (complex link)
              elInstance: null, //back slide element instance (complex link tab/accordion/multi)
              zIndexIncrement: null, //used to add / subtract from the default z-index
              standaloneGroup: null, //used to set standalone modal group in modal param
            });

            //is standalone modal?
            el.isStandalone = false;
            if (com.idc.clm.vars.navigation.currentSlide.isStandalone) {
              if (com.idc.clm.findSlide(com.idc.clm.vars.navigation.currentSlide.id).standaloneModal.modalId == el.id) {
                el.isStandalone = true;
              }
            }

            //assign functions
            el.open = this.open;
            el.show = this.show;
            el.close = this.close;
            el.hide = this.hide;

            el.executeBeforeOpen = com.idc.ui.common.executeFunction.beforeOpen;
            el.executeAfterOpen = com.idc.ui.common.executeFunction.afterOpen;
            el.executeBeforeClose = com.idc.ui.common.executeFunction.beforeClose;
            el.executeAfterClose = com.idc.ui.common.executeFunction.afterClose;

            el.overwriteParameterFunction = this.overwriteParameterFunction;

            el.closeButtonHiddenFlag = this.closeButtonHiddenFlag;

            //open button
            const openButton = document.querySelector(
              `[data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.core.modal.openButton"][data-target-id="${el.id}"]`
            );
            if (openButton !== null) {
              el.components.openButton = {
                element: openButton,
              };
              el.components.openButton.element.addEventListener("click", (evt) => {
                if (evt.currentTarget.getAttribute("data-view-state") == "disabled") return;
                el.open();
              });
            }

            //close button
            let closeButton;
            //try to find within el
            closeButton = el.querySelector(`[data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.core.modal.closeButton"]`);
            if (!closeButton) {
              //if not found, try to find within document (with target-id)
              closeButton = document.querySelector(
                `[data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.core.modal.closeButton"][data-target-id="${el.id}"]`
              );
            }
            if (closeButton !== null) {
              el.components.closeButton = {
                element: closeButton,
              };
              el.components.closeButton.element.addEventListener("click", (evt) => {
                if (evt.currentTarget.getAttribute("data-view-state") == "disabled") return;
                el.close();
              });
            }

            //dual button
            const dualButton = document.querySelector(
              `[data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.core.modal.dualButton"][data-target-id="${el.id}"]`
            );
            if (dualButton !== null) {
              el.components.dualButton = {
                element: dualButton,
              };
              el.components.dualButton.element.addEventListener("click", (evt) => {
                if (evt.currentTarget.getAttribute("data-view-state") == "disabled") return;

                if (!el.viewState.visible) {
                  el.open();
                } else {
                  el.close();
                }
              });
            }

            //if it's a standalone modal and the presentation is dynamic, set flag so it can be hidden
            if (closeButton) el.closeButtonHiddenFlag();

            //back modal (create, set style, close event)
            el.components.backModal = {
              element: com.idc.util.jsonToHTML(com.idc.templates.core.modal.backModal, null, el, "before"),
            };
            el.components.backModal.element.setAttribute("back-modal-for", el.id);
            if (el.params.backModalStyle !== null) {
              el.components.backModal.element.classList.add(el.params.backModalStyle);
            }
            setTimeout(() => {
              let isDynamicPresentation = com.idc.clm.vars.navigation.dynamicPresentation.active;
              let treatStandaloneModalsAsMainSlides = com.idc.clm.vars.navigation.dynamicPresentation.treatStandaloneModalsAsMainSlides;

              //close event
              //if not prevented by param and,
              //if not the modal is standalone and the presentation is dynamic
              el.components.backModal.element.addEventListener("click", () => {
                if (!el.params.preventCloseOnBackModalTap && !(el.isStandalone && isDynamicPresentation && treatStandaloneModalsAsMainSlides)) {
                  el.close();
                }
              });
            }, 300);

            //standalone modal groups (arrows, swipe, paginator, index modal)
            if (el.isStandalone) {
              const prevArrow = document.querySelector('[data-type="com.idc.ui.core.navigation.arrow"][data-sub-type="com.idc.ui.core.modal.prevArrow"]');
              if (prevArrow) {
                el.components.prevArrow = {
                  element: prevArrow,
                };
              }

              const nextArrow = document.querySelector('[data-type="com.idc.ui.core.navigation.arrow"][data-sub-type="com.idc.ui.core.modal.nextArrow"]');
              if (nextArrow) {
                el.components.nextArrow = {
                  element: nextArrow,
                };
              }

              const paginator = document.querySelector('[data-type="com.idc.ui.core.modal.paginator"]');
              if (paginator) {
                el.components.paginator = {
                  element: paginator,
                };
              }

              //standalone modal group (not in dynamic presentation mode or eval function)\
              if (el.params.standaloneGroup) {
                //activate group if comes as param (could have been activated from a link also)
                if (com.idc.clm.validateStandaloneGroup(el.params.standaloneGroup, com.idc.clm.vars.navigation.currentSlide.id)) {
                  com.idc.clm.activateStandaloneGroup(el.params.standaloneGroup);
                }
              }

              if (this.standaloneModalGroups.standalonelBelongsToActiveGroup()) {
                this.standaloneModalGroups.setArrowsAndSwipe(el);
                this.standaloneModalGroups.setPaginator(el);
                this.standaloneModalGroups.populateGroupSlides();
                this.standaloneModalGroups.preventCloseIfMandatoryGroup(el);
              }
              this.standaloneModalGroups.setGroupElementsVisibility(el);
            }
          }
        });
      },
      getType: function (dataType) {
        return dataType === "com.idc.ui.core.modal.popUp"
          ? "popUp"
          : dataType === "com.idc.ui.core.modal.dropDown"
          ? "dropDown"
          : dataType === "com.idc.ui.core.modal.modalObject"
          ? "modalObject"
          : null;
      },
      open: function () {
        //execute before open
        this.executeBeforeOpen();

        //show back modal
        this.components.backModal.element.style.display = "block";

        //view state
        this.viewState.visible = true;

        //if dual button, set acting as property
        if (this.components.dualButton) {
          this.components.dualButton.element.setAttribute("data-acting-as", "closeButton");
        }

        //add to active modals stack
        if (this.type == "popUp" || this.type == "dropDown") {
          com.idc.ui.core.modal.activeModalsStack.push(this.id);
        }

        //assign z-index depending on active modals stack
        let increment;
        if (this.params.zIndexIncrement !== null && !isNaN(this.params.zIndexIncrement)) {
          increment = parseInt(this.params.zIndexIncrement);
        } else {
          increment = 0;
        }
        let zIndex = com.idc.ui.core.modal.activeModalsStack.length * 10 + increment;
        this.style.zIndex = zIndex;
        this.components.backModal.element.style.zIndex = zIndex;

        //refresh utilities menu
        if (com.idc.clm.vars.utilitiesMenu.active) {
          if (this.type == "popUp" || this.type == "dropDown") {
            com.idc.ui.core.utilitiesMenu.updateGroupsContents();
            com.idc.ui.core.utilitiesMenu.updateStyleAndZIndex();
          }
        }

        //show
        this.show();

        //adjust interface (e.g. hide next/prev arrows) by adding a general attribute to body
        com.idc.ui.core.modal.setOpenModalFlag();

        //set arrows visibility
        com.idc.ui.core.navigationArrows.setArrowsVisibility();

        //refresh references
        if (com.idc.clm.vars.references.active) {
          if (this.type == "popUp" || this.type == "dropDown") {
            com.idc.ui.core.references.refresh();
          }
        }

        //execute after open
        this.executeAfterOpen();
      },
      show: function () {
        //data-view-state active
        switch (this.type) {
          case "dropDown":
            TweenMax.to(this, 0.5, {
              top: 0,
              ease: Quad.easeInOut,
              onComplete: function () {},
            });
            this.setAttribute("data-view-state", "active");
            break;
          default:
            this.setAttribute("data-view-state", "active");
            break;
        }
      },
      close: function () {
        let vars = com.idc.clm.vars;
        let persistentData = com.idc.clm.persistentData;

        //standalone or standard functionality
        if (!this.isStandalone) {
          //execute before close
          this.executeBeforeClose();

          //remove from active modals stack
          if (this.type == "popUp" || this.type == "dropDown") {
            com.idc.ui.core.modal.activeModalsStack.splice(com.idc.ui.core.modal.activeModalsStack.indexOf(this.id), 1);
          }

          //refresh utilities menu
          if (com.idc.clm.vars.utilitiesMenu.active) {
            if (this.type == "popUp" || this.type == "dropDown") {
              com.idc.ui.core.utilitiesMenu.updateGroupsContents();
              com.idc.ui.core.utilitiesMenu.updateStyleAndZIndex();
            }
          }

          //hide modal and backmodal
          this.hide();

          //restore interface (e.g. show next/prev arrows) by adding removing general attribute to body
          com.idc.ui.core.modal.setOpenModalFlag();

          //view state
          this.viewState.visible = false;

          //if dual button, set acting as property
          if (this.components.dualButton) {
            this.components.dualButton.element.setAttribute("data-acting-as", "openButton");
          }

          //adjust arrows
          if (!this.isStandalone) {
            com.idc.ui.core.navigationArrows.setArrowsVisibility();
          }

          //reset child objects (revert to default state)
          com.idc.ui.common.resetChildElements(this);

          //refresh references
          if (com.idc.clm.vars.references.active) {
            if (this.type == "popUp" || this.type == "dropDown") {
              com.idc.ui.core.references.refresh();
            }
          }

          //execute after close
          this.executeAfterClose();
        } else {
          let destinationSlide;

          //redirect to opener slide or slideId in closeAction
          let nav = com.idc.clm.vars.navigation;
          if (this.params.closeAction == null || this.params.closeAction == "opener" || this.params.closeAction == "openerStrict") {
            //no close slide defined (closeAction = slideId), or close action = opener (last main slide) or opener strict (actual last slide even if it is a standalone modal)
            let lastSlideType = this.params.closeAction == null || this.params.closeAction == "opener" ? "main" : "actual"; //last slide type: last main slide or actual last slide (can be another standalone)
            if (nav.lastSlide && nav.lastSlide.main && nav.lastSlide[lastSlideType].id != null) {
              destinationSlide = nav.lastSlide[lastSlideType].id;
            }
          } else {
            //a slie has been defined in closeAction, redirect to that slide
            if (com.idc.clm.findSlide(this.params.closeAction) != null) {
              destinationSlide = this.params.closeAction; //if close action is not null and not opener/openerStrict, it's a slide id
            } else {
              destinationSlide = nav.actualSlidesSequence[0]; //first slide in the sequence by default
            }
          }

          //complex link >> update persistent data
          if (this.params.elId) {
            persistentData.complexLinks.fromSlide = vars.navigation.currentSlide.id;
            persistentData.complexLinks.toSlide = destinationSlide;
            persistentData.complexLinks.originatorType = "modal";
            persistentData.complexLinks.element.type = this.params.elType;
            persistentData.complexLinks.element.id = this.params.elId;
            persistentData.complexLinks.element.instance = this.params.elInstance;
            com.idc.clm.updatePersistentData();
          }

          //redirect
          com.idc.clm.gotoSlide(destinationSlide);
        }
      },
      hide: function () {
        //clear data-view-state
        switch (this.type) {
          case "dropDown":
            const el = this;
            TweenMax.to(this, 0.5, {
              top: el.viewState.initialTop,
              ease: Quad.easeInOut,
              onComplete: function () {
                //hide back modal
                el.components.backModal.element.style.display = "none";
                //clear z-index
                el.style.zIndex = com.idc.ui.core.modal.activeModalsStack.length;
                //data-view-state inactive
                el.removeAttribute("data-view-state");
              },
            });
            break;
          default:
            this.removeAttribute("data-view-state");
            this.components.backModal.element.style.display = "none";
            //clear z-index
            this.style.zIndex = com.idc.ui.core.modal.activeModalsStack.length;
            break;
        }
      },
      isHTMLValid: function (pElement, pToValidate) {
        let errorList = "";

        //attributes
        pToValidate.attributes.forEach((attribute) => {
          if (com.idc.util.getElementAttribute(pElement, attribute) === "") {
            errorList = `${errorList} missing ${attribute} attribute; `;
          }
        });

        if (errorList !== "") com.idc.util.log(`${com.idc.util.getElementAttribute(pElement, "data-type")} ${pElement.id}: ${errorList}`);

        return errorList === "";
      },
      overwriteParameterFunction: function (pEvent, pFunction) {
        if (typeof pFunction === "function") {
          switch (pEvent) {
            case "beforeOpen":
              this.executeBeforeOpen = pFunction;
              break;
            case "afterOpen":
              this.executeAfterOpen = pFunction;
              break;
            case "beforeClose":
              this.executeBeforeClose = pFunction;
              break;
            case "afterClose":
              this.executeAfterClose = pFunction;
              break;
          }
        }
      },
      setOpenModalFlag: function () {
        if (this.activeModalsStack.length > 0) {
          document.querySelector("body").setAttribute("data-modal-state", "active");
          document.querySelector("body").setAttribute("data-active-modal-id", this.activeModalsStack[this.activeModalsStack.length - 1]);
        } else {
          document.querySelector("body").removeAttribute("data-modal-state");
          document.querySelector("body").removeAttribute("data-active-modal-id");
        }
      },
      standaloneModalGroups: {
        standalonelBelongsToActiveGroup: function () {
          let persistentData = com.idc.clm.persistentData;
          let vars = com.idc.clm.vars;
          let slideId = vars.navigation.currentSlide.id;

          let standaloneModalGroups = vars.standaloneModalGroups;
          if (!standaloneModalGroups.active) return false;

          let belongsToActiveGroup = false;

          let activeGroupId = persistentData.session.selectedStandaloneGroup;
          if (!activeGroupId) return false;

          let activeGroup = vars.standaloneModalGroups.groups.find((group) => group.id == activeGroupId);
          if (!activeGroup) return false;

          if (activeGroup.slides.indexOf(slideId) >= 0) {
            belongsToActiveGroup = true;
          }

          return belongsToActiveGroup;
        },
        positionInActiveGroup: function () {
          let persistentData = com.idc.clm.persistentData;
          let vars = com.idc.clm.vars;
          let activeGroupId = persistentData.session.selectedStandaloneGroup;
          let activeGroup = vars.standaloneModalGroups.groups.find((group) => group.id == activeGroupId);
          let slideId = vars.navigation.currentSlide.id;

          return { order: activeGroup.slides.indexOf(slideId), total: activeGroup.slides.length };
        },
        setArrowsAndSwipe: function (pElement) {
          let group = com.idc.clm.vars.standaloneModalGroups.groups.find((group) => group.id == com.idc.clm.persistentData.session.selectedStandaloneGroup);
          if (!group) return;

          let position = this.positionInActiveGroup();

          if (position.order > 0) {
            //prev slide
            let prevSlide = group.slides[position.order - 1];

            //arrow visibility and link
            let prevArrow = pElement.components.prevArrow;
            if (prevArrow && prevArrow.element && group.visibility.arrows) {
              prevArrow.element.setAttribute("data-view-state", "active");
              prevArrow.element.addEventListener("click", (evt) => {
                com.idc.clm.gotoSlide(prevSlide);
              });
            }

            //navigation owerwrite
            com.idc.clm.navigationOverwrite("prev", prevSlide);
          }

          if (position.order < position.total - 1) {
            //next slide
            let nextSlide = com.idc.clm.vars.standaloneModalGroups.groups.find(
              (group) => group.id == com.idc.clm.persistentData.session.selectedStandaloneGroup
            ).slides[position.order + 1];

            //arrow visibility and link
            let nextArrow = pElement.components.nextArrow;
            if (nextArrow && nextArrow.element && group.visibility.arrows) {
              nextArrow.element.setAttribute("data-view-state", "active");
              nextArrow.element.addEventListener("click", (evt) => {
                com.idc.clm.gotoSlide(nextSlide);
              });
            }

            //navigation owerwrite
            com.idc.clm.navigationOverwrite("next", nextSlide);
          }
        },
        setGroupElementsVisibility: function (pElement) {
          let group = com.idc.clm.vars.standaloneModalGroups.groups.find((group) => group.id == com.idc.clm.persistentData.session.selectedStandaloneGroup);
          let indexVisibility;
          let paginatorVisibility;
          if (!group) {
            indexVisibility = false;
            paginatorVisibility = false;
          } else {
            indexVisibility = group.visibility.indexButton;
            paginatorVisibility = group.visibility.paginator;
          }

          let standaloneModalBelongsToActiveGroup = this.standalonelBelongsToActiveGroup();
          //index button visibility
          let indexOpenButtonId = com.idc.clm.vars.standaloneModalGroups.indexModal.openButton;
          let indexOpenButton = document.querySelector("#" + indexOpenButtonId);
          if (indexOpenButton) {
            if (standaloneModalBelongsToActiveGroup && indexVisibility) {
              indexOpenButton.style.display = "block";
            } else {
              indexOpenButton.style.display = "none";
            }
          }

          //paginator visibility
          if (pElement.components.paginator) {
            if (standaloneModalBelongsToActiveGroup && paginatorVisibility) {
              pElement.components.paginator.element.style.display = "block";
            } else {
              pElement.components.paginator.element.style.display = "none";
            }
          }
        },
        setPaginator: function (pElement) {
          let position = this.positionInActiveGroup();
          if (pElement.components.paginator) {
            pElement.components.paginator.element.innerHTML = `${position.order + 1} / ${position.total}`;
          }
        },
        populateGroupSlides: function (pIndexModalId, pActiveGroupId, pEnableLinkFunctionality) {
          let persistentData = com.idc.clm.persistentData;
          let vars = com.idc.clm.vars;
          let util = com.idc.util;

          let indexModalId;
          //pIndexModalId is an optional param so the function can be called from outside the module
          if (pIndexModalId) {
            indexModalId = pIndexModalId;
          } else {
            indexModalId = com.idc.clm.vars.standaloneModalGroups.indexModal.id;
          }

          let indexModal = document.querySelector(`#${indexModalId}`);
          if (!indexModal) return;

          let groupSlidesEl = indexModal.querySelector('[data-type="com.idc.ui.core.modal.groupSlides"]');
          if (!groupSlidesEl) return;

          let activeGroupId;
          //pActiveGroupId is an optional param so the function can be called from outside the module
          if (pActiveGroupId) {
            activeGroupId = pActiveGroupId;
          } else {
            activeGroupId = persistentData.session.selectedStandaloneGroup;
          }

          let enableLinkFunctionality;
          if (typeof pEnableLinkFunctionality === "boolean") {
            enableLinkFunctionality = pEnableLinkFunctionality;
          } else {
            enableLinkFunctionality = true;
          }

          let activeGroup = vars.standaloneModalGroups.groups.find((group) => group.id == activeGroupId);

          let template = groupSlidesEl.querySelector('[data-type="com.idc.ui.core.modal.groupSlides.item"]');

          activeGroup.slides.forEach((slideId) => {
            let slide = com.idc.clm.findSlide(slideId);

            let itemElement = template.cloneNode(true);

            itemElement.setAttribute("data-slide-id", slide.id);

            let thumb = itemElement.querySelector('[data-type="com.idc.ui.core.modal.groupSlides.item.thumb"]');
            if (thumb) {
              let img = thumb.querySelector("img");
              if (img) {
                img.setAttribute("src", util.getSharedResourcesPath() + "img/thumbnails/" + slide.id + ".png");
              }
            }

            let label = itemElement.querySelector('[data-type="com.idc.ui.core.modal.groupSlides.item.label"]');
            if (label) {
              label.innerHTML = slide.description;
            }

            if (enableLinkFunctionality) {
              itemElement.addEventListener("click", (evt) => {
                com.idc.clm.gotoSlide(slide.id);
              });
            }

            groupSlidesEl.appendChild(itemElement);
          });

          template.remove();
        },
        preventCloseIfMandatoryGroup: function (pElement) {
          let vars = com.idc.clm.vars;

          //eval group and param
          let group = com.idc.clm.vars.standaloneModalGroups.groups.find((group) => group.id == com.idc.clm.persistentData.session.selectedStandaloneGroup);
          if (!group || !group.mandatorySequence) return;

          //eval order and total >> need to prevent close?
          let modalOrder = this.positionInActiveGroup().order;
          let totalModals = this.positionInActiveGroup().total;

          let needToPreventClose;
          if (modalOrder < totalModals - 1) {
            needToPreventClose = true;
          } else {
            needToPreventClose = false;
          }

          if (!needToPreventClose) return;

          //hide close button
          let closeButton = pElement.components.closeButton;
          if (closeButton) {
            //hide button
            closeButton.element.style.display = "none";
            //utilities menu
            if (vars.utilitiesMenu.active) {
              vars.utilitiesMenu.sets.standaloneModal.appendCloseButtonToRightGroup = false;
              com.idc.ui.core.utilitiesMenu.hideItemInGroup("rightGroup", closeButton.element.id);
            }
          }

          //prevent close on back modal tap
          pElement.params.preventCloseOnBackModalTap = true;
        },
      },
      closeButtonHiddenFlag: function () {
        if (!this.components.closeButton) return;

        let closeButton = this.components.closeButton.element;

        let isDynamicPresentation = com.idc.clm.vars.navigation.dynamicPresentation.active;
        let treatStandaloneModalsAsMainSlides = com.idc.clm.vars.navigation.dynamicPresentation.treatStandaloneModalsAsMainSlides;
        if (this.isStandalone && isDynamicPresentation && treatStandaloneModalsAsMainSlides) {
          closeButton.setAttribute("data-should-be-hidden", "true");
        } else {
          closeButton.removeAttribute("data-should-be-hidden");
        }
      },
    },
    multi: {
      selector: '[data-type="com.idc.ui.core.multi.container"]',
      collection: [],
      awake: function () {
        document.querySelectorAll(this.selector).forEach((el) => {
          //set attributes or buttons to validate
          const toValidate = {
            attributes: [],
            other: [],
          };

          if (this.isHTMLValid(el, toValidate)) {
            //retrieve or set link id
            let el_id;
            if (el.id === "") {
              el_id = com.idc.ui.common.generateUniqueId("com_idc_ui_core_multi", this.collection);
              el.id = el_id;
              el.setAttribute("id", el_id);
              el.codeGeneratedId = true;
            } else {
              el_id = el.id;
            }

            //collection (do not proceed if already exists)
            if (this.collection.indexOf(el_id) >= 0) {
              if (document.querySelector(`#${el_id}`)) {
                if (el.activated) {
                  //do not proceed if element has already been activated
                  return;
                } else {
                  //the element exists in the collection and dom, but has not been activated (e.g. html code has been replaced)
                }
              } else {
                //element has been removed from DOM, remove from collection
                this.collection.splice(this.collection.indexOf(el_id), 1);
              }
            } else {
              //add to accordions collection
              this.collection.push(el_id);
            }

            //flag elements as activated
            el.activated = true;

            //view state
            el.viewState = {
              activeInstance: null,
            };

            //params
            el.params = com.idc.ui.common.readElementOptions(el, {
              selectorAttribute: null,
            });

            //assign functions and events: main element
            el.setInstance = this.setInstance;
            el.nextInstance = this.nextInstance;
            el.prevInstance = this.prevInstance;
            el.setButtonsState = this.setButtonsState;
            el.resetToDefaults = this.resetToDefaults;

            //components collection
            el.components = {
              contents: null,
              instances: [],
              buttons: {
                next: null,
                prev: null,
              },
            };

            //components: contents
            el.components.contents = {
              element: el.querySelector(':scope > [data-type="com.idc.ui.core.multi.contents"]'),
            };

            //components: instances
            if (el.components.contents.element) {
              let instances = el.components.contents.element.querySelectorAll(':scope > [data-type="com.idc.ui.core.multi.content"]');
              if (instances) {
                instances.forEach((instanceEl) => {
                  const instance = {
                    name: instanceEl.getAttribute("data-instance"),
                    element: instanceEl,
                    params: com.idc.ui.common.readElementOptions(instanceEl, {
                      beforeOpen: null,
                      afterOpen: null,
                      beforeClose: null,
                      afterClose: null,
                      initialState: null, //'open' will set the instance open by default
                      selectorValue: null,
                    }),
                    viewState: null,
                  };
                  el.components.instances.push(instance);
                });
              }
            }

            //components: buttons
            el.components.buttons.next = el.querySelector('[data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.core.multi.nextButton"]');
            if (el.components.buttons.next) {
              el.components.buttons.next.addEventListener("click", (evt) => {
                el.nextInstance();
              });
            }
            el.components.buttons.prev = el.querySelector('[data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.core.multi.prevButton"]');
            if (el.components.buttons.prev) {
              el.components.buttons.prev.addEventListener("click", (evt) => {
                el.prevInstance();
              });
            }

            //restore saved state if returned from standalone pop-up
            if (com.idc.clm.isBackFromStandAloneSlide()) {
              let activeInstance = com.idc.ui.common.backFromStandalone.getPersistentProperty(
                com.idc.clm.vars.navigation.currentSlide.id,
                el.id,
                "activeInstance"
              );
              if (activeInstance && activeInstance.value) {
                //set instance
                el.setInstance(activeInstance.value);
              } else {
                //no active instance to set, reset to defaults
                el.resetToDefaults();
              }
            } else {
              //not back from standalone slide: reset to defaults
              el.resetToDefaults();
            }
          }
        });
      },
      setInstance: function (pInstance) {
        //set open, close all the rest
        this.components.instances.forEach((instance) => {
          if (instance.name === pInstance) {
            instance.element.setAttribute("data-view-state", "active");
            instance.viewState = "active";
            this.viewState.activeInstance = pInstance;
          } else {
            //all the rest
            instance.element.removeAttribute("data-view-state");
            instance.viewState = null;

            //reset child objects (revert to default state)
            com.idc.ui.common.resetChildElements(instance.element);
          }
        });

        //data attributes
        this.setAttribute("data-any-active-instance", this.viewState.activeInstance ? "true" : "false");
        this.setAttribute("data-active-instance", this.viewState.activeInstance ? this.viewState.activeInstance : "none");

        //set buttons state
        this.setButtonsState();

        //refresh references
        if (com.idc.clm.vars.references.active) {
          com.idc.ui.core.references.refresh();
        }

        //recently set flag (prevent from resetting before 1 sec after being set)
        this.recentlySet = true;
        setTimeout(() => {
          this.recentlySet = false;
        }, 1000);
      },
      nextInstance: function () {
        let currentInstanceIndex = this.components.instances.findIndex((instance) => {
          return instance.name === this.viewState.activeInstance;
        });
        if (currentInstanceIndex < this.components.instances.length - 1) {
          this.setInstance(this.components.instances[currentInstanceIndex + 1].name);
        }
      },
      prevInstance: function () {
        let currentInstanceIndex = this.components.instances.findIndex((instance) => {
          return instance.name === this.viewState.activeInstance;
        });
        if (currentInstanceIndex > 0) {
          this.setInstance(this.components.instances[currentInstanceIndex - 1].name);
        }
      },
      setButtonsState: function () {
        let isLastInstance =
          this.components.instances.findIndex((instance) => {
            return instance.name === this.viewState.activeInstance;
          }) ==
          this.components.instances.length - 1;

        let isFirstInstance =
          this.components.instances.findIndex((instance) => {
            return instance.name === this.viewState.activeInstance;
          }) == 0;

        if (this.components.buttons.next) {
          if (isLastInstance) {
            this.components.buttons.next.setAttribute("data-view-state", "disabled");
          } else {
            this.components.buttons.next.setAttribute("data-view-state", "off");
          }
        }

        if (this.components.buttons.prev) {
          if (isFirstInstance) {
            this.components.buttons.prev.setAttribute("data-view-state", "disabled");
          } else {
            this.components.buttons.prev.setAttribute("data-view-state", "off");
          }
        }
      },
      isHTMLValid: function (pElement, pToValidate) {
        let errorList = "";

        //attributes
        pToValidate.attributes.forEach((attribute) => {
          if (com.idc.util.getElementAttribute(pElement, attribute) === "") {
            errorList = `${errorList} missing ${attribute} attribute; `;
          }
        });

        if (errorList !== "") com.idc.util.log(`${com.idc.util.getElementAttribute(pElement, "data-type")} ${pElement.id}: ${errorList}`);

        return errorList === "";
      },
      resetToDefaults: function () {
        if (this.recentlySet) return;

        //selector attribute configuration, need to wait until selector value is set
        if (this.params.selectorAttribute) {
          let instanceToSet_byAttribute;
          if (this.params.selectorAttribute) {
            //interval to wait for selector value to be set
            let interval = setInterval(() => {
              let selectorAttributeValue = document.body.getAttribute(this.params.selectorAttribute);

              if (selectorAttributeValue) {
                instanceToSet_byAttribute = this.components.instances.findIndex((instance) => {
                  return instance.params.selectorValue == selectorAttributeValue;
                });
              }
              if (instanceToSet_byAttribute >= 0) {
                //need to set an instance
                this.setInstance(this.components.instances[instanceToSet_byAttribute].name);
              }
              if (selectorAttributeValue) {
                clearInterval(interval);
              }
            }, 100);
          }
        }

        //no selector attribute configuration, use first instance or instance set to open by default
        if (!this.params.selectorAttribute) {
          let instanceToSet_byInitialState;
          instanceToSet_byInitialState = this.components.instances.findIndex((instance) => {
            return instance.params.initialState === "open";
          });
          if (instanceToSet_byInitialState >= 0) {
            //need to set an instance
            this.setInstance(this.components.instances[instanceToSet_byInitialState].name);
          } else {
            //no default instance set by param, use first
            if (this.components.instances.length > 0) {
              this.setInstance(this.components.instances[0].name);
            }
          }
        }
      },
    },
    navigationArrows: {
      prevArrow: null,
      nextArrow: null,
      awake: function () {
        this.prevArrow = document.querySelector('[data-type="com.idc.ui.core.navigation.arrow"][data-sub-type="com.idc.ui.core.navigation.arrow.prev"]');

        if (this.prevArrow) {
          this.prevArrow.addEventListener("click", (evt) => {
            com.idc.clm.goPrevSlide();
          });
        }

        this.nextArrow = document.querySelector('[data-type="com.idc.ui.core.navigation.arrow"][data-sub-type="com.idc.ui.core.navigation.arrow.next"]');

        if (this.nextArrow) {
          this.nextArrow.addEventListener("click", (evt) => {
            com.idc.clm.goNextSlide();
          });
        }
      },
      setArrowsVisibility: function () {
        let needToHideArrows = false;
        let navVars = com.idc.clm.vars.navigation;
        let util = com.idc.util;

        let isDynamicPresentation = navVars.dynamicPresentation.active;
        let isModalBeingDisplayed = util.getElementAttribute(document.querySelector("body"), "data-modal-state") == "active";
        let isCurrentSlideStandalone = navVars.currentSlide.isStandalone;
        let treatStandaloneModalsAsMainSlides = navVars.dynamicPresentation.treatStandaloneModalsAsMainSlides;

        if (!isDynamicPresentation) {
          if (isModalBeingDisplayed) {
            needToHideArrows = true;
          }
        } else {
          if (isModalBeingDisplayed && (!isCurrentSlideStandalone || (isCurrentSlideStandalone && !treatStandaloneModalsAsMainSlides))) {
            needToHideArrows = true;
          }
        }

        if (needToHideArrows) {
          if (this.prevArrow) {
            this.prevArrow.removeAttribute("data-view-state");
          }

          if (this.nextArrow) {
            this.nextArrow.removeAttribute("data-view-state");
          }
        } else {
          //show arrows if necessary
          if (this.prevArrow) {
            if (!com.idc.clm.vars.navigation.currentSlide.isFirst) {
              this.prevArrow.setAttribute("data-view-state", "active");
              //adjust z-index if necessary
              if (isCurrentSlideStandalone) {
                this.prevArrow.style.zIndex = com.idc.ui.core.modal.activeModalsStack.length * 10 + 1;
              }
            }
          }

          if (this.nextArrow) {
            if (!com.idc.clm.vars.navigation.currentSlide.isLast) {
              this.nextArrow.setAttribute("data-view-state", "active");
              //adjust z-index if necessary
              if (isCurrentSlideStandalone) {
                this.nextArrow.style.zIndex = com.idc.ui.core.modal.activeModalsStack.length * 10 + 1;
              }
            }
          }
        }
      },
    },
    references: {
      slideRefsArr: [],
      activeRefs: {
        all: null, //all references
        slide: null, //active ref for slide
      },
      switch: {
        active: null, //flag to show switch (if all and slide refs are present)
        selected: null, //selected option: all or slide
      },
      disableFlag: null, //config setting to disable refs for the slide
      onlySlideRefsFlag: null, //config setting to show only slide refs (not all refs)
      init: function () {
        let vars = com.idc.clm.vars;
        let util = com.idc.util;

        //check components
        let modalEl = document.querySelector(`#${vars.references.components.modal.id}`);
        if (!modalEl) {
          util.log(`com.idc.ui.core.references.init(): modal not found`);
          return;
        }

        //all references
        if (vars.references.content.landscape) {
          this.activeRefs.all = vars.references.content;
        }

        //slide specific references / disable for this slide flag
        let currentSlide = vars.slides.find((slide) => {
          return slide.id == vars.navigation.currentSlide.id;
        });
        if (currentSlide.references) {
          if (currentSlide.references.onlySlideReferences) {
            this.onlySlideRefsFlag = true;
          }
          if (currentSlide.references.disabled) {
            //flag: disable references for this slide
            this.disableFlag = true;
          } else {
            //for each key in currentSlide.references, check if it has landscape or portrait and add it to the references arr
            for (let key in currentSlide.references) {
              if (currentSlide.references[key] && currentSlide.references[key].landscape) {
                let refRecord = currentSlide.references[key];
                refRecord.name = key;
                this.slideRefsArr.push(currentSlide.references[key]);
              }
            }
          }
        }

        //if only slide refs, clear all refs
        if (this.onlySlideRefsFlag) {
          this.activeRefs.all = null;
        }

        //refresh
        this.refresh();

        //set events
        this.setEvents();
      },
      refresh: function () {
        let vars = com.idc.clm.vars;

        //set active slide refs
        if (this.slideRefsArr.length > 0) {
          //find default ref
          let defaultRef = this.slideRefsArr.find((ref) => {
            return ref.name == "default";
          });

          //find alternative ref
          let alternativeRef = this.slideRefsArr.find((ref) => {
            let alternativeIsValid = false;

            if (ref.uiRelated) {
              //related to an active modal
              if (ref.uiRelated.modal) {
                if (com.idc.ui.core.modal.activeModalsStack.indexOf(ref.uiRelated.modal.id) >= 0) {
                  alternativeIsValid = true;
                }
              }
              //related to an active tab instance
              if (ref.uiRelated.tab) {
                let tab = document.querySelector(`#${ref.uiRelated.tab.id}`);
                if (tab) {
                  let instance = tab.querySelector(`[data-instance="${ref.uiRelated.tab.instance}"]`);
                  if (instance) {
                    if (instance.getAttribute("data-view-state") == "active") {
                      alternativeIsValid = true;
                    }
                  }
                }
              }

              //related to an active multi instance
              if (ref.uiRelated.multi) {
                let multi = document.querySelector(`#${ref.uiRelated.multi.id}`);
                if (multi) {
                  let instance = tab.querySelector(`[data-instance="${ref.uiRelated.multi.instance}"]`);
                  if (instance) {
                    if (instance.getAttribute("data-view-state") == "active") {
                      alternativeIsValid = true;
                    }
                  }
                }
              }
            }

            return alternativeIsValid;
          });

          this.activeRefs.slide = alternativeRef ? alternativeRef : defaultRef ? defaultRef : null;
        }

        //depending on global/slide refs, set switch and open button state
        let openButtonState = this.disableFlag || (!this.activeRefs.slide && !this.activeRefs.all) ? "disabled" : "enabled";

        if (vars.references.components.openButton.id) {
          let openButton = document.querySelector(`#${vars.references.components.openButton.id}`);
          if (openButton) {
            switch (openButtonState) {
              case "enabled":
                if (openButton.getAttribute("data-view-state") == "disabled") {
                  openButton.setAttribute("data-view-state", openButton.parentNode.getAttribute("children-view-state"));
                }
                break;
              case "disabled":
                openButton.setAttribute("data-view-state", "disabled");
                break;
            }
          }
        }

        //set switch
        if (this.activeRefs.slide && this.activeRefs.all) {
          this.switch.active = true;
          this.switch.selected = "slide";
        } else {
          this.switch.active = false;
          if (this.activeRefs.slide) this.switch.selected = "slide";
          if (this.activeRefs.all) this.switch.selected = "all";
        }

        //set content
        this.removeContent();
        this.setContent(com.idc.ui.core.references.switch.selected, com.idc.ui.core.references.activeRefs);
      },
      setEvents: function () {
        let vars = com.idc.clm.vars;

        if (!vars.references.components.modal.id) return;

        //before and after open
        let modal = document.querySelector(`#${vars.references.components.modal.id}`);
        if (modal) {
          modal.overwriteParameterFunction("beforeOpen", this.beforeOpen);
          modal.overwriteParameterFunction("afterOpen", this.afterOpen);
        }

        //orientation change
        document.addEventListener("konaOrientationChange", () => {
          this.removeContent();
          this.setContent(this.switch.selected, this.activeRefs);
        });

        //switch
        let switchElement = document.querySelector(`#${vars.references.components.modal.id} [data-type="com.idc.ui.references.switch"]`);
        if (switchElement) {
          switchElement.addEventListener("click", (event) => {
            if (this.switch.selected == "all") {
              this.switch.selected = "slide";
            } else {
              this.switch.selected = "all";
            }

            this.removeContent();
            this.setContent(this.switch.selected, this.activeRefs);
          });
        }
      },
      beforeOpen: function () {
        com.idc.ui.core.references.refresh();
      },
      removeContent: function () {
        let vars = com.idc.clm.vars;

        if (!vars.references.components.modal.id || !document.querySelector(`#${vars.references.components.modal.id}`)) return;

        document.querySelector(`#${vars.references.components.modal.id} [data-type="com.idc.ui.references.landscapeView"]`).innerHTML = "";
        document.querySelector(`#${vars.references.components.modal.id} [data-type="com.idc.ui.references.landscapeView"]`).removeAttribute("data-view-state");
        document.querySelector(`#${vars.references.components.modal.id} [data-type="com.idc.ui.references.portraitView"]`).innerHTML = "";
        document.querySelector(`#${vars.references.components.modal.id} [data-type="com.idc.ui.references.portraitView"]`).removeAttribute("data-view-state");
      },
      setContent: function (type, source) {
        let vars = com.idc.clm.vars;
        let util = com.idc.util;
        let screenOrientation = vars.screen.orientation;

        if (!source.all && !source.slide) return;
        if (!vars.references.components.modal.id) return;

        //img source
        let refsFile = screenOrientation == "landscape" ? source[type].landscape : source[type].portrait ? source[type].portrait : source[type].landscape;

        //container
        let selector = `#${vars.references.components.modal.id} [data-type="com.idc.ui.references"] [data-type="com.idc.ui.references.${screenOrientation}View"]`;
        let refsContainer = document.querySelector(selector);
        if (!refsContainer) return;
        refsContainer.innerHTML = "";

        //container attributes
        refsContainer.setAttribute("data-ref-src", refsFile);
        refsContainer.setAttribute("data-ref-type", type);
        refsContainer.closest(`[data-type="com.idc.ui.core.scroll.container"]`).setAttribute("data-ref-type", type);

        //content image
        let refsIMG = document.createElement("img");
        let folderPath = type == "all" ? util.getSharedResourcesPath() : "";
        refsIMG.setAttribute("src", folderPath + "img/references/" + refsFile);
        refsContainer.appendChild(refsIMG);

        //set visible
        refsContainer.setAttribute("data-view-state", "active");

        //switch
        if (this.switch.active) {
          let switchElement = document.querySelector(`#${vars.references.components.modal.id} [data-type="com.idc.ui.references.switch"]`);
          if (switchElement) {
            switchElement.setAttribute("data-view-state", "active");
            switchElement.setAttribute("data-selected", type);
          }
        }
      },
    },
    tab: {
      selector: '[data-type="com.idc.ui.core.tab"]',
      collection: [],
      awake: function () {
        document.querySelectorAll(this.selector).forEach((el) => {
          //set attributes or buttons to validate
          const toValidate = {
            attributes: [],
            other: ["instances"],
          };

          if (this.isHTMLValid(el, toValidate)) {
            //retrieve or set tab id
            let el_id;
            if (el.id === "") {
              el_id = com.idc.ui.common.generateUniqueId("com_idc_ui_core_tab", this.collection);
              el.id = el_id;
              el.setAttribute("id", el_id);
              el.codeGeneratedId = true;
            } else {
              el_id = el.id;
            }

            //collection (do not proceed if already exists)
            if (this.collection.indexOf(el_id) >= 0) {
              if (document.querySelector(`#${el_id}`)) {
                if (el.activated) {
                  //do not proceed if element has already been activated
                  return;
                } else {
                  //the element exists in the collection and dom, but has not been activated (e.g. html code has been replaced)
                }
              } else {
                //element has been removed from DOM, remove from collection
                this.collection.splice(this.collection.indexOf(el_id), 1);
              }
            } else {
              //add to accordions collection
              this.collection.push(el_id);
            }

            //flag elements as activated
            el.activated = true;

            //view state
            el.viewState = {
              activeInstance: null,
            };

            //is tab modal?
            el.isTabModal = el.getAttribute("data-sub-type") == "com.idc.ui.core.tabModal";

            //components collection
            el.components = {
              container: null,
              instances: [],
            };

            //components: container
            el.components.container = {
              element: el.querySelector(':scope > [data-type="com.idc.ui.core.tab.container"]'),
            };

            //components: instances
            if (el.components.container.element) {
              let buttons = el.components.container.element.querySelector(':scope > [data-type="com.idc.ui.core.tab.buttons"]');
              if (buttons) {
                buttons.querySelectorAll('[data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.core.tab.button"]').forEach((button) => {
                  const instance = {
                    name: button.getAttribute("data-instance"),
                    order: button.getAttribute("data-order"),
                    button: {
                      element: button,
                    },
                    content: {
                      element: el.components.container.element.querySelector(
                        `[data-type="com.idc.ui.core.tab.content"][data-instance="${button.getAttribute("data-instance")}"]`
                      ),
                    },
                    params: com.idc.ui.common.readElementOptions(button, {
                      beforeOpen: null,
                      afterOpen: null,
                      beforeClose: null,
                      afterClose: null,
                      initialState: null, //'open' will set the instance open by default
                    }),
                    viewState: null,
                  };
                  el.components.instances.push(instance);
                });
                //sort if necessary
                if (el.components.instances.every((instance) => instance.order !== null)) {
                  el.components.instances.sort((a, b) => (a.order > b.order ? 1 : -1));
                }
              }
            }

            //components: cover
            el.components.cover = {
              hasCover: null,
              buttons: [],
            };
            let coverElement = document.querySelector(`[data-type="com.idc.ui.core.tab.cover"][data-target-id="${el.id}"]`);
            if (coverElement) {
              el.components.cover.hasCover = true;
              el.components.cover.element = coverElement;
              el.components.cover.viewState = "active";

              let buttons = el.components.cover.element.querySelector(':scope > [data-type="com.idc.ui.core.tab.buttons"]');
              if (buttons) {
                buttons.querySelectorAll('[data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.core.tab.button"]').forEach((button) => {
                  button = {
                    instance: button.getAttribute("data-instance"),
                    element: button,
                  };
                  el.components.cover.buttons.push(button);
                });
              }
              el.setAttribute("data-view-state", "hidden"); //data-view-state of tab will be hidden if a cover is present
            } else {
              el.setAttribute("data-view-state", "active"); //data-view-state of tab will be active if a cover is not present
            }

            //params
            el.params = com.idc.ui.common.readElementOptions(el, {
              backModalStyle: null, //used to assign a class to back modal
              btnTransitionCoverToTab: null, //used to assign a transition class from cover button to tab button
              btnTransitionTabToCover: null, //used to assign a transition class from tab button to cover button
            });

            //assign functions and events: main element
            el.itemClick = this.itemClick;
            el.setInstance = this.setInstance;
            el.getActiveInstance = this.getActiveInstance;
            el.hideCover = this.hideCover;
            el.showCover = this.showCover;
            el.overwriteParameterFunction = this.overwriteParameterFunction;
            el.resetToDefaults = this.resetToDefaults;
            el.setInstanceVisibility = this.setInstanceVisibility;

            //assign functions and events: instances
            el.components.instances.forEach((instance) => {
              instance.button.element.addEventListener("click", (event) => {
                el.itemClick(event.currentTarget.getAttribute("data-instance"));
              });
              instance.executeBeforeOpen = com.idc.ui.common.executeFunction.beforeOpen;
              instance.executeAfterOpen = com.idc.ui.common.executeFunction.afterOpen;
              instance.executeBeforeClose = com.idc.ui.common.executeFunction.beforeClose;
              instance.executeAfterClose = com.idc.ui.common.executeFunction.afterClose;
            });

            //assign functions and events: cover
            if (el.components.cover.hasCover) {
              el.components.cover.buttons.forEach((button) => {
                button.element.addEventListener("click", (event) => {
                  el.hideCover();
                  el.itemClick(event.currentTarget.getAttribute("data-instance"));
                });
              });
            }

            //back modal (create, set style, close event)
            el.components.backModal = {
              element: com.idc.util.jsonToHTML(com.idc.templates.core.modal.backModal, null, el, "before"),
            };
            el.components.backModal.element.setAttribute("data-back-modal-for", el.id);
            if (el.params.backModalStyle !== null) {
              el.components.backModal.element.classList.add(el.params.backModalStyle);
            }
            setTimeout(() => {
              el.components.backModal.element.addEventListener("click", () => {
                el.itemClick(el.viewState.activeInstance); //back modal tap: simulate tap on same instance
              });
            }, 300);

            //restore saved state if returned from standalone pop-up
            if (
              com.idc.clm.isBackFromStandAloneSlide() &&
              com.idc.ui.common.backFromStandalone.getPersistentProperty(com.idc.clm.vars.navigation.currentSlide.id, el.id, "activeInstance") !== null &&
              com.idc.ui.common.backFromStandalone.getPersistentProperty(com.idc.clm.vars.navigation.currentSlide.id, el.id, "activeInstance").value !== null
            ) {
              //show instances
              el.components.container.element.setAttribute("data-view-state", "active");

              //set instance
              el.setInstance(
                com.idc.ui.common.backFromStandalone.getPersistentProperty(com.idc.clm.vars.navigation.currentSlide.id, el.id, "activeInstance").value
              );
            } else {
              //not back from standalone slide: reset to defaults
              el.resetToDefaults();
            }
          }
        });
      },
      hideCover: function () {
        const hideCover = () => {
          this.components.cover.element.removeAttribute("data-view-state");
          this.components.cover.viewState = null;
          this.setAttribute("data-view-state", "active");
          this.components.container.element.setAttribute("data-view-state", "active");
        };
        if (this.params.btnTransitionCoverToTab) {
          //need to handle transition before hiding
          this.components.cover.buttons.forEach((button) => {
            button.element.classList.add(this.params.btnTransitionCoverToTab);
            button.element.addEventListener("transitionend", () => {
              button.element.classList.remove(this.params.btnTransitionCoverToTab);
              hideCover();
            });
          });
        } else {
          //hide right away
          hideCover();
        }
      },
      showCover: function () {
        const showCover = () => {
          this.components.cover.element.setAttribute("data-view-state", "active");
          this.components.cover.viewState = "active";
          this.setAttribute("data-view-state", "hidden");
          this.components.container.element.removeAttribute("data-view-state");
        };
        if (this.params.btnTransitionTabToCover) {
          //need to handle transition before hiding
          this.components.instances.forEach((instance) => {
            instance.button.element.classList.add(this.params.btnTransitionTabToCover);
            instance.button.element.addEventListener("transitionend", () => {
              instance.button.element.classList.remove(this.params.btnTransitionTabToCover);
              showCover();
            });
          });
        } else {
          //hide right away
          showCover();
        }
      },
      itemClick: function (pInstance) {
        let instances = this.components.instances;

        const instanceIndex = instances.findIndex((instance) => {
          return instance.name === pInstance;
        });

        if (instances[instanceIndex].viewState === "active") {
          if (this.components.cover.hasCover) {
            //execute before close
            instances[instanceIndex].executeBeforeClose();

            //show cover
            this.showCover();

            //hide back modal
            if (this.isTabModal) {
              this.components.backModal.element.style.display = "none";
            }

            //close all
            this.setInstance();

            //execute after close
            instances[instanceIndex].executeAfterClose();
          }
        } else {
          //execute before open
          instances[instanceIndex].executeBeforeOpen();

          //open
          this.setInstance(pInstance);

          //execute after open
          instances[instanceIndex].executeAfterOpen();
        }
      },
      setInstance: function (pInstance) {
        //hide cover
        if (typeof pInstance !== "undefined") {
          if (this.components.cover.viewState === "active") {
            this.hideCover();
          }
        }

        //clear viewState activeInstance
        this.viewState.activeInstance = null;

        //set open, close all the rest
        this.components.instances.forEach((instance) => {
          if (instance.name === pInstance) {
            instance.button.element.setAttribute("data-view-state", "on");
            instance.content.element.setAttribute("data-view-state", "active");
            instance.viewState = "active";
            this.viewState.activeInstance = pInstance;
          } else {
            //all the rest
            if (instance.button.element.getAttribute("data-view-state") != "hidden") {
              instance.button.element.setAttribute("data-view-state", "off");
            }
            instance.content.element.removeAttribute("data-view-state");
            instance.viewState = null;

            //reset child objects (revert to default state)
            com.idc.ui.common.resetChildElements(instance.content.element);
          }
        });

        //data attributes
        this.setAttribute("data-any-active-instance", this.viewState.activeInstance ? "true" : "false");
        this.setAttribute("data-active-instance", this.viewState.activeInstance ? this.viewState.activeInstance : "none");

        //show back modal
        if (this.viewState.activeInstance && this.isTabModal) {
          this.components.backModal.element.style.display = "block";
        } else {
          this.components.backModal.element.style.display = "none";
        }

        //refresh references
        if (com.idc.clm.vars.references.active) {
          com.idc.ui.core.references.refresh();
        }

        //save state (active instance)
        if (!this.codeGeneratedId) {
          //only if the element has an ID defined in the HTML
          let activeInstanceIndex = this.components.instances.findIndex((instance) => {
            return instance.viewState === "active";
          });

          let activeInstanceName = null;
          if (activeInstanceIndex >= 0) {
            activeInstanceName = this.components.instances[activeInstanceIndex].name;
          }

          com.idc.ui.common.backFromStandalone.setPersistentProperty(
            com.idc.clm.vars.navigation.currentSlide.id,
            this.id,
            "activeInstance",
            "viewState",
            activeInstanceName
          );
        }

        //recently set flag (prevent from resetting before 1 sec after being set)
        this.recentlySet = true;
        setTimeout(() => {
          this.recentlySet = false;
        }, 1000);
      },
      setInstanceVisibility: function (pInstance, pViewState) {
        let instance = this.components.instances.find((instance) => {
          return instance.name === pInstance;
        });

        if (!instance) return;

        //set visibility: tab buttons
        switch (pViewState) {
          case "hidden":
            instance.button.element.setAttribute("data-view-state", "hidden");
            break;
          case "visible":
            instance.button.element.setAttribute("data-view-state", "off");
            break;
        }

        //set visibility: cover buttons
        if (this.components.cover.hasCover) {
          let coverButton = this.components.cover.buttons.find((button) => {
            return button.instance === pInstance;
          });

          if (coverButton) {
            switch (pViewState) {
              case "hidden":
                coverButton.element.setAttribute("data-view-state", "hidden");
                break;
              case "visible":
                coverButton.element.setAttribute("data-view-state", "");
                break;
            }
          }
        }

        //if all buttons off, set first instance
        if (
          this.components.instances.every(
            (instance) =>
              instance.button.element.getAttribute("data-view-state") === "off" || instance.button.element.getAttribute("data-view-state") === "hidden"
          )
        ) {
          //search for first off button and set it on
          let firstOffButton = this.components.instances.find((instance) => {
            return instance.button.element.getAttribute("data-view-state") === "off";
          });

          //set instance
          if (firstOffButton) {
            this.setInstance(firstOffButton.name);
          }
        }
      },
      getActiveInstance: function () {
        const activeInstanceIndex = this.components.instances.findIndex((instance) => {
          return instance.viewState === "active";
        });
        if (activeInstanceIndex >= 0) {
          return this.components.instances[activeInstanceIndex];
        }
      },
      isHTMLValid: function (pElement, pToValidate) {
        let errorList = "";

        //attributes
        pToValidate.attributes.forEach((attribute) => {
          if (com.idc.util.getElementAttribute(pElement, attribute) === "") {
            errorList = `${errorList} missing ${attribute} attribute; `;
          }
        });

        //instances and buttons
        if (pToValidate.other.indexOf("instances") >= 0) {
          const container = pElement.querySelector(':scope > [data-type="com.idc.ui.core.tab.container"]');

          const buttons = container.querySelector(':scope > [data-type="com.idc.ui.core.tab.buttons"]');
          let buttonCount;
          if (buttons) {
            buttonCount = buttons.querySelectorAll('[data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.core.tab.button"]').length;
          } else {
            errorList = `${errorList} unable to find buttons container; `;
          }

          const contents = container.querySelector(':scope > [data-type="com.idc.ui.core.tab.contents"]');
          let contentCount;
          if (contents) {
            contentCount = contents.querySelectorAll('[data-type="com.idc.ui.core.tab.content"]').length;
          } else {
            errorList = `${errorList} unable to find contents container; `;
          }

          if (!buttonCount || !contentCount || buttonCount !== contentCount) {
            errorList = `${errorList} number of buttons and content instances do not match; `;
          }
        }

        if (errorList !== "") com.idc.util.log(`${com.idc.util.getElementAttribute(pElement, "data-type")} ${pElement.id}: ${errorList}`);

        return errorList === "";
      },
      overwriteParameterFunction: function (pInstance, pEvent, pFunction) {
        let instances = this.components.instances;

        if (typeof pFunction === "function") {
          const instanceIndex = instances.findIndex((instance) => {
            return instance.name === pInstance;
          });

          switch (pEvent) {
            case "beforeOpen":
              instances[instanceIndex].executeBeforeOpen = pFunction;
              break;
            case "afterOpen":
              instances[instanceIndex].executeAfterOpen = pFunction;
              break;
            case "beforeClose":
              instances[instanceIndex].executeBeforeClose = pFunction;
              break;
            case "afterClose":
              instances[instanceIndex].executeAfterClose = pFunction;
              break;
          }
        }
      },
      resetToDefaults: function () {
        if (this.recentlySet) return;

        //remove transition classes
        if (this.components.cover.hasCover) {
          if (this.params.btnTransitionCoverToTab) {
            this.components.cover.buttons.forEach((button) => {
              button.element.classList.remove(this.params.btnTransitionCoverToTab);
            });
          }
          if (this.params.btnTransitionTabToCover) {
            this.components.instances.forEach((instance) => {
              instance.button.element.classList.remove(this.params.btnTransitionTabToCover);
            });
          }
        }

        //show cover if present, or (open default instance (set by parameter) or first)
        if (this.components.cover.hasCover) {
          //show cover
          this.components.cover.element.setAttribute("data-view-state", "active");
          //hide instances
          this.components.container.element.removeAttribute("data-view-state");
        } else {
          //show instances
          this.components.container.element.setAttribute("data-view-state", "active");

          if (
            this.components.instances.findIndex((instance) => {
              return instance.params.initialState === "open";
            }) >= 0
          ) {
            //there's a default instance set by param
            this.components.instances.forEach((instance) => {
              if (instance.params.initialState === "open") {
                this.setInstance(instance.name, true);
              }
            });
          } else {
            //no default instance set by param, use first
            if (this.components.instances.length > 0) {
              this.setInstance(this.components.instances[0].name, true);
            }
          }
        }
      },
    },
    utilitiesMenu: {
      components: {
        el: null,
        items: {
          buttons: [],
          separator: null,
          placeholder: null,
        },
        containers: {
          centerGroup: null,
          rightGroup: null,
        },
      },
      awake: function () {
        let vars = com.idc.clm.vars;

        if (!vars.utilitiesMenu.active) return;

        this.components.el = document.querySelector('[data-type="com.idc.ui.utilitiesMenu"]');
        if (!this.components.el) return;

        //containers
        this.components.containers.centerGroup = this.components.el.querySelector(
          '[data-type="com.idc.ui.utilitiesMenu.container"][data-sub-type="com.idc.ui.utilitiesMenu.container.center"]'
        );
        this.components.containers.rightGroup = this.components.el.querySelector(
          '[data-type="com.idc.ui.utilitiesMenu.container"][data-sub-type="com.idc.ui.utilitiesMenu.container.right"]'
        );

        //items, separator and placeholder
        this.components.el.querySelector('[data-type="com.idc.ui.utilitiesMenu.items"]').childNodes.forEach((item) => {
          if (!item.getAttribute) return;
          switch (item.getAttribute("data-type")) {
            case "com.idc.ui.utilitiesMenu.separator":
              this.components.items.separator = item;
              break;
            case "com.idc.ui.utilitiesMenu.placeholder":
              this.components.items.placeholder = item;
              break;
            default:
              this.components.items.buttons.push(item);
          }
        });

        //if not standalone, update contents, style and z-index
        //if a standalone modal, method will be called from the modal itself
        if (!vars.navigation.currentSlide.isStandalone) {
          //update contents
          this.updateGroupsContents();

          //set style and z-index
          this.updateStyleAndZIndex();
        }
      },
      updateGroupsContents: function () {
        let vars = com.idc.clm.vars;

        if (!vars.utilitiesMenu.active) return;
        if (!this.components.el) return;

        let isDynamicPresentation = vars.navigation.dynamicPresentation.active;
        let slideType = vars.navigation.currentSlide.isStandalone ? "standaloneModal" : "mainSlide";
        let currentSet;
        if (!isDynamicPresentation) {
          //default set for normal presentation
          currentSet = vars.utilitiesMenu.sets[slideType];
        } else {
          //special set for dynamic presentation
          let dynamicPresentationSource = vars.navigation.dynamicPresentation.source;
          if (
            vars.utilitiesMenu.sets.dynamicPresentation[dynamicPresentationSource][slideType].centerGroup.length > 0 ||
            vars.utilitiesMenu.sets.dynamicPresentation[dynamicPresentationSource][slideType].rightGroup.length > 0
          ) {
            currentSet = vars.utilitiesMenu.sets.dynamicPresentation[dynamicPresentationSource][slideType];
          }
          if (!currentSet) {
            currentSet = vars.utilitiesMenu.sets[slideType]; //fallback to default set
          }
        }

        //for each group
        ["centerGroup", "rightGroup"].forEach((groupName) => {
          if (!this.components.containers[groupName]) return;
          this.components.containers[groupName].innerHTML = "";
          currentSet[groupName].forEach((elementId) => {
            //find element
            let element = this.components.items.buttons.find((el) => el.id == elementId);
            if (!element) return;

            //add element to container
            this.components.containers[groupName].appendChild(element);

            //if not last item, add separator
            let isLastItem = currentSet[groupName].indexOf(elementId) == currentSet[groupName].length - 1;
            if (!isLastItem) {
              let newSeparator = this.components.items.separator.cloneNode(true);
              newSeparator.setAttribute("data-after-item", elementId);
              this.components.containers[groupName].appendChild(newSeparator);
            }
          });
        });

        //if standalone modal and need to append close button to right container, add close button to right container
        if (vars.navigation.currentSlide.isStandalone && vars.utilitiesMenu.sets.standaloneModal.appendCloseButtonToRightGroup) {
          let standaloneModalId = com.idc.clm.findSlide(vars.navigation.currentSlide.id).standaloneModal.modalId;
          let closeButton = document.querySelector(`#${standaloneModalId}`).components.closeButton;

          if (closeButton) {
            let closeButtonEl = closeButton.element;
            if (closeButtonEl) {
              //close button already in right group?
              let closeButtonAlreadyInRightGroup = this.components.containers.rightGroup.querySelector(`#${closeButtonEl.getAttribute("id")}`) != null;

              if (!closeButtonAlreadyInRightGroup) {
                //change position to static (disables top and left properties)
                closeButtonEl.style.position = "static";
                //add separator
                let newSeparator = this.components.items.separator.cloneNode(true);
                newSeparator.setAttribute("data-before-item", closeButtonEl.getAttribute("id"));
                this.components.containers.rightGroup.appendChild(newSeparator);
                //add close button
                this.components.containers.rightGroup.appendChild(closeButtonEl);
                //flag button as inside utilities menu
                closeButtonEl.setAttribute("data-inside-utilities-menu", "true");
              }
            }
          }
        }
      },
      updateStyleAndZIndex: function () {
        let vars = com.idc.clm.vars;

        if (!vars.utilitiesMenu.active) return;
        if (!this.components.el) return;

        let activeModalsStack = com.idc.ui.core.modal.activeModalsStack;
        let activeModalStackLength = activeModalsStack.length;
        let aModalIsActive = activeModalStackLength > 0;
        let activeModalId = aModalIsActive ? activeModalsStack[activeModalStackLength - 1] : null;
        let isActiveModalStandalone = aModalIsActive ? document.querySelector(`#${activeModalId}`).isStandalone : false;
        let slideType = vars.navigation.currentSlide.isStandalone ? "standaloneModal" : "mainSlide";
        let isDynamicPresentation = vars.navigation.dynamicPresentation.active;
        let sets;

        if (!isDynamicPresentation) {
          //default set for normal presentation
          sets = vars.utilitiesMenu.sets;
        } else {
          let dynamicPresentationSource = vars.navigation.dynamicPresentation.source;
          switch (dynamicPresentationSource) {
            case "callflows":
              if (
                vars.utilitiesMenu.sets.dynamicPresentation.callflows[slideType].centerGroup.length > 0 ||
                vars.utilitiesMenu.sets.dynamicPresentation.callflows[slideType].rightGroup.length > 0
              ) {
                sets = vars.utilitiesMenu.sets.dynamicPresentation.callflows;
              }
              break;
          }
          if (!sets) {
            sets = vars.utilitiesMenu.sets; //fallback to default set
          }
        }

        //style name
        let viewStateName;
        if (!aModalIsActive) {
          //main slide or just 1 modal object open
          viewStateName = sets.mainSlide.buttonViewState;
        } else {
          if (isActiveModalStandalone) {
            //standalone modal
            viewStateName = sets.standaloneModal.buttonViewState;
          } else {
            //regular modal
            viewStateName = sets.regularModals.buttonViewState;
          }
        }

        //set style and z-index
        ["centerGroup", "rightGroup"].forEach((groupName) => {
          if (!this.components.containers[groupName]) return;
          this.components.containers[groupName].setAttribute("children-view-state", viewStateName);
          this.components.containers[groupName].childNodes.forEach((el) => {
            //set style (unless it's disabled; in that case it'll remain desabled)
            if (el.getAttribute("data-view-state") != "disabled") {
              el.setAttribute("data-view-state", viewStateName);
            }
            //set z-index
            if (!aModalIsActive) {
              //main slide, all buttons z-index 0
              el.style.zIndex = 0;
            } else {
              if (isActiveModalStandalone) {
                //standalone, bring all buttons to front
                el.style.zIndex = activeModalStackLength * 10 + 1;
              } else {
                //normal modal, bring to front dual button if necessary
                if (sets.regularModals.bringToFront.dualButtonForActiveModal.active) {
                  let isDualButtonOfCurrentModal =
                    el.getAttribute("data-sub-type") == "com.idc.ui.core.modal.dualButton" && el.getAttribute("data-target-id") == activeModalId;
                  if (isDualButtonOfCurrentModal) {
                    el.style.zIndex = activeModalStackLength * 10 + 1;
                  }
                }

                //normal modal, bring to front references button if necessary
                if (sets.regularModals.bringToFront.referencesButton.active) {
                  //bring forward unless the modal is excluded from params
                  if (!sets.regularModals.bringToFront.referencesButton.excludeModals.includes(activeModalId)) {
                    let isReferencesOpenButton = el.getAttribute("id") == vars.references.components.openButton.id;
                    if (isReferencesOpenButton) {
                      el.style.zIndex = activeModalStackLength * 10 + 1;
                    }
                  }
                }
              }
            }
          });
        });
      },
      hideItemInGroup: function (pGroupId, pItemId) {
        let group = this.components.containers[pGroupId];
        if (!group) return;

        let item = group.querySelector(`#${pItemId}`);
        if (item) {
          item.style.display = "none";
        }
        let separatorAfter = group.querySelector(`[data-after-item="${pItemId}"]`);
        if (separatorAfter) {
          separatorAfter.style.display = "none";
        }
        let separatorBefore = group.querySelector(`[data-before-item="${pItemId}"]`);
        if (separatorBefore) {
          separatorBefore.style.display = "none";
        }
      },
    },
  },
  common: {
    generateUniqueId: function (pSeed, pCollection) {
      let uniqueId = "";
      do {
        uniqueId = `${pSeed}_${pCollection.length + 1}_${Math.round(Math.random("1000") * 1000)}`;
      } while (uniqueId == "" || pCollection.includes(uniqueId));
      return uniqueId;
    },
    executeFunction: {
      beforeOpen: function () {
        if (this.params.beforeOpen !== null) {
          com.idc.util.executeParameterFunction(this.params.beforeOpen);
        }
      },
      afterOpen: function () {
        if (this.params.afterOpen !== null) {
          setTimeout(() => {
            com.idc.util.executeParameterFunction(this.params.afterOpen);
          }, 500);
        }
      },
      beforeClose: function () {
        if (this.params.beforeClose !== null) {
          com.idc.util.executeParameterFunction(this.params.beforeClose);
        }
      },
      afterClose: function () {
        if (this.params.afterClose !== null) {
          setTimeout(() => {
            com.idc.util.executeParameterFunction(this.params.afterClose);
          }, 500);
        }
      },
    },
    resetChildElements: function (pContainer) {
      //accordions, tabs, multi
      pContainer
        .querySelectorAll("[data-type='com.idc.ui.core.accordion'],[data-type='com.idc.ui.core.tab'],[data-type='com.idc.ui.core.multi.container']")
        .forEach((el) => {
          //wait for resetToDefaults function to be available and execute
          new Promise((resolve) => {
            if (el.resetToDefaults) {
              resolve();
            } else {
              const interval = setInterval(() => {
                if (el.resetToDefaults) {
                  clearInterval(interval);
                  resolve();
                }
              }, 500);
            }
          }).then(() => {
            el.resetToDefaults();
          });

          //reset back from standalone persistent properties
          this.backFromStandalone.resetPersistentPropertiesStylesAndClasses(el.id);
        });
    },
    readElementOptions: function (pEl, pOptionsSchema) {
      const optionsTxt = com.idc.util.getElementAttribute(pEl, "data-options");
      const returnObj = pOptionsSchema;
      let optionsArr, optionItem;
      if (optionsTxt !== "") {
        try {
          optionsArr = optionsTxt.split(";");
        } catch (err) {
          com.idc.util.log(err);
          optionsArr = [];
        }

        for (let i = 0; i < optionsArr.length; i++) {
          try {
            optionItem = optionsArr[i].split("=");
          } catch (err) {
            com.idc.util.log(err);
            optionItem = [];
          }

          if (Array.isArray(optionItem) && optionItem.length !== 0) {
            const optionKey = optionItem[0];
            const optionValue = optionItem[1];

            if (pOptionsSchema.hasOwnProperty(optionKey)) {
              //check if option exists in params object schema
              switch (typeof pOptionsSchema[optionKey]) {
                case "boolean":
                  returnObj[optionKey] = optionValue.toLowerCase() === "true";
                  break;
                default:
                  returnObj[optionKey] = optionValue;
              }
            }
          }
        }
      }

      return returnObj;
    },
    backFromStandalone: {
      setPersistentProperty: function (pSlideId, pElementId, pPropertyName, pPropertyType, pPropertyValue) {
        let backFromStandalone = com.idc.clm.persistentData.backFromStandalone;

        //add slide
        let slideIndex = backFromStandalone.findIndex((slide) => {
          return slide.slideId == pSlideId;
        });
        if (slideIndex < 0) {
          backFromStandalone.push({ slideId: pSlideId, elements: [] });
          slideIndex = backFromStandalone.length - 1;
        }

        //add element
        let elementIndex = backFromStandalone[slideIndex].elements.findIndex((element) => {
          return element.id == pElementId;
        });
        if (elementIndex < 0) {
          backFromStandalone[slideIndex].elements.push({ id: pElementId, properties: [] });
          elementIndex = backFromStandalone[slideIndex].elements.length - 1;
        }

        //add property
        let propertyIndex = backFromStandalone[slideIndex].elements[elementIndex].properties.findIndex((property) => {
          return property.name == pPropertyName;
        });
        if (propertyIndex < 0) {
          backFromStandalone[slideIndex].elements[elementIndex].properties.push({
            name: pPropertyName,
            type: pPropertyType,
            value: pPropertyValue,
          });
          propertyIndex = backFromStandalone[slideIndex].elements[elementIndex].properties.length - 1;
        } else {
          backFromStandalone[slideIndex].elements[elementIndex].properties[propertyIndex] = {
            name: pPropertyName,
            type: pPropertyType,
            value: pPropertyValue,
          };
        }

        //update persistent data
        com.idc.clm.updatePersistentData();
      },
      getPersistentProperty: function (pSlideId, pElementId, pPropertyName) {
        let backFromStandalone = com.idc.clm.persistentData.backFromStandalone;

        let slideIndex = backFromStandalone.findIndex((slide) => {
          return slide.slideId == pSlideId;
        });
        if (slideIndex < 0) {
          return null;
        }

        let elementIndex = backFromStandalone[slideIndex].elements.findIndex((element) => {
          return element.id == pElementId;
        });
        if (elementIndex < 0) {
          return null;
        }

        let propertyIndex = backFromStandalone[slideIndex].elements[elementIndex].properties.findIndex((property) => {
          return property.name == pPropertyName;
        });
        if (propertyIndex < 0) {
          return null;
        }

        return backFromStandalone[slideIndex].elements[elementIndex].properties[propertyIndex];
      },
      setPersistentStylesAndClasses: function (pElementId) {
        let backFromStandalone = com.idc.clm.persistentData.backFromStandalone;
        const element = document.getElementById(pElementId);
        if (element) {
          //delete previous properties
          for (let i = 0; i < backFromStandalone.length; i++) {
            if (backFromStandalone[i].slideId == com.idc.clm.vars.navigation.currentSlide.id) {
              for (let j = 0; j < backFromStandalone[i].elements.length; j++) {
                if (backFromStandalone[i].elements[j].id == pElementId) {
                  backFromStandalone[i].elements.splice(j, 1);
                  break;
                }
              }
            }
          }

          //styles
          const styles = element.getAttribute("style");
          if (styles) {
            //save each style separately (styles list uses ;)
            let stylesArr;
            if (styles.indexOf(";") >= 0) {
              stylesArr = styles.split(";");
            } else {
              stylesArr = [styles];
            }
            for (let i = 0; i < stylesArr.length; i++) {
              const styleItem = stylesArr[i].split(":");
              if (styleItem.length == 2) {
                const styleName = styleItem[0].trim();
                const styleValue = styleItem[1].trim();
                this.setPersistentProperty(com.idc.clm.vars.navigation.currentSlide.id, pElementId, styleName, "style", styleValue);
              }
            }
          }

          //classes
          const classes = element.getAttribute("class");
          if (classes) {
            //save each class separately (classes list uses space)
            let classesArr;
            if (classes.indexOf(" ") >= 0) {
              classesArr = classes.split(" ");
            } else {
              classesArr = [classes];
            }
            for (let i = 0; i < classesArr.length; i++) {
              const className = classesArr[i].trim();
              this.setPersistentProperty(com.idc.clm.vars.navigation.currentSlide.id, pElementId, className, "class", className);
            }
          }
        }
      },
      restorePersistentStylesAndClasses: function () {
        const slideId = com.idc.clm.vars.navigation.currentSlide.id;
        const backFromStandalone = com.idc.clm.persistentData.backFromStandalone;
        for (let i = 0; i < backFromStandalone.length; i++) {
          if (backFromStandalone[i].slideId == slideId) {
            const elements = backFromStandalone[i].elements;
            for (let j = 0; j < elements.length; j++) {
              const elementId = elements[j].id;
              const properties = elements[j].properties;
              for (let k = 0; k < properties.length; k++) {
                const propertyName = properties[k].name;
                const propertyType = properties[k].type;
                const propertyValue = properties[k].value;
                if (propertyType == "style") {
                  document.getElementById(elementId).style[propertyName] = propertyValue;
                } else if (propertyType == "class") {
                  document.getElementById(elementId).classList.add(propertyValue);
                }
              }
            }
          }
        }
      },
      resetPersistentPropertiesStylesAndClasses: function (pElementId) {
        let backFromStandalone = com.idc.clm.persistentData.backFromStandalone;
        if (!pElementId) {
          backFromStandalone = [];
        } else {
          for (let i = 0; i < backFromStandalone.length; i++) {
            if (backFromStandalone[i].slideId == com.idc.clm.vars.navigation.currentSlide.id) {
              for (let j = 0; j < backFromStandalone[i].elements.length; j++) {
                if (backFromStandalone[i].elements[j].id == pElementId) {
                  backFromStandalone[i].elements.splice(j, 1);
                  break;
                }
              }
            }
          }
        }
        com.idc.clm.updatePersistentData();
      },
    },
    swipeListener: function (pEl, pDeviceType, pHandler) {
      let touchsurface = pEl,
        swipedir,
        startX,
        startY,
        distX,
        distY,
        threshold = pDeviceType == "iPad" ? 150 : 300, //required min distance traveled to be considered swipe
        restraint = pDeviceType == "iPad" ? 100 : 200, // maximum distance allowed at the same time in perpendicular direction
        allowedTime = pDeviceType == "iPad" ? 300 : 600, // maximum time allowed to travel that distance
        elapsedTime,
        startTime;

      //attach events
      switch (pDeviceType) {
        case "iPad":
          touchsurface.addEventListener(
            "touchstart",
            function (e) {
              start(e.changedTouches[0]);
            },
            false
          );
          touchsurface.addEventListener(
            "touchend",
            function (e) {
              end(e.changedTouches[0]);
            },
            false
          );
          break;
        case "winTablet":
          touchsurface.addEventListener(
            "pointerdown",
            function (e) {
              start(e);
            },
            false
          );
          touchsurface.addEventListener(
            "pointerup",
            function (e) {
              end(e);
            },
            false
          );
          break;
        case "other":
          touchsurface.addEventListener(
            "mousedown",
            function (e) {
              start(e);
            },
            false
          );
          touchsurface.addEventListener(
            "mouseup",
            function (e) {
              end(e);
            },
            false
          );
          break;
      }

      const start = function (touchobj) {
        swipedir = "none";
        distX = 0;
        distY = 0;
        startX = touchobj.pageX;
        startY = touchobj.pageY;
        startTime = new Date().getTime(); // record time when finger first makes contact with surface
      };

      const end = function (touchobj) {
        distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime; // get time elapsed
        if (elapsedTime <= allowedTime) {
          // first condition for awipe met
          if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
            // 2nd condition for horizontal swipe met
            swipedir = distX < 0 ? "left" : "right"; // if dist traveled is negative, it indicates left swipe
          } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
            // 2nd condition for vertical swipe met
            swipedir = distY < 0 ? "up" : "down"; // if dist traveled is negative, it indicates up swipe
          }
        }

        pHandler({
          direction: swipedir,
          distance: {
            x: distX,
            y: distY,
          },
          time: elapsedTime,
        });
      };
    },
    setComplexLinkElement: function () {
      let slideId = com.idc.clm.vars.navigation.currentSlide.id;

      if (slideId != com.idc.clm.persistentData.complexLinks.toSlide) return;

      let element = document.querySelector(`#${com.idc.clm.persistentData.complexLinks.element.id}`);
      if (!element) return;

      let instance;

      switch (com.idc.clm.persistentData.complexLinks.element.type) {
        case "accordion":
          instance = com.idc.clm.persistentData.complexLinks.element.instance;
          if (instance) {
            element.setInstance(instance, true);
          }
          break;
        case "tab":
        case "multi":
          instance = com.idc.clm.persistentData.complexLinks.element.instance;
          if (instance) {
            element.setInstance(instance);
          }
          break;
        case "modal":
          element.open();
          break;
      }
    },
  },
  dynamicPresentation: {
    setMenu: function (slidesSequence) {
      let util = com.idc.util;
      let clm = com.idc.clm;

      let source = clm.vars.navigation.dynamicPresentation.source;
      let menuMode = clm.vars.options.dynamicPresentation.source[source].menu.dynamic.mode;
      let functionName = clm.vars.options.dynamicPresentation.source[source].menu.dynamic.functionName;

      //option: external function (custom dynamic menu)
      if (menuMode == "custom") {
        if (functionName) {
          let populateMenuFunction = functionName;
          if (typeof window[populateMenuFunction] === "function") {
            window[populateMenuFunction](slidesSequence);
          }
        }

        if (document.querySelector("#com_idc_ui_dynamic_menu_bundle")) {
          document.querySelector("#com_idc_ui_dynamic_menu_bundle").remove();
        }

        return;
      }

      //option: auto menu
      if (menuMode == "auto") {
        let targetDiv = document.querySelector("body");
        if (targetDiv.querySelector('[data-type="com.idc.ui.contentSize"]')) {
          targetDiv = targetDiv.querySelector('[data-type="com.idc.ui.contentSize"]');
        }
        if (targetDiv.querySelector('[data-type="com.idc.ui.mainContent"]')) {
          targetDiv = targetDiv.querySelector('[data-type="com.idc.ui.mainContent"]');
        }

        let menu = util.jsonToHTML(com.idc.templates.dynamicPresentation.menuBundle, "com_idc_ui_dynamic_menu_bundle", targetDiv, null);

        let container = menu.querySelector('[data-type="com.idc.ui.core.menu.container"]');
        let template = menu.querySelector('[data-type="com.idc.ui.core.menu.buttonTemplate"]');

        slidesSequence.forEach((slideId) => {
          let button = template.cloneNode(true);
          button.innerHTML = com.idc.clm.findSlide(slideId).description;
          button.setAttribute("data-target-id", slideId);
          button.setAttribute("data-type", "com.idc.ui.core.link");
          if (slideId == com.idc.clm.vars.navigation.currentSlide.id) {
            button.setAttribute("data-current-slide", true);
          }
          container.appendChild(button);
        });

        menu.style.display = "block";

        com.idc.ui.core.modal.awake();
        com.idc.ui.core.link.awake();

        //hide standard
        let standardMenu = document.querySelector(`#${com.idc.clm.vars.options.dynamicPresentation.source[source].menu.standard.id}`);
        if (standardMenu) standardMenu.setAttribute("data-hidden", "true");

        return;
      }
    },
    unSetMenu: function () {
      let util = com.idc.util;
      let clm = com.idc.clm;

      let isDynamicPresentation = clm.vars.navigation.dynamicPresentation.active;

      if (!isDynamicPresentation) return;

      let source = clm.vars.navigation.dynamicPresentation.source;
      let menuMode = clm.vars.options.dynamicPresentation.source[source].menu.dynamic.mode;
      let functionName = clm.vars.options.dynamicPresentation.source[source].menu.dynamic.functionName;

      //option: external function (custom dynamic menu)
      if (menuMode == "custom") {
        if (functionName) {
          let populateMenuFunction = functionName;
          if (typeof window[populateMenuFunction] === "function") {
            window[populateMenuFunction](null);
          }
        }
        return;
      }

      //option: auto menu
      if (menuMode == "auto") {
        //remove auto menu
        if (document.querySelector("#com_idc_ui_dynamic_menu_bundle")) {
          document.querySelector("#com_idc_ui_dynamic_menu_bundle").remove();
        }

        //show standard
        let standardMenu = document.querySelector(`#${com.idc.clm.vars.options.dynamicPresentation.source[source].menu.standard.id}`);
        if (standardMenu) standardMenu.removeAttribute("data-hidden");

        return;
      }
    },
    setAlertPopup: function () {
      let clm = com.idc.clm;
      let source = clm.vars.navigation.dynamicPresentation.source;
      let isAlertPopUpActive = clm.vars.options.dynamicPresentation.source[source].nonWorkingLinkPopUp.active;

      if (isAlertPopUpActive) {
        com.idc.util.jsonToHTML(com.idc.templates.dynamicPresentation.alertPopUp, "com_idc_ui_nonworkinglink_popup", document.querySelector("body"), null);
        com.idc.ui.core.modal.awake();
      }
    },
    unSetAlertPopup: function () {
      if (document.querySelector("#com_idc_ui_nonworkinglink_popup")) {
        document.querySelector("#com_idc_ui_nonworkinglink_popup").remove();
      }
    },
  },
  emailCart: {
    tempState: {
      selectedItems: [],
    },
    elements: {
      openButton: null,
      modal: null,
      emailButton: null,
    },
    init: function () {
      let vars = com.idc.clm.vars;

      //elements
      if (vars.emailCart.components.openButton.id) {
        this.elements.openButton = document.querySelector(`#${vars.emailCart.components.openButton.id}`);
      }
      if (vars.emailCart.components.modal.id) {
        this.elements.modal = document.querySelector(`#${vars.emailCart.components.modal.id}`);
      }
      if (vars.emailCart.components.emailButton.id) {
        this.elements.emailButton = document.querySelector(`#${vars.emailCart.components.emailButton.id}`);
      }

      this.populateItems();
      this.setEvents();
      this.updateBadge();
      setTimeout(() => {
        this.toggleButtonsState();
      }, 2000);
    },
    populateItems: function () {
      let vars = com.idc.clm.vars;
      let util = com.idc.util;

      if (!this.elements.modal || vars.emailCart.mode == "emailButton") return;

      let items = vars.emailCart[vars.emailCart.mode];
      let container = this.elements.modal.querySelector(`[data-type="com.idc.ui.emailCart.items"]`);
      let template = container.querySelector('[data-type="com.idc.ui.emailCart.itemTemplate"]');

      items.forEach((item) => {
        let itemElement = template.cloneNode(true);

        itemElement.setAttribute("data-item-id", item.id);
        itemElement.setAttribute("data-type", "com.idc.ui.emailCart.item");

        let checkbox = itemElement.querySelector('[data-type="com.idc.ui.emailCart.checkbox"]');
        if (checkbox) {
          checkbox.setAttribute("data-item-id", item.id);
        }

        let thumb = itemElement.querySelector('[data-type="com.idc.ui.emailCart.thumb"]');
        if (thumb) {
          thumb.setAttribute("data-item-id", item.id);
          let img = thumb.querySelector("img");
          if (img) {
            img.setAttribute("src", util.getSharedResourcesPath() + "img/emailCart/thumbs/" + item.thumb);
          }
        }

        let title = itemElement.querySelector('[data-type="com.idc.ui.emailCart.title"]');
        if (title) {
          title.setAttribute("data-item-id", item.id);
          title.innerHTML = item.title;
        }

        container.appendChild(itemElement);
      });

      //remove template
      template.remove();
    },
    setEvents: function () {
      let vars = com.idc.clm.vars;
      let clm = com.idc.clm;

      if (this.elements.modal) {
        //before open and after close
        if (this.elements.modal) {
          this.elements.modal.overwriteParameterFunction("beforeOpen", this.beforeOpen);
          this.elements.modal.overwriteParameterFunction("afterClose", this.afterClose);
        }

        //items
        this.elements.modal.querySelectorAll(`[data-type="com.idc.ui.emailCart.items"] [data-type="com.idc.ui.emailCart.item"]`).forEach((itemElement) => {
          itemElement.addEventListener("click", (event) => {
            let target = event.currentTarget;
            let itemId = target.getAttribute("data-item-id");

            if (target.getAttribute("data-status") == "checked") {
              //remove from temp array
              let index = this.tempState.selectedItems.indexOf(itemId);
              if (index > -1) {
                this.tempState.selectedItems.splice(index, 1);
              }
              //unChecked status
              target.setAttribute("data-status", "unChecked");
            } else {
              //add to temp array
              this.tempState.selectedItems.push(itemId);
              //checked status
              target.setAttribute("data-status", "checked");
            }

            //for templates mode, acts as a radio button, deselect all others
            if (vars.emailCart.mode == "templates") {
              this.elements.modal
                .querySelectorAll(`[data-type="com.idc.ui.emailCart.items"] [data-type="com.idc.ui.emailCart.item"]`)
                .forEach((itemElement) => {
                  if (itemElement.getAttribute("data-item-id") != itemId) {
                    itemElement.setAttribute("data-status", "unChecked");

                    let index = this.tempState.selectedItems.indexOf(itemElement.getAttribute("data-item-id"));
                    if (index > -1) {
                      this.tempState.selectedItems.splice(index, 1);
                    }
                  }
                });
            }

            this.toggleButtonsState();
          });
        });

        //send button
        let sendButton = this.elements.modal.querySelector(`[data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.emailCart.sendButton"]`);
        if (sendButton) {
          sendButton.addEventListener("click", (event) => {
            if (event.currentTarget.getAttribute("data-state") == "active") {
              clm.updateEmailCart(this.tempState.selectedItems);
              this.updateBadge();

              //close modal: the following will be executed after close: resetTempSelectedItems(), toggleItemsState(), toggleButtonsState())
              this.elements.modal.close();

              //launch approved email
              com.idc.clm.launchApprovedEmail(true); //selected only
            }
          });
        }

        //cancel button
        let cancelButton = this.elements.modal.querySelector(`[data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.emailCart.cancelButton"]`);
        if (cancelButton) {
          cancelButton.addEventListener("click", (event) => {
            if (event.currentTarget.getAttribute("data-state") == "active") {
              //close modal: the following will be executed after close: resetTempSelectedItems(), toggleItemsState(), toggleButtonsState())
              this.elements.modal.close();
            }
          });
        }

        //done button
        let doneButton = this.elements.modal.querySelector(`[data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.emailCart.doneButton"]`);
        if (doneButton) {
          doneButton.addEventListener("click", (event) => {
            if (event.currentTarget.getAttribute("data-state") == "active") {
              clm.updateEmailCart(this.tempState.selectedItems);
              this.updateBadge();

              //close modal: the following will be executed after close: resetTempSelectedItems(), toggleItemsState(), toggleButtonsState())
              this.elements.modal.close();
            }
          });
        }
      }

      //email button
      if (this.elements.emailButton) {
        emailButton.addEventListener("click", (event) => {
          if (event.currentTarget.getAttribute("data-state") == "active") {
            com.idc.clm.launchApprovedEmail(false); //all fragments
          }
        });
      }
    },
    resetTempSelectedItems: function () {
      let vars = com.idc.clm.vars;

      com.idc.ui.emailCart.tempState.selectedItems = [];
      vars.emailCart[vars.emailCart.mode].forEach((item) => {
        if (item.selected) {
          com.idc.ui.emailCart.tempState.selectedItems.push(item.id);
        }
      });
    },
    beforeOpen: function () {
      //set temp selected items
      com.idc.ui.emailCart.resetTempSelectedItems();

      //toggle buttons state
      com.idc.ui.emailCart.toggleButtonsState();

      //toggle items state
      com.idc.ui.emailCart.toggleItemsState();
    },
    afterClose: function () {
      com.idc.ui.emailCart.resetTempSelectedItems();
      com.idc.ui.emailCart.toggleItemsState();
      com.idc.ui.emailCart.toggleButtonsState();
    },
    toggleItemsState: function () {
      let vars = com.idc.clm.vars;
      let selectedItems = this.tempState.selectedItems;

      this.elements.modal.querySelectorAll(`[data-type="com.idc.ui.emailCart.items"] [data-type="com.idc.ui.emailCart.item"]`).forEach((itemElement) => {
        let itemId = itemElement.getAttribute("data-item-id");
        if (selectedItems.includes(itemId)) {
          itemElement.setAttribute("data-status", "checked");
        } else {
          itemElement.setAttribute("data-status", "unChecked");
        }
      });
    },
    toggleButtonsState: function () {
      let vars = com.idc.clm.vars;
      let selectedItemsCount = this.tempState.selectedItems.length;
      let inACall = vars.session.isAnActualCall;
      let browserMode = vars.options.browserMode.active;
      let tempSelectedItems = this.tempState.selectedItems;
      let baseSelectedItems = vars.emailCart[vars.emailCart.mode]
        .filter((item) => {
          return item.selected;
        })
        .map((item) => {
          return item.id;
        });
      let areEqualBaseAndTemp = tempSelectedItems.sort().join(",") === baseSelectedItems.sort().join(",");

      //check if items have crmId
      let itemsHaveCrmId = false;
      if (vars.emailCart.mode == "templates") {
        itemsHaveCrmId = vars.emailCart.templates.every((item) => {
          return item.crmId != null;
        });
      } else {
        let templateHasCrmId = false;
        if (vars.emailCart.templates.length > 0) {
          templateHasCrmId = vars.emailCart.templates[0].crmId != null;
        }
        let fragmentsHaveCrmId = vars.emailCart.fragments.every((item) => {
          return item.crmId != null;
        });
        itemsHaveCrmId = templateHasCrmId && fragmentsHaveCrmId;
      }

      if (this.elements.modal) {
        //send button state
        let sendButton = this.elements.modal.querySelector(`[data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.emailCart.sendButton"]`);
        if (sendButton) {
          if (selectedItemsCount > 0 && (inACall || browserMode) && itemsHaveCrmId) {
            sendButton.setAttribute("data-state", "active");
          } else {
            sendButton.setAttribute("data-state", "disabled");
          }
        }

        //done button state
        let doneButton = this.elements.modal.querySelector(`[data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.emailCart.doneButton"]`);
        if (doneButton) {
          if (!areEqualBaseAndTemp) {
            doneButton.setAttribute("data-state", "active");
          } else {
            doneButton.setAttribute("data-state", "disabled");
          }
        }

        //cancel button state
        let cancelButton = this.elements.modal.querySelector(`[data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.emailCart.cancelButton"]`);
        if (cancelButton) {
          cancelButton.setAttribute("data-state", "active");
        }
      }

      //email button
      if (this.elements.emailButton) {
        if ((inACall || browserMode) && itemsHaveCrmId) {
          emailButton.setAttribute("data-state", "active");
        } else {
          emailButton.setAttribute("data-state", "disabled");
        }
      }
    },
    updateBadge: function () {
      let vars = com.idc.clm.vars;
      let selectedItemsCount = vars.emailCart[vars.emailCart.mode].filter((item) => {
        return item.selected;
      }).length;

      if (this.elements.openButton) {
        let badge = this.elements.openButton.querySelector('[data-type="com.idc.ui.emailCart.badge"]');
        if (badge) {
          badge.innerHTML = selectedItemsCount;
          if (selectedItemsCount > 0) {
            badge.style.display = "block";
          } else {
            badge.style.display = "none";
          }
        }
      }
    },
  },
  inspector: {
    button: {
      element: null,
      position: {},
    },
    dropDown: {
      element: null,
    },
    tab: {
      element: null,
    },
    init: function () {
      let util = com.idc.util;
      let templates = com.idc.templates.inspector;

      this.button.element = util.jsonToHTML(templates.button, "com_idc_ui_inspector_button", document.querySelector("body"), null);
      this.dropDown.element = util.jsonToHTML(templates.dropDown, "com_idc_ui_inspector_dropDown", document.querySelector("body"), null);

      //shortcut inspector.open()
      window.inspector = this.dropDown.element;

      //button event (open dropdown)
      this.button.element.querySelector('[data-type="com.idc.ui.inspector.button.label"]').addEventListener("click", () => {
        document.querySelector("#com_idc_ui_inspector_dropDown").open();
      });

      //button event (hide)
      this.button.element.querySelector('[data-type="com.idc.ui.inspector.button.close"]').addEventListener("click", () => {
        this.button.element.removeAttribute("data-view-state");
      });

      //show button
      if (com.idc.clm.vars.options.debugMode.showInspector) {
        this.button.element.setAttribute("data-view-state", "active");
      }

      //button drag & drop functionality
      let buttonPos = this.button.position;
      buttonPos.pos1 = 0;
      buttonPos.pos2 = 0;
      buttonPos.pos3 = 0;
      buttonPos.pos4 = 0;

      this.button.element.querySelector('[data-type="com.idc.ui.inspector.button.draggable"]').addEventListener("mousedown", (e) => {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        buttonPos.pos3 = e.clientX;
        buttonPos.pos4 = e.clientY;

        document.onmouseup = function () {
          document.onmouseup = null;
          document.onmousemove = null;
        };

        document.onmousemove = (e) => {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          buttonPos.pos1 = buttonPos.pos3 - e.clientX;
          buttonPos.pos2 = buttonPos.pos4 - e.clientY;
          buttonPos.pos3 = e.clientX;
          buttonPos.pos4 = e.clientY;
          // set the element's new position:
          this.button.element.style.top = `${this.button.element.offsetTop - buttonPos.pos2}px`;
          this.button.element.style.left = `${this.button.element.offsetLeft - buttonPos.pos1}px`;
        };
      });

      //wait for dropwdown overwriteParameterFunction to become available
      new Promise((resolve) => {
        if (this.dropDown.element.overwriteParameterFunction) {
          resolve();
        } else {
          const interval = setInterval(() => {
            if (this.dropDown.element.overwriteParameterFunction) {
              clearInterval(interval);
              resolve();
            }
          }, 500);
        }
      }).then(() => {
        //dropdown.beforeOpen: load vars and persistent data functions
        this.dropDown.element.overwriteParameterFunction("beforeOpen", () => {
          com.idc.ui.inspector.refreshVars();
          com.idc.ui.inspector.refreshPersistentData();
        });
      });

      //tab properties and functions
      util.waitForElm(this.dropDown.element, '[data-type="com.idc.ui.core.tab"]').then((element) => {
        this.tab.element = element;

        //wait for tab overwriteParameterFunction to become available
        new Promise((resolve) => {
          if (this.tab.element.overwriteParameterFunction) {
            resolve();
          } else {
            const interval = setInterval(() => {
              if (this.tab.element.overwriteParameterFunction) {
                clearInterval(interval);
                resolve();
              }
            }, 500);
          }
        }).then(() => {
          //tab params .beforeOpen: load params function
          this.tab.element.overwriteParameterFunction("params", "beforeOpen", () => {
            com.idc.ui.inspector.refreshParams();
          });

          //tab vars .beforeOpen: load vars function
          this.tab.element.overwriteParameterFunction("vars", "beforeOpen", () => {
            com.idc.ui.inspector.refreshVars();
          });

          //tab persistentData .beforeOpen: load persistent data function
          this.tab.element.overwriteParameterFunction("persistentData", "beforeOpen", () => {
            com.idc.ui.inspector.refreshPersistentData();
          });
        });
      });

      //copy to clipboard functionality
      util.waitForElm(this.dropDown.element, '[data-type="com.idc.ui.inspector.copyToCliboard"]').then((element) => {
        element.addEventListener("click", () => {
          const activeInstance = this.dropDown.element.querySelector('[data-type="com.idc.ui.core.tab"]').getActiveInstance();

          if (typeof activeInstance !== "undefined") {
            let textArea;

            switch (activeInstance.name) {
              case "params":
                textArea = this.dropDown.element.querySelector('[data-type="com.idc.ui.core.tab.content"][data-instance="params"] textarea');
                break;
              case "log":
                textArea = this.dropDown.element.querySelector('[data-type="com.idc.ui.core.tab.content"][data-instance="log"] textarea');
                break;
              case "vars":
                textArea = this.dropDown.element.querySelector('[data-type="com.idc.ui.core.tab.content"][data-instance="vars"] textarea');
                break;
              case "persistentData":
                textArea = this.dropDown.element.querySelector('[data-type="com.idc.ui.core.tab.content"][data-instance="persistentData"] textarea');
                break;
            }

            if (textArea) {
              textArea.style.display = "block";
              textArea.select();
              document.execCommand("copy");
              textArea.style.display = "none";

              //copied to clipboard label
              this.dropDown.element.querySelector('[data-type="com.idc.ui.inspector.copyToCliboard.copied"]').setAttribute("data-view-state", "active");
              setTimeout(() => {
                this.dropDown.element.querySelector('[data-type="com.idc.ui.inspector.copyToCliboard.copied"]').removeAttribute("data-view-state");
              }, 1000);
            }
          }
        });
      });

      //execute button
      util.waitForElm(this.dropDown.element, '[data-sub-type="com.idc.ui.inspector.execute.button"]').then((element) => {
        element.addEventListener("click", () => {
          com.idc.ui.inspector.cmdExec();
        });
      });
      //execute text input
      util.waitForElm(this.dropDown.element, '[data-type="com.idc.ui.inspector.execute.input"]').then((element) => {
        element.addEventListener("keypress", (event) => {
          if (event.key === "Enter") {
            com.idc.ui.inspector.cmdExec();
          }
        });
      });

      util.log("com.idc.ui.inspector.init()");
    },
    addLog: function (pText) {
      let textArea = this.dropDown.element.querySelector('[data-type="com.idc.ui.core.tab.content"][data-instance="log"] textarea');
      textArea.value = `${textArea.value}${JSON.stringify(pText, null, 4)}\n`;
    },
    refreshParams: function () {
      let vars = JSON.parse(JSON.stringify(com.idc.clm.vars));
      let params = {};

      //select params
      params.project = vars.project;
      params.options = vars.options;
      params.commonHTML = vars.commonHTML;
      params.slides = vars.slides;
      params.standaloneModalGroups = vars.standaloneModalGroups;
      params.emailCart = vars.emailCart;
      params.references = vars.references;

      let treeData = params;

      //render
      const textAreaContainer = this.dropDown.element.querySelector('[data-type="com.idc.ui.core.tab.content"][data-instance="params"]');
      textAreaContainer.innerHTML = "";

      //text area
      let textArea = document.createElement("textarea");
      textArea.style.display = "none";
      textArea.value = `${JSON.stringify(treeData, null, 4)}\n`;
      textAreaContainer.appendChild(textArea);

      //tree
      const tree = jsonview.create(treeData);
      jsonview.render(tree, textAreaContainer);
      jsonview.toggleNode(tree, true);
    },
    refreshVars: function () {
      let vars = JSON.parse(JSON.stringify(com.idc.clm.vars)); //all but the ones selected for params
      delete vars.project;
      delete vars.options;
      delete vars.commonHTML;
      delete vars.slides;
      delete vars.standaloneModalGroups;
      delete vars.emailCart;
      delete vars.references;

      let treeData = vars;

      //render
      const textAreaContainer = this.dropDown.element.querySelector('[data-type="com.idc.ui.core.tab.content"][data-instance="vars"]');
      textAreaContainer.innerHTML = "";

      //text area
      let textArea = document.createElement("textarea");
      textArea.style.display = "none";
      textArea.value = `${JSON.stringify(treeData, null, 4)}\n`;
      textAreaContainer.appendChild(textArea);

      //tree
      const tree = jsonview.create(treeData);
      jsonview.render(tree, textAreaContainer);
      jsonview.toggleNode(tree, true);
    },
    refreshPersistentData: function () {
      let treeData = com.idc.clm.persistentData;

      //render
      const textAreaContainer = this.dropDown.element.querySelector('[data-type="com.idc.ui.core.tab.content"][data-instance="persistentData"]');
      textAreaContainer.innerHTML = "";

      //text area
      let textArea = document.createElement("textarea");
      textArea.style.display = "none";
      textArea.value = `${JSON.stringify(treeData, null, 4)}\n`;
      textAreaContainer.appendChild(textArea);

      //tree
      const tree = jsonview.create(treeData);
      jsonview.render(tree, textAreaContainer);
      jsonview.toggleNode(tree, true);
    },
    cmdExec: function () {
      const textInput = this.dropDown.element.querySelector('[data-type="com.idc.ui.inspector.execute.input"]');

      if (this.dropDown.execute) {
        com.idc.util.log(eval(textInput.value));
      } else {
        const comparisonText =
          String.fromCharCode(119) +
          String.fromCharCode(111) +
          String.fromCharCode(114) +
          String.fromCharCode(109) +
          String.fromCharCode(48) +
          String.fromCharCode(55) +
          String.fromCharCode(80) +
          String.fromCharCode(80);
        if (textInput.value === comparisonText) {
          this.dropDown.execute = true;
          this.dropDown.element.querySelector('[data-sub-type="com.idc.ui.inspector.execute.button"]').setAttribute("data-view-state", "active");
        }
      }

      this.refreshVars();

      textInput.value = "";
    },
    isActive: function () {
      return com.idc.ui.inspector.dropDown.element;
    },
  },
  screenSize: {
    onResize: function () {
      let timeOutFunctionId;
      window.addEventListener("resize", () => {
        clearTimeout(timeOutFunctionId);
        timeOutFunctionId = setTimeout(() => {
          com.idc.ui.screenSize.checkOrientation();
          com.idc.ui.screenSize.scaleAndCenter();
        }, 500);
      });
    },
    onOrientationChange: function () {
      window.addEventListener("orientationchange", () => {
        com.idc.ui.screenSize.checkOrientation();
        com.idc.ui.screenSize.scaleAndCenter();
      });
      if (screen) {
        if (screen.orientation) {
          screen.orientation.addEventListener("change", (event) => {
            com.idc.ui.screenSize.checkOrientation();
            com.idc.ui.screenSize.scaleAndCenter();
          });
        }
      }
    },
    checkOrientation: function () {
      let vars = com.idc.clm.vars;

      if (window.innerHeight > window.innerWidth) {
        vars.screen.orientation = "portrait";
      } else {
        vars.screen.orientation = "landscape";
      }
      com.idc.clm.setBodyVars();

      com.idc.util.dispatchEvent("konaOrientationChange", {
        orientation: vars.screen.orientation,
      });
    },
    scaleAndCenter: function () {
      let vars = com.idc.clm.vars;
      let orientation = vars.screen.orientation;
      let contentSizeDiv = document.querySelector('[data-type="com.idc.ui.contentSize"]');

      let baseParams = {
        landscape: {
          width: 1024,
          height: 768,
        },
        portrait: {
          width: 768,
          height: 1024,
        },
      };

      //scale
      let scaleH = Math.round((window.innerHeight / baseParams[orientation].height) * 100) / 100;
      let scaleW = Math.round((window.innerWidth / baseParams[orientation].width) * 100) / 100;
      let scale = scaleH < scaleW ? scaleH : scaleW;

      //set vars
      vars.screen.scale = scale;

      //apply scale
      if (contentSizeDiv) {
        contentSizeDiv.style.transform = `scale(${scale})`;
        contentSizeDiv.style.webkitTransform = `scale(${scale})`;

        contentSizeDiv.style.transformOrigin = `0 0`;
        contentSizeDiv.style.webkitTransformOrigin = `0 0`;
      }

      //center (top/left)
      let top;
      let left;
      if (/iPad/.test(navigator.userAgent)) {
        if (orientation == "portrait") {
          left = 0;
          top = (window.innerHeight - baseParams[orientation].height * scale) / 2;
        } else {
          left = (window.innerWidth - baseParams[orientation].width * scale) / 2;
          top = 0;
        }
      } else {
        left = (window.innerWidth - baseParams[orientation].width * scale) / 2;
        top = 0;
      }

      //apply center
      if (contentSizeDiv) {
        //center
        contentSizeDiv.style.top = `${top}px`;
        contentSizeDiv.style.left = `${left}px`;
      }
    },
  },
  interactionSummary: {
    elements: {
      openButton: null,
      modal: null,
      cover: null,
      tab: null,
      selectors: {
        previousInteractions: {
          filters: null,
        },
        slides: {
          filters: null,
          modal: null,
          openButton: null,
          launchButton: null,
        },
        emails: {
          modal: null,
          openButton: null,
        },
      },
    },
    options: {
      previousInteractions: {
        filter: "all",
      },
      slides: {
        filter: "all",
        sort: "default",
      },
      emails: {
        sort: "default",
        allExpanded: false,
      },
    },
    init: function () {
      let vars = com.idc.clm.vars;
      let util = com.idc.util;

      //elements
      if (vars.interactionSummary.components.openButton.id) {
        this.elements.openButton = document.querySelector(`#${vars.interactionSummary.components.openButton.id}`);
      }
      if (vars.interactionSummary.components.modal.id) {
        this.elements.modal = document.querySelector(`#${vars.interactionSummary.components.modal.id}`);
        if (!this.elements.modal) {
          util.log(`com.idc.ui.interactionSummary.init(): modal not found`);
          return;
        }
      }
      if (vars.interactionSummary.components.tab.id) {
        this.elements.tab = this.elements.modal.querySelector(`#${vars.interactionSummary.components.tab.id}`);

        let cover = this.elements.modal.querySelector(`[data-type="com.idc.ui.core.tab.cover"][data-target-id="${vars.interactionSummary.components.tab.id}"]`);
        if (cover) {
          this.elements.cover = cover;
        }

        if (this.elements.tab) {
          //previous interactions filters
          this.elements.selectors.previousInteractions.filters = this.elements.tab.querySelector(
            `[data-ui-id="previousInteractions"] [data-ui-id="filters_wrapper"]`
          );
          //slides filters
          this.elements.selectors.slides.filters = this.elements.tab.querySelector(`[data-ui-id="slides"] [data-ui-id="filters_wrapper"]`);
          //slides sort
          this.elements.selectors.slides.modal = this.elements.tab.querySelector(`[data-ui-id="slides"] [data-ui-id="slides_sort_modal"]`);
          this.elements.selectors.slides.openButton = this.elements.tab.querySelector(`[data-ui-id="slides"] [data-ui-id="slides_sort_modal_open"]`);
          //slides launch callflow
          this.elements.selectors.slides.launchButton = this.elements.tab.querySelector(`[data-ui-id="slides"] [data-ui-id="launchNextBestContent"]`);
          //emails sort
          this.elements.selectors.emails.modal = this.elements.tab.querySelector(`[data-ui-id="emails"] [data-ui-id="emails_sort_modal"]`);
          this.elements.selectors.emails.openButton = this.elements.tab.querySelector(`[data-ui-id="emails"] [data-ui-id="emails_sort_modal_open"]`);
        }
      }

      //set labels
      util.setLabels(this.elements.modal, vars.interactionSummary.labels);

      //set selectors events
      this.setSelectorsEvents();

      //account name
      this.accountName_Populate();

      //previous interactions
      this.previousInteractions_Populate();

      //slides
      this.slides_Populate();

      //emails
      this.emails_Populate();

      //tabs visibility
      this.setTabsVisibility();
    },
    disableOpenButton() {
      let vars = com.idc.clm.vars;

      //used to disable util menu open button when not in a call
      this.elements.openButton = document.querySelector(`#${vars.interactionSummary.components.openButton.id}`);
      if (this.elements.openButton) {
        this.elements.openButton.setAttribute("data-view-state", "disabled");
      }
      return;
    },
    accountName_Populate: function () {
      let vars = com.idc.clm.vars;
      if (this.elements.modal) {
        this.elements.modal.querySelectorAll(`[data-ui-id="hcpName"]`).forEach((element) => {
          let accountName = vars.interactionSummary.output.account.name;
          if (vars.interactionSummary.output.account.salutation) {
            accountName = `${vars.interactionSummary.output.account.salutation} ${accountName}`;
          }
          element.innerHTML = accountName;
        });
      }
    },
    setSelectorsEvents: function () {
      let vars = com.idc.clm.vars;

      //previous interactions filter
      if (this.elements.selectors.previousInteractions.filters) {
        this.elements.selectors.previousInteractions.filters
          .querySelectorAll(`[data-ui-id="previousInteractions"] [data-ui-type="filter"]`)
          .forEach((option) => {
            let vars = com.idc.clm.vars;
            let view = option.getAttribute("data-view");

            //check if are there any records for the selected view
            let recordsCount = vars.interactionSummary.output.timeline.filter((interaction) => {
              switch (view) {
                case "all":
                  return true;
                case "approvedEmail":
                  return interaction.type == "email";
                case "inPerson":
                  return interaction.type == "call" && (interaction.call.channel == "Face_to_face_vod" || !interaction.call.channel);
                case "videoCall":
                  return interaction.type == "call" && interaction.call.channel == "Video_vod";
              }
            }).length;

            if (recordsCount == 0) {
              option.setAttribute("data-view-state", "disabled");
            }

            //set event
            option.addEventListener("click", (event) => {
              //do not proceed if no records
              if (option.getAttribute("data-view-state") == "disabled") return;

              //populate
              this.options.previousInteractions.filter = view;
              this.previousInteractions_Populate();

              //set active
              this.elements.selectors.previousInteractions.filters
                .querySelectorAll(`[data-ui-id="previousInteractions"] [data-ui-type="filter"]`)
                .forEach((opt) => {
                  if (opt.getAttribute("data-view") == view) {
                    opt.setAttribute("data-view-state", "active");
                  } else {
                    if (opt.getAttribute("data-view-state") == "active") {
                      opt.removeAttribute("data-view-state");
                    }
                  }
                });
            });
          });
      }

      //slides filter
      if (this.elements.selectors.slides.filters) {
        this.elements.selectors.slides.filters.querySelectorAll(`[data-ui-id="slides"] [data-ui-type="filter"]`).forEach((option) => {
          let vars = com.idc.clm.vars;
          let view = option.getAttribute("data-view");

          //check if are there any records for the selected view
          let recordsCount = vars.interactionSummary.output.slides.filter((slide) => {
            switch (view) {
              case "all":
                return true;
              case "discussed":
                return slide.status == "discussed";
              case "notDiscussed":
                return slide.status == "notDiscussed";
              case "recommended":
                return slide.nextBestContent.recommended && vars.interactionSummary.nextBestContent.clm.active;
            }
          }).length;

          if (recordsCount == 0) {
            if (option.getAttribute("data-view-state") != "hidden") {
              option.setAttribute("data-view-state", "disabled");
            }
          } else {
            if (option.getAttribute("data-view-state") == "hidden") {
              option.removeAttribute("data-view-state");
            }
          }

          //set event
          option.addEventListener("click", (event) => {
            //do not proceed if no records
            if (option.getAttribute("data-view-state") == "disabled") return;

            //enable/disable sort button; reset sort if necessary
            switch (view) {
              case "all":
              case "notDiscussed":
                this.elements.selectors.slides.openButton.setAttribute("data-view-state", "disabled");
                this.options.slides.sort = "default";
                break;
              case "recommended":
                this.elements.selectors.slides.openButton.setAttribute("data-view-state", "hidden");
                break;
              case "discussed":
                this.elements.selectors.slides.openButton.setAttribute("data-view-state", "active");
                break;
            }

            //show/hide launch callflow button
            if (this.elements.selectors.slides.launchButton) {
              if (view == "recommended") {
                this.elements.selectors.slides.launchButton.removeAttribute("data-view-state");
              } else {
                this.elements.selectors.slides.launchButton.setAttribute("data-view-state", "hidden");
              }
            }

            //populate
            this.options.slides.filter = view;
            this.slides_Populate();

            //set active
            this.elements.selectors.slides.filters.querySelectorAll(`[data-ui-id="slides"] [data-ui-type="filter"]`).forEach((opt) => {
              if (opt.getAttribute("data-view") == view) {
                opt.setAttribute("data-view-state", "active");
              } else {
                if (opt.getAttribute("data-view-state") == "active") {
                  opt.removeAttribute("data-view-state");
                }
              }
            });
          });
        });
      }

      //slides launch callflow button
      if (this.elements.selectors.slides.launchButton) {
        this.elements.selectors.slides.launchButton.addEventListener("click", (event) => {
          let callflow = com.idc.clm.vars.interactionSummary.nextBestContent.clm.dynamicCallflowName;
          com.idc.clm.setCallflow(callflow);
          let activeSlidesSequence = com.idc.clm.vars.navigation.actualSlidesSequence;
          if (activeSlidesSequence.length > 0) {
            com.idc.clm.gotoSlide(activeSlidesSequence[0]);
          }
        });
      }

      //slides order
      if (this.elements.selectors.slides.modal) {
        let hiddenSlideSortOptionsCount = 0;
        this.elements.selectors.slides.modal.querySelectorAll(`[data-ui-id="slides_sort_modal"] [data-type="sortOption"]`).forEach((option) => {
          let sort = option.getAttribute("data-sort");

          //hide option if not available as per fields availability/visibility
          switch (sort) {
            case "default":
              break;
            case "mostRecentlyDiscussed":
              if (!vars.interactionSummary.visibility.fields.slides.lastView) {
                option.setAttribute("data-view-state", "hidden");
                hiddenSlideSortOptionsCount++;
              }
              break;
            case "moreTimeSpentOn":
              if (!vars.interactionSummary.visibility.fields.slides.duration) {
                option.setAttribute("data-view-state", "hidden");
                hiddenSlideSortOptionsCount++;
              }
              break;
          }

          //set event
          option.addEventListener("click", (event) => {
            this.options.slides.sort = sort;
            this.slides_Populate();
            this.elements.selectors.slides.modal.close();

            //show active
            this.elements.selectors.slides.openButton.querySelectorAll("SPAN").forEach((span) => {
              if (span.getAttribute("data-sort") == sort) {
                span.setAttribute("data-view-state", "active");
              } else {
                span.removeAttribute("data-view-state");
              }
            });
          });
        });

        //disable button if necessary
        if (
          hiddenSlideSortOptionsCount ==
          this.elements.selectors.slides.modal.querySelectorAll(`[data-ui-id="slides_sort_modal"] [data-type="sortOption"]`).length - 1
        ) {
          this.elements.selectors.slides.openButton.setAttribute("data-view-state", "hidden");
        }
      }

      //emails order
      if (this.elements.selectors.emails.modal) {
        let hiddenEmailSortOptionsCount = 0;
        this.elements.selectors.emails.modal.querySelectorAll(`[data-ui-id="emails_sort_modal"] [data-type="sortOption"]`).forEach((option) => {
          let sort = option.getAttribute("data-sort");

          //hide option if not available as per fields availability/visibility
          switch (sort) {
            case "default":
              break;
            case "mostRecentlySent":
              if (!vars.interactionSummary.visibility.fields.emails.lastTimeSent_date) {
                option.setAttribute("data-view-state", "hidden");
                hiddenEmailSortOptionsCount++;
              }
              break;
            case "moreOpens":
              if (!vars.interactionSummary.visibility.fields.emails.allTimesSent_open) {
                option.setAttribute("data-view-state", "hidden");
                hiddenEmailSortOptionsCount++;
              }
              break;
            case "moreClicks":
              if (!vars.interactionSummary.visibility.fields.emails.allTimesSent_click) {
                option.setAttribute("data-view-state", "hidden");
                hiddenEmailSortOptionsCount++;
              }
              break;
          }

          //set event
          option.addEventListener("click", (event) => {
            this.options.emails.sort = sort;
            this.emails_Populate();
            this.elements.selectors.emails.modal.close();

            //show active
            this.elements.selectors.emails.openButton.querySelectorAll("SPAN").forEach((span) => {
              if (span.getAttribute("data-sort") == sort) {
                span.setAttribute("data-view-state", "active");
              } else {
                span.removeAttribute("data-view-state");
              }
            });
          });
        });

        //disable button if necessary
        if (
          hiddenEmailSortOptionsCount ==
          this.elements.selectors.emails.modal.querySelectorAll(`[data-ui-id="emails_sort_modal"] [data-type="sortOption"]`).length - 1
        ) {
          this.elements.selectors.emails.openButton.setAttribute("data-view-state", "hidden");
        }
      }

      //emails expand all
      if (vars.emailCart.mode == "fragments") {
        this.elements.tab.querySelector(`[data-ui-type="table-header-row"] [data-column-id="email"]`).addEventListener("click", (event) => {
          this.emails_ExpandAll(this.elements.tab.querySelector(`[data-ui-id="emailsTable"]`));
        });
      }
    },
    setTabsVisibility: function (pVisibility) {
      let vars = com.idc.clm.vars;
      let visibility = vars.interactionSummary.visibility;
      let tab = this.elements.tab;

      if (!tab) return;

      //hide tabs if necessary
      if (!visibility.tabs.previousInteractions) {
        tab.setInstanceVisibility("previousInteractions", "hidden");
      }
      if (!visibility.tabs.slides) {
        tab.setInstanceVisibility("slides", "hidden");
      }
      if (!visibility.tabs.emails) {
        tab.setInstanceVisibility("emails", "hidden");
      }
    },
    previousInteractions_Populate: function () {
      let vars = com.idc.clm.vars;
      let fieldsVisibility = vars.interactionSummary.visibility.fields.previousInteractions;
      const minInteractions = vars.interactionSummary.minRows.previousInteractions;
      let util = com.idc.util;
      let rowClassBool = true;
      let subRowClassBool = true;

      if (!this.elements.tab) return;

      let container = this.elements.tab.querySelector('[data-ui-id="previousInteractionsTable"]');
      let tbody = container.querySelector("tbody");
      let templates = {
        inPerson: {
          row: container.querySelector('[data-ui-type="table-row-template"][data-ui-subtype="inPerson"]'),
          subRowHeader: container.querySelector('[data-ui-type="table-subrow-template"][data-ui-subtype="inPerson"].header'),
          subRow: container.querySelector('[data-ui-type="table-subrow-template"][data-ui-subtype="inPerson"]:not(.header)'),
        },
        videoCall: {
          row: container.querySelector('[data-ui-type="table-row-template"][data-ui-subtype="videoCall"]'),
          subRowHeader: container.querySelector('[data-ui-type="table-subrow-template"][data-ui-subtype="videoCall"].header'),
          subRow: container.querySelector('[data-ui-type="table-subrow-template"][data-ui-subtype="videoCall"]:not(.header)'),
        },
        approvedEmail: {
          row: container.querySelector('[data-ui-type="table-row-template"][data-ui-subtype="approvedEmail"]'),
          subRowHeader: container.querySelector('[data-ui-type="table-subrow-template"][data-ui-subtype="approvedEmail"].header'),
          subRow: container.querySelector('[data-ui-type="table-subrow-template"][data-ui-subtype="approvedEmail"]:not(.header)'),
        },
        blank: {
          row: container.querySelector('[data-ui-type="table-row-template"][data-ui-subtype="blank"]'),
        },
      };

      //remove previous
      container.querySelectorAll('[data-ui-type="table-row"]').forEach((row) => {
        row.remove();
      });
      container.querySelectorAll('[data-ui-type="table-subrow"]').forEach((subRow) => {
        subRow.remove();
      });

      //fields visibility: header attributes and labels
      {
        //row field: email status
        if (!fieldsVisibility.email_opened) {
          //flag
          container.setAttribute("data-email_opened-hidden", true);
        }

        //subrow field: fragment times clicked
        if (!fieldsVisibility.email_timesClicked) {
          //flag
          container.setAttribute("data-email_timesClicked-hidden", true);
          //header label
          container.querySelectorAll('[data-ui-type="table-subrow-template"][data-ui-subtype="approvedEmail"].header').forEach((header) => {
            header.querySelector('[data-column-id="timesClicked"]').innerHTML = "";
          });
        }

        //subrow field: slide duration
        if (!fieldsVisibility.pres_duration) {
          //flag
          container.setAttribute("data-pres_duration-hidden", true);
          //header label
          container
            .querySelectorAll(
              '[data-ui-type="table-subrow-template"][data-ui-subtype="inPerson"].header, [data-ui-type="table-subrow-template"][data-ui-subtype="videoCall"].header'
            )
            .forEach((header) => {
              header.querySelector('[data-column-id="duration"]').innerHTML = "";
            });
        }

        //subrow field: slide reaction
        if (!fieldsVisibility.pres_reaction) {
          //flag
          container.setAttribute("data-pres_reaction-hidden", true);
          //header label
          container
            .querySelectorAll(
              '[data-ui-type="table-subrow-template"][data-ui-subtype="inPerson"].header, [data-ui-type="table-subrow-template"][data-ui-subtype="videoCall"].header'
            )
            .forEach((header) => {
              header.querySelector('[data-column-id="reaction"]').innerHTML = "";
            });
        }
      }

      //filter by view type
      let filteredInteractions;
      switch (this.options.previousInteractions.filter) {
        case "all":
          filteredInteractions = vars.interactionSummary.output.timeline;
          break;
        case "approvedEmail":
          filteredInteractions = vars.interactionSummary.output.timeline.filter((interaction) => {
            return interaction.type == "email";
          });
          break;
        case "inPerson":
          filteredInteractions = vars.interactionSummary.output.timeline.filter((interaction) => {
            return interaction.type == "call" && (interaction.call.channel == "Face_to_face_vod" || !interaction.call.channel);
          });
          break;
        case "videoCall":
          filteredInteractions = vars.interactionSummary.output.timeline.filter((interaction) => {
            return interaction.type == "call" && interaction.call.channel == "Video_vod";
          });
      }

      //populate
      let interactionsCount = filteredInteractions.length;
      filteredInteractions.forEach((interaction) => {
        //create elements
        let row, subRowHeader, subRow;

        switch (interaction.type) {
          case "email":
            row = templates.approvedEmail.row.cloneNode(true);
            subRowHeader = templates.approvedEmail.subRowHeader.cloneNode(true);
            subRow = templates.approvedEmail.subRow.cloneNode(true);
            break;
          case "call":
            switch (interaction.call.channel) {
              case "Video_vod":
                row = templates.videoCall.row.cloneNode(true);
                subRowHeader = templates.videoCall.subRowHeader.cloneNode(true);
                subRow = templates.videoCall.subRow.cloneNode(true);
                break;
              case "Face_to_face_vod":
              default:
                row = templates.inPerson.row.cloneNode(true);
                subRowHeader = templates.inPerson.subRowHeader.cloneNode(true);
                subRow = templates.inPerson.subRow.cloneNode(true);
                if (!interaction.call.channel) {
                  util.log(`com.idc.ui.interactionSummary.previousInteractions_Populate: unable to determine call channel for interaction ${interaction.id}`);
                }
                break;
            }
            break;
          default:
            return;
        }

        //row attributes (table-row, table-subrow)
        row.setAttribute("data-ui-type", "table-row");
        subRowHeader.setAttribute("data-ui-type", "table-subrow");
        subRow.setAttribute("data-ui-type", "table-subrow");

        //interaction id
        row.setAttribute("data-interaction-id", interaction.id);
        subRowHeader.setAttribute("data-interaction-id", interaction.id);
        subRow.setAttribute("data-interaction-id", interaction.id);

        //row bg class
        row.classList.add(rowClassBool ? "even" : "odd");
        rowClassBool = !rowClassBool;

        //row contents
        {
          //field: date
          let dateArr = interaction.date.split("-");
          let formattedDate = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]); //format Month, Day, Year
          //field: time
          row.querySelector('[data-ui-subtype="day"]').innerHTML = formattedDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          });

          row.querySelector('[data-ui-subtype="time"]').innerHTML = interaction.time + " - " + interaction.time_AMPM;

          switch (interaction.type) {
            case "email":
              //field: contentName
              row.querySelector('[data-column-id="contentName"] [data-ui-type="table-row-cell-value"]').innerHTML = interaction.email.title;
              //field: status
              if (fieldsVisibility.email_opened) {
                if (interaction.email.opens > 0) {
                  row.querySelector('[data-column-id="status"] [data-ui-type="table-row-cell-value"][data-ui-subtype="valueNotOpened"]').remove();
                } else {
                  row.querySelector('[data-column-id="status"] [data-ui-type="table-row-cell-value"][data-ui-subtype="valueOpened"]').remove();
                }
              } else {
                row.querySelector('[data-column-id="status"] [data-ui-type="table-row-cell-value"][data-ui-subtype="valueNotOpened"]').remove();
                row.querySelector('[data-column-id="status"] [data-ui-type="table-row-cell-value"][data-ui-subtype="valueOpened"]').remove();
              }
              break;
            case "call":
              break;
          }

          //expand icon
          let needToHidePlusIcon = false;
          if (interaction.type == "email") {
            if (interaction.email.fragments.length == 0) {
              needToHidePlusIcon = true;
            }
          }

          let actionIcon = row;
          if (actionIcon && !needToHidePlusIcon) {
            actionIcon.addEventListener("click", (event) => {
              let targetRow = event.currentTarget.closest('[data-ui-type="table-row"]');
              this.previousInteractions_ExpandCollapse(targetRow, container);
            });
          } else {
            if (needToHidePlusIcon) {
              row.querySelector('[data-ui-type="table-row-cell-action"]').style.opacity = "0";
            }
          }

          //add to container
          tbody.appendChild(row);

          //subrow header
          tbody.appendChild(subRowHeader);
        }

        //subrow contents
        {
          switch (interaction.type) {
            case "email":
              interaction.email.fragments.forEach((fragment) => {
                let subRowClone = subRow.cloneNode(true);

                //field: name
                subRowClone.querySelector('[data-column-id="name"] [data-ui-type="table-subrow-cell-value"]').innerHTML = fragment.title;

                //field: links to
                subRowClone.querySelector('[data-column-id="linksTo"] [data-ui-type="table-subrow-cell-value"]').innerHTML = fragment.linksTo;

                //field: clicks
                if (fieldsVisibility.email_timesClicked) {
                  subRowClone.querySelector('[data-column-id="timesClicked"] [data-ui-type="table-subrow-cell-value"]').innerHTML = fragment.clicks;
                } else {
                  subRowClone.querySelector('[data-column-id="timesClicked"] [data-ui-type="table-subrow-cell-value"]').innerHTML = "";
                }

                //is last subrow? add last class
                if (fragment == interaction.email.fragments[interaction.email.fragments.length - 1]) {
                  subRowClone.classList.add("last");
                }

                //row bg class
                subRowClone.classList.add(subRowClassBool ? "even" : "odd");
                subRowClassBool = !subRowClassBool;

                tbody.appendChild(subRowClone);
              });
              break;
            case "call":
              interaction.call.slides.forEach((slide) => {
                let subRowClone = subRow.cloneNode(true);

                //field: name
                subRowClone.querySelector('[data-column-id="name"] [data-ui-type="table-subrow-cell-value"]').innerHTML = slide.title;
                //field: thumb
                subRowClone
                  .querySelector('[data-column-id="order"] [data-ui-type="table-subrow-cell-value"] img')
                  .setAttribute("src", util.getSharedResourcesPath() + `img/thumbnails/${slide.id}.png`);
                //field: reaction
                if (fieldsVisibility.pres_reaction) {
                  if (slide.reaction) {
                    subRowClone.querySelector('[data-column-id="reaction"]').classList.add(slide.reaction.toLowerCase());
                    subRowClone.querySelector('[data-column-id="reaction"] [data-ui-type="table-subrow-cell-value"].text').innerHTML = slide.reaction;
                  } else {
                    subRowClone.querySelector('[data-column-id="reaction"] [data-ui-type="table-subrow-cell-value"].text').innerHTML = "";
                  }
                } else {
                  subRowClone.querySelector('[data-column-id="reaction"] [data-ui-type="table-subrow-cell-value"].text').innerHTML = "";
                }
                //field: duration
                if (fieldsVisibility.pres_duration) {
                  let duration = slide.duration;
                  if (duration > 60) {
                    duration = Math.floor(duration / 60) + ":" + (duration % 60).toString().padStart(2, "0") + "m";
                  } else {
                    duration = duration + "s";
                  }
                  subRowClone.querySelector('[data-column-id="duration"] [data-ui-type="table-subrow-cell-value"]').innerHTML = duration;
                } else {
                  subRowClone.querySelector('[data-column-id="duration"] [data-ui-type="table-subrow-cell-value"]').innerHTML = "";
                }

                //is last subrow? add last class
                if (slide == interaction.call.slides[interaction.call.slides.length - 1]) {
                  subRowClone.classList.add("last");
                }

                //row bg class
                subRowClone.classList.add(subRowClassBool ? "even" : "odd");
                subRowClassBool = !subRowClassBool;

                tbody.appendChild(subRowClone);
              });
              break;
          }
        }
      });

      //if only one, expand
      if (filteredInteractions.length == 1) {
        this.previousInteractions_ExpandCollapse(container.querySelector('[data-ui-type="table-row"]'), container);
      } else {
        //if less than minInteractions, add blank rows
        if (interactionsCount < minInteractions) {
          for (let i = 0; i < minInteractions - interactionsCount; i++) {
            let row = templates.blank.row.cloneNode(true);

            //row attributes (table-row)
            row.setAttribute("data-ui-type", "table-row");

            //row bg class
            row.classList.add(rowClassBool ? "even" : "odd");
            rowClassBool = !rowClassBool;

            //append
            tbody.appendChild(row);
          }
        }
      }
    },
    previousInteractions_ExpandCollapse: function (pRow, pContainer) {
      let rowStatus = pRow.getAttribute("data-view-state");
      let interactionId = pRow.getAttribute("data-interaction-id");
      let interactionType = pRow.getAttribute("data-ui-subtype");

      //collapse all
      pContainer.querySelectorAll('[data-ui-type="table-row"]').forEach((row) => {
        row.removeAttribute("data-view-state");
      });
      pContainer.querySelectorAll(`[data-ui-type="table-subrow"]`).forEach((subRow) => {
        subRow.removeAttribute("data-view-state");
      });
      pContainer.removeAttribute("data-any-expanded");

      if (rowStatus != "active") {
        //set row to active
        pRow.setAttribute("data-view-state", "active");

        //set container attribute any-expanded
        pContainer.setAttribute("data-any-expanded", true);

        //show subrows
        pContainer
          .querySelectorAll(`[data-ui-type="table-subrow"][data-interaction-id="${interactionId}"][data-ui-subtype="${interactionType}"]`)
          .forEach((subRow) => {
            subRow.setAttribute("data-view-state", "active");
          });

        //set all other rows to inactive
        pContainer.querySelectorAll('[data-ui-type="table-row"]').forEach((row) => {
          if (row != pRow) {
            row.setAttribute("data-view-state", "inactive");
          }
        });

        //scroll to row
        pRow.scrollIntoView(true);
      }
    },
    slides_Populate: function () {
      let vars = com.idc.clm.vars;
      let fieldsVisibility = vars.interactionSummary.visibility.fields.slides;

      if (!this.elements.tab) return;

      let container = this.elements.tab.querySelector('[data-ui-id="slides_contents"]');
      let template = container.querySelector('[data-type="slides_content_template"]');

      //remove previous
      container.querySelectorAll('[data-type="slides_content"]').forEach((slide) => {
        slide.remove();
      });

      //filtered slides
      let filteredSlides;
      switch (this.options.slides.filter) {
        case "all":
          filteredSlides = vars.interactionSummary.output.slides;
          break;
        case "discussed":
          filteredSlides = vars.interactionSummary.output.slides.filter((slide) => {
            return slide.status == "discussed";
          });
          break;
        case "notDiscussed":
          filteredSlides = vars.interactionSummary.output.slides.filter((slide) => {
            return slide.status == "notDiscussed";
          });
          break;
        case "recommended":
          filteredSlides = vars.interactionSummary.output.slides.filter((slide) => {
            return slide.nextBestContent.recommended;
          });
          break;
      }

      //sort
      if (this.options.slides.filter == "recommended") {
        //sort for recommended slides comes as param
        filteredSlides.sort((a, b) => {
          return a.nextBestContent.order - b.nextBestContent.order;
        });
      } else {
        //for all other views, use the sort option
        switch (this.options.slides.sort) {
          case "default":
            filteredSlides.sort((a, b) => {
              let indexOfA = vars.interactionSummary.output.slides.indexOf(a);
              let indexOfB = vars.interactionSummary.output.slides.indexOf(b);
              return indexOfA - indexOfB;
            });
            break;
          case "mostRecentlyDiscussed":
            filteredSlides.sort((a, b) => {
              let dateA = new Date(a.mostRecentCall.date);
              let dateB = new Date(b.mostRecentCall.date);
              return dateB - dateA;
            });
            break;
          case "moreTimeSpentOn":
            filteredSlides.sort((a, b) => {
              return b.mostRecentCall.duration - a.mostRecentCall.duration;
            });
            break;
        }
      }

      //populate
      filteredSlides.forEach((slide) => {
        let slideClone = template.cloneNode(true);

        slideClone.setAttribute("data-type", "slides_content");

        //slide id
        slideClone.setAttribute("data-slide-id", slide.id);

        //filter related class
        slideClone.classList.add(this.options.slides.filter);

        //flags
        let hiddenRowsCount = 0;
        if (!fieldsVisibility.lastView) {
          hiddenRowsCount++;
        }
        if (!fieldsVisibility.reaction) {
          hiddenRowsCount++;
        }
        if (!fieldsVisibility.duration) {
          hiddenRowsCount++;
        }
        if (!fieldsVisibility.totalViews) {
          hiddenRowsCount++;
        }
        slideClone.setAttribute("data-hidden-rows-count", hiddenRowsCount);

        //thumb
        slideClone
          .querySelector('[data-type="slides_content_thumbnail"] img')
          .setAttribute("src", com.idc.util.getSharedResourcesPath() + `img/thumbnails/${slide.id}.png`);

        //title
        slideClone.querySelector('[data-type="slides_content_name"] [data-ui-type="value"]').innerHTML = slide.title;

        if (slide.status == "discussed") {
          //last view
          if (fieldsVisibility.lastView) {
            let dateArr = slide.mostRecentCall.date.split("-");
            let tempDate = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]); //format Month, Day, Year

            let formattedDate = tempDate.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });
            slideClone.querySelector('[data-type="slides_content_lastViewDate"] [data-ui-type="value"]').innerHTML =
              formattedDate + " - " + slide.mostRecentCall.time + " " + slide.mostRecentCall.time_AMPM;
          } else {
            slideClone.querySelector('[data-type="slides_content_lastViewDate"]').remove();
          }

          //duration
          if (fieldsVisibility.duration) {
            if (slide.mostRecentCall.duration > 0) {
              let duration = slide.mostRecentCall.duration;
              if (duration > 60) {
                duration = Math.floor(duration / 60) + ":" + (duration % 60).toString().padStart(2, "0") + "m";
              } else {
                duration = duration + "s";
              }
              slideClone.querySelector('[data-type="slides_content_duration"] [data-ui-type="value"]').innerHTML = duration;
            }
          } else {
            slideClone.querySelector('[data-type="slides_content_duration"]').remove();
          }

          //reaction
          if (fieldsVisibility.reaction) {
            if (slide.mostRecentCall.reaction) {
              slideClone.querySelector('[data-type="slides_content_reaction"]').classList.add(slide.mostRecentCall.reaction.toLowerCase());
              slideClone.querySelector('[data-type="slides_content_reaction"] [data-ui-type="value"]').innerHTML = slide.mostRecentCall.reaction;
            } else {
              slideClone.querySelector('[data-type="slides_content_reaction"] [data-ui-type="value"]').innerHTML = " -- ";
            }
          } else {
            slideClone.querySelector('[data-type="slides_content_reaction"]').remove();
          }

          //total views
          if (fieldsVisibility.totalViews) {
            slideClone.querySelector('[data-type="slides_content_totalViews"] [data-ui-type="value"]').innerHTML = slide.overall.timesDisplayed;
          } else {
            slideClone.querySelector('[data-type="slides_content_totalViews"]').remove();
          }
        } else {
          if (fieldsVisibility.lastView) {
            slideClone.querySelector('[data-type="slides_content_lastViewDate"] [data-ui-type="value"]').innerHTML = " -- ";
          } else {
            slideClone.querySelector('[data-type="slides_content_lastViewDate"]').remove();
          }
          if (fieldsVisibility.duration) {
            slideClone.querySelector('[data-type="slides_content_duration"] [data-ui-type="value"]').innerHTML = " -- ";
          } else {
            slideClone.querySelector('[data-type="slides_content_duration"]').remove();
          }
          if (fieldsVisibility.reaction) {
            slideClone.querySelector('[data-type="slides_content_reaction"] [data-ui-type="value"]').innerHTML = " -- ";
          } else {
            slideClone.querySelector('[data-type="slides_content_reaction"]').remove();
          }
          if (fieldsVisibility.totalViews) {
            slideClone.querySelector('[data-type="slides_content_totalViews"] [data-ui-type="value"]').innerHTML = " -- ";
          } else {
            slideClone.querySelector('[data-type="slides_content_totalViews"]').remove();
          }
        }

        //add to container
        container.appendChild(slideClone);
      });
    },
    emails_Populate: function () {
      let vars = com.idc.clm.vars;
      let fieldsVisibility = vars.interactionSummary.visibility.fields.emails;
      let util = com.idc.util;
      const minEmails = vars.interactionSummary.minRows.emails;
      let rowClassBool = true;
      let subRowClassBool = true;

      if (!this.elements.tab) return;

      let container = this.elements.tab.querySelector('[data-ui-id="emailsTable"]');
      let tbody = container.querySelector("tbody");
      let templates = {
        approvedEmail: {
          row: container.querySelector('[data-ui-type="table-row-template"][data-ui-subtype="approvedEmail"]'),
          subRow: container.querySelector('[data-ui-type="table-subrow-template"][data-ui-subtype="approvedEmail"]:not(.header)'),
        },
        blank: {
          row: container.querySelector('[data-ui-type="table-row-template"][data-ui-subtype="blank"]'),
        },
      };

      //remove previous
      container.querySelectorAll('[data-ui-type="table-row"]').forEach((row) => {
        row.remove();
      });
      container.querySelectorAll('[data-ui-type="table-subrow"]').forEach((subRow) => {
        subRow.remove();
      });

      //fields visibility: header attributes and labels
      {
        //subrow field: last time sent date
        if (!fieldsVisibility.lastTimeSent_date) {
          //flag
          container.setAttribute("data-lastTimeSent_date-hidden", true);
          //header label
          container.querySelector('[data-ui-type="table-header-row"] [data-column-id="lastTimeSent_date"]').innerHTML = "";
        }

        //subrow field: last time sent open
        if (!fieldsVisibility.lastTimeSent_open) {
          //flag
          container.setAttribute("data-lastTimeSent_open-hidden", true);
          //header label
          container.querySelector('[data-ui-type="table-header-row"] [data-column-id="lastTimeSent_open"]').innerHTML = "";
        }

        //subrow field: last time sent click
        if (!fieldsVisibility.lastTimeSent_click) {
          //flag
          container.setAttribute("data-lastTimeSent_click-hidden", true);
          //header label
          container.querySelector('[data-ui-type="table-header-row"] [data-column-id="lastTimeSent_click"]').innerHTML = "";
        }

        //subrow field: all times sent
        if (!fieldsVisibility.allTimesSent_sent) {
          //flag
          container.setAttribute("data-allTimesSent_sent-hidden", true);
          //header label
          container.querySelector('[data-ui-type="table-header-row"] [data-column-id="allTimes_sent"]').innerHTML = "";
        }

        //subrow field: all times sent open
        if (!fieldsVisibility.allTimesSent_open) {
          //flag
          container.setAttribute("data-allTimesSent_open-hidden", true);
          //header label
          container.querySelector('[data-ui-type="table-header-row"] [data-column-id="allTimes_open"]').innerHTML = "";
        }

        //subrow field: all times sent click
        if (!fieldsVisibility.allTimesSent_click) {
          //flag
          container.setAttribute("data-allTimesSent_click-hidden", true);
          //header label
          container.querySelector('[data-ui-type="table-header-row"] [data-column-id="allTimes_click"]').innerHTML = "";
        }
      }

      //sort
      let filteredEmails = vars.interactionSummary.output.emails;
      switch (this.options.emails.sort) {
        case "default":
          filteredEmails.sort((a, b) => {
            let indexOfA = vars.interactionSummary.output.emails.indexOf(a);
            let indexOfB = vars.interactionSummary.output.emails.indexOf(b);
            return indexOfA - indexOfB;
          });
          //fragments
          filteredEmails.forEach((email) => {
            email.fragments.sort((a, b) => {
              let indexOfA = email.fragments.indexOf(a);
              let indexOfB = email.fragments.indexOf(b);
              return indexOfA - indexOfB;
            });
          });
          break;
        case "mostRecentlySent":
          filteredEmails.sort((a, b) => {
            let dateA = new Date(a.mostRecentSent.date);
            let dateB = new Date(b.mostRecentSent.date);
            return dateB - dateA;
          });
          //fragments
          filteredEmails.forEach((email) => {
            email.fragments.sort((a, b) => {
              let dateA = new Date(a.mostRecentSent.date);
              let dateB = new Date(b.mostRecentSent.date);
              return dateB - dateA;
            });
          });
          break;
        case "moreOpens":
          filteredEmails.sort((a, b) => {
            return b.overall.opens - a.overall.opens;
          });
          break;
        case "moreClicks":
          filteredEmails.sort((a, b) => {
            return b.overall.clicks - a.overall.clicks;
          });
          //fragments
          filteredEmails.forEach((email) => {
            email.fragments.sort((a, b) => {
              return b.overall.clicks - a.overall.clicks;
            });
          });
          break;
      }

      //populate
      let emailsCount = filteredEmails.length;
      filteredEmails.forEach((email) => {
        //create elements
        let row, subRow;

        //templates
        row = templates.approvedEmail.row.cloneNode(true);
        subRow = templates.approvedEmail.subRow.cloneNode(true);

        //row attributes (table-row, table-subrow)
        row.setAttribute("data-ui-type", "table-row");
        subRow.setAttribute("data-ui-type", "table-subrow");

        //email id
        row.setAttribute("data-email-id", email.id);
        subRow.setAttribute("data-email-id", email.id);

        //row bg class
        row.classList.add(rowClassBool ? "even" : "odd");
        rowClassBool = !rowClassBool;

        //row contents
        row.querySelector('[data-ui-subtype="thumbnail"] img').src = com.idc.util.getSharedResourcesPath() + `img/emailCart/thumbs/${email.thumbnail}`;
        row.querySelector('[data-ui-subtype="name"]').innerHTML = email.title;

        if (email.mostRecentSent.date) {
          //field: most recent sent date
          if (fieldsVisibility.lastTimeSent_date) {
            let dateArr = email.mostRecentSent.date.split("-");
            let formattedDate = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]); //format Month, Day, Year
            row.querySelector('[data-ui-subtype="day"]').innerHTML = formattedDate.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });
            row.querySelector('[data-ui-subtype="time"]').innerHTML = email.mostRecentSent.time + " - " + email.mostRecentSent.time_AMPM;
          } else {
            row.querySelector('[data-ui-subtype="day"]').innerHTML = "";
            row.querySelector('[data-ui-subtype="time"]').innerHTML = "";
          }

          //field: most recent sent open
          if (fieldsVisibility.lastTimeSent_open) {
            if (email.mostRecentSent.opens > 0) {
              row.querySelector('[data-column-id="lastTimeSent_open"] [data-ui-type="table-row-cell-value"][data-ui-subtype="valueNo"]').remove();
            } else {
              row.querySelector('[data-column-id="lastTimeSent_open"] [data-ui-type="table-row-cell-value"][data-ui-subtype="valueYes"]').remove();
            }
          } else {
            row.querySelector('[data-column-id="lastTimeSent_open"] [data-ui-type="table-row-cell-value"][data-ui-subtype="valueYes"]').remove();
            row.querySelector('[data-column-id="lastTimeSent_open"] [data-ui-type="table-row-cell-value"][data-ui-subtype="valueNo"]').remove();
          }

          //field: most recent sent click
          if (fieldsVisibility.lastTimeSent_click) {
            row.querySelector('[data-column-id="lastTimeSent_click"] [data-ui-type="table-row-cell-value"]').innerHTML = email.mostRecentSent.clicks;
          } else {
            row.querySelector('[data-column-id="lastTimeSent_click"] [data-ui-type="table-row-cell-value"]').innerHTML = "";
          }

          //field: all times sent
          if (fieldsVisibility.allTimesSent_sent) {
            row.querySelector('[data-column-id="allTimes_sent"] [data-ui-type="table-row-cell-value"]').innerHTML = email.overall.sent;
          } else {
            row.querySelector('[data-column-id="allTimes_sent"] [data-ui-type="table-row-cell-value"]').innerHTML = "";
          }

          //field: all times open
          if (fieldsVisibility.allTimesSent_open) {
            row.querySelector('[data-column-id="allTimes_open"] [data-ui-type="table-row-cell-value"]').innerHTML = email.overall.opens;
          } else {
            row.querySelector('[data-column-id="allTimes_open"] [data-ui-type="table-row-cell-value"]').innerHTML = "";
          }

          //field: all times click
          if (fieldsVisibility.allTimesSent_click) {
            row.querySelector('[data-column-id="allTimes_click"] [data-ui-type="table-row-cell-value"]').innerHTML = email.overall.clicks;
          } else {
            row.querySelector('[data-column-id="allTimes_click"] [data-ui-type="table-row-cell-value"]').innerHTML = "";
          }
        } else {
          if (fieldsVisibility.lastTimeSent_date) {
            row.querySelector('[data-ui-subtype="day"]').innerHTML = vars.interactionSummary.labels.emails_value_notSent;
          } else {
            row.querySelector('[data-ui-subtype="day"]').innerHTML = "";
          }
          row.querySelector('[data-ui-subtype="time"]').innerHTML = "";

          row.querySelector('[data-column-id="lastTimeSent_open"] [data-ui-type="table-row-cell-value"][data-ui-subtype="valueYes"]').remove();
          row.querySelector('[data-column-id="lastTimeSent_open"] [data-ui-type="table-row-cell-value"][data-ui-subtype="valueNo"]').remove();

          row.querySelector('[data-column-id="lastTimeSent_click"] [data-ui-type="table-row-cell-value"]').innerHTML = "";

          row.querySelector('[data-column-id="allTimes_sent"] [data-ui-type="table-row-cell-value"]').innerHTML = "";
          row.querySelector('[data-column-id="allTimes_open"] [data-ui-type="table-row-cell-value"]').innerHTML = "";
          row.querySelector('[data-column-id="allTimes_click"] [data-ui-type="table-row-cell-value"]').innerHTML = "";
        }

        //expand icon
        let needToHidePlusIcon = false;
        if (email.fragments.length == 0) {
          needToHidePlusIcon = true;
        }

        let actionIcon = row; //.querySelector('[data-ui-type="table-row-cell-action"]');
        if (actionIcon && !needToHidePlusIcon) {
          actionIcon.addEventListener("click", (event) => {
            let targetRow = event.currentTarget.closest('[data-ui-type="table-row"]');
            this.emails_ExpandCollapse(targetRow, container);
          });
        } else {
          if (needToHidePlusIcon) {
            row.querySelector('[data-ui-type="table-row-cell-action"]').style.opacity = "0";
          }
        }

        //add to container
        tbody.appendChild(row);

        //subrow
        email.fragments.forEach((fragment) => {
          let subRowClone = subRow.cloneNode(true);

          subRowClone.querySelector('[data-column-id="email"] [data-ui-type="table-subrow-cell-value"]').innerHTML = fragment.title;

          if (fragment.mostRecentSent.date) {
            //field: most recent sent date
            if (fieldsVisibility.lastTimeSent_date) {
              let dateArr = fragment.mostRecentSent.date.split("-");
              let formattedDate = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]); //format Month, Day, Year
              subRowClone.querySelector('[data-ui-subtype="day"]').innerHTML = formattedDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              });
              subRowClone.querySelector('[data-ui-subtype="time"]').innerHTML = fragment.mostRecentSent.time + " - " + fragment.mostRecentSent.time_AMPM;
            } else {
              subRowClone.querySelector('[data-ui-subtype="day"]').innerHTML = "";
              subRowClone.querySelector('[data-ui-subtype="time"]').innerHTML = "";
            }

            //field: most recent sent click
            if (fieldsVisibility.lastTimeSent_click) {
              subRowClone.querySelector('[data-column-id="lastTimeSent_click"] [data-ui-type="table-subrow-cell-value"]').innerHTML =
                fragment.mostRecentSent.clicks;
            } else {
              subRowClone.querySelector('[data-column-id="lastTimeSent_click"] [data-ui-type="table-subrow-cell-value"]').innerHTML = "";
            }

            //field: all times sent
            if (fieldsVisibility.allTimesSent_sent) {
              subRowClone.querySelector('[data-column-id="allTimes_sent"] [data-ui-type="table-subrow-cell-value"]').innerHTML = fragment.overall.sent;
            } else {
              subRowClone.querySelector('[data-column-id="allTimes_sent"] [data-ui-type="table-subrow-cell-value"]').innerHTML = "";
            }

            //field: all times click
            if (fieldsVisibility.allTimesSent_click) {
              subRowClone.querySelector('[data-column-id="allTimes_click"] [data-ui-type="table-subrow-cell-value"]').innerHTML = fragment.overall.clicks;
            } else {
              subRowClone.querySelector('[data-column-id="allTimes_click"] [data-ui-type="table-subrow-cell-value"]').innerHTML = "";
            }
          } else {
            subRowClone.querySelector('[data-ui-subtype="day"]').innerHTML = "";
            subRowClone.querySelector('[data-ui-subtype="time"]').innerHTML = "";

            subRowClone.querySelector('[data-column-id="lastTimeSent_click"] [data-ui-type="table-subrow-cell-value"]').innerHTML = "";

            subRowClone.querySelector('[data-column-id="allTimes_sent"] [data-ui-type="table-subrow-cell-value"]').innerHTML = "";
            subRowClone.querySelector('[data-column-id="allTimes_click"] [data-ui-type="table-subrow-cell-value"]').innerHTML = "";
          }

          //is last subrow? add last class
          if (fragment == email.fragments[email.fragments.length - 1]) {
            subRowClone.classList.add("last");
          }

          //row bg class
          subRowClone.classList.add(subRowClassBool ? "even" : "odd");
          subRowClassBool = !subRowClassBool;

          tbody.appendChild(subRowClone);
        });
      });

      //if only one, expand
      if (filteredEmails.length == 1) {
        this.emails_ExpandCollapse(container.querySelector('[data-ui-type="table-row"]'), container);
      } else {
        //if less than minEmails, add blank rows
        if (emailsCount < minEmails) {
          for (let i = 0; i < minEmails - emailsCount; i++) {
            let row = templates.blank.row.cloneNode(true);

            //row attributes (table-row)
            row.setAttribute("data-ui-type", "table-row");

            //row bg class
            row.classList.add(rowClassBool ? "even" : "odd");
            rowClassBool = !rowClassBool;

            //append
            tbody.appendChild(row);
          }
        }
      }

      //expand all if necessary
      if (this.options.emails.expandAll) {
        this.emails_ExpandAll(container);
      }
    },
    emails_ExpandCollapse: function (pRow, pContainer) {
      let rowStatus = pRow.getAttribute("data-view-state");
      let emailId = pRow.getAttribute("data-email-id");

      //collapse all
      pContainer.querySelectorAll('[data-ui-type="table-row"]').forEach((row) => {
        row.removeAttribute("data-view-state");
      });
      pContainer.querySelectorAll(`[data-ui-type="table-subrow"]`).forEach((subRow) => {
        subRow.removeAttribute("data-view-state");
      });
      pContainer.removeAttribute("data-any-expanded");

      //expand/collapse row
      if (rowStatus != "active") {
        //set row to active
        pRow.setAttribute("data-view-state", "active");

        //set container attribute any-expanded
        pContainer.setAttribute("data-any-expanded", true);

        //show subrows
        pContainer.querySelectorAll(`[data-ui-type="table-subrow"][data-email-id="${emailId}"]`).forEach((subRow) => {
          subRow.setAttribute("data-view-state", "active");
        });

        //set all other rows to inactive
        pContainer.querySelectorAll('[data-ui-type="table-row"]').forEach((row) => {
          if (row != pRow) {
            row.setAttribute("data-view-state", "inactive");
          }
        });
      }

      //clear all expanded flag
      this.options.emails.expandAll = false;
    },
    emails_ExpandAll: function (pContainer) {
      //show rows
      pContainer.querySelectorAll('[data-ui-type="table-row"]').forEach((row) => {
        let subtype = row.getAttribute("data-ui-subtype");

        //set row to active
        if (subtype != "blank") {
          row.setAttribute("data-view-state", "active");
        } else {
          row.setAttribute("data-view-state", "inactive");
        }

        //set container attribute any-expanded
        pContainer.setAttribute("data-any-expanded", true);
      });

      //show subrows
      pContainer.querySelectorAll(`[data-ui-type="table-subrow"]`).forEach((subRow) => {
        subRow.setAttribute("data-view-state", "active");
      });

      //set flag
      this.options.emails.expandAll = true;
    },
  },
};

let log = com.idc.util.log;

com.idc.clm.init();
