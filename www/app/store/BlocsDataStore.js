/*
 * File: app/store/BlocsDataStore.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Rubedo.store.BlocsDataStore', {
    extend: 'Ext.data.Store',
    alias: 'store.BlocsDataStore',

    requires: [
        'Rubedo.model.blocDataModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'BlocsDataStore',
            model: 'Rubedo.model.blocDataModel',
            data: [
                {
                    type: 'Média externe',
                    description: '<h2>Bloc Média externe<\/h2> ',
                    configBasique: {
                        title: 'Média externe',
                        bType: 'Média externe',
                        flex: 1,
                        champsConfig: {
                            simple: [
                                {
                                    categorie: 'Configuration',
                                    champs: [
                                        {
                                            type: 'Ext.form.field.Text',
                                            config: {
                                                fieldLabel: 'URL',
                                                name: 'url',
                                                vtype: 'url'
                                            }
                                        },
                                        {
                                            type: 'Ext.form.field.Number',
                                            config: {
                                                fieldLabel: 'Largeur max',
                                                name: 'maxWidth',
                                                allowDecimals: false,
                                                minValue: 0
                                            }
                                        },
                                        {
                                            type: 'Ext.form.field.Number',
                                            config: {
                                                fieldLabel: 'Hauteur max',
                                                name: 'maxHeight',
                                                allowDecimals: false,
                                                minValue: 0
                                            }
                                        }
                                    ],
                                    
                                }
                            ],
                            avance: [
                                
                            ]
                        },
                        configBloc: {
                            
                        }
                    },
                    version: 1,
                    lastUpdateUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    createUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    id: '50f81083c0e0514e10000005'
                },
                {
                    type: 'Controleur Zend',
                    description: '<h2>Bloc Controleur Zend<\/h2> ',
                    configBasique: {
                        title: 'Controleur Zend',
                        bType: 'Controleur Zend',
                        flex: 1,
                        champsConfig: {
                            simple: [
                                {
                                    categorie: 'Configuration',
                                    champs: [
                                        {
                                            type: 'Ext.form.field.Text',
                                            config: {
                                                fieldLabel: 'Module',
                                                name: 'module'
                                            }
                                        },
                                        {
                                            type: 'Ext.form.field.Text',
                                            config: {
                                                fieldLabel: 'Controleur',
                                                name: 'controller'
                                            }
                                        },
                                        {
                                            type: 'Ext.form.field.Text',
                                            config: {
                                                fieldLabel: 'Action',
                                                name: 'action'
                                            }
                                        },
                                        {
                                            type: 'Ext.form.field.TextArea',
                                            config: {
                                                fieldLabel: 'Options',
                                                name: 'options'
                                            }
                                        },
                                        
                                    ],
                                    
                                }
                            ],
                            avance: [
                                
                            ]
                        },
                        configBloc: {
                            
                        }
                    },
                    version: 1,
                    lastUpdateUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    createUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    id: '50f694edc0e051280d000001'
                },
                {
                    type: 'Gallerie Flickr',
                    description: '<h2>Bloc Gallerie Flickr<\/h2> <\/br><p>Ce bloc affiche des images hébergées sur Flickr.<\/p>',
                    configBasique: {
                        title: 'Gallerie Flickr',
                        bType: 'Gallerie Flickr',
                        flex: 1,
                        champsConfig: {
                            simple: [
                                {
                                    categorie: 'Source',
                                    champs: [
                                        {
                                            type: 'Ext.form.field.Text',
                                            config: {
                                                fieldLabel: 'Utilisateur',
                                                name: 'user'
                                            }
                                        },
                                        {
                                            type: 'Ext.ux.form.field.BoxSelect',
                                            config: {
                                                fieldLabel: 'Tags',
                                                name: 'tags',
                                                store: [
                                                    
                                                ],
                                                multiSelect: true,
                                                forceSelection: false,
                                                createNewOnEnter: true,
                                                createNewOnBlur: true,
                                                hideTrigger: true,
                                                triggerOnClick: false,
                                                pinList: false
                                            }
                                        },
                                        {
                                            type: 'Ext.form.field.ComboBox',
                                            config: {
                                                fieldLabel: 'Règle sur tags',
                                                name: 'tagmode',
                                                store: [
                                                    'ANY',
                                                    'ALL'
                                                ]
                                            }
                                        },
                                        {
                                            type: 'Ext.form.field.Text',
                                            config: {
                                                fieldLabel: 'Extra',
                                                name: 'extra'
                                            }
                                        }
                                    ]
                                },
                                {
                                    categorie: 'Options',
                                    champs: [
                                        {
                                            type: 'Ext.form.field.Number',
                                            config: {
                                                fieldLabel: 'Images par page',
                                                name: 'itemsPerPage',
                                                allowDecimals: false,
                                                minValue: 0
                                            }
                                        }
                                    ]
                                }
                            ],
                            avance: [
                                
                            ]
                        },
                        configBloc: {
                            
                        }
                    },
                    version: 1,
                    lastUpdateUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    createUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    id: '506441f8c64804d514044123'
                },
                {
                    type: 'Liste de Contenus',
                    description: '<h2>Bloc liste de contenus<\/h2> <\/br><p>Ce bloc affiche une liste de contenus filtr\u00e9e soit selon le par\u00e9trage initial soit selon un param\u00e9tre re\u00e7u de la part d\'un autre bloc si l\'option "re\u00e7oitparam\u00e9tre" est coch\u00e9e. Lorsque c\'est bien le cas mais le bloc ne re\u00e7oit rien, il affiche une liste de contenus filtr\u00e9e selon la configuration initiale.<\/p>',
                    configBasique: {
                        title: 'Liste de contenus',
                        bType: 'Liste de Contenus',
                        flex: 1,
                        champsConfig: {
                            simple: [
                                {
                                    categorie: 'Affichage',
                                    champs: [
                                        {
                                            type: 'Ext.form.field.Text',
                                            config: {
                                                fieldLabel: 'Type d\'affichage',
                                                name: 'displayType'
                                            }
                                        }
                                    ]
                                },
                                {
                                    categorie: 'Contenus',
                                    champs: [
                                        {
                                            type: 'Rubedo.view.queryBuilderField',
                                            config: {
                                                fieldLabel: 'Requete',
                                                name: 'query',
                                                
                                            }
                                        }
                                    ]
                                },
                                {
                                    categorie: 'Pagination',
                                    champs: [
                                        {
                                            type: 'Ext.form.field.Number',
                                            config: {
                                                fieldLabel: 'Taille des pages',
                                                name: 'pageSize',
                                                allowDecimals: false,
                                                minValue: 0
                                            }
                                        }
                                    ]
                                }
                            ],
                            avance: [
                                
                            ]
                        },
                        configBloc: {
                            
                        }
                    },
                    version: 1,
                    lastUpdateUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    createUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    id: '506441f8c64804d514000000'
                },
                {
                    type: 'Carrousel',
                    description: '<h2>Bloc carrousel<\/h2> <\/br><p>Ce bloc affiche une liste de contenus filtr\u00e9e soit selon le par\u00e9trage initial soit selon un param\u00e9tre re\u00e7u de la part d\'un autre bloc si l\'option "re\u00e7oitparam\u00e9tre" est coch\u00e9e. Lorsque c\'est bien le cas mais le bloc ne re\u00e7oit rien, il affiche une liste de contenus filtr\u00e9e selon la configuration initiale.<\/p>',
                    configBasique: {
                        title: 'Carrousel',
                        bType: 'Carrousel',
                        flex: 1,
                        champsConfig: {
                            simple: [
                                {
                                    categorie: 'Affichage',
                                    champs: [
                                        {
                                            type: 'Ext.form.field.Text',
                                            config: {
                                                fieldLabel: 'Type d\'affichage',
                                                name: 'displayType'
                                            }
                                        }
                                    ]
                                },
                                {
                                    categorie: 'Contenus',
                                    champs: [
                                        {
                                            type: 'Rubedo.view.queryBuilderField',
                                            config: {
                                                fieldLabel: 'Requete',
                                                name: 'query',
                                                
                                            }
                                        }
                                    ]
                                },
                                {
                                    categorie: 'Pagination',
                                    champs: [
                                        {
                                            type: 'Ext.form.field.Number',
                                            config: {
                                                fieldLabel: 'Taille des pages',
                                                name: 'pageSize',
                                                allowDecimals: false,
                                                minValue: 0
                                            }
                                        }
                                    ]
                                }
                            ],
                            avance: [
                                
                            ]
                        },
                        configBloc: {
                            
                        }
                    },
                    version: 1,
                    lastUpdateUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    createUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    id: '506441f8c64804d514022000'
                },
                {
                    type: 'Bloc de navigation',
                    description: '<h2>Bloc de navigation<\/h2> <\/br><p>Ce bloc affiche une liste de contenus filtr\u00e9e soit selon le par\u00e9trage initial soit selon un param\u00e9tre re\u00e7u de la part d\'un autre bloc si l\'option "re\u00e7oitparam\u00e9tre" est coch\u00e9e. Lorsque c\'est bien le cas mais le bloc ne re\u00e7oit rien, il affiche une liste de contenus filtr\u00e9e selon la configuration initiale.<\/p>',
                    configBasique: {
                        title: 'Bloc de navigation',
                        bType: 'Bloc de navigation',
                        flex: 1,
                        champsConfig: {
                            simple: [
                                {
                                    categorie: 'Pages',
                                    champs: [
                                        {
                                            type: 'Ext.ux.TreePicker',
                                            config: {
                                                fieldLabel: 'Racine',
                                                name: 'rootPage'
                                            }
                                        },
                                        {
                                            type: 'Ext.ux.TreePicker',
                                            config: {
                                                fieldLabel: 'Page de recherche',
                                                name: 'searchPage'
                                            }
                                        },
                                        {
                                            type: 'Ext.form.field.Checkbox',
                                            config: {
                                                fieldLabel: 'Moteur de recherche',
                                                name: 'useSearchEngine'
                                            }
                                        },
                                        {
                                            type: 'Rubedo.view.ImagePickerField',
                                            config: {
                                                fieldLabel: 'Logo',
                                                name: 'logo'
                                            }
                                        }
                                    ]
                                }
                            ],
                            avance: [
                                
                            ]
                        },
                        configBloc: {
                            
                        }
                    },
                    version: 1,
                    lastUpdateUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    createUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    id: '506441f8c64804d514033000'
                },
                {
                    type: 'Fil d\'Ariane',
                    description: '<h2>Bloc Fil d\'Ariane<\/h2> <\/br><p>Ce bloc affiche une liste de contenus filtr\u00e9e soit selon le par\u00e9trage initial soit selon un param\u00e9tre re\u00e7u de la part d\'un autre bloc si l\'option "re\u00e7oitparam\u00e9tre" est coch\u00e9e. Lorsque c\'est bien le cas mais le bloc ne re\u00e7oit rien, il affiche une liste de contenus filtr\u00e9e selon la configuration initiale.<\/p>',
                    configBasique: {
                        title: 'Fil d\'Ariane',
                        bType: 'Fil d\'Ariane',
                        flex: 1,
                        champsConfig: {
                            simple: [
                                {
                                    categorie: 'Pages',
                                    champs: [
                                        {
                                            type: 'Ext.ux.TreePicker',
                                            config: {
                                                fieldLabel: 'Racine',
                                                name: 'rootPage'
                                            }
                                        }
                                    ]
                                }
                            ],
                            avance: [
                                
                            ]
                        },
                        configBloc: {
                            
                        }
                    },
                    version: 1,
                    lastUpdateUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    createUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    id: '506441f8c64804d514044000'
                },
                {
                    type: 'Pied de page',
                    description: '<h2>Bloc Pied de page<\/h2> <\/br><p>Ce bloc affiche une liste de contenus filtr\u00e9e soit selon le par\u00e9trage initial soit selon un param\u00e9tre re\u00e7u de la part d\'un autre bloc si l\'option "re\u00e7oitparam\u00e9tre" est coch\u00e9e. Lorsque c\'est bien le cas mais le bloc ne re\u00e7oit rien, il affiche une liste de contenus filtr\u00e9e selon la configuration initiale.<\/p>',
                    configBasique: {
                        title: 'Pied de page',
                        bType: 'Pied de page',
                        flex: 1,
                        champsConfig: {
                            simple: [
                                
                            ],
                            avance: [
                                
                            ]
                        },
                        configBloc: {
                            
                        }
                    },
                    version: 1,
                    lastUpdateUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    createUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    id: '506441f8c64804d514055000'
                },
                {
                    type: 'Résultat de recherche',
                    description: '<h2>Bloc Résultat de recherche<\/h2> <\/br><p>Ce bloc affiche une liste de contenus filtr\u00e9e soit selon le par\u00e9trage initial soit selon un param\u00e9tre re\u00e7u de la part d\'un autre bloc si l\'option "re\u00e7oitparam\u00e9tre" est coch\u00e9e. Lorsque c\'est bien le cas mais le bloc ne re\u00e7oit rien, il affiche une liste de contenus filtr\u00e9e selon la configuration initiale.<\/p>',
                    configBasique: {
                        title: 'Résultat de recherche',
                        bType: 'Résultat de recherche',
                        flex: 1,
                        champsConfig: {
                            simple: [
                                {
                                    categorie: 'Filtrage',
                                    champs: [
                                        {
                                            type: 'Ext.form.field.Checkbox',
                                            config: {
                                                fieldLabel: 'Restreindre au site',
                                                name: 'constrainToSite'
                                            }
                                        },
                                        {
                                            type: 'Ext.form.field.TextArea',
                                            config: {
                                                fieldLabel: 'Filtres',
                                                name: 'filters'
                                            }
                                        }
                                    ]
                                }
                            ],
                            avance: [
                                
                            ]
                        },
                        configBloc: {
                            constrainToSite: true
                        }
                    },
                    version: 1,
                    lastUpdateUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    createUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    id: '506441f8c64804d514066000'
                },
                {
                    type: 'Twig',
                    description: '<h2>Bloc Twig<\/h2> <\/br><p>Ce bloc affiche une liste de contenus filtr\u00e9e soit selon le par\u00e9trage initial soit selon un param\u00e9tre re\u00e7u de la part d\'un autre bloc si l\'option "re\u00e7oitparam\u00e9tre" est coch\u00e9e. Lorsque c\'est bien le cas mais le bloc ne re\u00e7oit rien, il affiche une liste de contenus filtr\u00e9e selon la configuration initiale.<\/p>',
                    configBasique: {
                        title: 'Twig',
                        bType: 'Twig',
                        flex: 1,
                        champsConfig: {
                            simple: [
                                {
                                    categorie: 'Fichier',
                                    champs: [
                                        {
                                            type: 'Ext.form.field.Text',
                                            config: {
                                                fieldLabel: 'Nom du fichier',
                                                name: 'fileName'
                                            }
                                        }
                                    ]
                                }
                            ],
                            avance: [
                                
                            ]
                        },
                        configBloc: {
                            
                        }
                    },
                    version: 1,
                    lastUpdateUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    createUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    id: '506441f8c64804d514066000'
                },
                {
                    type: 'D\u00e9tail de contenu',
                    description: 'Description du bloc d\u00e9tail de contenu',
                    configBasique: {
                        title: 'D\u00e9tail de contenu',
                        bType: 'D\u00e9tail de contenu',
                        flex: 1,
                        champsConfig: {
                            simple: [
                                {
                                    categorie: 'Affichage',
                                    champs: [
                                        {
                                            type: 'Ext.form.field.Text',
                                            config: {
                                                fieldLabel: 'Type d\'affichage',
                                                name: 'displayType'
                                            }
                                        }
                                    ]
                                },
                                {
                                    categorie: 'Contenu',
                                    champs: [
                                        {
                                            type: 'Rubedo.view.FCCField',
                                            config: {
                                                fieldLabel: 'Contenu à afficher',
                                                name: 'contentId'
                                            }
                                        },
                                        {
                                            type: 'Ext.form.field.Checkbox',
                                            config: {
                                                fieldLabel: 'Paramètre externe',
                                                name: 'recievesParam'
                                            }
                                        }
                                    ]
                                }
                            ],
                            avance: [
                                
                            ]
                        },
                        configBloc: {
                            
                        }
                    },
                    version: 1,
                    lastUpdateUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    createUser: {
                        id: 1,
                        login: 'jbourdin',
                        fullName: 'Julien Bourdin'
                    },
                    id: '506441f8c64804d514000001'
                }
            ]
        }, cfg)]);
    }
});