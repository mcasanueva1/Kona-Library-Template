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
    "relatedCLMLink": [
        {
          "type": "DIV",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.relatedCLMLink",
            },
            {
              "data-target-clm": "",
            },
          ],
          "childNodes": [],
        }
    ],
    "websiteLink": [
        {
          "type": "A",
          "attributes": [
            {
              "data-type": "com.idc.ui.core.websiteLink",
            },
            {
              "data-target-website": "",
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
                },
                {
                  "type": "DIV",
                  "attributes": [
                      {
                          "data-type": "com.idc.ui.references.switch"
                      },
                      {
                          "data-view-state": ""
                      },
                      {
                          "data-selected": ""
                      }
                    ]
                }
            ]
        },
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
    "emailButton": [{
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
    }],
    "emailCartOpenButton": [{
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
        }
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
        ]
    }],
    "modalContent": [{
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
                "childNodes": [
                    {
                        "type": "DIV",
                        "attributes": [
                            {
                                "data-type": "com.idc.ui.emailCart.itemTemplate"
                            },
                            {
                                "data-item-id": ""
                            },
                            {
                                "data-status": "unChecked"
                            }
                        ],
                        "childNodes": []
                    }
                ]
            },
            {
            "type": "DIV",
            "attributes": [
                {
                    "data-type": "com.idc.ui.emailCart.buttons"
                }
            ],
            "childNodes": [
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
            }
            ]
            }
        ]
    }],
  },
  "interactionSummary": {
    "modalContent": [{
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
                      "data-type": "com.idc.ui.core.tab.cover"
                  },
                  {
                      "data-target-id": "interactionSummaryTab"
                  },
                  {
                      "data-ui-id": "precallCover"
                  },
                  {
                      "data-view-state": "active"
                  }
              ],
              "childNodes": [
                  {
                      "type": "DIV",
                      "attributes": [
                          {
                              "class": "background"
                          }
                      ],
                      "childNodes": [
                          {
                              "type": "DIV",
                              "attributes": [
                                  {
                                      "class": "text"
                                  }
                              ],
                              "childNodes": [
                                  {
                                      "type": "SPAN",
                                      "attributes": [
                                          {
                                              "data-label": "interactionSummary_title1"
                                          }
                                      ]
                                  },
                                  {
                                      "type": "BR",
                                      "attributes": []
                                  },
                                  {
                                      "type": "SPAN",
                                      "attributes": [
                                          {
                                              "data-ui-id": "hcpName"
                                          },
                                          {
                                              "class": "doctorName"
                                          }
                                      ]
                                  },
                                  {
                                      "type": "SPAN",
                                      "attributes": [
                                          {
                                              "data-label": "interactionSummary_title2"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ]
                  },
                  {
                      "type": "DIV",
                      "attributes": [
                          {
                              "data-type": "com.idc.ui.core.tab.buttons"
                          }
                      ],
                      "childNodes": [
                          {
                              "type": "DIV",
                              "attributes": [
                                  {
                                      "data-type": "com.idc.ui.core.button"
                                  },
                                  {
                                      "data-sub-type": "com.idc.ui.core.tab.button"
                                  },
                                  {
                                      "data-label": "tabBtn_previousInteractions"
                                  },
                                  {
                                      "data-instance": "previousInteractions"
                                  }
                              ],
                              "childNodes": [
                                  {
                                      "type": "#text",
                                      "text": "Previous interactions"
                                  }
                              ]
                          },
                          {
                              "type": "DIV",
                              "attributes": [
                                  {
                                      "data-type": "com.idc.ui.core.button"
                                  },
                                  {
                                      "data-sub-type": "com.idc.ui.core.tab.button"
                                  },
                                  {
                                      "data-label": "tabBtn_slides"
                                  },
                                  {
                                      "data-instance": "slides"
                                  }
                              ],
                              "childNodes": [
                                  {
                                      "type": "#text",
                                      "text": "Slides"
                                  }
                              ]
                          },
                          {
                              "type": "DIV",
                              "attributes": [
                                  {
                                      "data-type": "com.idc.ui.core.button"
                                  },
                                  {
                                      "data-sub-type": "com.idc.ui.core.tab.button"
                                  },
                                  {
                                      "data-label": "tabBtn_emails"
                                  },
                                  {
                                      "data-instance": "emails"
                                  }
                              ],
                              "childNodes": [
                                  {
                                      "type": "#text",
                                      "text": "Emails"
                                  }
                              ]
                          }
                      ]
                  }
              ]
          },
          {
              "type": "DIV",
              "attributes": [
                  {
                      "data-type": "com.idc.ui.backModal"
                  },
                  {
                      "data-back-modal-for": "interactionSummaryTab"
                  }
              ]
          },
          {
              "type": "DIV",
              "attributes": [
                  {
                      "data-type": "com.idc.ui.core.tab"
                  },
                  {
                      "id": "interactionSummaryTab"
                  },
                  {
                      "data-ui-id": "interactionSummaryTab"
                  },
                  {
                      "data-view-state": "hidden"
                  }
              ],
              "childNodes": [
                  {
                      "type": "DIV",
                      "attributes": [
                          {
                              "data-type": "com.idc.ui.core.tab.container"
                          }
                      ],
                      "childNodes": [
                          {
                              "type": "DIV",
                              "attributes": [
                                  {
                                      "class": "background"
                                  }
                              ],
                              "childNodes": [
                                  {
                                      "type": "DIV",
                                      "attributes": [
                                          {
                                              "class": "text"
                                          }
                                      ],
                                      "childNodes": [
                                          {
                                              "type": "SPAN",
                                              "attributes": [
                                                  {
                                                      "data-label": "interactionSummary_title1"
                                                  }
                                              ]
                                          },
                                          {
                                              "type": "SPAN",
                                              "attributes": [
                                                  {
                                                      "data-ui-id": "hcpName"
                                                  },
                                                  {
                                                      "class": "doctorName"
                                                  }
                                              ]
                                          },
                                          {
                                              "type": "SPAN",
                                              "attributes": [
                                                  {
                                                      "data-label": "interactionSummary_title2"
                                                  }
                                              ]
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "type": "DIV",
                              "attributes": [
                                  {
                                      "data-type": "com.idc.ui.core.tab.buttons"
                                  }
                              ],
                              "childNodes": [
                                  {
                                      "type": "DIV",
                                      "attributes": [
                                          {
                                              "data-type": "com.idc.ui.core.button"
                                          },
                                          {
                                              "data-sub-type": "com.idc.ui.core.tab.button"
                                          },
                                          {
                                              "data-label": "tabBtn_previousInteractions"
                                          },
                                          {
                                              "data-instance": "previousInteractions"
                                          }
                                      ]
                                  },
                                  {
                                      "type": "DIV",
                                      "attributes": [
                                          {
                                              "data-type": "com.idc.ui.core.button"
                                          },
                                          {
                                              "data-sub-type": "com.idc.ui.core.tab.button"
                                          },
                                          {
                                              "data-label": "tabBtn_slides"
                                          },
                                          {
                                              "data-instance": "slides"
                                          }
                                      ]
                                  },
                                  {
                                      "type": "DIV",
                                      "attributes": [
                                          {
                                              "data-type": "com.idc.ui.core.button"
                                          },
                                          {
                                              "data-sub-type": "com.idc.ui.core.tab.button"
                                          },
                                          {
                                              "data-label": "tabBtn_emails"
                                          },
                                          {
                                              "data-instance": "emails"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "type": "DIV",
                              "attributes": [
                                  {
                                      "data-type": "com.idc.ui.core.tab.contents"
                                  }
                              ],
                              "childNodes": [
                                  {
                                      "type": "DIV",
                                      "attributes": [
                                          {
                                              "data-type": "com.idc.ui.core.tab.content"
                                          },
                                          {
                                              "data-instance": "previousInteractions"
                                          }
                                      ],
                                      "childNodes": [
                                          {
                                              "type": "DIV",
                                              "attributes": [
                                                  {
                                                      "data-ui-id": "previousInteractions"
                                                  }
                                              ],
                                              "childNodes": [
                                                  {
                                                      "type": "DIV",
                                                      "attributes": [
                                                          {
                                                              "data-ui-id": "previousInteractions_options"
                                                          }
                                                      ],
                                                      "childNodes": [
                                                          {
                                                              "type": "DIV",
                                                              "attributes": [
                                                                  {
                                                                      "data-ui-id": "filters_wrapper"
                                                                  }
                                                              ],
                                                              "childNodes": [
                                                                  {
                                                                      "type": "DIV",
                                                                      "attributes": [
                                                                          {
                                                                              "data-ui-type": "filter"
                                                                          },
                                                                          {
                                                                              "data-view": "all"
                                                                          },
                                                                          {
                                                                              "data-view-state": "active"
                                                                          },
                                                                          {
                                                                              "data-label": "prevInt_filter_all"
                                                                          }
                                                                      ]
                                                                  },
                                                                  {
                                                                      "type": "DIV",
                                                                      "attributes": [
                                                                          {
                                                                              "data-ui-type": "filter"
                                                                          },
                                                                          {
                                                                              "data-view": "approvedEmail"
                                                                          },
                                                                          {
                                                                              "data-view-state": "!active"
                                                                          },
                                                                          {
                                                                              "data-label": "prevInt_filter_approvedEmail"
                                                                          }
                                                                      ]
                                                                  },
                                                                  {
                                                                      "type": "DIV",
                                                                      "attributes": [
                                                                          {
                                                                              "data-ui-type": "filter"
                                                                          },
                                                                          {
                                                                              "data-view": "inPerson"
                                                                          },
                                                                          {
                                                                              "data-view-state": "!active"
                                                                          },
                                                                          {
                                                                              "data-label": "prevInt_filter_inPerson"
                                                                          }
                                                                      ]
                                                                  },
                                                                  {
                                                                      "type": "DIV",
                                                                      "attributes": [
                                                                          {
                                                                              "data-ui-type": "filter"
                                                                          },
                                                                          {
                                                                              "data-view": "videoCall"
                                                                          },
                                                                          {
                                                                              "data-view-state": "!active"
                                                                          },
                                                                          {
                                                                              "data-label": "prevInt_filter_video"
                                                                          }
                                                                      ]
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "type": "DIV",
                                                      "attributes": [
                                                          {
                                                              "data-ui-id": "scroll"
                                                          }
                                                      ],
                                                      "childNodes": [
                                                          {
                                                              "type": "TABLE",
                                                              "attributes": [
                                                                  {
                                                                      "data-ui-id": "previousInteractionsTable"
                                                                  }
                                                              ],
                                                              "childNodes": [
                                                                  {
                                                                      "type": "TBODY",
                                                                      "attributes": [],
                                                                      "childNodes": [
                                                                          {
                                                                              "type": "TR",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-ui-type": "table-row-template"
                                                                                  },
                                                                                  {
                                                                                      "data-ui-subtype": "approvedEmail"
                                                                                  },
                                                                                  {
                                                                                      "data-view-state": "!active"
                                                                                  }
                                                                              ],
                                                                              "childNodes": [
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "more"
                                                                                          },
                                                                                          {
                                                                                              "class": "more"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-action"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "IMG",
                                                                                                      "attributes": [
                                                                                                          {
                                                                                                              "src": "../common/img/precall/iconMore.png"
                                                                                                          },
                                                                                                          {
                                                                                                              "alt": "more"
                                                                                                          },
                                                                                                          {
                                                                                                              "class": "iconMore"
                                                                                                          }
                                                                                                      ]
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "date"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-ui-subtype": "day"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__day__"
                                                                                                  }
                                                                                              ]
                                                                                          },
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-ui-subtype": "time"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__time__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "interactionType"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "prevInt_value_approvedEmail"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "contentName"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__template__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "status"
                                                                                          },
                                                                                          {
                                                                                              "colspan": "2"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-ui-subtype": "valueOpened"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "prevInt_value_opened"
                                                                                                  }
                                                                                              ]
                                                                                          },
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-ui-subtype": "valueNotOpened"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "prevInt_value_notOpened"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "TR",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-ui-type": "table-subrow-template"
                                                                                  },
                                                                                  {
                                                                                      "data-ui-subtype": "approvedEmail"
                                                                                  },
                                                                                  {
                                                                                      "class": "header"
                                                                                  },
                                                                                  {
                                                                                      "data-view-state": "!active"
                                                                                  }
                                                                              ],
                                                                              "childNodes": [
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "more"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "name"
                                                                                          },
                                                                                          {
                                                                                              "colspan": "2"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "prevInt_label_fragmentName"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "linksTo"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "prevInt_label_linksTo"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "timesClicked"
                                                                                          },
                                                                                          {
                                                                                              "colspan": "2"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "prevInt_label_timesClicked"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "TR",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-ui-type": "table-subrow-template"
                                                                                  },
                                                                                  {
                                                                                      "data-ui-subtype": "approvedEmail"
                                                                                  },
                                                                                  {
                                                                                      "data-view-state": "!active"
                                                                                  },
                                                                                  {
                                                                                      "class": "!last"
                                                                                  }
                                                                              ],
                                                                              "childNodes": [
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "more"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "name"
                                                                                          },
                                                                                          {
                                                                                              "colspan": "2"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__fragment__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "linksTo"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__piecelink__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "timesClicked"
                                                                                          },
                                                                                          {
                                                                                              "colspan": "2"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__clicks__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "TR",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-ui-type": "table-row-template"
                                                                                  },
                                                                                  {
                                                                                      "data-ui-subtype": "inPerson"
                                                                                  },
                                                                                  {
                                                                                      "data-view-state": "!active"
                                                                                  }
                                                                              ],
                                                                              "childNodes": [
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "more"
                                                                                          },
                                                                                          {
                                                                                              "class": "more"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-action"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "IMG",
                                                                                                      "attributes": [
                                                                                                          {
                                                                                                              "src": "../common/img/precall/iconMore.png"
                                                                                                          },
                                                                                                          {
                                                                                                              "alt": "more"
                                                                                                          },
                                                                                                          {
                                                                                                              "class": "iconMore"
                                                                                                          }
                                                                                                      ]
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "date"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-ui-subtype": "day"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__day__"
                                                                                                  }
                                                                                              ]
                                                                                          },
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-ui-subtype": "time"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__time__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "interactionType"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-ui-subtype": "valueInPerson"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "prevInt_value_inPerson"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "contentName"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "prevInt_value_IVA"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "status"
                                                                                          },
                                                                                          {
                                                                                              "colspan": "2"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "TR",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-ui-type": "table-subrow-template"
                                                                                  },
                                                                                  {
                                                                                      "data-ui-subtype": "inPerson"
                                                                                  },
                                                                                  {
                                                                                      "data-view-state": "!active"
                                                                                  },
                                                                                  {
                                                                                      "class": "header"
                                                                                  }
                                                                              ],
                                                                              "childNodes": [
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "more"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "order"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "prevInt_label_displayOrder"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "name"
                                                                                          },
                                                                                          {
                                                                                              "colspan": "2"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "prevInt_label_slideDescription"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "reaction"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "prevInt_label_reaction"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "duration"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "prevInt_label_duration"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "TR",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-ui-type": "table-subrow-template"
                                                                                  },
                                                                                  {
                                                                                      "data-ui-subtype": "inPerson"
                                                                                  },
                                                                                  {
                                                                                      "data-view-state": "!active"
                                                                                  },
                                                                                  {
                                                                                      "class": "!last"
                                                                                  }
                                                                              ],
                                                                              "childNodes": [
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "more"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "order"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "IMG",
                                                                                                      "attributes": [
                                                                                                          {
                                                                                                              "src": ""
                                                                                                          },
                                                                                                          {
                                                                                                              "alt": ""
                                                                                                          },
                                                                                                          {
                                                                                                              "class": "slide"
                                                                                                          }
                                                                                                      ]
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "name"
                                                                                          },
                                                                                          {
                                                                                              "colspan": "2"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__slidedescription__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "reaction"
                                                                                          },
                                                                                          {
                                                                                              "class": "reaction !positive !neutral !negative"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "class": "icon"
                                                                                                  }
                                                                                              ]
                                                                                          },
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "class": "text"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__reaction__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "duration"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__duration__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "TR",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-ui-type": "table-row-template"
                                                                                  },
                                                                                  {
                                                                                      "data-ui-subtype": "videoCall"
                                                                                  },
                                                                                  {
                                                                                      "data-view-state": "!active"
                                                                                  }
                                                                              ],
                                                                              "childNodes": [
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "more"
                                                                                          },
                                                                                          {
                                                                                              "class": "more"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-action"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "IMG",
                                                                                                      "attributes": [
                                                                                                          {
                                                                                                              "src": "../common/img/precall/iconMore.png"
                                                                                                          },
                                                                                                          {
                                                                                                              "alt": "more"
                                                                                                          },
                                                                                                          {
                                                                                                              "class": "iconMore"
                                                                                                          }
                                                                                                      ]
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "date"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-ui-subtype": "day"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__day__"
                                                                                                  }
                                                                                              ]
                                                                                          },
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-ui-subtype": "time"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__time__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "interactionType"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-ui-subtype": "valueVideo"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "prevInt_value_video"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "contentName"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "prevInt_value_IVA"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "status"
                                                                                          },
                                                                                          {
                                                                                              "colspan": "2"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "TR",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-ui-type": "table-subrow-template"
                                                                                  },
                                                                                  {
                                                                                      "data-ui-subtype": "videoCall"
                                                                                  },
                                                                                  {
                                                                                      "data-view-state": "!active"
                                                                                  },
                                                                                  {
                                                                                      "class": "header"
                                                                                  }
                                                                              ],
                                                                              "childNodes": [
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "more"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "order"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "prevInt_label_displayOrder"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "name"
                                                                                          },
                                                                                          {
                                                                                              "colspan": "2"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "prevInt_label_slideDescription"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "reaction"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "prevInt_label_reaction"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "duration"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "prevInt_label_duration"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "TR",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-ui-type": "table-subrow-template"
                                                                                  },
                                                                                  {
                                                                                      "data-ui-subtype": "videoCall"
                                                                                  },
                                                                                  {
                                                                                      "data-view-state": "!active"
                                                                                  },
                                                                                  {
                                                                                      "class": "!last"
                                                                                  }
                                                                              ],
                                                                              "childNodes": [
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "more"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "order"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "IMG",
                                                                                                      "attributes": [
                                                                                                          {
                                                                                                              "src": ""
                                                                                                          },
                                                                                                          {
                                                                                                              "alt": ""
                                                                                                          },
                                                                                                          {
                                                                                                              "class": "slide"
                                                                                                          }
                                                                                                      ]
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "name"
                                                                                          },
                                                                                          {
                                                                                              "colspan": "2"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__slidedescription__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "reaction"
                                                                                          },
                                                                                          {
                                                                                              "class": "reaction !positive !neutral !negative"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "class": "icon"
                                                                                                  }
                                                                                              ]
                                                                                          },
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "class": "text"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__reaction__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "duration"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__duration__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "TR",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-ui-type": "table-row-template"
                                                                                  },
                                                                                  {
                                                                                      "data-ui-subtype": "blank"
                                                                                  },
                                                                                  {
                                                                                      "data-view-state": "!active"
                                                                                  }
                                                                              ],
                                                                              "childNodes": [
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "more"
                                                                                          },
                                                                                          {
                                                                                              "class": "more"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "date"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "interactionType"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "contentName"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "status"
                                                                                          },
                                                                                          {
                                                                                              "colspan": "2"
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                          }
                                                                      ]
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "type": "DIV",
                                      "attributes": [
                                          {
                                              "data-type": "com.idc.ui.core.tab.content"
                                          },
                                          {
                                              "data-instance": "slides"
                                          }
                                      ],
                                      "childNodes": [
                                          {
                                              "type": "DIV",
                                              "attributes": [
                                                  {
                                                      "data-ui-id": "slides"
                                                  }
                                              ],
                                              "childNodes": [
                                                  {
                                                      "type": "DIV",
                                                      "attributes": [
                                                          {
                                                              "data-ui-id": "slides_options"
                                                          }
                                                      ],
                                                      "childNodes": [
                                                          {
                                                              "type": "DIV",
                                                              "attributes": [
                                                                  {
                                                                      "data-ui-id": "filters_wrapper"
                                                                  }
                                                              ],
                                                              "childNodes": [
                                                                  {
                                                                      "type": "DIV",
                                                                      "attributes": [
                                                                          {
                                                                              "data-ui-type": "filter"
                                                                          },
                                                                          {
                                                                              "data-view": "all"
                                                                          },
                                                                          {
                                                                              "data-view-state": "active"
                                                                          },
                                                                          {
                                                                              "data-label": "slides_filter_all"
                                                                          }
                                                                      ]
                                                                  },
                                                                  {
                                                                      "type": "DIV",
                                                                      "attributes": [
                                                                          {
                                                                              "data-ui-type": "filter"
                                                                          },
                                                                          {
                                                                              "data-view": "discussed"
                                                                          },
                                                                          {
                                                                              "data-view-state": "!active"
                                                                          },
                                                                          {
                                                                              "data-label": "slides_filter_discussed"
                                                                          }
                                                                      ]
                                                                  },
                                                                  {
                                                                      "type": "DIV",
                                                                      "attributes": [
                                                                          {
                                                                              "data-ui-type": "filter"
                                                                          },
                                                                          {
                                                                              "data-view": "notDiscussed"
                                                                          },
                                                                          {
                                                                              "data-view-state": "!active"
                                                                          },
                                                                          {
                                                                              "data-label": "slides_filter_notDiscussed"
                                                                          }
                                                                      ]
                                                                  },
                                                                  {
                                                                      "type": "DIV",
                                                                      "attributes": [
                                                                          {
                                                                              "data-ui-type": "filter"
                                                                          },
                                                                          {
                                                                              "data-view": "recommended"
                                                                          },
                                                                          {
                                                                              "data-view-state": "hidden"
                                                                          },
                                                                          {
                                                                              "data-label": "slides_filter_recommended"
                                                                          }
                                                                      ]
                                                                  }
                                                              ]
                                                          },
                                                          {
                                                              "type": "DIV",
                                                              "attributes": [
                                                                  {
                                                                      "data-ui-id": "sort_wrapper"
                                                                  }
                                                              ],
                                                              "childNodes": [
                                                                  {
                                                                      "type": "DIV",
                                                                      "attributes": [
                                                                          {
                                                                              "data-type": "com.idc.ui.core.button"
                                                                          },
                                                                          {
                                                                              "data-sub-type": "com.idc.ui.core.modal.dualButton"
                                                                          },
                                                                          {
                                                                              "data-target-id": "interactionSummary_slidesSort"
                                                                          },
                                                                          {
                                                                              "id": "interactionSummary_slidesSort_open"
                                                                          },
                                                                          {
                                                                              "data-ui-id": "slides_sort_modal_open"
                                                                          },
                                                                          {
                                                                              "data-view-state": "disabled"
                                                                          }
                                                                      ],
                                                                      "childNodes": [
                                                                          {
                                                                              "type": "SPAN",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-sort": "default"
                                                                                  },
                                                                                  {
                                                                                      "data-view-state": "active"
                                                                                  },
                                                                                  {
                                                                                      "data-label": "slides_sort_default"
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "SPAN",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-sort": "mostRecentlyDiscussed"
                                                                                  },
                                                                                  {
                                                                                      "data-view-state": "!active"
                                                                                  },
                                                                                  {
                                                                                      "data-label": "slides_sort_mostRecentlyDiscussed"
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "SPAN",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-sort": "moreTimeSpentOn"
                                                                                  },
                                                                                  {
                                                                                      "data-view-state": "!active"
                                                                                  },
                                                                                  {
                                                                                      "data-label": "slides_sort_moreTimeSpentOn"
                                                                                  }
                                                                              ]
                                                                          }
                                                                      ]
                                                                  }
                                                              ]
                                                          },
                                                          {
                                                              "type": "DIV",
                                                              "attributes": [
                                                                  {
                                                                      "data-ui-id": "launchNextBestContent"
                                                                  },
                                                                  {
                                                                      "data-view-state": "hidden"
                                                                  },
                                                                  {
                                                                      "data-label": "slides_launch_nextBestContent"
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "type": "DIV",
                                                      "attributes": [
                                                          {
                                                              "data-type": "com.idc.ui.backModal"
                                                          },
                                                          {
                                                              "back-modal-for": "interactionSummary_slidesSort"
                                                          },
                                                          {
                                                              "class": "transparentBackground"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "type": "DIV",
                                                      "attributes": [
                                                          {
                                                              "data-type": "com.idc.ui.core.modal.modalObject"
                                                          },
                                                          {
                                                              "data-options": "backModalStyle=transparentBackground"
                                                          },
                                                          {
                                                              "id": "interactionSummary_slidesSort"
                                                          },
                                                          {
                                                              "data-ui-id": "slides_sort_modal"
                                                          }
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
                                                                              "data-type": "sortOption"
                                                                          },
                                                                          {
                                                                              "data-sort": "default"
                                                                          },
                                                                          {
                                                                              "data-label": "slides_sort_default"
                                                                          }
                                                                      ]
                                                                  },
                                                                  {
                                                                      "type": "DIV",
                                                                      "attributes": [
                                                                          {
                                                                              "data-type": "sortOption"
                                                                          },
                                                                          {
                                                                              "data-sort": "mostRecentlyDiscussed"
                                                                          },
                                                                          {
                                                                              "data-label": "slides_sort_mostRecentlyDiscussed"
                                                                          }
                                                                      ]
                                                                  },
                                                                  {
                                                                      "type": "DIV",
                                                                      "attributes": [
                                                                          {
                                                                              "data-type": "sortOption"
                                                                          },
                                                                          {
                                                                              "data-sort": "moreTimeSpentOn"
                                                                          },
                                                                          {
                                                                              "data-label": "slides_sort_moreTimeSpentOn"
                                                                          }
                                                                      ]
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "type": "DIV",
                                                      "attributes": [
                                                          {
                                                              "data-ui-id": "scroll"
                                                          }
                                                      ],
                                                      "childNodes": [
                                                          {
                                                              "type": "DIV",
                                                              "attributes": [
                                                                  {
                                                                      "data-ui-id": "slides_contents"
                                                                  }
                                                              ],
                                                              "childNodes": [
                                                                  {
                                                                      "type": "DIV",
                                                                      "attributes": [
                                                                          {
                                                                              "data-type": "slides_content_template"
                                                                          }
                                                                      ],
                                                                      "childNodes": [
                                                                          {
                                                                              "type": "DIV",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-type": "slides_content_thumbnail"
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
                                                                                      "data-type": "slides_content_name"
                                                                                  }
                                                                              ],
                                                                              "childNodes": [
                                                                                  {
                                                                                      "type": "SPAN",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "value"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "#text",
                                                                                              "text": "__name__"
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "DIV",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-type": "slides_content_lastViewDate"
                                                                                  }
                                                                              ],
                                                                              "childNodes": [
                                                                                  {
                                                                                      "type": "SPAN",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "title"
                                                                                          },
                                                                                          {
                                                                                              "data-label": "slides_label_lastView"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "SPAN",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "value"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "#text",
                                                                                              "text": "__date and time__"
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "DIV",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-type": "slides_content_reaction"
                                                                                  }
                                                                              ],
                                                                              "childNodes": [
                                                                                  {
                                                                                      "type": "SPAN",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "title"
                                                                                          },
                                                                                          {
                                                                                              "data-label": "slides_label_reaction"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "SPAN",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "value"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "#text",
                                                                                              "text": "__reaction__"
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "DIV",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-type": "slides_content_duration"
                                                                                  }
                                                                              ],
                                                                              "childNodes": [
                                                                                  {
                                                                                      "type": "SPAN",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "title"
                                                                                          },
                                                                                          {
                                                                                              "data-label": "slides_label_duration"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "SPAN",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "value"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "#text",
                                                                                              "text": "__duration__"
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "DIV",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-type": "slides_content_totalViews"
                                                                                  }
                                                                              ],
                                                                              "childNodes": [
                                                                                  {
                                                                                      "type": "SPAN",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "title"
                                                                                          },
                                                                                          {
                                                                                              "data-label": "slides_label_totalViews"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "SPAN",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "value"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "#text",
                                                                                              "text": "__total views__"
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                          }
                                                                      ]
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "type": "DIV",
                                      "attributes": [
                                          {
                                              "data-type": "com.idc.ui.core.tab.content"
                                          },
                                          {
                                              "data-instance": "emails"
                                          }
                                      ],
                                      "childNodes": [
                                          {
                                              "type": "DIV",
                                              "attributes": [
                                                  {
                                                      "data-ui-id": "emails"
                                                  }
                                              ],
                                              "childNodes": [
                                                  {
                                                      "type": "DIV",
                                                      "attributes": [
                                                          {
                                                              "data-ui-id": "emails_options"
                                                          }
                                                      ],
                                                      "childNodes": [
                                                          {
                                                              "type": "DIV",
                                                              "attributes": [
                                                                  {
                                                                      "data-ui-id": "sort_wrapper"
                                                                  }
                                                              ],
                                                              "childNodes": [
                                                                  {
                                                                      "type": "DIV",
                                                                      "attributes": [
                                                                          {
                                                                              "data-type": "com.idc.ui.core.button"
                                                                          },
                                                                          {
                                                                              "data-sub-type": "com.idc.ui.core.modal.dualButton"
                                                                          },
                                                                          {
                                                                              "data-target-id": "interactionSummary_emailsSort"
                                                                          },
                                                                          {
                                                                              "id": "interactionSummary_emailsSort_open"
                                                                          },
                                                                          {
                                                                              "data-ui-id": "emails_sort_modal_open"
                                                                          }
                                                                      ],
                                                                      "childNodes": [
                                                                          {
                                                                              "type": "SPAN",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-sort": "default"
                                                                                  },
                                                                                  {
                                                                                      "data-view-state": "active"
                                                                                  },
                                                                                  {
                                                                                      "data-label": "emails_sort_default"
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "SPAN",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-sort": "mostRecentlySent"
                                                                                  },
                                                                                  {
                                                                                      "data-view-state": "!active"
                                                                                  },
                                                                                  {
                                                                                      "data-label": "emails_sort_mostRecentlySent"
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "SPAN",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-sort": "moreOpens"
                                                                                  },
                                                                                  {
                                                                                      "data-view-state": "!active"
                                                                                  },
                                                                                  {
                                                                                      "data-label": "emails_sort_moreOpens"
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "SPAN",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-sort": "moreClicks"
                                                                                  },
                                                                                  {
                                                                                      "data-view-state": "!active"
                                                                                  },
                                                                                  {
                                                                                      "data-label": "emails_sort_moreClicks"
                                                                                  }
                                                                              ]
                                                                          }
                                                                      ]
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "type": "DIV",
                                                      "attributes": [
                                                          {
                                                              "data-type": "com.idc.ui.backModal"
                                                          },
                                                          {
                                                              "back-modal-for": "interactionSummary_emailsSort"
                                                          },
                                                          {
                                                              "class": "transparentBackground"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "type": "DIV",
                                                      "attributes": [
                                                          {
                                                              "data-type": "com.idc.ui.core.modal.modalObject"
                                                          },
                                                          {
                                                              "data-options": "backModalStyle=transparentBackground"
                                                          },
                                                          {
                                                              "id": "interactionSummary_emailsSort"
                                                          },
                                                          {
                                                              "data-ui-id": "emails_sort_modal"
                                                          }
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
                                                                              "data-type": "sortOption"
                                                                          },
                                                                          {
                                                                              "data-sort": "default"
                                                                          },
                                                                          {
                                                                              "data-label": "emails_sort_default"
                                                                          }
                                                                      ]
                                                                  },
                                                                  {
                                                                      "type": "DIV",
                                                                      "attributes": [
                                                                          {
                                                                              "data-type": "sortOption"
                                                                          },
                                                                          {
                                                                              "data-sort": "mostRecentlySent"
                                                                          },
                                                                          {
                                                                              "data-label": "emails_sort_mostRecentlySent"
                                                                          }
                                                                      ]
                                                                  },
                                                                  {
                                                                      "type": "DIV",
                                                                      "attributes": [
                                                                          {
                                                                              "data-type": "sortOption"
                                                                          },
                                                                          {
                                                                              "data-sort": "moreOpens"
                                                                          },
                                                                          {
                                                                              "data-label": "emails_sort_moreOpens"
                                                                          }
                                                                      ]
                                                                  },
                                                                  {
                                                                      "type": "DIV",
                                                                      "attributes": [
                                                                          {
                                                                              "data-type": "sortOption"
                                                                          },
                                                                          {
                                                                              "data-sort": "moreClicks"
                                                                          },
                                                                          {
                                                                              "data-label": "emails_sort_moreClicks"
                                                                          }
                                                                      ]
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "type": "DIV",
                                                      "attributes": [
                                                          {
                                                              "data-ui-id": "scroll"
                                                          }
                                                      ],
                                                      "childNodes": [
                                                          {
                                                              "type": "TABLE",
                                                              "attributes": [
                                                                  {
                                                                      "data-ui-id": "emailsTable"
                                                                  },
                                                                  {
                                                                      "data-ui-type": "table"
                                                                  }
                                                              ],
                                                              "childNodes": [
                                                                  {
                                                                      "type": "THEAD",
                                                                      "attributes": [],
                                                                      "childNodes": [
                                                                          {
                                                                              "type": "TR",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-ui-type": "table-header-row"
                                                                                  }
                                                                              ],
                                                                              "childNodes": [
                                                                                  {
                                                                                      "type": "TH",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-header-column"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "email"
                                                                                          },
                                                                                          {
                                                                                              "rowspan": "2"
                                                                                          },
                                                                                          {
                                                                                              "colspan": "2"
                                                                                          },
                                                                                          {
                                                                                              "data-label": "emails_label_expandAll"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TH",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-header-column"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "lastDate"
                                                                                          },
                                                                                          {
                                                                                              "colspan": "3"
                                                                                          },
                                                                                          {
                                                                                              "data-label": "emails_label_lastTime"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TH",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-header-column"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "allDates"
                                                                                          },
                                                                                          {
                                                                                              "colspan": "3"
                                                                                          },
                                                                                          {
                                                                                              "data-label": "emails_label_allTimes"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "TR",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-ui-type": "table-header-row"
                                                                                  }
                                                                              ],
                                                                              "childNodes": [
                                                                                  {
                                                                                      "type": "TH",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-header-column"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "lastTimeSent_date"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "emails_label_date"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TH",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-header-column"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "lastTimeSent_open"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "emails_label_opened"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TH",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-header-column"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "lastTimeSent_click"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "emails_label_clicked"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TH",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-header-column"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "allTimes_sent"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "emails_label_sent"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TH",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-header-column"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "allTimes_open"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "emails_label_opened"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TH",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-header-column"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "allTimes_click"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "emails_label_clicked"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                          }
                                                                      ]
                                                                  },
                                                                  {
                                                                      "type": "TBODY",
                                                                      "attributes": [],
                                                                      "childNodes": [
                                                                          {
                                                                              "type": "TR",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-ui-type": "table-row-template"
                                                                                  },
                                                                                  {
                                                                                      "data-ui-subtype": "approvedEmail"
                                                                                  },
                                                                                  {
                                                                                      "data-view-state": "!active"
                                                                                  }
                                                                              ],
                                                                              "childNodes": [
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "more"
                                                                                          },
                                                                                          {
                                                                                              "class": "more"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-action"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "IMG",
                                                                                                      "attributes": [
                                                                                                          {
                                                                                                              "src": "../common/img/precall/iconMore.png"
                                                                                                          },
                                                                                                          {
                                                                                                              "alt": "more"
                                                                                                          },
                                                                                                          {
                                                                                                              "class": "iconMore"
                                                                                                          }
                                                                                                      ]
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "email"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-ui-subtype": "thumbnail"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "IMG",
                                                                                                      "attributes": [
                                                                                                          {
                                                                                                              "class": "ae"
                                                                                                          }
                                                                                                      ]
                                                                                                  }
                                                                                              ]
                                                                                          },
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-ui-subtype": "name"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__template name__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "lastTimeSent_date"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-ui-subtype": "day"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__date__"
                                                                                                  }
                                                                                              ]
                                                                                          },
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-ui-subtype": "time"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__time__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "lastTimeSent_open"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-ui-subtype": "valueYes"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "emails_value_yes"
                                                                                                  }
                                                                                              ]
                                                                                          },
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-ui-subtype": "valueNo"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "emails_value_no"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "lastTimeSent_click"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__click__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "allTimes_sent"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__sent__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "allTimes_open"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__open__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "allTimes_click"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-row-cell-value"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__clicks__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "TR",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-ui-type": "table-subrow-template"
                                                                                  },
                                                                                  {
                                                                                      "data-ui-subtype": "approvedEmail"
                                                                                  },
                                                                                  {
                                                                                      "data-view-state": "!active"
                                                                                  },
                                                                                  {
                                                                                      "class": "!last"
                                                                                  }
                                                                              ],
                                                                              "childNodes": [
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "more"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "email"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-label"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-ui-subtype": "fragmentLabel"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-label": "emails_value_fragment"
                                                                                                  }
                                                                                              ]
                                                                                          },
                                                                                          {
                                                                                              "type": "BR",
                                                                                              "attributes": []
                                                                                          },
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__name__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "lastTimeSent_date"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-ui-subtype": "day"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__date__"
                                                                                                  }
                                                                                              ]
                                                                                          },
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  },
                                                                                                  {
                                                                                                      "data-ui-subtype": "time"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__time__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "lastTimeSent_open"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "lastTimeSent_click"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__click__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "allTimes_sent"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__sent__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "allTimes_open"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-subrow-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "allTimes_click"
                                                                                          }
                                                                                      ],
                                                                                      "childNodes": [
                                                                                          {
                                                                                              "type": "SPAN",
                                                                                              "attributes": [
                                                                                                  {
                                                                                                      "data-ui-type": "table-subrow-cell-value"
                                                                                                  }
                                                                                              ],
                                                                                              "childNodes": [
                                                                                                  {
                                                                                                      "type": "#text",
                                                                                                      "text": "__clicks__"
                                                                                                  }
                                                                                              ]
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                          },
                                                                          {
                                                                              "type": "TR",
                                                                              "attributes": [
                                                                                  {
                                                                                      "data-ui-type": "table-row-template"
                                                                                  },
                                                                                  {
                                                                                      "data-ui-subtype": "blank"
                                                                                  },
                                                                                  {
                                                                                      "data-view-state": "!active"
                                                                                  }
                                                                              ],
                                                                              "childNodes": [
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "more"
                                                                                          },
                                                                                          {
                                                                                              "class": "more"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "email"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "lastTimeSent_date"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "lastTimeSent_open"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "lastTimeSent_click"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "allTimes_sent"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "allTimes_open"
                                                                                          }
                                                                                      ]
                                                                                  },
                                                                                  {
                                                                                      "type": "TD",
                                                                                      "attributes": [
                                                                                          {
                                                                                              "data-ui-type": "table-row-cell"
                                                                                          },
                                                                                          {
                                                                                              "data-column-id": "allTimes_click"
                                                                                          }
                                                                                      ]
                                                                                  }
                                                                              ]
                                                                          }
                                                                      ]
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  }
                                              ]
                                          }
                                      ]
                                  }
                              ]
                          }
                      ]
                  }
              ]
          }
      ]
    }]
  }
};
