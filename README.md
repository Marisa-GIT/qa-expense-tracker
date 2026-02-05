# qa-expense-tracker
Descripción del Proyecto

Expense Tracker es una plataforma web diseñada para gestionar gastos de usuarios y permitir su aprobación o rechazo por parte de un administrador.
Este proyecto fue creado con un enfoque integral de Quality Assurance (QA), cubriendo pruebas manuales, automatizadas, API testing, UAT, pruebas no funcionales y monitoreo de errores.

El objetivo principal es demostrar habilidades prácticas de QA en un escenario realista, desde la planificación hasta la ejecución y documentación de pruebas.

🎯 Objetivos del Proyecto

Aplicar fundamentos de QA en un proyecto real

Diseñar y ejecutar pruebas funcionales y no funcionales

Validar flujos completos mediante UAT

Automatizar escenarios críticos

Probar APIs REST

Gestionar defectos de forma profesional

Integrar monitoreo de errores con Sentry

Utilizar Git y GitHub como control de versiones

👥 Roles del Sistema
🧑‍💼 Usuario

Iniciar sesión

Crear gastos

Visualizar historial de gastos

Consultar estado de cada gasto

👨‍💼 Administrador

Iniciar sesión

Visualizar todos los gastos

Aprobar o rechazar gastos

Validar estados finales

🖥️ Funcionalidades Principales

Login con control de roles

Registro de gastos

Estados de gasto: Pendiente, Aprobado, Rechazado

Listado y filtrado de gastos

Gestión administrativa

Manejo de errores

Validaciones de formularios

🧪 Estrategia de Testing
Tipos de pruebas aplicadas:

Functional Testing

Smoke Testing

Sanity Testing

Regression Testing

Exploratory Testing

User Acceptance Testing (UAT)

API Testing

Performance Testing (básico)

Accessibility Testing

Security Testing (básico)

📋 Documentación QA Incluida

✔️ Test Plan

✔️ Casos de prueba funcionales y negativos

✔️ Escenarios UAT

✔️ Reportes de bugs

✔️ Evidencia de pruebas (screenshots / logs)

✔️ Diagramas de pantallas (Draw.io)

🔍 Casos de Prueba

Los casos de prueba fueron derivados directamente de:

Diagramas de pantallas

Flujos funcionales

Reglas de negocio

Incluyen:

Casos positivos

Casos negativos

Validaciones

Pruebas por rol

📦 API Testing

Colecciones creadas en Postman

Endpoints probados:

POST /login

GET /expenses

POST /expenses

PUT /expenses/{id}

Validaciones automáticas

Ejecución con Newman

🤖 Automatización de Pruebas

Automatización de flujos críticos:

Login

Creación de gasto

Enfoque en pruebas de regresión

Evidencia de ejecución incluida

⚙️ Pruebas No Funcionales
🚀 Performance

Análisis básico con Lighthouse

Medición de tiempos de carga

♿ Accesibilidad

Evaluación con herramientas automáticas

Validación de contraste, etiquetas y navegación

🔐 Seguridad (básica)

Validación de roles

Acceso restringido a vistas administrativas

Pruebas de acceso directo a URLs

🚨 Monitoreo de Errores – Sentry

Integración de Sentry en el frontend

Captura de errores en tiempo real

Análisis de errores simulados y reales

Evidencia documentada

🛠️ Herramientas Utilizadas

Git / GitHub

Postman / Newman

Cypress o Playwright

Lighthouse

Axe / Wave

Sentry

Draw.io
