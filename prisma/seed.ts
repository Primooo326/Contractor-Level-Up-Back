import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const templates = [
    {
        "id": "415522391276221",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, soy {{2}} de Contractor Level Up. Mañana tenemos nuestra llamada programada a la {{3}} sobre cómo puede obtener más solicitudes de presupuesto. ¿Sigue siendo un buen momento para hablar?",
                "example": {
                    "body_text": [
                        [
                            "Client name",
                            "Associate",
                            "8am"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}",
                    "{{appointment.only_start_time}}"
                ]
            }
        ],
        "language": "es",
        "name": "1dbeforeclosingbookingreminder",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723168856
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "694676886053897",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "te llamo en 20 minutos!",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "20mbeforebooking",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723059743
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1163200748369969",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, soy {{2}} de Contractor Level Up. Sólo para recordarte que te llamaré en 2 horas sobre mas solicitudes de estimado. Si no puedes hablar avísame para que yo pueda agendar a otro dueño de empresa interesado.",
                "example": {
                    "body_text": [
                        [
                            "Client name",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "2hbeforecall",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723154503
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "549317104201081",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, aquí le dejo el archivo:\n{{2}}",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE",
                            "IMAGEN"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{contact.archivo_test_wpp}}"
                ]
            }
        ],
        "language": "es",
        "name": "archivo",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727388397
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "425796750166818",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}} sigues en la búsqueda de más solicitudes de proyecto?",
                "example": {
                    "body_text": [
                        [
                            "cllient"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724373326
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "464383192715361",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, estás aún en la búsqueda de más propuestas de proyectos?",
                "example": {
                    "body_text": [
                        [
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_aun_en_busqueda_de_mas_proyectos",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723744669
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "845681514059359",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} aún estás buscando más oportunidades?",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_aun_estas_buscando_mas_oportunidades_en_",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724184200
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "25378088568502448",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Aún estás en la búsqueda de más solicitudes de trabajos?",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "callback_aun_estas_en_la_busqueda_de_mas_trabajos",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724376715
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "815603856627648",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Avísame si puedes hablar hoy.",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "callback_avisame_si_puede_hablar_hoy",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723671516
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "975651520934858",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Saludos {{1}}, soy {{2}} de Contractor Level Up. ¡Buenas noticias! Hemos finalizado la revisión de su formulario de precalificación para más solicitudes de trabajos. ¿Podemos tener una conversación hoy?",
                "example": {
                    "body_text": [
                        [
                            "Client",
                            "associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_buenas_noticias_hemos_finalizado_la_revision",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723761776
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1823032861497230",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}. Continúas buscando más propuestas de trabajos?",
                "example": {
                    "body_text": [
                        [
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_continuas_buscando_mas_trabajos_",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724184073
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "906872684526562",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Dejame saber si puedes hablar hoy",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "callback_dejame_saber_si_puedes_hablar_hoy",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723749955
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "260362687100648",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Déjame saber si tienes un momento para hablar hoy.",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "callback_dejame_saber_si_tienes_un_momento_para_hablar",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724184097
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1435730420635941",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} es posible que hablemos hoy?",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_es_posible_que_hablemos_hoy",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723814801
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "352303751194568",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, estás todavía buscando más propuestas de trabajos?",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_estas_todavia_buscando_ma_trabajos_relacion",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724184204
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "3758532667806339",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, existe la posibilidad de hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_existe_la_posibilidad_de_hablar_hoy",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723943838
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "328316250287772",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} ha pasado un mes desde que nos pediste que te ayudáramos con más solicitudes de trabajos. Cerraste tu empresa?",
                "example": {
                    "body_text": [
                        [
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_hace_un_mes",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1726083510
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1417811382272503",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Ya revisamos el formulario de precalificación para más solicitudes de trabajos, me avisa si puede hablar hoy.",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "callback_le_tengo_buenas_noticias_ya_revisamos_el_formu",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723845149
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "839562711335954",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, {{2}} desde Contractor Level Up. Le traigo buenas noticias! Su formulario de precalificación para más solicitudes de trabajo  ha sido revisado. Podemos conversar hoy al respecto?",
                "example": {
                    "body_text": [
                        [
                            "Client",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_le_traigo_buenas_noticias",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723752534
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1390577094937772",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, {{2}} le saluda desde Contractor Level Up. ¡Le traigo noticias! Hemos concluido la revisión de su formulario de precalificación para más propuestas de proyectos. ¿Tiene un momento para hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Client",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_le_traigo_noticias_hemos_concluido_la_revisio",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1725307267
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "764721398983587",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, soy {{2}} de Contractor Level Up. Nos estamos intentando comunicar con usted. Le tengo buenas noticias! Ya revisamos el formulario de precalificación para mas trabajos. Me confirma una hora donde pueda tomar mi llamada?",
                "example": {
                    "body_text": [
                        [
                            "Client",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_nos_estamos_intentando_comunicar_con_usted",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723814801
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1681299539276948",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, soy {{2}} de Contractor Level Up. ¡Noticias maravillosas! Fue aprobado su formulario de precalificación para más solicitudes de trabajos. ¿Podría disponer de un rato para hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Client",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_noticias_maravillosas_fue_aprobado",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1725334795
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1504707693772714",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} podemos conversar hoy?",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_podemos_conversar_hoy",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1726171503
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "2324417031088926",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Podemos tener una charla hoy?",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "callback_podemos_tener_una_charla_hoy",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724875440
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "427651826557850",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes, {{1}}! Soy {{2}} de Contractor Level Up. Quería informarte que tu formulario de precalificación ha sido aprobada. Podemos ayudar a tu empresa a conseguir más solicitudes de clientes. Déjame saber para ponerme en contacto contigo hoy",
                "example": {
                    "body_text": [
                        [
                            "Client",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_queria_informarte_que_tu_formulario_de_precalifi",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724285899
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "421310340830111",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}. Sigues buscando mas propuestas de trabajos?",
                "example": {
                    "body_text": [
                        [
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_sigues_buscando_mas_a_trabajos_de_pintura",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724184067
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1169070537473222",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} sigues buscando más propuestas de proyectos para realizar?",
                "example": {
                    "body_text": [
                        [
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_sigues_buscando_mas_proyectos_de_",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1726083510
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "419630030840373",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}} sigues en la búsqueda de más solicitudes de proyecto?",
                "example": {
                    "body_text": [
                        [
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_sigues_en_la_busqueda_de_mas_proyecto",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724798750
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "300773659746016",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, sigues necesitando más propuestas de trabajos?",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_sigues_necesitando_mas_propuestas_de_trabajos",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724210172
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "273455312429478",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, soy {{2}} de Contractor Level Up. Tengo excelentes noticias! Hemos completado la revisión de su formulario de precalificación para más solicitudes de proyectos. Podríamos hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Client",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_tengo_excelentes_noticias_hemos_completado",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724184088
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1621879141972123",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, soy {{2}} de Contractor Level Up. Tengo noticias! Hemos terminado la revisión de su formulario de precalificación para más propuestas de trabajos. ¿Podría disponer de un tiempo para hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Client",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_tengo_noticias_hemos_terminado_la_revision_de",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724184605
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1479090769359426",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Tienes disponibilidad para una conversación hoy?",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "callback_tienes_disponiblidad_para_una_conv",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724097886
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "797692135619298",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Tienes un espacio para hablar hoy?",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "callback_tienes_un_espacio_para_hablar_hoy",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1725473762
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "3713174215636653",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, aquí {{2}} de Contractor Level Up. Le traigo buenas noticias. Ya hemos terminado de revisar el formulario de precalificación para más solicitudes de trabajos y fuiste aprobado. Estaría disponible para hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Client",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "callback_ya_hemos_terminado_de_revisar_el_formulario",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723767283
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1037878124382438",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/454890529_1037878127715771_824332276150368390_n.png?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=puRiFgIGNAsQ7kNvgHkeGfN&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIHrLQZrBJ8aWdEcLhqrZZgKdfJsDOnZY5twrWqDbMM3z&oe=674F8A70"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/66cf850b0a6766c9a29c1998.png"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "{{1}}, un estimado para un trabajo comercial  lo puede cambiar todo. 💫. ¿Puedes hablar ahora?, me gustaría contarte cómo puedes tener mejores trabajos y generar más empleo para tus muchachos.",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cb_catorce",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724879756
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "995213562039555",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, ya revisamos su precalificación y fuiste aprobado para mas solicitudes de trabajos. Tienes tiempo para hablar?",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cb_cinco",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724184034
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1551519678746156",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, Hace un tiempo lleno un formulario para obtener mas trabajos, Nos hemos tratado de comunicar con usted sin éxito, ¿Sigue interesado en hacer crecer su compañía? Saludos.",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cb_cuatro",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723815026
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1183953729384653",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/424432532_1183953732717986_7258311228967448661_n.png?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=QKcw6kbJoZgQ7kNvgH0PWCZ&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIDSBhyzvaj2bbkrwKzbTxVA9Fh8wBweRLKEAPyNOJR-n&oe=674FA5DA"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/66cf8576090cd033b93ac532.png"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Las recomendaciones y los subcontratos no te van a generar la cantidad de trabajos y dinero que vienes buscando, lo que sí te da ese resultado es automatizar tu negocio para que MILES de clientes potenciales te conozcan 🤗 ¿Puedes hablar ahora?",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "cb_dieciseis",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724879748
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1249170606503180",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenos dias {{1}}.¿Qué tan comprometido estás a hacer crecer tu empresa? Nosotros te ayudamos a obtener proyectos de mediana/grande escala. ¿Deseas seguir con el mismo método o estás listo para un cambio positivo y dejar de limitarte al subcontrato y referidos que no mejoran la condiciones para ti y tus muchachos?",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cb_diecisiete",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1728931846
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "810602934565262",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, lo sabías? lo sabías? Necesitas escuchar esta información! Hicimos un video de 3 minutos que puedes ver en el enlace a continuación. Lo que tengo para decirte es lo que un empresario necesita para salir adelante en la construcción acá en los EEUU, dime cuando vea el video y te llamo, ¡espero tu mensaje! https://contractorlevelup.com/3pw",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cb_diez",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723759514
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "530386796173271",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/431892474_530386799506604_6034610053882515960_n.png?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=f11sCdHljLcQ7kNvgFsuIbz&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIMRgzCoKNIbv9YxRY0-eLcsqLazZvhFtC3g7Mo1wK4GE&oe=674F8A6A"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/66cf84927fb77437bde534b2.png"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "{{1}}, tu compañía lo tiene todo para crecer 🚀, tu experiencia y servicios es lo que miles de compañías y grandes negocios buscan allí afuera. ¿Puedes hablar ahora?",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cb_doce",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724876641
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "966285335140347",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Feliz tarde {{1}}, le tengo buenas noticias sobre más solicitudes de trabajos! Puedes hablar ahora?",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cb_dos",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724192811
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "474156838701341",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, ¿sabías que encontrar nuevos clientes es uno de los mayores desafíos para las empresas de construcción? Lo que tengo para decirte te ayudará a dejar de perder tiempo y recursos en publicidad, para enfocarte en cerrar tratos y hacer crecer tu empresa.",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cb_nueve",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1729129538
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1119620815920349",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, hace un tiempo nos buscaste porque quieres hacer crecer tu compañía, sin embargo no hemos obtenido alguna respuesta de tu parte. ¿Estás interesado?, Indicame para poder hablarte.",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cb_ocho",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723815026
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "793171089400056",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}. Solo quería enviarte un último recordatorio sobre Contractor Level Up. Hemos estado trabajando con otros clientes que se beneficiaron enormemente, y creo que podríamos hacer lo mismo por ti debido a tus años de experiencia. Si te gustaría seguir adelante, házmelo saber. Si no es el momento adecuado, no hay problema, solo avísame y te eliminaré de mi lista de seguimiento a fin de brindarle espacio a otra empresa. Espero tu respuesta.",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cb_once",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724705475
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1169544980827715",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/425158865_1169544984161048_4057055676535358683_n.png?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=kQTkBzOmfToQ7kNvgEAzFsn&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaII1DcWq8GhCTM2iCHUUmvcy1arUy4sAuAIG-f-ElXS6C&oe=674FB180"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/66cf85426ab7c66607eeacc7.png"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "{{1}}, sabemos que es mejor levantarse a trabajar que a buscar un trabajo y tu compañía califica para trabajar con nosotros y tener ese alcance y reconocimiento que necesitas. ¿Hablamos ahora?",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cb_quinze",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724878259
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "854825063075351",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes  {{1}}, le habla {{2}} de Contractor Level Up. Aun le interesa hacer crecer su compañia con mas clientes ?",
                "example": {
                    "body_text": [
                        [
                            "Cliente",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cb_seis",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723828301
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "309141795564827",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, espero que estés bien, sabemos que estás buscando más y mejores proyectos para tu empresa. Justo es de eso que quiero hablarte, indícame si puedo llamarte en este momento.",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cb_siete",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723684668
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1221706445948764",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/441275833_1221706449282097_4191853324135811625_n.png?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=8tDWiZ5kjE0Q7kNvgFuN5VW&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIN6xgsynjBFTxq_Ht41BoJfCOIOGZby8d5IeoXFVoCuf&oe=674FAD20"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/66cf84dde3b98aaaee9311fb.png"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "{{1}}, buenas noticias, tu compañía califica para que más de 4000 clientes potenciales al mes te empiecen a conocer y solicitar estimados 🤯. ¿Puedes hablar ahora?",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cb_trece",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724877272
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "974458780940950",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes  {{1}}, le habla {{2}} de Contractor Level Up. Podemos ofrecerle que tome proyectos comerciales, puede recibir un llamado en el dia de hoy ?",
                "example": {
                    "body_text": [
                        [
                            "Cliente",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cb_tres",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724106321
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1522222588641276",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, le habla {{2}} de Contractor Level Up. Le tengo buenas noticias! Ya revisamos el formulario de precalificación para más solicitudes de trabajos, me avisa si puede hablar hoy.",
                "example": {
                    "body_text": [
                        [
                            "Client",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cb_uno",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723676417
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "870446634984554",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, le dejamos un enlace para que pueda realizar una reseña de nuestro servicio, seria de mucha ayuda para nosotros para asi mejorar la calidad en nuestra atención, muchas gracias!\nhttps://bit.ly/clubbbreview",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "ce_cinco_bbb_review",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1729280002
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1001809578166298",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} lo intenté contactar en varias oportunidades pero no pudo atenderme. ¿Podría indicarme en qué horario estaría disponible para volverlo a llamar?",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "ce_cuatro_multiples_intentos",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "976846530418397",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, le habla {{2}} de Contractor Level Up. Estoy intentando comunicarme para ver cómo le ha ido con las respuestas y cómo marcha el servicio. Avíseme a qué hora podríamos hablar.",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE",
                            "ASOCIADO"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "ce_dos",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1197163064688287",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Muy buen día {{1}}, soy {{2}} de Contractor Level Up. Hemos intentado contactarle en varias oportunidades sin ninguna respuesta, háganos saber algún horario en que se encuentre disponible para poderle contactar si fuese tan amable.",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE",
                            "ASOCIADO"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "ce_ocho_multiples_contactos",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730132043
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "372894612559485",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, muy buen día! Le habla {{2}} de Contractor Level Up, estoy haciéndole seguimiento a su servicio y he notando que tiene algunas propuestas de una plataforma llamada Building Connected, en la misma podrá ver los detalles de cada solicitud. Háganos saber algún horario para contactarlo y orientarlo si fuese tan amable.",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE",
                            "ASOCIADO"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "ce_seis_building_connected",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727201905
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "880999717331003",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, esperamos se encuentre muy bien! Le habla {{2}} de Contractor Level Up, estoy haciéndole seguimiento a su servicio y he notando que tiene algunas solicitudes en el correo que aún no se han gestionado. Háganos saber algún horario para contactarlo y orientarlo si fuese tan amable.\n\n{{3}}\n{{4}}",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE",
                            "ASOCIADO",
                            "SOLICITUD",
                            "SOLICITUD"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}",
                    "{{contact.request_1}}",
                    "{{contact.request_2}}"
                ]
            }
        ],
        "language": "es",
        "name": "ce_siete_solicitudes",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1728408031
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "821309752852696",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}! Soy {{2}} de Contractor Level Up. He tratado de comunicarme con usted para revisar todo lo relacionado con su sistema. ¿Podría indicarme cuándo puede atender mi llamada?\nQuedo atento, muchas gracias!",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE",
                            "ASOCIADO"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "ce_tres",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1418182675423363",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, soy {{2}} de Contractor Level Up. Quería ponerme en contacto con usted para revisar todo lo relacionado con su sistema y verificar que todo esté funcionando bien. ¿A qué hora estará disponible?",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE",
                            "ASOCIADO"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "ce_uno",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "809537553995160",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "¡{{1}}, bienvenido a la familia de Contractor Level Up! Soy {{2}}, miembro del equipo de Servicio al Cliente. Guarda mi numero, te llamare para ayudarte a iniciar sesión en la aplicación cuando este lista en 1-2 días.",
                "example": {
                    "body_text": [
                        [
                            "Cliente",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cliente_bienveniedo_a_contractorlevelup",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724190015
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "938475751388410",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} felicitaciones por empezar el proceso para hacer crecer su empresa! Le hemos enviado un correo electrónico con los siguientes pasos! Cualquier pregunta házmela saber. Por favor revise la carpeta de spam/basura en su correo electrónico, a veces va allí.",
                "example": {
                    "body_text": [
                        [
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cliente_felicitaciones_por_empezar",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724187849
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "405429488986621",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, nuestros fundadores tienen un mensaje muy importante para usted, haga click en el enlace para ver el video de 3 minutos: https://bit.ly/clumensaje",
                "example": {
                    "body_text": [
                        [
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cliente_msj_founders",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1483175362629600",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, nuestros fundadores tienen un mensaje muy importante para usted, haga click en el enlace para ver el video de 3 minutos: https://contractorlevelup.com/clumsg",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cliente_msj_founders_new_link",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724847199
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "937307518140440",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}! Le escribimos de Contractor Level Up! Quería presentarme, mi nombre es {{2}} y ahora seré la persona principal con la que hablarás. Puedes preguntarme cualquier duda y llamarme directamente y si no contesto es porque puede que esté con otro cliente pero no te preocupes te llamaré cuanto termine con el otro cliente. Gracias",
                "example": {
                    "body_text": [
                        [
                            "Cliente",
                            "Asociado"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cliente_onboarding_done_jeff_intro",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1725570648
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "466604589229192",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Nos encantaría que nos dejaras una reseña para conocer tu opinión. Tu feedback es muy valioso para nosotros.   Aquí tienes el enlace para dejar tu reseña: https://bit.ly/clubbbreview",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "cliente_onboarding_done_review_request",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "974086141386403",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Nos encantaría que nos dejaras una reseña para conocer tu opinión. Tu feedback es muy valioso para nosotros.   Aquí tienes el enlace para dejar tu reseña en BBB: https://contractorlevelup.com/bbbreview",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "cliente_onboarding_done_review_request_new_message_",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724854488
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1615225742647973",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, gracias por confiar en nuestros servicios en Contractor Level Up! Esperamos que estés teniendo una buena experiencia hasta ahora.",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cliente_onboarding_done_thankyou",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724188538
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "337463109059318",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, aqui {{2}} de Contractor Level Up denuevo. Quería decirle que Matheus se encuentra trabajando en la creación de su sistema, tal vez le envíe un mensaje de texto mientras se crea su sistema para asegurarse de que lo esté haciendo bien.",
                "example": {
                    "body_text": [
                        [
                            "Cliente",
                            "Assocaite"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cliente_presentation_matt",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724193593
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "761585696168527",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Nos alegra que haya recibido una solicitud de presupuesto. ¿Podrías ayudarnos y compartir tu experiencia hasta ahora en una reseña? Puedes decir cómo te sientes hasta el momento sobre la atención que te brindamos y sobre nuestro sistema. Aquí está el enlace para dejar una reseña: https://bit.ly/clubbbreview Gracias",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "cliente_received_estimate_review_request",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "401996702735767",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, ya comenzamos a trabajar en su sistema. Dado que enviaremos su información a empresas, es posible que reciba llamadas sobre una mayor visibilidad en Internet, Google, Yelp, etc. Ya conoces nuestro precio y no te cobraremos nada extra. ¡Somos únicos en el mercado! Le enviaremos un mensaje de texto pronto cuando su sistema esté listo.",
                "example": {
                    "body_text": [
                        [
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cliente_recordatorio_que_no_cobramos_nada",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724187104
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "405380449043801",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola, le habla {{1}} de Contractor Level Up y tengo buenas noticias! Su sitio web ya está listo y puede acceder a él yendo a: {{2}}\n\nSi no ha enviado imágenes para su sitio web, utilizaremos imágenes generales de nuestra base de datos. Por favor envíe sus fotos para agregarlas a su sitio web tan pronto como pueda.",
                "example": {
                    "body_text": [
                        [
                            "Associate",
                            "Domain"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.domain}}"
                ]
            }
        ],
        "language": "es",
        "name": "cliente_site_done",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724270587
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "361815526366091",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Es importante decir que nadie de nuestra empresa Contractor Level Up lo llamará por teléfono para pedirle su número de tarjeta de crédito o su seguro social, su contraseña o cualquier información personal. Ya conoces el precio de nuestro servicio. No hay ningún precio adicional. ¿De acuerdo?\n\nAvísenos si tiene alguna pregunta.",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "cliente_site_pedir_numero_tarjeta",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724270718
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "323064650646256",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Ahora que tiene un sitio web, tiene su correo electrónico y su número de teléfono en linea, otras empresas tienen acceso a esa información y pueden llamarlo para ofrecerle servicios de Google, sitio web, etc.\n\nNosotros incluiremos su sitio web en Google, por lo cual, no necesita pagar nada a ninguna otra empresa, todos los servicios están incluidos con nosotros.",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "cliente_site_recordatorio_google",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723658850
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "7536224986413456",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "¡Felicitaciones, su sistema está listo!  Soy {{1}} de Contractor Level Up guarda mi numero, te llamare para ayudarte a iniciar sesión en la aplicación. Acabamos de enviarle un correo electrónico dandole los siguientes pasos! Revisa el correo electrónico y hazme saber si tienes alguna pregunta.",
                "example": {
                    "body_text": [
                        [
                            "Assocaite"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cliente_sys_done",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724254744
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "852916003337603",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Para instalar la aplicación en su teléfono haga click aquí: https://contractorlevelup.com/correo-app\n\nUna vez que descargue la aplicación, envíenos un mensaje de texto para que podamos ayudarlo a iniciar sesión.",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "cliente_sys_done_link_app_two",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724956512
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "981215783390820",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Para instalar la aplicación en su teléfono haga click aquí: https://contractorlevelup.com/correo-app\n\nUna vez que descargue la aplicación, envíenos un mensaje de texto para que podamos ayudarlo a iniciar sesión.",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "cliente_sys_done_links_app",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "368945012267453",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, buena tarde. Estoy con un cliente apoyándole en la configuración de su sistema pero esta tardando mas de normal. Inmediatamente termine le estaré llamando. Gracias por su comprensión!",
                "example": {
                    "body_text": [
                        [
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "closing_mensaje_cuando_estoy_en_otra_llamada",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724277385
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1955372981579556",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}. Soy {{2}} de Contractor Level Up, le estuve llamando como habíamos convenido por mensaje pero no fue posible establecer contacto con usted. Por favor, envíeme un mensaje de texto confirmando hora y fecha en la que le pueda llamar.",
                "example": {
                    "body_text": [
                        [
                            "Client",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "closing_mensaje_cuando_lamamos_y_no_contesta",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "731962239102666",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, soy {{2}} de Contractor Level Up. Nos estamos intentando comunicar con usted para mas solicitudes de trabajos. Me confirma una hora en la que pueda tomar mi llamada?",
                "example": {
                    "body_text": [
                        [
                            "Client",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "closing_mensaje_despues_de_llamar_y_el_lead_no_contestar",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724710216
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "428032519956091",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, le tengo buenas noticias sobre más solicitudes de trabajos! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "closing_mensaje_dos_antes_de_llamada",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "406789778983926",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, tratamos de llamarlo pero no hubo respuesta, así como yo fui transparente y profesional en la llamada con su compañía, me gustaría que usted también lo sea con mi persona, aún sigue interesado en hacer crecer a su compañía?",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "closing_mensaje_seguimiento_y_no_contesta2",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "965969148506987",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, ya revisamos su precalificación y fuiste aprobado para mas solicitudes de trabajos. Tienes tiempo para hablar?",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "closing_mensaje_tres_antes_de_llamada",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "803986531329728",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, le habla {{2}} de Contractor Level Up. Le tengo buenas noticias! Ya revisamos el formulario de precalificación para más solicitudes de trabajos, me avisa si puede hablar hoy.",
                "example": {
                    "body_text": [
                        [
                            "Client",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "closing_mensaje_uno_antes_de_llamada",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "2047095475691587",
        "category": "UTILITY",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, ¡Felicitaciones por calificar para trabajar con nosotros! Su próxima llamada ha sido programada para {{2}} con {{3}}.",
                "example": {
                    "body_text": [
                        [
                            "Client name",
                            "May 09, 2024 at 7AM EST",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{appointment.start_time}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "closingappointmentconfirmartion",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723146973
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "862954032427557",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, solo para informarle que estamos analizando la información de su empresa para asegurarnos de poder entregarle resultados. Mientras tanto, mire este video muy importante de 3 minutos antes de que nuestro asociado lo llame: https://contractorlevelup.com/3pw",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "clu_wagner_3_puntos",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723844478
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "844597717644103",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, tal como habíamos coordinado, intentamos contactarle pero no hubo respuesta, le agradezco me deje saber en cual horario podría estar disponible para poder contactarle de nuevo. Muchas gracias!",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "co_dos",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "2708905175959415",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, soy {{2}} de Contractor Level Up. Le comparto el link para que pueda realizar el pago:\nhttps://buy.contractorlevelup.com/112358497esp",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE",
                            "ASOCIADO"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "co_tres_enlace_pago_497_semanal",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727371121
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "469412806050993",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}! Este mensaje es para recordarte que hoy se procesa el pago de tu sistema, recuerda estar atento porque usualmente el banco pide confirmación. Si necesitas alguna ayuda no dudes en contactarnos. \nSaludos!",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "co_uno_payment_reminder",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "460829419722107",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, soy {{2}} de Contractor Level Up. No estás interesado en conseguir más trabajos? Puedo ayudarte pero parece que no lo quieres.",
                "example": {
                    "body_text": [
                        [
                            "Cliente",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "collection_iii_msj_cinco",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724419007
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "305204175968039",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, soy {{2}} de Contractor Level Up. Cuánto quieres hacer crecer tu empresa y conseguir más proyectos?",
                "example": {
                    "body_text": [
                        [
                            "Cliente",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "collection_iii_msj_cuatro",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724245909
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "770434978563195",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, soy {{2}} de Contractor Level Up. Han pasado más de 15 días desde que intenté comunicarme con usted para más proyectos. Podemos coordinar una llamada para revisar lo que tenemos disponible en su área. ¡Nos encantaría saber de usted!",
                "example": {
                    "body_text": [
                        [
                            "Cliente",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "collection_iii_msj_diez",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1726146631
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "413129098152004",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, le escribimos hace un par de horas con respecto a su sistema y mas trabajos. Quería ponerme en contacto con usted para revisar todo lo relacionado con su sistema y verificar que todo esté funcionando bien. Me confirma una hora en la que pueda tomar mi llamada?",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "collection_iii_msj_dos",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724186703
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1298892961066933",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, debo tomar notas en su perfil aquí para que sepamos que su empresa está cerrada y no puede hacer más proyectos? hágamelo saber",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "collection_iii_msj_nueve",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1725282823
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "397314799943753",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, no tienes suficientes trabajadores para los proyectos?",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "collection_iii_msj_ocho",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1725023557
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1117255435992118",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "ya no quieres más proyectos?",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "collection_iii_msj_once",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "986691535778538",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, quieres recibir más proyectos? Entendemos que ocurren dificultades financieras y estamos aquí para trabajar juntos, pero debe informarnos..",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "collection_iii_msj_seis",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724677797
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "934472915122069",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, soy {{2}} de Contractor Level Up. Déjame saber qué quieres hacer con tu empresa? Cerraste tu empresa?",
                "example": {
                    "body_text": [
                        [
                            "Cliente",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "collection_iii_msj_siete",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724764356
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "7759405347436976",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, me gustaría saber si todavía quieres más trabajos. Nos estamos intentando comunicar con usted para más trabajos y su sistema. Me confirma una hora en la que pueda tomar mi llamada?",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "collection_iii_msj_tres",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724184241
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "378745158533566",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, soy {{2}} de Contractor Level Up. Nos estamos intentando comunicar con usted acerca de su sistema. Me confirma una hora donde pueda tomar mi llamada?",
                "example": {
                    "body_text": [
                        [
                            "Cliente",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "collection_iii_msj_uno",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723895366
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "894729659213114",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, Lamentamos saber que deseas cancelar. Para que podamos completar la cancelación por usted, simplemente complete el formulario de cancelación en el siguiente enlace: https://forms.fillout.com/t/4nriKoUYtous",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cs_cancelacion",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727372440
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1146386319991973",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}! Aquí le dejo un video sobre cómo utilizar Building Connected:\nhttps://contractorlevelup.com/cubc",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cs_cinco_building_con",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1729705997
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "469962669120087",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}! Muchas gracias por enviarnos sus fotos, el área de sistemas se encargará de cargarlas en un plazo de 2 a 4 días hábiles. Ante cualquier duda que tenga, estamos atentos para poder ayudarle. \nQue tenga un excelente día!",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cs_cuatro",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1722978465
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "470892742199076",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Muy buen día {{1}}, con gusto lo ayudaremos, ¿nos permitiría unos minutos para poder desocuparnos y conversar?\nO dígamos a qué hora estará disponible y lo agendo.",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cs_dos",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "531044483000670",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, felicitaciones! Acabamos de registrar su empresa en su estado. Esto no significa que ya esté abierta, sino que hemos presentado todos los documentos necesarios y pagado la tarifa estatal. Le enviaremos la confirmación para su referencia.\n\n{{2}}",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE",
                            "ARTICULOS DE INCORPORACION"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{contact.articles_of_incorporation}}"
                ]
            }
        ],
        "language": "es",
        "name": "cs_llc_articles_of_incorporation",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727393618
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "517902427772214",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, ¡felicitaciones!\nAcabamos de recibir sus Artículos de Incorporación de su estado. También se los enviaremos por correo electrónico para que los mantenga en sus registros.\n¿Qué pasa ahora? Ahora comenzaremos el proceso para emitir su EIN para su nueva empresa. El EIN es lo que necesita para abrir una nueva cuenta bancaria para su empresa y comenzar a generar crédito.\nEl proceso demora algunas semanas y lo mantendremos informado tan pronto como recibamos la confirmación.",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cs_llc_articulos_recibidos",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "26848759861405064",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, aca esta su reporte BOI y su compañía esta 100% registrada!\n\nCualquier duda que tengas nos deje saber.\n\n{{2}}",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE",
                            "BOI"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{contact.boi}}"
                ]
            }
        ],
        "language": "es",
        "name": "cs_llc_boi",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1728415486
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "979730970580208",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, tenemos buenas noticias! Su EIN fue emitido! Lo enviaremos por correo electrónico y también aquí en la conversación para su referencia.\n¿Qué sigue? El último paso es presentar su informe BOI, lo que haremos ahora que tenemos su EIN.\n\n{{2}}",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE",
                            "EIN EMITIDO"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{contact.ein_emitido}}"
                ]
            }
        ],
        "language": "es",
        "name": "cs_llc_ein_emitido",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727367957
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "864762139143511",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola! {{1}} como estás?\nRecuerda... Es importante que para poder iniciar con el proceso de registro de tu empresa, nos ayudes llenando el formulario por favor. Sino lo haces, no podemos iniciar.\n\nEste link es el video de como llenarlo, realmente es muy sencillo:\nhttps://contractorlevelup.com/newllcform\n\nY aquí esta el link para llenar el formulario:\nhttps://forms.fillout.com/t/iHzsgaaF75us",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cs_llc_llenar_formulario",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1729178844
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1852591938599967",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, hemos enviado a su correo {{2}} y por este medio la solicitud de EIN que debe firmar para que podamos enviarla y obtener su EIN.\nEl EIN es el número que necesitará para abrir una nueva cuenta bancaria y comenzar a generar crédito para su negocio. Sólo podemos enviarla una vez que hayas firmado, por lo que si no lo firmas, no podremos enviarla. Se necesitan 10 segundos para firmarla.\n\n{{3}}",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE",
                            "EMAIL",
                            "SS4 PARA FIRMAR"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{contact.email}}",
                    "{{contact.ss4_para_firmar}}"
                ]
            }
        ],
        "language": "es",
        "name": "cs_llc_solicitud_firma_ein",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727365835
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1303974257267241",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}},\nQueremos informarte que, si recibes algún documento en tu domicilio a nombre de tu empresa, como si fuera una factura (generalmente con códigos QR o instrucciones para pagar por PayPal), estos no forman parte de nuestro proceso de registro.\nEstos documentos son parte de campañas de marketing realizadas por el estado donde te encuentras.\nSi tienes dudas sobre la validez del documento, te invitamos a enviarnos una foto para que podamos asesorarte sobre su importancia antes de realizar cualquier pago.\nQuedamos a tu disposición para cualquier consulta adicional.",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cs_llc_uno_cartas_publicidad",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727367436
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1489139621735161",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, hemos recibido su formulario para registrar su nueva empresa.\n\nAntes de enviarlo oficialmente a su estado para el registro, necesitamos que se asegure de que toda la información sea 100% correcta. No debe tener errores ortográficos, la dirección debe incluir el apartamento si lo tiene y etc.\n\nEsta información se utilizará para crear su empresa y debe ser 100% correcta. ¿Puede verificar su formulario y hacernos saber si todo está correcto o si necesita algún cambio?\n\nGracias.\n\n{{2}}",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE",
                            "FORMULARIO"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{contact.formulario_de_registro_llc}}"
                ]
            }
        ],
        "language": "es",
        "name": "cs_llc_verificar_formulario_de_registro",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1729178783
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "907240774628195",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, le habla {{2}} de Contractor Level Up. Estuve tratando de comunicarme con usted y no lo encontré disponible. Me deja saber en qué momento puede atender mi llamada, por favor.\nGracias.",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE",
                            "ASOCIADO"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cs_ocho_no_contestan",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727381845
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "992837118986061",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, le pedimos disculpas. En estos momentos nos encontramos atendiendo unas llamadas agendadas, ¿podría indicarnos cómo podemos ayudarle?",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cs_seis_ocupado",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "731082539145503",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Aquí le dejo los enlaces para acceder al curso, a la calculadora y a un video sobre cómo usar la calculadora.\n\n\nAqui esta el enlace del curso exclusivo: Cómo obtener las medidas de un plano de construcción.\nhttps://contractorlevelup.com/comdupdc-video1\n\nAquí está un video de 3 minutos de como usar la calculadora:\nhttps://www.loom.com/share/6be80e56c4d14d55a645e1c008903f01\n\nAquí está el enlace para la calculadora:\nhttps://docs.google.com/spreadsheets/d/1v7UlCJcUDMQhyjEOo96t4PDHmwQhlTlLzbaKTPnCoVQ/edit?usp=sharing\n\n\n\nSi tiene alguna pregunta, hágamelo saber.",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "cs_siete_curso_calculadora",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1725051551
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1520008881923424",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, a continuación le envío un enlace con preguntas frecuentes que tenemos para que pueda orientarse:\nhttps://contractorlevelup.com/blog-esp/c/espanol\n\nEn este sitio publicaremos artículos para ayudar con las dudas y necesidades más frecuentes\nAlgunos articulos son:\n- Mejores prácticas para responder un correo electrónico\n- Cómo registrar tu empresa en Google My Business\n- Cómo proteger tu empresa de contrucción de estafas y fraudes comunes\n- Cómo usar la app para generar estimados en PDF\n\nAnte cualquier duda estamos atentos para poder orientarlo, que tenga un excelente día!",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cs_tres_blog",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1052913259737632",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Muy buen día {{1}}, esperamos se encuentre muy bien. ¿Cómo podemos ayudarle?",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "cs_uno",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "808166617734583",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} solo para recordarte que mañana procesaremos el pago como acordamos, listo?",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "diferidos_reminder_1",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "799495761957484",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} como acordamos, hoy procesaremos el pago a la misma hora que se registró. Vale?",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "diferidos_reminder_2",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1728310192
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1115697893295949",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} como acordamos, procesaremos el pago en breve. En ocasiones tu banco por razones de seguridad rechazará la transacción y te enviará un mensaje de texto o notificación para autorizar el pago, asegúrate de autorizar y avísanos para que podamos intentarlo nuevamente, vale?",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "diferidos_reminder_3",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1728343269
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "981238066911346",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Si no puedes hablar mañana avísanos para que podamos ceder tu espacio. Agendamos un tiempo en nuestro calendario para hablar contigo. Sino puedes contestar el llamado no podremos agendarte para otro día!",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "escacez1dbeforecall",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723148913
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1465489640839465",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Recuerda que si no puedes hablar ese día avísanos para que podamos ceder tu espacio a otra persona interesada. Sino contestas la llamada no podremos agendarte para otro día! Estamos reservando un tiempo en nuestro calendario para hablar contigo.",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "escacezbookingclosing",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723223944
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "457065876820924",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} Ok, han pasado más de 2 semanas desde que le ofrecimos nuestros servicios para tener mas solicitudes de trabajos. Creo que no quieres salir adelante y hacer crecer tu empresa.",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "followup__han_pasado_mas_de_dos_semanas_desde_que_le",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1725480185
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "818798006311234",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Avísame si puedes hablar hoy.",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "followup_avisame_si_puedes_hablar_hoy",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723692249
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "8115914681798093",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} Ok, creo que no quieres salir adelante y hacer crecer tu empresa. Todavia quieres conseguir más solicitudes de proyectos?",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "followup_creo_que_no_quieres_salir_adelante_",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1725912059
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "961707378616455",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, déjame saber si tienes un momento para hablar hoy.",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "followup_dejame_saber_si_tienes_un_momento_par",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724357140
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1397619214284300",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} es posible que hablemos hoy?",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "followup_es_posible_que_hablemos_hoy",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730300860
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "949863110218582",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} la pregunta es, ¿con qué seriedad deseas hacer crecer tu empresa? ¿O simplemente quieres hacer pequeños trabajos y esperar por referidos? Podemos ayudarte a obtener proyectos de mediana/grande escala. ¿Es eso lo que quieres?",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "followup_la_pregunta_es_con_que_seriedad_deseas_hacer",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724702472
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "2241737959501876",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} buenas tardes! No nos gusta molestar. Solo estamos comprobando si realmente quiere hacer crecer su empresa mediante  solicitudes de proyectos comerciales en su ciudad. Todavía hay cupos.",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "followup_no_nos_gusta_molestar_solo_estamos",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724270604
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "416466501239521",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, No somos como otras empresas! No vendemos contactos! Tenemos una garantía única que asegura que recibirás lo que ofrecemos. Solo podemos trabajar con unas pocas empresas en cada ciudad. Hay 3 cupos en la tuya. Llámame.",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "followup_no_somos_como_otras_empresas_no_vende",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724184194
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "998654941847701",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, nos gustaría saber si has reconsiderado nuestra oferta para ayudarte a expandir tu empresa?",
                "example": {
                    "body_text": [
                        [
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "followup_nos_gustaria_saber_si_has_reconsiderado_nuestra",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724184194
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1475628880052827",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} buenas tardes! Podemos conversar hoy?",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "followup_podemos_conversar_hoy",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724702492
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1889971531438542",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} podrías confirmar si tienes tiempo para hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "followup_podrias_confirmar_si_tienes_tiempo_para_habl",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724184194
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "818739810143967",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}! Quería recordarte que en Contractor Level Up estamos listos para ayudarte a llevar tu empresa al siguiente nivel. Consideraste nuestra oferta limitada?",
                "example": {
                    "body_text": [
                        [
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "followup_queria_recordarte_que_en_clu_es",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723782904
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "462492222825032",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} somos una empresa acreditada, tenemos muy buenas reseñas y generamos cientos de solicitudes de presupuesto a nuestro cliente, tenemos una garantía de devolución de dinero y una promoción de sitio web única para ti. No queremos molestarte pero dime, cuál es la razón por la que no quieres empezar?",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "followup_somos_una_empresa_acreditada_tenemos_muy_buena",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724788948
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "807860424203228",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}. Tienes disponibilidad para una conversación hoy?",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "followup_tienes_disponibilidad_para_una_conversacion",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724184204
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "468923778811806",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} tienes un espacio para hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "followup_tienes_un_espacio_para_hablar_hoy",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724961915
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1099454754690225",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, ya sabes que nuestro servicio no es como el de otras empresas, por eso estamos creciendo tan rápido y los pocos cupos en tu ciudad ya casi se acaban. Cuentame, que te impide empezar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "followup_ya_sabes_que_nuestro_servicio_no_es_como_el_de",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724270668
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "2767719996726622",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, Trate llamarte de nuevo, pero no hubo respuesta, así como yo fui transparente y profesional en la llamada con su compañía, me gustaría que lo fueras también con mi persona, aún sigues interesado en hacer crecer a su compañía?",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "fu_cinco",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723782904
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "2242738906058581",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, hoy te invito a que no dejes pasar esta oportunidad, en la vida hay cosas que no dan espera y según lo que charlamos tu empresa en realidad necesita ese impulso que nosotros podemos darte. Indicame si ya está todo ok para poderte llamar y empezar a contactarte con 1000 empresas semanales.",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "fu_cuatro",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724369003
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "415700587946840",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, Recuerda nuestra charla donde me mencionaste los objetivos que tiene para tu compañía, quisiera saber si ya estamos listos para iniciar y llevar tu compañía a otro nivel. ¿Estás libre para llamarte?",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "fu_dos",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724205563
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "2853368828159952",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Quedo pendiente de su respuesta para poder ayudarlo.",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "fu_ocho",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1728345372
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "809741393984981",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, luego de nuestra charla donde me dijiste que querías tener más y mejores clientes... no volvimos a tener contacto. ¿De verdad estás dispuesto a renunciar a esta oportunidad que tienes en tus manos?. Déjame saber, si no, para detener las llamadas y ceder tu cupo a alguien más. Quedo atento",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "fu_seis",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724187556
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1709527609883244",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, cada día que pasa es una oportunidad. Listo para ver los resultados reflejados en el crecimiento de tu empresa? Hablemos y empecemos hoy!",
                "example": {
                    "body_text": [
                        [
                            "cliente name"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "fu_siete",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727304057
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1403300297038492",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}. Me contacto de nuevo contigo para retomar la conversación que tuvimos sobre el futuro de tu empresa. Te llamé como lo solicitaste pero no obtengo respuesta. ¿Realmente estás interesado en continuar?, dejame saber por favor.",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "fu_tres",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723815026
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1876315856167093",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "¡Buenas tardes  {{1}}! Honestamente mi objetivo no es molestarle, solamente lo llamo por que asi acordamos. Si usted ya no está interesado en el sistema, lo entiendo. Solo le pido que me lo haga saber para no seguir llamandole y quitandole el tiempo.",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "fu_uno",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724185826
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "317181438123650",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, soy {{2}} nosotros estamos hablando por teléfono en este momento",
                "example": {
                    "body_text": [
                        [
                            "Cliente name",
                            "Associate name"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "hola",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1726698380
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "473789772034553",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, soy {{2}} de Contractor Level Up. Usted solicitó información en nuestro anuncio de Facebook o Instagram para obtener más proyectos. ¿Me confirma por favor si su compañía ya está registrada?",
                "example": {
                    "body_text": [
                        [
                            "Cliente",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "intro_1",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727182938
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "916023997229498",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola, somos de Contractor Level Up. Nos mencionaste que ya tienes tu empresa registrada. Tienes un momento ahora, así te llamo? Solo nos llevará 7 minutos.",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "intro_2",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727185161
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "557984303279713",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola, somos de Contractor Level Up. En 10 minutos me comunico contigo",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "intro_3",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727193617
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "469331492693897",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} todavia sigue interesado en recibir mas solicitudes de estimado para su empresa? Avisame cuando puedes hablar y te llamo para explicarte.",
                "example": {
                    "body_text": [
                        [
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "intro_react1",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "786886743401510",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Mientras tanto, le invitamos a visitar nuestro sitio web para ver la presentación y leer nuestras reseñas para conocer más sobre nosotros. https://contractorlevelup.com/presentacion",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "invitacionmirarresenassitioweb",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723335397
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1300308841348107",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, ¡felicitaciones!\nAcabamos de recibir sus Artículos de Incorporación de su estado. También se los enviaremos por correo electrónico para que los mantenga en sus registros.\n¿Qué pasa ahora? Ahora comenzaremos el proceso para emitir su EIN para su nueva empresa. El EIN es lo que necesita para abrir una nueva cuenta bancaria para su empresa y comenzar a generar crédito.\nEl proceso demora algunas semanas y lo mantendremos informado tan pronto como recibamos la confirmación.",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "la_articulos_recibidos",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727359890
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "3851586381742748",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, soy {{2}} de Contractor Level Up. ¿Ya no quieres el sueño americano de tener tu propia empresa?",
                "example": {
                    "body_text": [
                        [
                            "Client",
                            "Assocaite"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "launch_collection_1",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1726594911
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "315587294978128",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, soy {{2}} de Contractor Level Up. Han pasado más de 15 días desde que intenté comunicarme con usted. Este es mi último intento. Quieres abrir su empresa?",
                "example": {
                    "body_text": [
                        [
                            "Cliente",
                            "Assocaite"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "launch_collection_10",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1728409232
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1260591051962795",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, le escribimos hace un par de horas con respecto a su futura empresa. Me confirma una hora en la que pueda tomar mi llamada?",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "launch_collection_2",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1726605801
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1507620856560034",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, me gustaría saber si todavía quieres salir adelante... Nos estamos intentando comunicar con usted sobre la apertura de su empresa. Me confirma una hora en la que pueda tomar mi llamada?",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "launch_collection_3",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1726751505
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "835608975392256",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, soy {{2}} de Contractor Level Up. ¿No dijiste que tu objetivo era abrir tu empresa y empezar a conseguir clientes?",
                "example": {
                    "body_text": [
                        [
                            "Cliente",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "launch_collection_4",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1726855574
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1179532929946291",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, has esperado todo este tiempo para abrir tu empresa, ¿por qué esperar más? Puedo ayudarte pero parece que no lo quieres.",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "launch_collection_5",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727127763
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1178008626795772",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Bueno {{1}}, pensé que eras diferente a la mayoría de las personas y quería empezar tu propia empresa y salir adelante. ¿Aún quieres?",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "launch_collection_6",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727442930
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1552970782271673",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, soy {{2}} de Contractor Level Up. Déjame saber qué quieres hacer con tu empresa?",
                "example": {
                    "body_text": [
                        [
                            "Cliente",
                            "Assocaite"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "launch_collection_7",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1726851011
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "440543879002794",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, seguirás trabajando de 9 a 5pm para \"sobrevivir\" y no saldrás adelante creando tu propia empresa? Nosotros podemos ayudarte",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "launch_collection_8",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727122338
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1050213466642207",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, no queremos molestarte si no quieres salir adelante. Pero si decides que quieres abrir tu empresa, háznoslo saber.",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "launch_collection_9",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727108707
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "540623925027211",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, hemos recibido su formulario para registrar su nueva empresa.\n\nAntes de enviarlo oficialmente a su estado para el registro, necesitamos que se asegure de que toda la información sea 100% correcta. No debe tener errores ortográficos, la dirección debe incluir el apartamento si lo tiene y etc.\n\nEsta información se utilizará para crear su empresa y debe ser 100% correcta. ¿Puede verificar su formulario y hacernos saber si todo está correcto o si necesita algún cambio?\n\nGracias.",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "launch_revisar_informacion_formulario_registro",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727207774
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1220151745821276",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, la llamada se cortó. Si hubo un motivo, por favor, hágamelo saber. Quedo pendiente de su mensaje.",
                "example": {
                    "body_text": [
                        [
                            "Contact"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llamada_cayo",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727811939
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "3914333662181116",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, soy {{2}} de Contractor Level Up. Quieres abrir tu empresa? (LLC) Ahora podemos ayudarte a dar este paso para hacer realidad tu visión! El proceso toma solo 10 minutos y podemos comenzarlo hoy. Déjame saber si estás interesado y te enviaré más información.",
                "example": {
                    "body_text": [
                        [
                            "Client",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_1",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1726166979
        },
        "rejected_reason": "NONE",
        "status": "DISABLED"
    },
    {
        "id": "1019056049530812",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Parece que no quieres pasar al siguiente nivel y abrir tu LLC fácilmente en 10 minutos. Dejaré de enviarte mensajes...",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "llc_10",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1725048241
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "558402953278328",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, te interesa registrar tu empresa y mejorar tu estilo de vida? agenda una llamada y te explico los detalles para que inicies desde hoy. Quedo pendiente de tu mensaje.",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_11",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727399792
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1026260568989997",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, Te gustaría abrir tu propia empresa? ¿Con un nombre que crees y poder empezar a conseguir más trabajos, abrir una cuenta bancaria comercial y construir crédito comercial? ¡Podemos ayudarte! Déjame saber si estás interesado y te enviaré más información.",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_1_1",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1726180502
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "509846591541001",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "¿Te gustaría abrir tu propia empresa? ¿Con un nombre que crees y poder empezar a conseguir más trabajos, abrir una cuenta bancaria comercial y construir crédito comercial? ¡Podemos ayudarte! Déjame saber si estás interesado y te enviaré más información.",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "llc_2",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1726270478
        },
        "rejected_reason": "NONE",
        "status": "DISABLED"
    },
    {
        "id": "2202495260124504",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, soy {{2}} de Contractor Level Up. Quieres abrir tu empresa? (LLC) Ahora podemos ayudarte a dar este paso para hacer realidad tu visión! El proceso toma solo 10 minutos y podemos comenzarlo hoy. Déjame saber si estás interesado y te enviaré más información.",
                "example": {
                    "body_text": [
                        [
                            "client",
                            "associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_2_1",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1726310584
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "26408699502077453",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, deja de esperar el momento perfecto! Puedes abrir tu propia empresa hoy. Déjame saber si estás interesado y te enviaré toda la información.",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_3",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1726172452
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "600399625659291",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Sabías que puedes abrir una empresa (LLC) incluso si no tienes tu residencia en EE.UU. o número de seguro social? Podemos ayudarte a abrir tu propia empresa. Déjame saber si estás interesado y te enviaré más información.",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "llc_4",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723839770
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1209425916886748",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buenas tardes {{1}}, no necesitas un número de seguro social, solo necesitas pasaporte para abrir tu propia empresa. ¿Qué estás esperando? Déjame saber si estás interesado para que te pueda enviar toda la información.",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_5",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723839770
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "896522515647564",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} sube de nivel hoy abriendo tu propia empresa! Podemos ayudarte a hacerlo. Déjame saber si estás interesado y te enviaré toda la información hoy.",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_6",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724103765
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1045753227135691",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "¿Siempre has querido tener tu propia empresa para conseguir más trabajos? ¡Ahora puedes! Déjame saber si estás interesado y te enviaré más información al respecto.",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "llc_7",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724270654
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1811978972659124",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, sabías que en solo 14 días puedes estar completamente listo con tu nueva empresa abierta y ir al banco para abrir una cuenta bancaria de negocios? Si quieres abrir tu empresa, mándame un mensaje y te enviaré toda la información.",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_8",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724445144
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "859146738963750",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "No necesitas un contador para abrir una empresa! Puedes empezar hoy y te tomará alrededor de 15 minutos llenar el formulario y nosotros haremos todo lo demás por ti. Si quieres abrir tu empresa, mándame un mensaje y te enviaré toda la información.",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "llc_9",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724875312
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1476556503223139",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, soy {{2}} de Contractor Level Up. Mañana tenemos nuestra llamada programada a la {{3}}. Sigue siendo un buen momento para hablar?",
                "example": {
                    "body_text": [
                        [
                            "Client",
                            "Associate",
                            "8am"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}",
                    "{{appointment.only_start_time}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_calendar_1d_before_",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724184950
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1011493000466180",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, soy {{2}} de Contractor Level Up. Sólo para recordarte que te llamaré en 2 horas como acordamos!",
                "example": {
                    "body_text": [
                        [
                            "cliente",
                            "associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_calendar_2h_before",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724187736
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "525056856647366",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, para confirmar que hemos programado una hora para hablar el {{2}}",
                "example": {
                    "body_text": [
                        [
                            "cliente",
                            "Monday at 8am"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{appointment.start_time}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_calendar_wsp_1",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723660696
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "481301861324168",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola, {{1}}. Entiendo que tomar decisiones como esta puede generar dudas. Estoy aquí para responder cualquier pregunta que tengas y asegurarnos de que avances con total seguridad. Te invito a ver este breve video de 2 minutos que explica todo de manera clara y avísame una vez que lo hayas visto para que pueda llamarte. https://contractorlevelup.com/llc",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_follow_1",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723769094
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "521845673854881",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} podemos ayudarte a alcanzar el sueño americano! Comienza tu propia empresa y finalmente podrás obtener el 100% de los frutos de tu trabajo. ¿Has tenido la oportunidad de ver nuestro video de 2 minutos donde explicamos todo en detalle?",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_follow_2",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724279302
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "2158025887898970",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} Sé que dar este paso es abrumador... ¡Pero sabes que es necesario! Quieres ser tu propio jefe y crear tu empresa. El primer paso es registrarte con tu estado. Te invito a ver este breve video de 2 minutos que explica todo de manera clara y avísame una vez que lo hayas visto para que pueda llamarte. https://contractorlevelup.com/llc",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_follow_3",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724252804
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1034062471398634",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola, {{1}} por qué confiar en nosotros para ayudarte a abrir una nueva empresa? Déjame explicarte. Con 4.9 estrellas en reseñas y certificados por BBB, somos una empresa en crecimiento de Orlando, Florida que trabajamos con clientes en todos los estados. ¿Has tenido la oportunidad de ver nuestro video de 2 minutos donde explicamos todo en detalle?",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_follow_4",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724425697
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1326434524982519",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} no quieres eventualmente ser tu propio jefe? ¿Tener tu propio equipo? Todo comienza con abrir tu empresa con el estado y estamos aquí para hacer que todo el proceso sea fácil. Te invito a ver este breve video de 2 minutos que explica todo de manera clara y avísame una vez que lo hayas visto para que pueda llamarte. https://contractorlevelup.com/llc",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_follow_5",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724685153
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "779045660839198",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} toma alrededor de 2-3 semanas para que seas dueño de un negocio y recibas tu certificado de incorporación con el nombre de tu empresa! ¿Has tenido la oportunidad de ver nuestro video de 2 minutos donde explicamos todo en detalle? Avísame una vez que lo hayas visto para que pueda llamarte.",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_follow_6",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724944650
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "8038439699525431",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} por qué esperar si puedes comenzar tu nueva empresa hoy? ¡Abrir una empresa puede ser difícil, pero lo hacemos fácil! Te invito a ver este breve video de 2 minutos que explica todo de manera clara y avísame una vez que lo hayas visto para que pueda llamarte. https://contractorlevelup.com/llc",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_follow_7",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1725289467
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1496858710946212",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, sabías que en el mundo actual una empresa que no tiene presencia en internet \"no existe\"? ¿Cuántas veces has buscado un producto o servicio en internet? Lo mismo harán tus futuros clientes, pero no te preocupes. ¡Nosotros te podemos ayudar con eso! Te interesaría un logotipo y una página web para tu nueva empresa?",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_webiste_2",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724678033
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1014470943461423",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} ahora que ya has abierto tu empresa, qué te parecería un nuevo logotipo y una página web muy bonita para tu empresa? Te interesaría?",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_website_1",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724241846
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "813503187563219",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, cuándo fue la última vez que utilizaste Internet para comprar o buscar algo? Porque eso es exactamente lo que harán tus futuros clientes y si no te presentas, es posible que consigas menos clientes. ¡No hay problema! Podemos ayudarte con tu nuevo logotipo y sitio web, te interesaría?",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_website_3",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724850821
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "814793953835539",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, no quieres conseguir un nuevo logotipo y un sitio web para tu nueva empresa? La mejor manera de mostrar tu trabajo en Internet es con un sitio web, de modo que cuando la gente busque en Google, aparezca tu empresa. Te interesa?",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_website_4",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1725279009
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1861505767676715",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Qué le impide mostrar su nueva empresa en línea con un sitio web moderno y un logotipo profesional?",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "llc_website_5",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1725538222
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "856694743080314",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} en 2024 no tener una página web para tu empresa es como tener un carro sin gasolina... Pero por suerte, también podemos ayudarte con tu página web y tu logotipo. ¿Te interesaría?",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "llc_website_6",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1725883408
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "380633978139610",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Aquí le dejo nuestra página web también para que pueda ver nuestras reseñas: https://contractorlevelup.com/llc",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "llc_wsp_vsl",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723663221
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1880900859016747",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, no hemos podido entablar comunicación contigo. Lo que tenemos para decirte es algo supremamente beneficioso para tu compañia, dime cuando puedo llamarte, estaré esperando tu mensaje.",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "lp_cinco",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724183895
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "474818531590786",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, trate de llamarte a la hora acordada tal cual como me indicaste, pero no obtuve una respuesta. ¿Puedes hablar en este momento?",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "lp_cuatro",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724187954
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "792307569518903",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Saludos {{1}} quería recordarte sobre nuestra reciente conversación y reiterar mi compromiso en apoyarte con tu compañía, acordamos una llamada pero no ha sido posible. ¿Puedo llamarte ahora?",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "lp_dos",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723815026
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1948805432251459",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}. Soy {{2}} de Contractor Level Up, en cinco minutos estaré realizando la llamada que tenemos programada.",
                "example": {
                    "body_text": [
                        [
                            "Cliente name",
                            "Associate name"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "lp_nueve",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727204359
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "856661606432540",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, Soy {{2}} de Contractor Level Up deseandote un feliz y bendecido día ¿dejame saber si podemos hablar hoy o agendamos una llamada por favor?",
                "example": {
                    "body_text": [
                        [
                            "cliente",
                            "assocaite"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "lp_ocho",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1726153142
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "361486543387628",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, intenté llamarte pero no fue posible hablar contigo. Lo que tengo para decirte es lo que un empresario necesita para salir adelante en la construcción acá en los EEUU, déjame saber cuando puedo llamarte, espero tu mensaje!",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "lp_seis",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1386110262067870",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, acabo de llamarte y va al buzón. Todo lo que tienes que hacer es tomar una decisión, lo que tenemos para decirte es algo para tu compañía, dime cuando puedo llamarte, estaré esperando tu mensaje.",
                "example": {
                    "body_text": [
                        [
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "lp_siete",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1183884642528252",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Buen día {{1}}, sabemos que deseas dejar de depender de las recomendaciones y de los subcontratos, y tener tu propia cartera de clientes ¿Verdad?, es sobre esto que te quiero hablar, indícame una hora en que pueda llamarte, ya que no hemos podido tener contacto de nuevo.",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "lp_tres",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723828301
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "373668945104860",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}. Soy {{2}} de Contractor Level Up, le estuve llamando pero no fue posible establecer contacto con usted. Por favor, envíeme un mensaje de texto confirmando hora y fecha en la que le pueda llamar.",
                "example": {
                    "body_text": [
                        [
                            "Cliente",
                            "Associado"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "lp_uno",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723823213
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "804011128381076",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Aquí le dejo las credenciales del correo electrónico corporativo:\n\nEmail:\n{{1}}\n\nContraseña:\n{{2}}\n\nNombre de host:\n{{3}}",
                "example": {
                    "body_text": [
                        [
                            "email",
                            "contraseña",
                            "nombre de host"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.custom_email}}",
                    "{{contact.custom_email_password}}",
                    "{{contact.email_server}}"
                ]
            }
        ],
        "language": "es",
        "name": "ob_cinco_credenciales",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724780219
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "7844045512340116",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}. Soy {{2}} de Contractor Level Up. Hoy le llamé para poder acompañar el paso a paso de la instalación de la app en su teléfono y resolver sus dudas. ¿Podría indicarme a qué hora puede atender mi llamada para agendarla?",
                "example": {
                    "body_text": [
                        [
                            "ASOCIADO",
                            "CLIENTE"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "ob_cuatro",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1517746029161192",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}. Le habla {{2}} de Contractor Level Up. Soy la persona que le va a acompañar en el proceso de instalación de la app en su teléfono. ¿En qué horario puede atender mi llamada?",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE",
                            "ASOCIADO"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "ob_dos",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1275442323464314",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, le hablamos de Contractor Level Up. ¿Podría enviarnos imágenes de sus trabajos para pdoer cargarlos en la web?",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "ob_images_request",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1729529328
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1244843529867232",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, soy Matheus, trabajo en el departamento de sitios web de Contractor Level Up. Acabo de crear algunos logotipos para ti, ¿cuál te gusta más? \n¿Puedes enviarme el que te guste?\nGracias!",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "ob_logo_examples_",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727199100
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1088877769489669",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}, soy Matheus, trabajo en el departamento de sitios web de Contractor Level Up. ¿Puedes enviarme el archivo de tu logotipo? Estoy trabajando en tu sitio web en este momento.",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "ob_logo_request_",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1729509946
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "870166844993916",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, aquí le dejo todo lo necesario para acceder al correo electrónico desde una PC:\n\n\nIngrese al siguiente enlace desde un navegador web:\n{{2}}/correo\n\n\nIntroduzca las credenciales,\nEmail:\n{{3}}\n\nPassword:\n1BZwPZsPZp\n\n\nHaga click en \"LOG IN\"\n\n\nListo! Avísenos cualquier inconveniente que le surja.",
                "example": {
                    "body_text": [
                        [
                            "Cliente",
                            "dominio",
                            "email"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{contact.domain}}",
                    "{{contact.custom_email}}"
                ]
            }
        ],
        "language": "es",
        "name": "ob_seis_acceso_desde_pc",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724184976
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "495606596283096",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}. Le habla {{2}} de Contractor Level Up. Lo estoy intentando comunicar para ayudarle con el proceso de instalación del correo en su celular ¿En qué horario puedo llamarlo?",
                "example": {
                    "body_text": [
                        [
                            "CLIENTE",
                            "ASOCIADO"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "ob_tres",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "799474711851533",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Muy buen día {{1}} mi nombre es {{2}} del equipo de Contractor Level Up, podría indicarme si pudo descargar el App para poder ayudarle a configurarlo?",
                "example": {
                    "body_text": [
                        [
                            "Client",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "ob_uno",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "979231454208571",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, estoy aquí para facilitarle el acceso a los correos donde recibirá solicitudes de presupuesto. ¿Pudiste descargar la aplicación? ¿Cuando puedo llamarte? Saludos.",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "onboarding_estoy_aqui_para_facilitarle_el_acceso",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724420081
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1003294837996624",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, Podría indicar si pudo descargar el app y en que horario se encuentra disponible para llamarlo y orientarle en la configuración de su correo electrónico corporativo?",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "onboarding_podria_indicar_si_pudo_descargar",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724254540
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "2431544780367360",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}} pudiste descargar la aplicación?",
                "example": {
                    "body_text": [
                        [
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "onboarding_pudiste_descagar_la_applicacion",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724247061
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "453458400664570",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Muy buen día {{1}}, mi nombre es {{2}} del equipo de Contractor Level Up. Le comentamos su sistema ha iniciado y eso genera que los clientes puedan recibir ya sus correos, no queremos que pierda ninguna propuesta potencial por eso es importante que ya tenga configurado su correo. ¿podría indicarnos por cual medio podemos contactarlo para ayudarle?",
                "example": {
                    "body_text": [
                        [
                            "Cliente",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "onboarding_sistema_ha_iniciado",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724333467
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "918227186772821",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Enviamos sus credenciales a su correo y aquí hay un video sobre cómo iniciar sesión en la aplicación de correo electrónico: https://contractorlevelup.com/ingresarcorreo",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "onboarding_video_como_ingresar",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1486261611984746",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Enviamos sus credenciales a su correo y aquí hay un video sobre cómo iniciar sesión en la aplicación de correo electrónico: https://contractorlevelup.com/ingresarcorreo",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "onboarding_video_como_ingresar_two",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724956924
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "2328115387519967",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Muy buen dia {{1}}, mi nombre es {{2}} del equipo de Contractor Level Up, voy a ser el encargado de atenderlo en adelante. Podría indicar si pudo descargar el app y en que horario se encuentra disponible para llamarlo y orientarle en la configuración de su correo electrónico corporativo?",
                "example": {
                    "body_text": [
                        [
                            "Cliente",
                            "Associate"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "onboarding_voy_a_ser_el_encargado",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1724247102
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "7334145566683771",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "{{1}}, hemos recibido su formulario de precalificación! Qué sigue ahora? En aproximadamente 2 días hábiles, el representante del próximo departamento le va a enviar un mensaje para presentarse y para que tenga presente quien va hablar con usted",
                "example": {
                    "body_text": [
                        [
                            "Client Name"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pqfreceivedconfirmation",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723335397
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "524491170379317",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}} me contacto del Departamento de Promociones de Contractor Level Up. Hemos analizado su perfil, y el gran interés que tiene en tomar nuestro servicio, y nos pareció adecuado comentarle de un plan de pagos que aún tiene vigente y la flexibilidad que implica para que pueda tener resultados concretos. Puede hablar hoy y le comento de que se trata?",
                "example": {
                    "body_text": [
                        [
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "promo_department_intro",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "452265350773731",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/425252447_452265354107064_3280016367931192030_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=ZghaPsU69eYQ7kNvgEUI4PQ&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIDtiijZ_VYZExykQR9ti04tzuIfMTnC3GCEAyfZeROLS&oe=674FA319"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/66761406e39b0217dca45132.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Assocait",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyaalejandrahurtado",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1124326142106929",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/459785785_1211703296702546_3693774290560172965_n.png?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=G-zSmB34sUIQ7kNvgHpTPHe&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIFuEp9hqSwVlFmlvC3d-6Ri5v7nBWtysorLnl-Q2Z6IF&oe=674FADC2"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/66fb16d65827b721710564e0.png"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associate",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyaangelamachado",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723753764
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "482939337494179",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/417057851_482939340827512_336075840228491383_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=xP0iVk7SmJUQ7kNvgFzQxLV&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIL_cLXT62Oj_mHzFqPG2ztyeLomOERPa21mb6BhBU3DB&oe=674F8C1B"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/665a1712c457768247c995c6.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associate",
                            "Clinte"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyaangiedayana",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1725391083
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1591618448287867",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/461370463_1689627971820247_3998763514720618450_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=ETn4pbYOG9MQ7kNvgH4gdbD&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIFngIAOwTy6_utROsxX6eDt2W-p4atX_dfL_Xv_DlESs&oe=674FAC2A"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/66fb16bfee8bc9d2ab31a3fe.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "associate",
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyaangielatorres",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1176155576907176",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/427980359_1176162320239835_7219434361556214636_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=9nyJykof3v0Q7kNvgHZuheH&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIGqnGkhuoqwfkw-U5gamov2HbDjKaOTNtF23RZPVZVC5&oe=674FACF7"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/667618b7a9ef86559cc947ed.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associat",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyaarturoarbelaez",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1582875485893042",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/425171179_1582875682559689_3658746822367856490_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=14DfepkrgI4Q7kNvgESQfAc&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIAGcgL3lDZF-c57svdO4xOpfcJiSetAE2QXCK6dzCW5M&oe=674FAA18"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/663eb608699c7e63ba295bae.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associate",
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyacarlosmarin",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723767354
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1015974456822708",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/414488610_1015974460156041_6509026984093801860_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=Rw6gYkQ19jIQ7kNvgGWi42Y&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIJbqMBlChrxBnygCQlmilYzMMH5gtZawFdEk7Q-0tN6g&oe=674F8D1D"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/6676145234b4a16cefee6f2a.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associat",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyacarlosvalderrama",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "443857701484849",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/315797551_443857704818182_1335519473737673345_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=fLbVaUWWSHQQ7kNvgHS5AaY&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIKLJ62qmysap55HlUJEdJOEl7wyJPbT0bSYj4redCUo5&oe=674F8C30"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/66fdad758c006bee25ab65fa.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "associat",
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyadaniel",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727986869
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "343633671857620",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/425606718_343633675190953_1916164317789319160_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=NsSr58Qj_14Q7kNvgFM06wW&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIOZOc9aexSffT6R1ZU2QNqBy7hPIzLKhYFNkPAGmENBx&oe=674FAD4F"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/665a2e391b846518d89393e9.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associate",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyadidier",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1012293320294211",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/328155889_1012293323627544_5520290104901256413_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=Dgt48vkvE0EQ7kNvgERXwrv&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIFWvhfVx5yQph4NMgSUr-3Trr4SvVlGAZzYQG69ic65P&oe=674F8765"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/665a1693c6bcc8c4eadba0f7.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associat",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyaedwardduvan",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1536759633574387",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/436687648_1536759636907720_7231426484533176352_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=3rbhFZ9IT88Q7kNvgEatuJh&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIBapaeEQYR6xh5Q31Lu0QhrxzAvmKj4naUhuWp9jQjPn&oe=674FA190"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/6679cbc5cb1860931e413811.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "associat",
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyaesneiderleonardo",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727126676
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "457579479975412",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/389384797_457579586642068_2909039976376347665_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=YGdfO3qGqz4Q7kNvgGdy3Cl&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaICf_sZZou0I3R0ocLfEVKI1cevI3s3r-09i2UH8C0FN9&oe=674FA047"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/663eb934660abad12b8dff30.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associate",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyafrancodelavega",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723753709
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "852248560374326",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/417325109_852248563707659_2524671316057623039_n.png?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=YR2ErkW0zikQ7kNvgEaq8QR&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIPiVaJPtEURT8Twii6PibzVr101344m507BWopx9HNTZ&oe=674FAC0E"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/66fdada1dd77a0fdaa145726.png"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "associat",
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyaguadalupe",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1786950908459640",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/425234519_1786951215126276_8303753541820203724_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=sl7J1aTNB1YQ7kNvgFUkf4i&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIDeq7Bq52cQ05ajbYUS4nX4m58KD8sKKmlO0fJ6zN1_m&oe=674F857B"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/663eb4b602dbb028fbde3689.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associate",
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyahenrybecerra",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723751293
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "3719684304935513",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/428071636_3719684701602140_7775402787474790919_n.png?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=euLNorQIEU8Q7kNvgEqSt5v&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIFuupqbMhrP9tL6y3cpHCRdrsVwMLH7RHTSZv06uEQPC&oe=674FAC57"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/663eb834660aba50d58dff10.png"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associate",
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyahumbertocastiblanco",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "3765780513691452",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/409125436_3765781093691394_7383489237304291845_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=hYl0j2MnkksQ7kNvgERWljW&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIBKVeV9rdUBakT9YTJx03Hc3HSsdeIrYMMO2eSr0-P7W&oe=674F8DA9"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/663eb81fb47850183e33f499.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associate",
                            "Client3"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyajavierromero",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723836637
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "476043025002646",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/445321125_476043028335979_7512490075931251309_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=n3Yh5OPZOCkQ7kNvgHdSu63&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIO2BmqlRpoJVCu7TjQg6wODuk5YONLZi_iLL3ugYX9g-&oe=674F844D"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/667613cc34b4a18bd6ee6eef.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Assocait",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyajeison",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1310048340398589",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/421920054_1417341753002580_5867300488664347095_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=w3WgB6WMFq8Q7kNvgEWvFMo&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIKA6NoFa-4ugHzsgpIzezyZJcKImbmK-TF5hXRseGyIo&oe=674F7B50"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/66fb169c701faa272faa92bf.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associate",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyajenifertabares",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723664493
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1624705628363611",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/418698912_1710983393069167_2428076235001259771_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=aT4rRp5Ez-sQ7kNvgFAJA0M&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIOHRx6pyL3am5JJTZ1WHnYDDwB0_T1mQMc9eh-3dfcks&oe=674F83A5"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/66ec85268c3b6a9b669f8425.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associate",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyajesusarture",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723947567
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "455452220523131",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/437115566_455452223856464_3580052075273183643_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=5an6-kV-H5EQ7kNvgGTV6XU&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIFVTjMDRSYUZgbExTBMN6LkteBuO4ur3EhUSrQVFB3z0&oe=674F8DDD"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/6679cba234b4a1435af1aaa3.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "associat",
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyajohndanilo",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1727209646
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1008952880611248",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/445943603_1008952883944581_9081650709159711472_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=vwHrpcWaMAcQ7kNvgHh0-ce&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIAzAJAwGQBIPPEUtEHnD9ZMGAfWD0PellHiFSvRm8eYA&oe=674F98FD"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/667613ac34b4a12e76ee6eee.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associat",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyajuancorrea",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "304062396080447",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/389521425_304062732747080_7761106955306182030_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=0HCTojE8LrgQ7kNvgEAV5wp&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIHZ_-TT7RVFkuEc165aYBLMUD5_mdpdp3UcJgnwEsOy7&oe=674F9907"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/663eb768660aba62c28dfee2.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associate",
                            "Cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyajuliandavid",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723750049
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "979813733890600",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/454530734_1070239048181401_7087509554029762209_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=d2_mp28cQEAQ7kNvgHR9C1q&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaICypXkB4jzCdh_OgoHtySuEwNjl1Pmrcm9tWOxr0tbuQ&oe=674FAF9B"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/66fb167c5827b7efd30564cd.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associate",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyakeismernavarro",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723838773
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "434658572518216",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/399598466_434658575851549_8261534657561537575_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=cQGlHwxzMcUQ7kNvgFgvo3V&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIHH4yWSK3jNZ3Bu2FhC_cVTQFguv9rSKUJ-YP6yzXYiN&oe=674FAC37"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/663eb2d9699c7e4062295aa7.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associate",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyakimberlyherrera",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723668090
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "780913623954183",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/425257395_780913907287488_5239577448110986689_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=x64HyoGNVqgQ7kNvgEkDcnI&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIN9DoX3v1f_2iL5w_rs4TkbVUu2MmVAlOlEWN6MDRqyj&oe=674F7FE1"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/663eb54c699c7e3a08295b3f.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associate",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyalucashernandez",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723487755
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "988456225494983",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/363933578_988456395494966_8609477238835507219_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=jdNdsqi8vj0Q7kNvgFMlH91&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIPVSdk4OdvaeHNr-QmJTFDDtLwGW_ytnOoUjrObggoXe&oe=674F825C"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/663eb8d6699c7e4706295da4.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associate",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyalucianoelias",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723666635
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1128396221706315",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/425243891_1128396225039648_3370653610802227858_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=lGdUx3r_0wMQ7kNvgHLMWy1&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIAK1IaV2IywMzea7EcMlBwYc-x7fOIOr0GCp4B_tbua9&oe=674F943E"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/665e4ac86cee2b3fe7567fb7.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associat",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyamanuelclosing",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1725397864
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "555897697012650",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/456084589_555897713679315_5629031435254326152_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=qBan6GRhNCQQ7kNvgGxLCbK&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIJbBUCSZ1ZY8MYP-6AgX7pEqYyiociWPHDkpIJM9Gw5J&oe=674FA4E1"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/66fdad21852fe37c42ffcaf8.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "associat",
                            "cliente"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyamaria",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "790118183083970",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/389248232_790118323083956_1688680273663771346_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=9vir-F9gaWMQ7kNvgH38VnU&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaID6lZmkOKzwbS_jROAznYxEdY4AJd1ZOzbS_0eHdoDsp&oe=674F9056"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/663eb5b9863715a7b9a89b2f.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associate",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyamartincordoba",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723665652
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1064974455152535",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/454542715_1064974458485868_2412445926779211235_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=EDmRJCBRkxAQ7kNvgEDcP_i&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIIY82z0vT9d-alUjwgbiwcr9mAKgakIqllsSlpmTB4ep&oe=674F81D8"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/66fdad4866a472594be02dd9.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "assocait",
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyamilton",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1630560701122453",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/328150496_1630560704455786_3161440887006833632_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=zzs5nmDjZbAQ7kNvgGzXJQI&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIHK-4n5DBd3Cf_ITb7uslmo2KY3i02Pmf3W8QvcnwicW&oe=674F8F37"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/6676138201d4bd8204909019.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associat",
                            "client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyanataliacaceres",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "3722122944737001",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/421109881_3722122948070334_8099282469772487401_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=JQLqslFP46kQ7kNvgFL3H-v&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIAvNzi8Dd8TEoJVGOBwNfYHF0JPEBqlJEJFT_kAXO0Rb&oe=674F8D28"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/6676142b19bb7a596e495150.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associat",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyarocio",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "429511006470361",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/409122675_429511363136992_2499241315086440273_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=j5JRHoYG4OYQ7kNvgGa9Cpt&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIB36txPnlqtx46xTxqXh4nWpUmX1e5vIO182FuKq_KC9&oe=674F88E7"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/663eb8c5699c7ee3d0295da2.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associate",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyarudymota",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723755480
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "427447913482906",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/410065249_427447916816239_7170587364957181294_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=6rS7I97-5N8Q7kNvgGVnQNC&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIFu6oekQxjx_CSdtybsPYyv6UHrQ1PZXaVs-tbronVYN&oe=674F9BA6"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/665a16e93d9a0c9609ecbab6.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associat",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyawilsonandres",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1725302863
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1143489656796595",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "IMAGE",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/428091623_1143489660129928_9003883646286889003_n.jpg?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=va-HXhAQ8sUQ7kNvgEi-9W6&_nc_zt=3&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIBV-ahNPdgj8GYdyiYaf9ksg1NRpWudWjLhhjXMetLn7&oe=674F85A7"
                    ]
                },
                "customVariables": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/665a16be8f9d1e465b9beedb.jpeg"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hola, mi nombre es {{1}} de Contractor Level Up. Un placer conocerte {{2}}. Tu formulario de precalificación fue aprobado! Creo que puedo ayudarte con mas solicitudes de estimado! Puedes hablar hoy?",
                "example": {
                    "body_text": [
                        [
                            "Associat",
                            "Client"
                        ]
                    ]
                },
                "customVariables": [
                    "{{user.first_name}}",
                    "{{contact.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "pyayiselacharry",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1725499395
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1194928555095517",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Crear Cuenta - https://buy.contractorlevelup.com/112358497esp",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "system_crear_cuenta_al_momento",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "1456548265249420",
        "category": "MARKETING",
        "components": [
            {
                "type": "HEADER",
                "format": "VIDEO",
                "example": {
                    "header_handle": [
                        "https://scontent.whatsapp.net/v/t61.29466-34/396497307_1456548268582753_6557114814812783798_n.mp4?ccb=1-7&_nc_sid=8b1bef&_nc_ohc=S35669HBCosQ7kNvgH2DDpn&_nc_zt=28&_nc_ht=scontent.whatsapp.net&edm=AH51TzQEAAAA&_nc_gid=Ad9nm35x19xnZ4XejPr-z2t&oh=01_Q5AaIIqyzBpctJgpMOq4P-8JAiGeuKFD-fwflps1Mj-N1rLf&oe=674FAB3C"
                    ]
                },
                "customVariables": [
                    {
                        "type": "video",
                        "video": {
                            "link": "https://storage.googleapis.com/msgsndr/7gcRvmSzndyAWZHzYU01/media/664538e40a61a5e8da53699e.mp4"
                        }
                    }
                ]
            },
            {
                "type": "BODY",
                "text": "Hi this message is to test the attachmen thank you friend.",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "testmp4",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "362306723062384",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Hola {{1}}. Soy {{2}} de Contractor Level Up, le estuve llamando como habíamos convenido por mensaje pero no fue posible establecer contacto con usted. Por favor, envíeme un mensaje de texto confirmando hora y fecha en la que le pueda llamar.",
                "example": {
                    "body_text": [
                        [
                            "Cliente",
                            "Asociado"
                        ]
                    ]
                },
                "customVariables": [
                    "{{contact.first_name}}",
                    "{{user.first_name}}"
                ]
            }
        ],
        "language": "es",
        "name": "video_teste_plantilla_x",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1730684233
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    },
    {
        "id": "315686058084323",
        "category": "MARKETING",
        "components": [
            {
                "type": "BODY",
                "text": "Aquí le dejo nuestra página web también para que pueda ver nuestras reseñas: https://contractorlevelup.com/presentacion",
                "customVariables": []
            }
        ],
        "language": "es",
        "name": "websiteresena",
        "quality_score": {
            "score": "UNKNOWN",
            "date": 1723147565
        },
        "rejected_reason": "NONE",
        "status": "APPROVED"
    }
]
async function main() {
        const dataToInsert = templates.map(template => ({
            idTemplate: template.id,
            category: template.category,
            description: template.components[0].text || "Descripción no disponible",
        }));
        await prisma.template.createMany({
            data: dataToInsert,
        });

        console.log('Templates added!');
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });