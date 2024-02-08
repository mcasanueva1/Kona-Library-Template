if (com == null) var com = {};
if (com.idc == undefined) com.idc = {};

com.idc.templates = {
  core: {
    accordion: [
      {
        type: "DIV",
        attributes: [
          {
            "data-type": "com.idc.ui.core.accordion",
          },
          {
            "data-options": "",
          },
        ],
        childNodes: [
          {
            type: "DIV",
            attributes: [
              {
                "data-type": "com.idc.ui.core.button",
              },
              {
                "data-sub-type": "com.idc.ui.core.accordion.button",
              },
              {
                "data-instance": "instance-id",
              },
            ],
            childNodes: [],
          },
          {
            type: "DIV",
            attributes: [
              {
                "data-type": "com.idc.ui.core.accordion.content",
              },
              {
                "data-instance": "instance-id",
              },
            ],
            childNodes: [],
          },
        ],
      },
    ],
    modal: {
      backModal: [
        {
          type: "DIV",
          attributes: [
            {
              "data-type": "com.idc.ui.backModal",
            },
          ],
        },
      ],
      popUp: [
        {
          type: "DIV",
          attributes: [
            {
              "data-type": "com.idc.ui.core.modal.popUp",
            },
            {
              "data-options": "",
            },
          ],
          childNodes: [
            {
              type: "DIV",
              attributes: [
                {
                  "data-type": "com.idc.ui.core.button",
                },
                {
                  "data-sub-type": "com.idc.ui.core.modal.closeButton",
                },
              ],
              childNodes: [
                {
                  type: "#text",
                  text: "Close",
                },
              ],
            },
            {
              type: "DIV",
              attributes: [
                {
                  "data-type": "com.idc.ui.core.modal.contentArea",
                },
              ],
              childNodes: [],
            },
          ],
        },
      ],
      dropDown: [
        {
          type: "DIV",
          attributes: [
            {
              "data-type": "com.idc.ui.core.modal.dropDown",
            },
            {
              "data-options": "backModalStyle=transparent",
            },
          ],
          childNodes: [
            {
              type: "DIV",
              attributes: [
                {
                  "data-type": "com.idc.ui.core.modal.contentArea",
                },
              ],
              childNodes: [],
            },
            {
              type: "DIV",
              attributes: [
                {
                  "data-type": "com.idc.ui.core.button",
                },
                {
                  "data-sub-type": "com.idc.ui.core.modal.closeButton",
                },
              ],
              childNodes: [
                {
                  type: "#text",
                  text: "Close",
                },
              ],
            },
          ],
        },
      ],
    },
    tab: [
      {
        type: "DIV",
        attributes: [
          {
            "data-type": "com.idc.ui.core.tab",
          },
          {
            "data-options": "",
          },
        ],
        childNodes: [
          {
            type: "DIV",
            attributes: [
              {
                "data-type": "com.idc.ui.core.tab.cover",
              },
            ],
            childNodes: [
              {
                type: "DIV",
                attributes: [
                  {
                    "data-type": "com.idc.ui.core.tab.buttons",
                  },
                ],
                childNodes: [
                  {
                    type: "DIV",
                    attributes: [
                      {
                        "data-type": "com.idc.ui.core.button",
                      },
                      {
                        "data-sub-type": "com.idc.ui.core.tab.button",
                      },
                      {
                        "data-instance": "instance-id",
                      },
                    ],
                    childNodes: [],
                  },
                ],
              },
            ],
          },
          {
            type: "DIV",
            attributes: [
              {
                "data-type": "com.idc.ui.core.tab.container",
              },
            ],
            childNodes: [
              {
                type: "DIV",
                attributes: [
                  {
                    "data-type": "com.idc.ui.core.tab.buttons",
                  },
                ],
                childNodes: [
                  {
                    type: "DIV",
                    attributes: [
                      {
                        "data-type": "com.idc.ui.core.button",
                      },
                      {
                        "data-sub-type": "com.idc.ui.core.tab.button",
                      },
                      {
                        "data-instance": "instance-id",
                      },
                    ],
                    childNodes: [],
                  },
                ],
              },
              {
                type: "DIV",
                attributes: [
                  {
                    "data-type": "com.idc.ui.core.tab.content",
                  },
                  {
                    "data-instance": "instance-id",
                  },
                ],
                childNodes: [],
              },
            ],
          },
        ],
      },
    ],
  },
  dynamicPresentation: {
    menuBundle: [
      {
        type: "DIV",
        attributes: [
          {
            "data-type": "com.idc.ui.dynamicMenuBundle",
          },
        ],
        childNodes: [
          {
            type: "DIV",
            attributes: [
              {
                "data-type": "com.idc.ui.core.button",
              },
              {
                "data-sub-type": "com.idc.ui.core.modal.openButton",
              },
              {
                "data-target-id": "com_idc_ui_dynamic_menu_modal",
              },
              {
                id: "com_idc_ui_dynamic_menu_modal_open",
              },
            ],
            childNodes: [
              {
                type: "#text",
                text: "DYNAMIC MENU",
              },
            ],
          },
          {
            type: "DIV",
            attributes: [
              {
                "data-type": "com.idc.ui.core.modal.modalObject",
              },
              {
                "data-options": "backModalStyle=transparentBackground",
              },
              {
                id: "com_idc_ui_dynamic_menu_modal",
              },
            ],
            childNodes: [
              {
                type: "DIV",
                attributes: [
                  {
                    "data-type": "com.idc.ui.core.modal.contentArea",
                  },
                ],
                childNodes: [
                  {
                    type: "DIV",
                    attributes: [
                      {
                        "data-type": "com.idc.ui.core.menu",
                      },
                    ],
                    childNodes: [
                      {
                        type: "DIV",
                        attributes: [
                          {
                            "data-type": "com.idc.ui.core.menu.container",
                          },
                        ],
                        childNodes: [
                          {
                            type: "DIV",
                            attributes: [
                              {
                                "data-type": "com.idc.ui.core.button",
                              },
                              {
                                "data-sub-type": "com.idc.ui.core.modal.closeButton",
                              },
                            ],
                            childNodes: [],
                          },
                          {
                            type: "DIV",
                            attributes: [
                              {
                                "data-type": "com.idc.ui.core.menu.buttonTemplate",
                              },
                              {
                                "data-sub-type": "com.idc.ui.core.menu.button",
                              },
                              {
                                "data-target-id": "",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    alertPopUp: [
      {
        type: "DIV",
        attributes: [
          {
            "data-type": "com.idc.ui.core.modal.popUp",
          },
        ],
        childNodes: [
          {
            type: "DIV",
            attributes: [
              {
                "data-type": "com.idc.ui.core.modal.contentArea",
              },
            ],
            childNodes: [
              {
                type: "H2",
                attributes: [],
                childNodes: [
                  {
                    type: "#text",
                    text: "This slide is not available",
                  },
                ],
              },
              {
                type: "DIV",
                attributes: [],
                childNodes: [
                  {
                    type: "#text",
                    text: 'The slide is not available for this presentation.',
                  },
                  {
                    type: "BR",
                    attributes: [],
                  },
                  {
                    type: "BR",
                    attributes: [],
                  },
                  {
                    type: "BR",
                    attributes: [],
                  },
                ],
              },
              {
                type: "DIV",
                attributes: [
                  {
                    "data-type": "com.idc.ui.core.button",
                  },
                  {
                    "data-sub-type": "com.idc.ui.core.modal.closeButton",
                  },
                ],
                childNodes: [
                  {
                    type: "#text",
                    text: "Close",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  inspector: {
    button: [
      {
        type: "DIV",
        attributes: [
          {
            "data-type": "com.idc.ui.core.button",
          },
          {
            "data-sub-type": "com.idc.ui.inspector.button",
          },
          {
            "data-view-state": "",
          },
        ],
        childNodes: [
          {
            type: "SPAN",
            attributes: [
              {
                "data-type": "com.idc.ui.inspector.button.draggable",
              },
            ],
          },
          {
            type: "SPAN",
            attributes: [
              {
                "data-type": "com.idc.ui.inspector.button.label",
              },
            ],
            childNodes: [
              {
                type: "#text",
                text: "Inspector",
              },
            ],
          },
          {
            type: "I",
            attributes: [
              {
                class: "gg-close-o",
              },
              {
                "data-type": "com.idc.ui.inspector.button.close",
              },
            ],
          },
        ],
      },
    ],
    dropDown: [
      {
        type: "DIV",
        attributes: [
          {
            "data-type": "com.idc.ui.core.modal.dropDown",
          },
          {
            "data-sub-type": "com.idc.ui.inspector",
          },
          {
            "data-options": "backModalStyle=transparent",
          },
        ],
        childNodes: [
          {
            type: "DIV",
            attributes: [
              {
                "data-type": "com.idc.ui.core.modal.contentArea",
              },
            ],
            childNodes: [
              {
                type: "DIV",
                attributes: [
                  {
                    "data-type": "com.idc.ui.core.tab",
                  },
                  {
                    "data-options": "",
                  },
                ],
                childNodes: [
                  {
                    type: "DIV",
                    attributes: [
                      {
                        "data-type": "com.idc.ui.core.tab.container",
                      },
                    ],
                    childNodes: [
                      {
                        type: "DIV",
                        attributes: [
                          {
                            "data-type": "com.idc.ui.core.tab.buttons",
                          },
                        ],
                        childNodes: [
                          {
                            type: "DIV",
                            attributes: [
                              {
                                "data-type": "com.idc.ui.core.button",
                              },
                              {
                                "data-sub-type": "com.idc.ui.core.tab.button",
                              },
                              {
                                "data-instance": "log",
                              },
                            ],
                            childNodes: [
                              {
                                type: "I",
                                attributes: [
                                  {
                                    class: "gg-play-list-remove",
                                  },
                                ],
                                childNodes: [],
                              },
                              {
                                type: "SPAN",
                                attributes: [],
                                childNodes: [
                                  {
                                    type: "#text",
                                    text: "Log",
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: "DIV",
                            attributes: [
                              {
                                "data-type": "com.idc.ui.core.button",
                              },
                              {
                                "data-sub-type": "com.idc.ui.core.tab.button",
                              },
                              {
                                "data-instance": "params",
                              },
                            ],
                            childNodes: [
                              {
                                type: "I",
                                attributes: [
                                  {
                                    class: "gg-code",
                                  },
                                ],
                                childNodes: [],
                              },
                              {
                                type: "SPAN",
                                attributes: [],
                                childNodes: [
                                  {
                                    type: "#text",
                                    text: "Params",
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: "DIV",
                            attributes: [
                              {
                                "data-type": "com.idc.ui.core.button",
                              },
                              {
                                "data-sub-type": "com.idc.ui.core.tab.button",
                              },
                              {
                                "data-instance": "vars",
                              },
                            ],
                            childNodes: [
                              {
                                type: "I",
                                attributes: [
                                  {
                                    class: "gg-code",
                                  },
                                ],
                                childNodes: [],
                              },
                              {
                                type: "SPAN",
                                attributes: [],
                                childNodes: [
                                  {
                                    type: "#text",
                                    text: "Vars",
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: "DIV",
                            attributes: [
                              {
                                "data-type": "com.idc.ui.core.button",
                              },
                              {
                                "data-sub-type": "com.idc.ui.core.tab.button",
                              },
                              {
                                "data-instance": "persistentData",
                              },
                            ],
                            childNodes: [
                              {
                                type: "I",
                                attributes: [
                                  {
                                    class: "gg-database",
                                  },
                                ],
                                childNodes: [],
                              },
                              {
                                type: "SPAN",
                                attributes: [],
                                childNodes: [
                                  {
                                    type: "#text",
                                    text: "Persistent data",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: "DIV",
                        attributes: [
                          {
                            "data-type": "com.idc.ui.core.tab.content",
                          },
                          {
                            "data-instance": "log",
                          },
                        ],
                        childNodes: [
                          {
                            type: "TEXTAREA",
                            attributes: [],
                            childNodes: [],
                          },
                        ],
                      },
                      {
                        type: "DIV",
                        attributes: [
                          {
                            "data-type": "com.idc.ui.core.tab.content",
                          },
                          {
                            "data-instance": "params",
                          },
                        ],
                        childNodes: [
                          {
                            type: "TEXTAREA",
                            attributes: [],
                            childNodes: [],
                          },
                        ],
                      },
                      {
                        type: "DIV",
                        attributes: [
                          {
                            "data-type": "com.idc.ui.core.tab.content",
                          },
                          {
                            "data-instance": "vars",
                          },
                        ],
                        childNodes: [
                          {
                            type: "TEXTAREA",
                            attributes: [],
                            childNodes: [],
                          },
                        ],
                      },
                      {
                        type: "DIV",
                        attributes: [
                          {
                            "data-type": "com.idc.ui.core.tab.content",
                          },
                          {
                            "data-instance": "persistentData",
                          },
                        ],
                        childNodes: [
                          {
                            type: "TEXTAREA",
                            attributes: [],
                            childNodes: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: "DIV",
                attributes: [
                  {
                    "data-type": "com.idc.ui.inspector.bottom",
                  },
                ],
                childNodes: [
                  {
                    type: "DIV",
                    attributes: [
                      {
                        "data-type": "com.idc.ui.inspector.copyToCliboard",
                      },
                    ],
                    childNodes: [
                      {
                        type: "I",
                        attributes: [
                          {
                            class: "gg-copy",
                          },
                        ],
                        childNodes: [],
                      },
                      {
                        type: "SPAN",
                        attributes: [
                          {
                            "data-type": "com.idc.ui.inspector.copyToCliboard.label",
                          },
                        ],
                        childNodes: [
                          {
                            type: "#text",
                            text: "Copy to clipboard",
                          },
                        ],
                      },
                      {
                        type: "SPAN",
                        attributes: [
                          {
                            "data-type": "com.idc.ui.inspector.copyToCliboard.copied",
                          },
                        ],
                        childNodes: [
                          {
                            type: "#text",
                            text: " > copied to clipboard",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "DIV",
                    attributes: [
                      {
                        "data-type": "com.idc.ui.inspector.execute",
                      },
                    ],
                    childNodes: [
                      {
                        type: "DIV",
                        attributes: [
                          {
                            "data-type": "com.idc.ui.core.button",
                          },
                          {
                            "data-sub-type": "com.idc.ui.inspector.execute.button",
                          },
                        ],
                        childNodes: [
                          {
                            type: "#text",
                            text: "EXECUTE",
                          },
                        ],
                      },
                      {
                        type: "INPUT",
                        attributes: [
                          {
                            type: "text",
                          },
                          {
                            "data-type": "com.idc.ui.inspector.execute.input",
                          },
                        ],
                        childNodes: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
