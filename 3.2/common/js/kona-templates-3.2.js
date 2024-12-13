if (com == null) var com = {};
if (com.idc == undefined) com.idc = {};

com.idc.templates = {
  "core": {
    "animation": [
      {
        "type": "DIV",
        "attributes": [
          {
            "data-type": "com.idc.core.animation",
          },
          {
            "data-animation-type": "",
          },
          {
            "data-animation-subtype": "",
          },
          {
            "data-animation-delay": "",
          },
        ],
        "childNodes": [],
      }
    ],
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
      "dualButton": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.button",
            },
            {
              "data-sub-type": "com.idc.ui.core.modal.dualButton",
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
      "standalone": {
        "contentArea": [
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
        "arrows": {
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
        "paginator": [
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
        "groupSlides": [
          {
            "type": "DIV",
            "attributes": [
              {
                "data-type": "com.idc.ui.core.modal.groupSlides",
              },
            ],
            "childNodes": [
              {
                "type": "DIV",
                "attributes": [
                    {
                        "data-type": "com.idc.ui.core.modal.groupSlides.item"
                    },
                ],
                "childNodes": [
                    {
                        "type": "DIV",
                        "attributes": [
                            {
                                "data-type": "com.idc.ui.core.modal.groupSlides.item.thumb"
                            },
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
                                "data-type": "com.idc.ui.core.modal.groupSlides.item.label"
                            }
                        ],
                        "childNodes": []
                    }
                ]
              }
            ],
          },
        ]
      }
    },
    "multi": {
      "container": [
        {
        "type": "DIV",
        "attributes": [
          {
            "data-type": "com.idc.ui.core.multi.container",
          },
        ],
        "childNodes": [],
        }
      ],
      "contents": [
        {
        "type": "DIV",
        "attributes": [
          {
            "data-type": "com.idc.ui.core.multi.contents",
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
              "data-type": "com.idc.ui.core.multi.content",
            },
          ],
          "childNodes": [],
          }
      ],
      "prevButton": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.button",
            },
            {
              "data-sub-type": "com.idc.ui.core.multi.prevButton",
            },
          ],
          "childNodes": [],
          }
      ],
      "nextButton": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.button",
            },
            {
              "data-sub-type": "com.idc.ui.core.multi.nextButton",
            },
          ],
          "childNodes": [],
          }
      ],
    },
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
    },  
    "references": {
      "modalContent": [
        {
            "type": "DIV",
            "attributes": [
                {
                    "data-type": "com.idc.ui.references"
                }
            ],
            "childNodes": [
                {
                    "type": "DIV",
                    "attributes": [
                        {
                            "data-type": "com.idc.ui.core.scroll.container"
                        },
                        {
                            "data-scroll-direction": "vertical"
                        }
                    ],
                    "childNodes": [
                        {
                            "type": "DIV",
                            "attributes": [
                                {
                                    "data-type": "com.idc.ui.core.scroll.content"
                                }
                            ],
                            "childNodes": [
                                {
                                    "type": "DIV",
                                    "attributes": [
                                        {
                                            "data-type": "com.idc.ui.references.landscapeView"
                                        }
                                    ]
                                },
                                {
                                    "type": "DIV",
                                    "attributes": [
                                        {
                                            "data-type": "com.idc.ui.references.portraitView"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
      ],
      "switch": [
        {
          "type": "DIV",
          "attributes": [
              {
                  "data-type": "com.idc.ui.references.switch"
              },
              {
                  "data-view-state": "active"
              },
              {
                  "data-selected": "slide"
              }
            ]
        }
      ]
    }, 
    "tab": {
      "container": [
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
              ],
            },
          ],
        },
      ],
      "cover": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.tab.cover",
            },
          ],
          "childNodes": [],
        },
      ],
      "coverButtons": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.tab.buttons",
            },
          ],
          "childNodes": [],
        },
      ],
      "buttons": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.tab.buttons",
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
            "data-sub-type": "com.idc.ui.core.tab.button",
          },
          {
            "data-instance": "",
          },
        ],
        "childNodes": [],
        }
      ],
      "contents": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.tab.contents",
            },
          ],
          "childNodes": [
          ],
        },
      ],
      "content": [
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
      ]
    },
    "utilitiesMenu": {
      "container": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.utilitiesMenu"
            }
          ],
          "childNodes": [
            {
              "type": "DIV",
              "attributes": [
                {
                  "data-type": "com.idc.ui.utilitiesMenu.container"
                },
                {
                  "data-sub-type": "com.idc.ui.utilitiesMenu.container.center"
                }
              ]
            },
            {
              "type": "DIV",
              "attributes": [
                {
                  "data-type": "com.idc.ui.utilitiesMenu.container"
                },
                {
                  "data-sub-type": "com.idc.ui.utilitiesMenu.container.right"
                }
              ]
            },
            {
              "type": "DIV",
              "attributes": [
                {
                  "data-type": "com.idc.ui.utilitiesMenu.items"
                }
              ],
              "childNodes": [
                {
                  "type": "DIV",
                  "attributes": [
                    {
                      "data-type": "com.idc.ui.utilitiesMenu.placeholder"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "separator": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.utilitiesMenu.separator"
            }
          ]
        }
      ]
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
                            "data-type": "com.idc.ui.core.tab.contents",
                          },
                        ],
                        "childNodes": [
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
    "modalContent": [
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
                "data-status": "unChecked"
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
    ],
    "simplifiedItemTemplate": [
      {
        "type": "DIV",
        "attributes": [
            {
                "data-type": "com.idc.ui.emailCart.item"
            },
            {
              "data-sub-type": "com.idc.ui.emailCart.simplifiedItem"
            },
            {
                "data-item-id": ""
            },
            {
                "data-status": "unChecked"
            }
        ],
        "childNodes": [
        ]
      }
    ],
  }
};
