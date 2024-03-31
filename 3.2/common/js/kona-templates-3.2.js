if (com == null) var com = {};
if (com.idc == undefined) com.idc = {};

com.idc.templates = {
  "core": {
    "accordion": {
      "container": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.accordion",
            },
            {
              "data-options": "",
            },
          ],
          "childNodes": [],
        },
      ],
      "button": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.button",
            },
            {
              "data-sub-type": "com.idc.ui.core.accordion.button",
            },
            {
              "data-instance": "",
            },
          ],
          "childNodes": [],
        }
      ],
      "content": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.accordion.content",
            },
            {
              "data-instance": "",
            },
          ],
          "childNodes": [],
        },
      ]
    },
    "link": [
      {
        "type": "DIV",
        "attributes": [
          {
            "data-type": "com.idc.ui.core.link",
          },
          {
            "data-target-id": "",
          },
        ],
        "childNodes": [],
      }
    ],
    "menu": {
      "container": [
        {
          "type": "DIV",
          "attributes": [
              {
                  "data-type": "com.idc.ui.core.menu"
              }
          ],
          "childNodes": [
              {
                  "type": "DIV",
                  "attributes": [
                      {
                          "data-type": "com.idc.ui.core.menu.container"
                      }
                  ],
                  "childNodes": []
              }
          ]
        }
      ],
      "button": [
        {
            "type": "DIV",
            "attributes": [
                {
                    "data-type": "com.idc.ui.core.link"
                },
                {
                    "data-sub-type": "com.idc.ui.core.menu.button"
                },
                {
                    "data-target-id": ""
                }
            ],
            "childNodes": []
        }
      ]
    },
    "modal": {
      "backModal": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.backModal",
            },
          ],
        },
      ],
      "openButton": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.button",
            },
            {
              "data-sub-type": "com.idc.ui.core.modal.openButton",
            },
            {
              "data-target-id": "",
            },
          ],
          "childNodes": [],
        }
      ],
      "closeButton": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.button",
            },
            {
              "data-sub-type": "com.idc.ui.core.modal.closeButton",
            },
          ],
          "childNodes": [],
        },
      ],
      "popUp": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.modal.popUp",
            },
            {
              "data-options": "",
            },
          ],
          "childNodes": [],
        },
      ],
      "modalObject": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.modal.modalObject",
            },
            {
              "data-options": "",
            },
          ],
          "childNodes": [],
        },
      ],
      "dropDown": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.modal.dropDown",
            },
            {
              "data-options": "backModalStyle=transparent",
            },
          ],
          "childNodes": [],
        },
      ],
      "contentArea": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.modal.contentArea",
            },
          ],
          "childNodes": [],
        },
      ],
      "standaloneContentArea": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.modal.contentArea",
            },
          ],
          "childNodes": [
            {
              "type": "DIV",
              "attributes": [
                {
                  "class": "landscapeView",
                },
              ],
              "childNodes": [],
            },
            {
              "type": "DIV",
              "attributes": [
                {
                  "class": "portraitView",
                },
              ],
              "childNodes": [],
            },
          ],
        },
      ],
      "standaloneArrows": {
        "prev": [
          {
            "type": "DIV",
            "attributes": [
              {
                "data-type": "com.idc.ui.core.navigation.arrow",
              },
              {
                "data-sub-type": "com.idc.ui.core.modal.prevArrow",
              },
            ],
            "childNodes": []
          }
        ],
        "next": [
          {
            "type": "DIV",
            "attributes": [
              {
                "data-type": "com.idc.ui.core.navigation.arrow",
              },
              {
                "data-sub-type": "com.idc.ui.core.modal.nextArrow",
              },
            ],
            "childNodes": []
          }
        ],
      },
      "standalonePaginator": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.modal.paginator",
            },
          ],
          "childNodes": []
        }
      ],
      "standaloneGroupSlides": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.modal.groupSlides",
            },
          ],
          "childNodes": [],
        },
      ]
    },
    "tab": [
      {
        "type": "DIV",
        "attributes": [
          {
            "data-type": "com.idc.ui.core.tab",
          },
          {
            "data-options": "",
          },
        ],
        "childNodes": [
          {
            "type": "DIV",
            "attributes": [
              {
                "data-type": "com.idc.ui.core.tab.cover",
              },
            ],
            "childNodes": [
              {
                "type": "DIV",
                "attributes": [
                  {
                    "data-type": "com.idc.ui.core.tab.buttons",
                  },
                ],
                "childNodes": [
                  {
                    "type": "DIV",
                    "attributes": [
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
                    "childNodes": [],
                  },
                ],
              },
            ],
          },
          {
            "type": "DIV",
            "attributes": [
              {
                "data-type": "com.idc.ui.core.tab.container",
              },
            ],
            "childNodes": [
              {
                "type": "DIV",
                "attributes": [
                  {
                    "data-type": "com.idc.ui.core.tab.buttons",
                  },
                ],
                "childNodes": [
                  {
                    "type": "DIV",
                    "attributes": [
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
                    "childNodes": [],
                  },
                ],
              },
              {
                "type": "DIV",
                "attributes": [
                  {
                    "data-type": "com.idc.ui.core.tab.content",
                  },
                  {
                    "data-instance": "instance-id",
                  },
                ],
                "childNodes": [],
              },
            ],
          },
        ],
      },
    ],
    "scroll": {
      "container": [
        {
        "type": "DIV",
        "attributes": [
          {
            "data-type": "com.idc.ui.core.scroll.container",
          },
        ],
        "childNodes": [],
        }
      ],
      "content": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.scroll.content",
            },
          ],
          "childNodes": [],
          }
      ],
    }
  },
  "dynamicPresentation": {
    "menuBundle": [
      {
        "type": "DIV",
        "attributes": [
          {
            "data-type": "com.idc.ui.dynamicMenuBundle",
          },
        ],
        "childNodes": [
          {
            "type": "DIV",
            "attributes": [
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
                "id": "com_idc_ui_dynamic_menu_modal_open",
              },
            ],
            "childNodes": [],
          },
          {
            "type": "DIV",
            "attributes": [
              {
                "data-type": "com.idc.ui.core.modal.modalObject",
              },
              {
                "data-options": "backModalStyle=transparentBackground",
              },
              {
                "id": "com_idc_ui_dynamic_menu_modal",
              },
            ],
            "childNodes": [
              {
                "type": "DIV",
                "attributes": [
                  {
                    "data-type": "com.idc.ui.core.modal.contentArea",
                  },
                ],
                "childNodes": [
                  {
                    "type": "DIV",
                    "attributes": [
                      {
                        "data-type": "com.idc.ui.core.menu",
                      },
                    ],
                    "childNodes": [
                      {
                        "type": "DIV",
                        "attributes": [
                          {
                            "data-type": "com.idc.ui.core.menu.container",
                          },
                        ],
                        "childNodes": [
                          {
                            "type": "DIV",
                            "attributes": [
                              {
                                "data-type": "com.idc.ui.core.button",
                              },
                              {
                                "data-sub-type": "com.idc.ui.core.modal.closeButton",
                              },
                            ],
                            "childNodes": [],
                          },
                          {
                            "type": "DIV",
                            "attributes": [
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
    "alertPopUp": [
      {
        "type": "DIV",
        "attributes": [
          {
            "data-type": "com.idc.ui.core.modal.popUp",
          },
        ],
        "childNodes": [
          {
            "type": "DIV",
            "attributes": [
              {
                "data-type": "com.idc.ui.core.modal.contentArea",
              },
            ],
            "childNodes": [
              {
                "type": "DIV",
                "attributes": [
                  {
                    "data-type": "com.idc.ui.core.button",
                  },
                  {
                    "data-sub-type": "com.idc.ui.core.modal.closeButton",
                  },
                ],
                "childNodes": [],
              },
            ],
          },
        ],
      },
    ],
  },
  "inspector": {
    "button": [
      {
        "type": "DIV",
        "attributes": [
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
        "childNodes": [
          {
            "type": "SPAN",
            "attributes": [
              {
                "data-type": "com.idc.ui.inspector.button.draggable",
              },
            ],
          },
          {
            "type": "SPAN",
            "attributes": [
              {
                "data-type": "com.idc.ui.inspector.button.label",
              },
            ],
            "childNodes": [
              {
                "type": "#text",
                "text": "Inspector",
              },
            ],
          },
          {
            "type": "I",
            "attributes": [
              {
                "class": "gg-close-o",
              },
              {
                "data-type": "com.idc.ui.inspector.button.close",
              },
            ],
          },
        ],
      },
    ],
    "dropDown": [
      {
        "type": "DIV",
        "attributes": [
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
        "childNodes": [
          {
            "type": "DIV",
            "attributes": [
              {
                "data-type": "com.idc.ui.core.modal.contentArea",
              },
            ],
            "childNodes": [
              {
                "type": "DIV",
                "attributes": [
                  {
                    "data-type": "com.idc.ui.core.tab",
                  },
                  {
                    "data-options": "",
                  },
                ],
                "childNodes": [
                  {
                    "type": "DIV",
                    "attributes": [
                      {
                        "data-type": "com.idc.ui.core.tab.container",
                      },
                    ],
                    "childNodes": [
                      {
                        "type": "DIV",
                        "attributes": [
                          {
                            "data-type": "com.idc.ui.core.tab.buttons",
                          },
                        ],
                        "childNodes": [
                          {
                            "type": "DIV",
                            "attributes": [
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
                            "childNodes": [
                              {
                                "type": "I",
                                "attributes": [
                                  {
                                    "class": "gg-play-list-remove",
                                  },
                                ],
                                "childNodes": [],
                              },
                              {
                                "type": "SPAN",
                                "attributes": [],
                                "childNodes": [
                                  {
                                    "type": "#text",
                                    "text": "Log",
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            "type": "DIV",
                            "attributes": [
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
                            "childNodes": [
                              {
                                "type": "I",
                                "attributes": [
                                  {
                                    "class": "gg-code",
                                  },
                                ],
                                "childNodes": [],
                              },
                              {
                                "type": "SPAN",
                                "attributes": [],
                                "childNodes": [
                                  {
                                    "type": "#text",
                                    "text": "Params",
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            "type": "DIV",
                            "attributes": [
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
                            "childNodes": [
                              {
                                "type": "I",
                                "attributes": [
                                  {
                                    "class": "gg-code",
                                  },
                                ],
                                "childNodes": [],
                              },
                              {
                                "type": "SPAN",
                                "attributes": [],
                                "childNodes": [
                                  {
                                    "type": "#text",
                                    "text": "Vars",
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            "type": "DIV",
                            "attributes": [
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
                            "childNodes": [
                              {
                                "type": "I",
                                "attributes": [
                                  {
                                    "class": "gg-database",
                                  },
                                ],
                                "childNodes": [],
                              },
                              {
                                "type": "SPAN",
                                "attributes": [],
                                "childNodes": [
                                  {
                                    "type": "#text",
                                    "text": "Persistent data",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        "type": "DIV",
                        "attributes": [
                          {
                            "data-type": "com.idc.ui.core.tab.content",
                          },
                          {
                            "data-instance": "log",
                          },
                        ],
                        "childNodes": [
                          {
                            "type": "TEXTAREA",
                            "attributes": [],
                            "childNodes": [],
                          },
                        ],
                      },
                      {
                        "type": "DIV",
                        "attributes": [
                          {
                            "data-type": "com.idc.ui.core.tab.content",
                          },
                          {
                            "data-instance": "params",
                          },
                        ],
                        "childNodes": [
                          {
                            "type": "TEXTAREA",
                            "attributes": [],
                            "childNodes": [],
                          },
                        ],
                      },
                      {
                        "type": "DIV",
                        "attributes": [
                          {
                            "data-type": "com.idc.ui.core.tab.content",
                          },
                          {
                            "data-instance": "vars",
                          },
                        ],
                        "childNodes": [
                          {
                            "type": "TEXTAREA",
                            "attributes": [],
                            "childNodes": [],
                          },
                        ],
                      },
                      {
                        "type": "DIV",
                        "attributes": [
                          {
                            "data-type": "com.idc.ui.core.tab.content",
                          },
                          {
                            "data-instance": "persistentData",
                          },
                        ],
                        "childNodes": [
                          {
                            "type": "TEXTAREA",
                            "attributes": [],
                            "childNodes": [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                "type": "DIV",
                "attributes": [
                  {
                    "data-type": "com.idc.ui.inspector.bottom",
                  },
                ],
                "childNodes": [
                  {
                    "type": "DIV",
                    "attributes": [
                      {
                        "data-type": "com.idc.ui.inspector.copyToCliboard",
                      },
                    ],
                    "childNodes": [
                      {
                        "type": "I",
                        "attributes": [
                          {
                            "class": "gg-copy",
                          },
                        ],
                        "childNodes": [],
                      },
                      {
                        "type": "SPAN",
                        "attributes": [
                          {
                            "data-type": "com.idc.ui.inspector.copyToCliboard.label",
                          },
                        ],
                        "childNodes": [
                          {
                            "type": "#text",
                            "text": "Copy to clipboard",
                          },
                        ],
                      },
                      {
                        "type": "SPAN",
                        "attributes": [
                          {
                            "data-type": "com.idc.ui.inspector.copyToCliboard.copied",
                          },
                        ],
                        "childNodes": [
                          {
                            "type": "#text",
                            "text": " > copied to clipboard",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    "type": "DIV",
                    "attributes": [
                      {
                        "data-type": "com.idc.ui.inspector.execute",
                      },
                    ],
                    "childNodes": [
                      {
                        "type": "DIV",
                        "attributes": [
                          {
                            "data-type": "com.idc.ui.core.button",
                          },
                          {
                            "data-sub-type": "com.idc.ui.inspector.execute.button",
                          },
                        ],
                        "childNodes": [
                          {
                            "type": "#text",
                            "text": "EXECUTE",
                          },
                        ],
                      },
                      {
                        "type": "INPUT",
                        "attributes": [
                          {
                            "type": "text",
                          },
                          {
                            "data-type": "com.idc.ui.inspector.execute.input",
                          },
                        ],
                        "childNodes": [],
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
  "emailCart": {
    "emailButton": [
      {
        "type": "DIV",
        "attributes": [
          {
            "data-type": "com.idc.ui.core.button",
          },
          {
            "data-sub-type": "com.idc.ui.core.emailButton",
          },
        ],
        "childNodes": [],
      }
    ],
    "emailCartOpenButton": [
      {
        "type": "DIV",
        "attributes": [
          {
            "data-type": "com.idc.ui.core.button",
          },
          {
            "data-sub-type": "com.idc.ui.core.modal.openButton",
          },
        ],
        "childNodes": [
          {
            "type": "DIV",
            "attributes": [
              {
                "data-type": "com.idc.ui.emailCart.badge",
              },
            ],
            "childNodes": [],
          }
        ],
      }
    ],
    "modal": [
      [
        {
            "type": "DIV",
            "attributes": [
                {
                    "data-type": "com.idc.ui.core.modal.popUp"
                },
            ],
            "childNodes": [
                {
                    "type": "DIV",
                    "attributes": [
                        {
                            "data-type": "com.idc.ui.core.modal.contentArea"
                        }
                    ],
                    "childNodes": [
                        {
                            "type": "DIV",
                            "attributes": [
                                {
                                    "data-type": "com.idc.ui.emailCart.items"
                                }
                            ],
                            "childNodes": []
                        },
                        {
                            "type": "DIV",
                            "attributes": [
                                {
                                    "data-type": "com.idc.ui.emailCart.buttons"
                                }
                            ],
                            "childNodes": []
                        }
                    ]
                }
            ]
        }
      ]
    ],
    "buttons": {
      "cancel": [
        {
          "type": "DIV",
          "attributes": [
              {
                  "data-type": "com.idc.ui.core.button"
              },
              {
                  "data-sub-type": "com.idc.ui.emailCart.cancelButton"
              },
          ],
          "childNodes": []
        },
      ],
      "send": [
        {
          "type": "DIV",
          "attributes": [
              {
                  "data-type": "com.idc.ui.core.button"
              },
              {
                  "data-sub-type": "com.idc.ui.emailCart.sendButton"
              },
          ],
          "childNodes": []
        },
      ],
      "done": [
        {
          "type": "DIV",
          "attributes": [
              {
                  "data-type": "com.idc.ui.core.button"
              },
              {
                  "data-sub-type": "com.idc.ui.emailCart.doneButton"
              },
          ],
          "childNodes": []
        },
      ]
    },
    "itemTemplate": [
      {
        "type": "DIV",
        "attributes": [
            {
                "data-type": "com.idc.ui.emailCart.item"
            },
            {
                "data-item-id": ""
            },
            {
                "data-status": ""
            }
        ],
        "childNodes": [
            {
                "type": "DIV",
                "attributes": [
                    {
                        "data-type": "com.idc.ui.emailCart.thumb"
                    },
                    {
                        "data-item-id": ""
                    }
                ],
                "childNodes": [
                    {
                        "type": "IMG",
                        "attributes": []
                    }
                ]
            },
            {
                "type": "DIV",
                "attributes": [
                    {
                        "data-type": "com.idc.ui.emailCart.title"
                    },
                    {
                        "data-item-id": ""
                    }
                ],
                "childNodes": []
            },
            {
                "type": "DIV",
                "attributes": [
                    {
                        "data-type": "com.idc.ui.emailCart.checkbox"
                    },
                    {
                        "data-item-id": ""
                    }
                ]
            }
        ]
      }
    ]
  }
};
