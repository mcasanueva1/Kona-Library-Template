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
          hardcodedProfiles: {
            // HARDCODED PROFILES: in config file
            active: true,
            profiles: [],
            default: null, //default profile
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
              forHardcodedProfiles: {
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
          bringToFront: {
            dualButtoForActiveModal: {
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
        id: null,
        index: null,
      },
      dynamicPresentation: {
        active: null,
        source: null,
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
      keyMessage: {
        id: null,
        mediaFileName: null,
        disableActions: null,
        iOSResolution: null,
      },
    },
  },
  persistentDataTemplate: {
    session: {
      navigationHistory: [],
      selectedProfile: null,
      selectedEmailCartItems: [],
      selectedStandaloneGroup: null,
    },
    commonHTML: {},
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

      //hardcoded profiles source
      vars.options.dynamicPresentation.source.hardcodedProfiles.active = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.hardcodedProfiles.active",
        "boolean",
        false
      );
      vars.options.dynamicPresentation.source.hardcodedProfiles.profiles = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.hardcodedProfiles.profiles",
        "object",
        []
      );
      vars.options.dynamicPresentation.source.hardcodedProfiles.default = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.hardcodedProfiles.default",
        "string"
      );
      //hardcoded profiles standard menu
      vars.options.dynamicPresentation.source.hardcodedProfiles.menu.standard.id = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.hardcodedProfiles.menu.standard.id",
        "string"
      );
      //hardcoded profiles dynamic menu
      vars.options.dynamicPresentation.source.hardcodedProfiles.menu.dynamic.mode = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.hardcodedProfiles.menu.dynamic.mode",
        "string"
      );
      vars.options.dynamicPresentation.source.hardcodedProfiles.menu.dynamic.functionName = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.hardcodedProfiles.menu.dynamic.functionName",
        "string"
      );
      //hardcoded profiles alert popup
      vars.options.dynamicPresentation.source.hardcodedProfiles.nonWorkingLinkPopUp.active = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.hardcodedProfiles.nonWorkingLinkPopUp.active",
        "boolean",
        false
      );
      //hardcoded profiles treat standalone as main slides
      vars.options.dynamicPresentation.source.hardcodedProfiles.standaloneModal.treatStandaloneModalsAsMainSlides = util.readSetting(
        com_idc_params,
        "options.dynamicPresentation.source.hardcodedProfiles.standaloneModal.treatStandaloneModalsAsMainSlides",
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

      vars.utilitiesMenu.sets.mainSlide.centerGroup = util.readSetting(com_idc_params, "utilitiesMenu.sets.mainSlide.centerGroup", "object", []);
      vars.utilitiesMenu.sets.mainSlide.rightGroup = util.readSetting(com_idc_params, "utilitiesMenu.sets.mainSlide.rightGroup", "object", []);

      vars.utilitiesMenu.sets.standaloneModal.centerGroup = util.readSetting(com_idc_params, "utilitiesMenu.sets.standaloneModal.centerGroup", "object", []);
      vars.utilitiesMenu.sets.standaloneModal.rightGroup = util.readSetting(com_idc_params, "utilitiesMenu.sets.standaloneModal.rightGroup", "object", []);
    }

    //standalone modal groups
    if (com_idc_params.standaloneModalGroups) {
      vars.standaloneModalGroups.active = util.readSetting(com_idc_params, "standaloneModalGroups.active", "boolean", false);

      const standaloneModalGroupTemplate = vars.standaloneModalGroups.groups.splice(0)[0];
      vars.standaloneModalGroups.groups = com_idc_params.standaloneModalGroups.groups.map((group) => {
        const newGroup = JSON.parse(JSON.stringify(standaloneModalGroupTemplate));
        newGroup.id = util.readSetting(group, "id", "string", null);
        newGroup.slides = util.readSetting(group, "slides", "object", []);

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
          activeDynamicPresentationModes.push({
            name: "myPresentations",
            precedence: dynamicPresVars.precedence.indexOf("myPresentations"),
            slidesSequence: await this.myPresentations(),
          });
        }
        if (dynamicPresVars.source.externalFunction.active) {
          activeDynamicPresentationModes.push({
            name: "externalFunction",
            precedence: dynamicPresVars.precedence.indexOf("externalFunction"),
            slidesSequence: await this.externalFunction(),
          });
        }
        if (dynamicPresVars.source.hardcodedProfiles.active) {
          activeDynamicPresentationModes.push({
            name: "hardcodedProfiles",
            precedence: dynamicPresVars.precedence.indexOf("hardcodedProfiles"),
            slidesSequence: await this.hardcodedProfiles(),
          });
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
          navVars.prevSlide.index = navVars.currentSlide.index - 1;
          navVars.prevSlide.id = navVars.actualSlidesSequence[navVars.prevSlide.index];
          navVars.prevSlide.isFirst = navVars.prevSlide.index == 0;
          navVars.prevSlide.isLast = false;
        }

        //next slide in actual slides sequence
        if (!navVars.currentSlide.isLast) {
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
          navVars.prevSlide.id = contextArr[contextIndex - 1];
          navVars.prevSlide.index = navVars.actualSlidesSequence.indexOf(navVars.prevSlide.id);
          navVars.prevSlide.isFirst = navVars.prevSlide.index == 0;
          navVars.prevSlide.isLast = false;
        }

        //next slide context array
        if (!navVars.currentSlide.isLast) {
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
            navVars.lastSlide.id = slideId;
            navVars.lastSlide.index = navVars.actualSlidesSequence.indexOf(slideId);
            return false;
          } else {
            return true;
          }
        } else {
          return true;
        }
      });

      delete navVars.prevSlide; //do not apply for standalone modal
      delete navVars.nextSlide; //do not apply for standalone modal
    }
  },
  findSlide: function (slideId) {
    return this.vars.slides.find((slide) => {
      return slide.id == slideId;
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

        //Key_Message_vod__c
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

        //email cart
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

          for (let item of itemsArray) {
            await new Promise((resolve) => {
              com.veeva.clm.getApprovedDocument(this.vars.emailCart.vaultURL, item.vaultId, (data) => {
                if (data.success && data.Approved_Document_vod__c) {
                  this.vars.emailCart[item.group].find((element) => {
                    return element.id == item.id;
                  }).crmId = data.Approved_Document_vod__c.ID;
                } else {
                  util.log(`com.idc.clm.getDataForContextObjects: could not retrieve CRM ID for ${item.id}`);
                }
                resolve();
              });
            });
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
    document.querySelector("body").setAttribute("data-dynamic-presentation-source", this.vars.navigation.dynamicPresentation.source);

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
    if (this.vars.navigation.overWrite.nextSlide) {
      this.gotoSlide(this.vars.navigation.overWrite.nextSlide);
    } else {
      if (!this.vars.navigation.currentSlide.isLast) {
        this.gotoSlide(this.vars.navigation.nextSlide.id);
      }
    }
  },
  goPrevSlide: function () {
    if (this.vars.navigation.overWrite.prevSlide) {
      this.gotoSlide(this.vars.navigation.overWrite.prevSlide);
    } else {
      if (!this.vars.navigation.currentSlide.isFirst) {
        this.gotoSlide(this.vars.navigation.prevSlide.id);
      }
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

    if (!isStandalone) {
      //standard slide
      if (!isDynamicPresentation && isAModalBeingDisplayed) {
        return; //do nothing if modal is open in a normal presentation
      }

      if (isDynamicPresentation && !treatStandaloneModalsAsMainSlides) {
        return; //do nothing if standalone modal in dynamic presentation is not treated as a main slide
      }

      //go next or prev slide
      switch (pSwipe.direction) {
        case "left":
          if (!vars.navigation.currentSlide.isLast || vars.navigation.overWrite.nextSlide) com.idc.clm.goNextSlide();
          break;
        case "right":
          if (!vars.navigation.currentSlide.isFirst || vars.navigation.overWrite.prevSlide) com.idc.clm.goPrevSlide();
          break;
      }
    } else {
      //standalone modal
      if (isStandaloneGroupActive) {
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
            if (slide) slidesSequence.push(slide.id);
          });

          resolve(slidesSequence); //the presentation is custom: return a sequence of slide ids based on the input
        } else {
          resolve(); //the presentation is standard, return nothing
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
  hardcodedProfiles: function () {
    return new Promise((resolve) => {
      let defaultProfileParam = this.vars.options.dynamicPresentation.source.hardcodedProfiles.default;
      let selectedProfile = null;

      //identify selected profile (could be stored as a session variable, or passed as a function or text parameter)
      //check if persistent session data contains a profile selection
      if (this.persistentData.session.selectedProfile) {
        if (
          this.vars.options.dynamicPresentation.source.hardcodedProfiles.profiles.find((profile) => profile.name == this.persistentData.session.selectedProfile)
        ) {
          selectedProfile = this.persistentData.session.selectedProfile;
        }
      } else {
        //check if defaultProfileParam is a function and returns a valid profile name
        if (typeof window[defaultProfileParam] == "function") {
          let functionOutput = window[defaultProfileParam]();
          if (this.vars.options.dynamicPresentation.source.hardcodedProfiles.profiles.find((profile) => profile.name == functionOutput)) {
            selectedProfile = functionOutput;
          }
        } else {
          //check is defaultProfileParam is a valid profile name
          if (this.vars.options.dynamicPresentation.source.hardcodedProfiles.profiles.find((profile) => profile.name == defaultProfileParam)) {
            selectedProfile = defaultProfileParam;
          }
        }
      }

      let slidesSequence = [];

      if (selectedProfile) {
        let slidesSequenceInput = this.vars.options.dynamicPresentation.source.hardcodedProfiles.profiles.find(
          (profile) => profile.name == selectedProfile
        ).slides;

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
          com.idc.util.log(`com.idc.clm.hardcodedProfiles: unable to retrieve slides for profile ${selectedProfile}`);
        }
      }

      resolve(slidesSequence);
    });
  },
  setHardcodedProfile: function (profileName) {
    let selectedProfile = null;

    //validate if harcoded profiles are active
    if (!this.vars.options.dynamicPresentation.source.hardcodedProfiles.active) {
      com.idc.util.log(`com.idc.clm.setHardcodedProfile: hardcoded profiles source is inactive`);
      return;
    }

    //validate profile name
    if (this.vars.options.dynamicPresentation.source.hardcodedProfiles.profiles.find((profile) => profile.name == profileName)) {
      selectedProfile = profileName;
    } else {
      com.idc.util.log(`com.idc.clm.setHardcodedProfile: invalid profile name ${profileName}`);
    }

    //retrieve slides sequence
    let slidesSequence = [];

    if (selectedProfile) {
      let slidesSequenceInput = this.vars.options.dynamicPresentation.source.hardcodedProfiles.profiles.find(
        (profile) => profile.name == selectedProfile
      ).slides;

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
        com.idc.util.log(`com.idc.clm.setHardcodedProfile: unable to retrieve slides for profile ${selectedProfile}`);
      }
    }

    if (slidesSequence.length > 0) {
      //set persistent profile selection (for the session)
      this.persistentData.session.selectedProfile = selectedProfile;
      this.updatePersistentData();

      //set slides sequence
      this.setDynamicSlidesSequence({
        name: "hardcodedProfiles",
        slidesSequence: slidesSequence,
      });

      //dynamic menu and navigation
      com.idc.ui.dynamicPresentation.setMenu(this.vars.navigation.actualSlidesSequence);
      com.idc.ui.dynamicPresentation.setAlertPopup();
      com.idc.ui.core.link.flagNonWorkingLinks();
    }
  },
  unSetHardcodedProfile: function () {
    //clear persistent profile selection (for the session)
    this.persistentData.session.selectedProfile = null;
    this.updatePersistentData();

    //set standard slides sequence
    this.setStandardSlidesSequence();

    //standard menu and navigation
    com.idc.ui.dynamicPresentation.unSetMenu(this.vars.navigation.actualSlidesSequence);
    com.idc.ui.dynamicPresentation.unSetAlertPopup();
    com.idc.ui.core.link.unFlagNonWorkingLinks();
  },

  /*standalone groups -------------------------------------*/
  validateStandaloneGroup: function (group, slideId) {
    let groupIsValid = true;

    //no groups defined >> return false
    if (!this.vars.standaloneModalGroups.active) return false;

    //is dynamic presentation >> return false
    if (this.vars.navigation.dynamicPresentation.active) return false;

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

    this.vars.commonHTML.elements.forEach((commonElementId) => {
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
    com.idc.ui.core.tab.awake();
    com.idc.ui.core.navigationArrows.awake();
    com.idc.ui.core.menu.setActiveInstance();
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
    let util = com.idc.util;

    let templateID = null;
    let fragmentIDs = [];

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

  executeParameterFunction: (pFunction) => {
    if (pFunction !== "undefined" && pFunction !== "" && typeof window[pFunction] === "function") {
      return window[pFunction]();
    } else {
      com.idc.util.log(`com.idc.util.executeParameterFunction ERROR: ${pFunction} is not a function`);
    }
  },

  getElementAttribute: (pEl, pName) => {
    return pEl.hasAttribute(pName) ? (pEl.getAttribute(pName) !== "" ? pEl.getAttribute(pName) : "") : "";
  },

  readSetting: (pSettingsObj, pKeyChain, pType, pDefault) => {
    const pKeysArr = pKeyChain.split(".");
    let value = null;
    try {
      value = pSettingsObj[pKeysArr[0]];
      for (let i = 1; i < pKeysArr.length; i++) {
        value = value[pKeysArr[i]];
      }
    } catch (err) {
      com.idc.util.log(`readSetting ${pKeyChain} error: ${err}`);
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

            //restore saved state if returned from standalone pop-up
            if (com.idc.clm.isBackFromStandAloneSlide()) {
              if (com.idc.ui.common.backFromStandalone.getPersistentProperty(com.idc.clm.vars.navigation.currentSlide.id, el.id, "activeInstances") !== null) {
                //display all active instances
                com.idc.ui.common.backFromStandalone
                  .getPersistentProperty(com.idc.clm.vars.navigation.currentSlide.id, el.id, "activeInstances")
                  .value.forEach((instanceName) => {
                    el.setInstance(instanceName, true);
                  });
              }
            } else {
              //not back from standalone slide: reset to defaults
              el.resetToDefaults();
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
          }

          el.addEventListener("click", (evt) => {
            let targetId = com.idc.util.getElementAttribute(el, "data-target-id")
              ? com.idc.util.getElementAttribute(el, "data-target-id")
              : com.idc.util.getElementAttribute(el, "data-target-id-fnc")
              ? com.idc.util.executeParameterFunction(com.idc.util.getElementAttribute(el, "data-target-id-fnc"))
              : "";

            let standaloneGroup = com.idc.util.getElementAttribute(el, "data-standalone-group");
            if (standaloneGroup) {
              if (com.idc.clm.validateStandaloneGroup(standaloneGroup, targetId)) {
                com.idc.clm.activateStandaloneGroup(standaloneGroup);
              }
            }

            if (targetId != "") {
              com.idc.clm.gotoSlide(targetId);
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

        let targetId = com.idc.util.getElementAttribute(pElement, "data-target-id");
        if (!targetId) {
          let targetIdFnc = com.idc.util.getElementAttribute(pElement, "data-target-id-fnc");
          if (targetIdFnc) {
            targetId = com.idc.util.executeParameterFunction(targetIdFnc);
          }
        }

        if (targetId) {
          if (!com.idc.clm.findSlide(targetId)) {
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
      setActiveInstance: function () {
        document.querySelectorAll(this.selector).forEach((el) => {
          el.querySelectorAll(`[data-sub-type="com.idc.ui.core.menu.button"]`).forEach((button) => {
            if (button.getAttribute("data-target-id") == com.idc.clm.vars.navigation.currentSlide.id) {
              button.setAttribute("data-view-state", "on");
            } else {
              button.setAttribute("data-view-state", "off");
            }
          });
        });
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
            const closeButton = el.querySelector('[data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.core.modal.closeButton"]');
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
            let isDynamicPresentation = com.idc.clm.vars.navigation.dynamicPresentation.active;
            let treatStandaloneModalsAsMainSlides = com.idc.clm.vars.navigation.dynamicPresentation.treatStandaloneModalsAsMainSlides;
            if (el.isStandalone && isDynamicPresentation && treatStandaloneModalsAsMainSlides) {
              closeButton.setAttribute("data-should-be-hidden", "true");
            }

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
              const prevArrow = el.querySelector('[data-type="com.idc.ui.core.navigation.arrow"][data-sub-type="com.idc.ui.core.modal.prevArrow"]');
              if (prevArrow) {
                el.components.prevArrow = {
                  element: prevArrow,
                };
              }

              const nextArrow = el.querySelector('[data-type="com.idc.ui.core.navigation.arrow"][data-sub-type="com.idc.ui.core.modal.nextArrow"]');
              if (nextArrow) {
                el.components.nextArrow = {
                  element: nextArrow,
                };
              }

              if (this.standaloneModalGroups.standalonelBelongsToActiveGroup()) {
                this.standaloneModalGroups.setArrowsAndSwipe(el);
                this.standaloneModalGroups.setGroupElementsVisibility(el, true);
                this.standaloneModalGroups.setPaginator(el);
                this.standaloneModalGroups.populateGroupSlides();
              } else {
                this.standaloneModalGroups.setGroupElementsVisibility(el, false);
              }
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
        com.idc.ui.core.modal.activeModalsStack.push(this.id);

        //assign z-index depending on active modals stack
        this.style.zIndex = com.idc.ui.core.modal.activeModalsStack.length * 10;
        this.components.backModal.element.style.zIndex = com.idc.ui.core.modal.activeModalsStack.length * 10;

        //refresh utilities menu
        if (com.idc.clm.vars.utilitiesMenu.active) {
          com.idc.ui.core.utilitiesMenu.updateGroupsContents();
          com.idc.ui.core.utilitiesMenu.updateStyleAndZIndex();
        }

        //show
        this.show();

        //adjust interface (e.g. hide next/prev arrows) by adding a general attribute to body
        com.idc.ui.core.modal.setOpenModalFlag();

        //set arrows visibility
        com.idc.ui.core.navigationArrows.setArrowsVisibility();

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
        //standalone or standard functionality
        if (!this.isStandalone) {
          //execute before close
          this.executeBeforeClose();

          //remove from active modals stack
          com.idc.ui.core.modal.activeModalsStack.splice(com.idc.ui.core.modal.activeModalsStack.indexOf(this.id), 1);

          //refresh utilities menu
          if (com.idc.clm.vars.utilitiesMenu.active) {
            com.idc.ui.core.utilitiesMenu.updateGroupsContents();
            com.idc.ui.core.utilitiesMenu.updateStyleAndZIndex();
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

          //execute after close
          this.executeAfterClose();
        } else {
          //redirect to opener slide or slideId in closeAction
          if (this.params.closeAction == null || this.params.closeAction == "opener") {
            if (com.idc.clm.vars.navigation.lastSlide && com.idc.clm.vars.navigation.lastSlide.id != null) {
              com.idc.clm.gotoSlide(com.idc.clm.vars.navigation.lastSlide.id);
            } else {
              if (com.idc.clm.vars.navigation.actualSlidesSequence[0] != com.idc.clm.vars.navigation.currentSlide.id) {
                com.idc.clm.gotoSlide(com.idc.clm.vars.navigation.actualSlidesSequence[0]); //first slide in the sequence by default
              }
            }
          } else {
            if (com.idc.clm.findSlide(this.params.closeAction) != null) {
              com.idc.clm.gotoSlide(this.params.closeAction);
            } else {
              com.idc.clm.gotoSlide(com.idc.clm.vars.navigation.actualSlidesSequence[0]); //first slide in the sequence by default
            }
          }
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
        setArrowsAndSwipe: function (el) {
          let position = this.positionInActiveGroup();

          if (position.order > 0) {
            //prev slide
            let prevSlide = com.idc.clm.vars.standaloneModalGroups.groups.find(
              (group) => group.id == com.idc.clm.persistentData.session.selectedStandaloneGroup
            ).slides[position.order - 1];

            //arrow visibility and link
            if (el.components.prevArrow) {
              el.components.prevArrow.element.setAttribute("data-view-state", "active");
              el.components.prevArrow.element.addEventListener("click", (evt) => {
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
            if (el.components.nextArrow) {
              el.components.nextArrow.element.setAttribute("data-view-state", "active");
              el.components.nextArrow.element.addEventListener("click", (evt) => {
                com.idc.clm.gotoSlide(nextSlide);
              });
            }

            //navigation owerwrite
            com.idc.clm.navigationOverwrite("next", nextSlide);
          }
        },
        setGroupElementsVisibility: function (pElement, pVisible) {
          let indexOpenButtonId = com.idc.clm.vars.standaloneModalGroups.indexModal.openButton;
          let indexOpenButton = pElement.querySelector("#" + indexOpenButtonId);
          if (indexOpenButton) {
            if (pVisible) {
              indexOpenButton.style.display = "block";
            } else {
              indexOpenButton.style.display = "none";
            }
          }

          let paginator = pElement.querySelector('[data-type="com.idc.ui.core.modal.paginator"]');
          if (paginator) {
            if (pVisible) {
              paginator.style.display = "block";
            } else {
              paginator.style.display = "none";
            }
          }
        },
        setPaginator: function (pElement) {
          let position = this.positionInActiveGroup();
          let paginator = pElement.querySelector('[data-type="com.idc.ui.core.modal.paginator"]');
          if (paginator) {
            paginator.innerHTML = `${position.order + 1} / ${position.total}`;
          }
        },
        populateGroupSlides: function () {
          let persistentData = com.idc.clm.persistentData;
          let vars = com.idc.clm.vars;
          let util = com.idc.util;

          let indexModalId = com.idc.clm.vars.standaloneModalGroups.indexModal.id;
          let indexModal = document.querySelector(`#${indexModalId}`);
          if (!indexModal) return;

          let groupSlidesEl = indexModal.querySelector('[data-type="com.idc.ui.core.modal.groupSlides"]');
          if (!groupSlidesEl) return;

          let activeGroupId = persistentData.session.selectedStandaloneGroup;
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

            itemElement.addEventListener("click", (evt) => {
              com.idc.clm.gotoSlide(slide.id);
            });

            groupSlidesEl.appendChild(itemElement);
          });

          template.remove();
        },
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
            }
          }

          if (this.nextArrow) {
            if (!com.idc.clm.vars.navigation.currentSlide.isLast) {
              this.nextArrow.setAttribute("data-view-state", "active");
            }
          }
        }
      },
    },
    references: {
      activeRefs: {
        all: null,
        slide: null,
      },
      switch: {
        active: null,
        selected: null,
      },
      scroll: null,
      init: function () {
        let vars = com.idc.clm.vars;

        //all references
        let containsAllRefs;
        if (vars.references.content.landscape) {
          containsAllRefs = true;
          this.activeRefs.all = vars.references.content;
        }

        //slide references
        let containsSlideRefs;
        let currentSlide = vars.slides.find((slide) => {
          return slide.id == vars.navigation.currentSlide.id;
        });
        if (currentSlide.references) {
          if (currentSlide.references.default.landscape) {
            this.setActiveSlideRefs(currentSlide.references.default);
            containsSlideRefs = true;
          }
        }

        //switch
        if (containsSlideRefs && containsAllRefs) {
          this.switch.active = true;
          this.switch.selected = "slide";
        } else {
          this.switch.active = false;
          if (containsSlideRefs) this.switch.selected = "slide";
          if (containsAllRefs) this.switch.selected = "all";
        }

        //disable open button
        if (!containsSlideRefs && !containsAllRefs) {
          this.disableOpenButton();
        }

        this.setEvents();
      },
      disableOpenButton: function () {
        let vars = com.idc.clm.vars;
        let openButton = document.querySelector(`#${vars.references.components.openButton.id}`);
        if (openButton) {
          openButton.setAttribute("data-view-state", "disabled");
        }
      },
      setActiveSlideRefs: function (pRefs) {
        this.activeRefs.slide = pRefs;
      },
      setEvents: function () {
        let vars = com.idc.clm.vars;

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
          this.scrollRefresh();
        });

        //switch
        if (this.switch.active) {
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
              this.scrollRefresh();
            });
          }
        }
      },
      beforeOpen: function () {
        com.idc.ui.core.references.removeContent();
        com.idc.ui.core.references.setContent(com.idc.ui.core.references.switch.selected, com.idc.ui.core.references.activeRefs);
      },
      afterOpen: function () {
        com.idc.ui.core.references.scrollRefresh();
      },
      removeContent: function () {
        let vars = com.idc.clm.vars;

        document.querySelector(`#${vars.references.components.modal.id} [data-type="com.idc.ui.references.landscapeView"]`).innerHTML = "";
        document.querySelector(`#${vars.references.components.modal.id} [data-type="com.idc.ui.references.landscapeView"]`).removeAttribute("data-view-state");
        document.querySelector(`#${vars.references.components.modal.id} [data-type="com.idc.ui.references.portraitView"]`).innerHTML = "";
        document.querySelector(`#${vars.references.components.modal.id} [data-type="com.idc.ui.references.portraitView"]`).removeAttribute("data-view-state");
      },
      setContent: function (type, source) {
        let vars = com.idc.clm.vars;
        let util = com.idc.util;
        let screenOrientation = vars.screen.orientation;

        //img source
        let refsFile = screenOrientation == "landscape" ? source[type].landscape : source[type].portrait ? source[type].portrait : source[type].landscape;

        //container
        let selector = `#${vars.references.components.modal.id} [data-type="com.idc.ui.references"] [data-type="com.idc.ui.references.${screenOrientation}View"]`;
        let refsContainer = document.querySelector(selector);
        refsContainer.innerHTML = "";

        //container attributes
        refsContainer.setAttribute("data-ref-src", refsFile);

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

        //scroll
        if (this.scroll) {
          this.scroll.destroy();
          this.scroll = null;
        }
        let scrollContainerSelector = `#${vars.references.components.modal.id} [data-type="com.idc.ui.references.scrollContainer"]`;
        this.scroll = new IScroll(scrollContainerSelector, {
          scrollbars: true,
          fadeScrollbars: false,
          interactiveScrollbars: true,
        });
      },
      scrollRefresh: function () {
        if (this.scroll) {
          setTimeout(() => {
            this.scroll.refresh();
          }, 200);
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
            el.components.container.element
              .querySelector(':scope > [data-type="com.idc.ui.core.tab.buttons"]')
              .querySelectorAll('[data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.core.tab.button"]')
              .forEach((button) => {
                const instance = {
                  name: button.getAttribute("data-instance"),
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

            //components: cover
            el.components.cover = {
              hasCover: null,
              buttons: [],
            };
            if (document.querySelector(`[data-type="com.idc.ui.core.tab.cover"][data-target-id="${el.id}"]`) !== null) {
              el.components.cover.hasCover = true;
              el.components.cover.element = document.querySelector(`[data-type="com.idc.ui.core.tab.cover"][data-target-id="${el.id}"]`);
              el.components.cover.viewState = "active";

              el.components.cover.element
                .querySelector(':scope > [data-type="com.idc.ui.core.tab.buttons"]')
                .querySelectorAll('[data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.core.tab.button"]')
                .forEach((button) => {
                  button = {
                    instance: button.getAttribute("data-instance"),
                    element: button,
                  };
                  el.components.cover.buttons.push(button);
                });
            }

            //params
            el.params = com.idc.ui.common.readElementOptions(el, {
              backModalStyle: null, //used to assign a class to back modal
            });

            //assign functions and events: main element
            el.itemClick = this.itemClick;
            el.setInstance = this.setInstance;
            el.getActiveInstance = this.getActiveInstance;
            el.hideCover = this.hideCover;
            el.showCover = this.showCover;
            el.overwriteParameterFunction = this.overwriteParameterFunction;
            el.resetToDefaults = this.resetToDefaults;

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
                com.idc.ui.common.backFromStandalone.getPersistentProperty(com.idc.clm.vars.navigation.currentSlide.id, el.id, "activeInstance").value,
                true
              );
            } else {
              //not back from standalone slide: reset to defaults
              el.resetToDefaults();
            }
          }
        });
      },
      hideCover: function () {
        this.components.cover.element.removeAttribute("data-view-state");
        this.components.cover.viewState = null;
        this.components.container.element.setAttribute("data-view-state", "active");
      },
      showCover: function () {
        this.components.cover.element.setAttribute("data-view-state", "active");
        this.components.cover.viewState = "active";
        this.components.container.element.removeAttribute("data-view-state");
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
            instance.content.element.setAttribute("data-view-state", "active");
            instance.button.element.setAttribute("data-view-state", "active");
            instance.viewState = "active";
            this.viewState.activeInstance = pInstance;
          } else {
            //all the rest
            instance.content.element.removeAttribute("data-view-state");
            instance.button.element.removeAttribute("data-view-state", "active");
            instance.viewState = null;

            //reset child objects (revert to default state)
            com.idc.ui.common.resetChildElements(instance.content.element);
          }
        });

        //show back modal
        if (this.viewState.activeInstance && this.isTabModal) {
          this.components.backModal.element.style.display = "block";
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
          const buttonCount = container
            .querySelector(':scope > [data-type="com.idc.ui.core.tab.buttons"]')
            .querySelectorAll('[data-type="com.idc.ui.core.button"][data-sub-type="com.idc.ui.core.tab.button"]').length;
          const contentCount = container.querySelectorAll(':scope > [data-type="com.idc.ui.core.tab.content"]').length;

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

        //set group contents
        let currentSet = com.idc.clm.vars.utilitiesMenu.sets[vars.navigation.currentSlide.isStandalone ? "standaloneModal" : "mainSlide"];

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
              this.components.containers[groupName].appendChild(this.components.items.separator.cloneNode(true));
            }
          });
        });

        //if standalone modal, add close button to right container
        if (vars.navigation.currentSlide.isStandalone) {
          let standaloneModalId = com.idc.clm.findSlide(vars.navigation.currentSlide.id).standaloneModal.modalId;
          let closeButton = document.querySelector(`#${standaloneModalId}`).components.closeButton.element;
          if (closeButton) {
            this.components.containers.rightGroup.appendChild(this.components.items.separator.cloneNode(true));
            this.components.containers.rightGroup.appendChild(closeButton);
          }
        }
      },
      updateStyleAndZIndex: function () {
        let vars = com.idc.clm.vars;
        let activeModalsStack = com.idc.ui.core.modal.activeModalsStack;
        let aModalIsActive = activeModalsStack.length > 0;
        let activeModalId = aModalIsActive ? activeModalsStack[activeModalsStack.length - 1] : null;
        let isActiveModalStandalone = aModalIsActive ? document.querySelector(`#${activeModalId}`).isStandalone : false;

        //style name
        let styleName;
        if (activeModalsStack.length > 0) {
          styleName = "light"; //a modal is active
        } else {
          styleName = "dark"; //main slide
        }

        //set style and z-index
        ["centerGroup", "rightGroup"].forEach((groupName) => {
          this.components.containers[groupName].childNodes.forEach((el) => {
            //style
            el.setAttribute("data-style", styleName);

            //z-index
            if (!aModalIsActive) {
              //main slide, all buttons z-index 0
              el.style.zIndex = 0;
            } else {
              if (isActiveModalStandalone) {
                //standalone, bring all buttons to front
                el.style.zIndex = activeModalsStack.length * 10 + 1;
              } else {
                //normal modal, just bring dual button and references to front
                let isDualButtonOfCurrentModal =
                  el.getAttribute("data-sub-type") == "com.idc.ui.core.modal.dualButton" && el.getAttribute("data-target-id") == activeModalId;
                let isReferencesOpenButton = el.getAttribute("id") == vars.references.components.openButton.id;
                if (isDualButtonOfCurrentModal || isReferencesOpenButton) {
                  el.style.zIndex = activeModalsStack.length * 10 + 1;
                }
              }
            }
          });
        });
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
      //accordions, tabs
      pContainer.querySelectorAll("[data-type='com.idc.ui.core.accordion'],[data-type='com.idc.ui.core.tab']").forEach((el) => {
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
          window[populateMenuFunction](slidesSequence);
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
        //do nothing (ToDo: could call the external function with null parameter)
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
              case "log":
                textArea = this.dropDown.element.querySelector('[data-type="com.idc.ui.core.tab.content"][data-instance="log"] textarea');
                break;
              case "vars":
                textArea = this.dropDown.element.querySelector('[data-type="com.idc.ui.core.tab.content"][data-instance="vars"] textarea');
                break;
            }

            if (typeof textArea !== undefined) {
              textArea.select();
              document.execCommand("copy");

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
      const textArea = this.dropDown.element.querySelector('[data-type="com.idc.ui.core.tab.content"][data-instance="params"] textarea');

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

      textArea.value = `${JSON.stringify(params, null, 4)}\n`;
    },
    refreshVars: function () {
      const textArea = this.dropDown.element.querySelector('[data-type="com.idc.ui.core.tab.content"][data-instance="vars"] textarea');

      let vars = JSON.parse(JSON.stringify(com.idc.clm.vars)); //all but the below vars
      delete vars.project;
      delete vars.options;
      delete vars.commonHTML;
      delete vars.slides;
      delete vars.standaloneModalGroups;
      delete vars.emailCart;

      textArea.value = `${JSON.stringify(vars, null, 4)}\n`;
    },
    refreshPersistentData: function () {
      const textArea = this.dropDown.element.querySelector('[data-type="com.idc.ui.core.tab.content"][data-instance="persistentData"] textarea');
      textArea.value = `${JSON.stringify(com.idc.clm.persistentData, null, 4)}\n`;
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
};

let log = com.idc.util.log;

com.idc.clm.init();
