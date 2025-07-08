export type TranslationKey = 
  | 'logoAlt'
  | 'heroTitle'
  | 'heroSubtitle'
  | 'heroDescription'
  | 'heroCTA'
  | 'documentManagement'
  | 'documentManagementDesc'
  | 'approvalRoutes'
  | 'approvalRoutesDesc'
  | 'executionControl'
  | 'executionControlDesc'
  | 'votingTitle'
  | 'votingSubtitle'
  | 'votingDescription'
  | 'transparentPath'
  | 'mobileVoting'
  | 'speedUp'
  | 'notifications'
  | 'electronicSignatureTitle'
  | 'electronicSignatureSubtitle'
  | 'electronicSignatureDescription'
  | 'securityTitle'
  | 'securitySubtitle'
  | 'securityDescription'
  | 'encryption'
  | 'accessControl'
  | 'auditTrail'
  | 'workflowTitle'
  | 'workflowSubtitle'
  | 'workflowDescription'
  | 'automation'
  | 'integration'
  | 'reporting'
  | 'adaptationTitle'
  | 'adaptationSubtitle'
  | 'adaptationDescription'
  | 'customization'
  | 'documentTypes'
  | 'training'
  | 'support'
  | 'pricingTitle'
  | 'pricingSubtitle'
  | 'pricingDescription'
  | 'choosePlan'
  | 'contactTitle'
  | 'contactSubtitle'
  | 'contactDescription'
  | 'fullName'
  | 'email'
  | 'message'
  | 'send'
  | 'footerRights'
  | 'footerPrivacy'
  | 'footerTerms'
  | 'pricingPlanBasic'
  | 'pricingPlanStandard'
  | 'pricingPlanPremium'
  | 'basicPlanPrice'
  | 'standardPlanPrice'
  | 'premiumPlanPrice'
  | 'basicPlanDescription'
  | 'standardPlanDescription'
  | 'premiumPlanDescription'
  | 'loadingTitle'
  | 'loadingSubtitle'
  // Document Management
  | 'docMgmtTitle'
  | 'docMgmtSubtitle'
  | 'docMgmtDescription'
  | 'docMgmtFeature1Title'
  | 'docMgmtFeature1Desc'
  | 'docMgmtFeature2Title'
  | 'docMgmtFeature2Desc'
  | 'docMgmtFeature3Title'
  | 'docMgmtFeature3Desc'
  | 'docMgmtFeature4Title'
  | 'docMgmtFeature4Desc'
  | 'docMgmtFeature5Title'
  | 'docMgmtFeature5Desc'
  | 'docMgmtFeature6Title'
  | 'docMgmtFeature6Desc'
  // Electronic Signature
  | 'eSignTitle'
  | 'eSignSubtitle'
  | 'eSignDescription'
  | 'eSignFeature1Title'
  | 'eSignFeature1Desc'
  | 'eSignFeature2Title'
  | 'eSignFeature2Desc'
  | 'eSignFeature3Title'
  | 'eSignFeature3Desc'
  | 'eSignFeature4Title'
  | 'eSignFeature4Desc'
  | 'eSignTabSign'
  | 'eSignTabVerify'
  | 'eSignTabHistory'
  | 'eSignTabSignTitle'
  | 'eSignTabSignDesc'
  | 'eSignTabVerifyTitle'
  | 'eSignTabVerifyDesc'
  | 'eSignTabHistoryTitle'
  | 'eSignTabHistoryDesc'
  // Navigation
  | 'home'
  | 'features'
  | 'solutions'
  | 'processes'
  | 'security'
  | 'pricing'
  | 'contacts'
  | 'navigation'
  | 'closeMenuAria'
  | 'openMenuAria'
  // Footer
  | 'footerDescription'
  | 'allRightsReserved'
  | 'electronicSignature'
  | 'hrDocuments'
  | 'knowledgeBase'
  | 'contactPhone'
  | 'contactEmail'
  | 'contactAddress'
  | 'contactPerson'
  // Contact Section
  | 'turnkeyTitle'
  | 'turnkeyDescription'
  | 'platformCustomization'
  | 'documentConfiguration'
  | 'employeeTraining'
  | 'technicalSupport'
  | 'contactInfo'
  | 'contactUs'
  // Contact Modal
  | 'closeModal'
  | 'contactModalTitle'
  | 'contactModalNameLabel'
  | 'contactModalNamePlaceholder'
  | 'contactModalPhoneLabel'
  | 'contactModalSubmitting'
  | 'contactModalSuccess'
  | 'contactModalError'
  | 'contactModalSubmit'
  // Pricing
  | 'tariffStart'
  | 'tariffTeam'
  | 'tariffPro'
  | 'tariffEnterprise'
  | 'tariffCorporate'
  | 'tariffUsers5'
  | 'tariffUsers20'
  | 'tariffUsers50'
  | 'tariffUsers100'
  | 'tariffUsers100plus'
  | 'tariffPriceStart'
  | 'tariffPriceTeam'
  | 'tariffPricePro'
  | 'tariffPriceEnterprise'
  | 'tariffPriceCorporate'
  | 'activeUsers'
  | 'pricingFeatureUsers5'
  | 'pricingFeatureUsers20'
  | 'pricingFeatureUsers50'
  | 'pricingFeatureUsers100'
  | 'pricingFeatureUsers100plus'
  | 'pricingFeatureBasic'
  | 'pricingFeatureAdvanced'
  | 'pricingFeatureAll'
  | 'pricingFeatureCustom'
  | 'pricingFeatureEmailSupport'
  | 'pricingFeaturePrioritySupport'
  | 'pricingFeature247Support'
  | 'pricingFeaturePersonalManager'
  | 'pricingFeatureVipSupport'
  | 'pricingOrderBtn'
  // Security Section
  | 'securitySectionMainTitle'
  | 'securitySectionMainDesc'
  | 'onPremiseDeploymentTitle'
  | 'onPremiseDeploymentDesc'
  | 'onPremiseFeature1'
  | 'onPremiseFeature2'
  | 'onPremiseFeature3'
  | 'cloudDeploymentTitle'
  | 'cloudDeploymentDesc'
  | 'cloudFeature1'
  | 'cloudFeature2'
  | 'cloudFeature3'
  | 'securityBenefitConfidentialityTitle'
  | 'securityBenefitConfidentialityDesc'
  | 'securityBenefitControlTitle'
  | 'securityBenefitControlDesc'
  | 'securityBenefitComplianceTitle'
  | 'securityBenefitComplianceDesc'
  | 'securityBenefitAdminTitle'
  | 'securityBenefitAdminDesc'
  // Workflow Section
  | 'workflowSectionSubtitle'
  | 'workflowSectionTitle'
  | 'workflowSectionDescription'
  | 'workflowVoteTitle'
  | 'workflowVoteFeat1Title'
  | 'workflowVoteFeat1Desc'
  | 'workflowVoteFeat2Title'
  | 'workflowVoteFeat2Desc'
  | 'workflowVoteFeat3Title'
  | 'workflowVoteFeat3Desc'
  | 'workflowDynDocTitle'
  | 'workflowDynDocFeat1Title'
  | 'workflowDynDocFeat1Desc'
  | 'workflowDynDocFeat2Title'
  | 'workflowDynDocFeat2Desc'
  | 'workflowDynDocFeat3Title'
  | 'workflowDynDocFeat3Desc'
  | 'workflowHRTitle'
  | 'workflowHRFeat1Title'
  | 'workflowHRFeat1Desc'
  | 'workflowHRFeat2Title'
  | 'workflowHRFeat2Desc'
  | 'workflowHRFeat3Title'
  | 'workflowHRFeat3Desc'
  | 'workflowHRFeat4Title'
  | 'workflowHRFeat4Desc'
  | 'workflowControlTitle'
  | 'workflowControlFeat1Title'
  | 'workflowControlFeat1Desc'
  | 'workflowControlFeat2Title'
  | 'workflowControlFeat2Desc'
  | 'workflowControlFeat3Title'
  | 'workflowControlFeat3Desc';

export type Language = 'ru' | 'en' | 'uz';

export const translations: Record<Language, Record<TranslationKey, string>> = {
  ru: {
    logoAlt: 'Логотип системы управления документами',
    heroTitle: 'Цифровое Управление Документооборотом',
    heroSubtitle: 'Современная система для эффективного управления документами, согласования и контроля исполнения в вашей организации',
    heroDescription: 'Основные возможности системы:',
    heroCTA: 'Узнать больше',
    documentManagement: 'Управление документами',
    documentManagementDesc: 'Централизованное хранение и организация всех документов',
    approvalRoutes: 'Маршруты согласования',
    approvalRoutesDesc: 'Настраиваемые процессы согласования и утверждения',
    executionControl: 'Контроль исполнения',
    executionControlDesc: 'Отслеживание статуса и сроков выполнения задач',
    // Document Management
    docMgmtTitle: 'Управление документами',
    docMgmtSubtitle: 'Полный контроль над документооборотом',
    docMgmtDescription: 'Централизованная система управления документами с возможностью создания, редактирования, согласования и контроля версий.',
    docMgmtFeature1Title: 'Создание документов',
    docMgmtFeature1Desc: 'Простое создание документов с использованием шаблонов',
    docMgmtFeature2Title: 'Контроль версий',
    docMgmtFeature2Desc: 'Отслеживание всех изменений и версий документов',
    docMgmtFeature3Title: 'Автоматизация',
    docMgmtFeature3Desc: 'Автоматическое назначение задач и уведомления',
    docMgmtFeature4Title: 'Комментарии',
    docMgmtFeature4Desc: 'Система комментариев для обратной связи',
    docMgmtFeature5Title: 'Совместная работа',
    docMgmtFeature5Desc: 'Возможность совместного редактирования документов',
    docMgmtFeature6Title: 'Безопасность',
    docMgmtFeature6Desc: 'Защищенное хранение и передача документов',
    // Voting and other features
    votingTitle: 'Рабочие группы и комитеты',
    votingSubtitle: 'Организуйте прозрачные и безопасные голосования',
    votingDescription: 'Наше решение для электронного голосования обеспечивает надежность и удобство голосования при принятии групповых решений.',
    transparentPath: 'Прозрачный маршрут',
    mobileVoting: 'История документа',
    speedUp: 'Ускорение процесса',
    notifications: 'Уведомление о статусе',
    // Electronic Signature
    eSignTitle: 'Электронная подпись E-IMZO',
    eSignSubtitle: 'Безопасные и юридически значимые подписи',
    eSignDescription: 'Интегрируйте надежные инструменты электронной подписи для ускорения процессов и повышения безопасности документов.',
    eSignFeature1Title: 'Безопасность',
    eSignFeature1Desc: 'Криптографическая защита подписей',
    eSignFeature2Title: 'Юридическая сила',
    eSignFeature2Desc: 'Полное соответствие законодательству',
    eSignFeature3Title: 'Шифрование',
    eSignFeature3Desc: 'Надежное шифрование данных',
    eSignFeature4Title: 'QR-коды',
    eSignFeature4Desc: 'Быстрая проверка подлинности',
    eSignTabSign: 'Подписание',
    eSignTabVerify: 'Проверка',
    eSignTabHistory: 'История',
    eSignTabSignTitle: 'Подписание документов',
    eSignTabSignDesc: 'Быстрое и безопасное подписание',
    eSignTabVerifyTitle: 'Проверка подписей',
    eSignTabVerifyDesc: 'Проверка подлинности подписей',
    eSignTabHistoryTitle: 'История подписей',
    eSignTabHistoryDesc: 'Полная история всех операций',
    electronicSignatureTitle: 'Электронная подпись',
    electronicSignatureSubtitle: 'Безопасные и юридически значимые подписи',
    electronicSignatureDescription: 'Интегрируйте надежные инструменты электронной подписи для ускорения процессов и повышения безопасности документов.',
    // Security, workflow, adaptation
    securityTitle: 'Безопасность данных',
    securitySubtitle: 'Защита вашей информации — наш приоритет',
    securityDescription: 'Мы обеспечиваем многоуровневую защиту ваших данных, чтобы вы могли сосредоточиться на своем бизнесе.',
    encryption: 'Шифрование данных',
    accessControl: 'Контроль доступа',
    auditTrail: 'Аудит действий',
    workflowTitle: 'Автоматизация рабочих процессов',
    workflowSubtitle: 'Оптимизируйте свои бизнес-процессы',
    workflowDescription: 'Автоматизируйте рутинные задачи, чтобы повысить эффективность и снизить вероятность ошибок.',
    automation: 'Автоматизация задач',
    integration: 'Интеграция с другими системами',
    reporting: 'Отчетность и аналитика',
    adaptationTitle: 'Адаптация под ваши нужды',
    adaptationSubtitle: 'Гибкая настройка системы под ваши требования',
    adaptationDescription: 'Настройте систему под свои уникальные бизнес-процессы и получите максимальную отдачу от ее использования.',
    customization: 'Настройка интерфейса',
    documentTypes: 'Поддержка различных типов документов',
    training: 'Обучение персонала',
    support: 'Техническая поддержка',
    // Pricing
    pricingTitle: 'Тарифы и стоимость',
    pricingSubtitle: 'Выберите оптимальный тариф для вашего бизнеса',
    pricingDescription: 'Мы предлагаем гибкие тарифные планы, чтобы каждый клиент мог найти подходящее решение.',
    choosePlan: 'Выбрать план',
    tariffStart: 'Starter',
    tariffTeam: 'Team',
    tariffPro: 'Professional',
    tariffEnterprise: 'Enterprise',
    tariffCorporate: 'Corporate',
    tariffUsers5: 'До 5 пользователей',
    tariffUsers20: 'До 20 пользователей',
    tariffUsers50: 'До 50 пользователей',
    tariffUsers100: 'До 100 пользователей',
    tariffUsers100plus: 'Свыше 100 пользователей',
    tariffPriceStart: '100,000 so\'m/month',
    tariffPriceTeam: '300,000 so\'m/month',
    tariffPricePro: '700,000 so\'m/month',
    tariffPriceEnterprise: '1,200,000 so\'m/month',
    tariffPriceCorporate: 'По запросу',
    activeUsers: 'активных пользователей',
    pricingFeatureUsers5: 'До 5 пользователей',
    pricingFeatureUsers20: 'До 20 пользователей',
    pricingFeatureUsers50: 'До 50 пользователей',
    pricingFeatureUsers100: 'До 100 пользователей',
    pricingFeatureUsers100plus: 'Неограниченно пользователей',
    pricingFeatureBasic: 'Базовая функциональность',
    pricingFeatureAdvanced: 'Расширенные возможности',
    pricingFeatureAll: 'Полная функциональность',
    pricingFeatureCustom: 'Индивидуальная настройка',
    pricingFeatureEmailSupport: 'Поддержка по email',
    pricingFeaturePrioritySupport: 'Приоритетная поддержка',
    pricingFeature247Support: 'Круглосуточная поддержка',
    pricingFeaturePersonalManager: 'Персональный менеджер',
    pricingFeatureVipSupport: 'VIP поддержка',
    pricingOrderBtn: 'Заказать',
    // Contact
    contactTitle: 'Связаться с нами',
    contactSubtitle: 'Мы готовы ответить на все ваши вопросы',
    contactDescription: 'Оставьте заявку, и мы свяжемся с вами в ближайшее время.',
    turnkeyTitle: 'Решение "под ключ"',
    turnkeyDescription: 'Мы предоставляем полное решение для автоматизации документооборота в вашей организации.',
    platformCustomization: 'Настройка платформы под ваши задачи',
    documentConfiguration: 'Конфигурация типов документов',
    employeeTraining: 'Обучение сотрудников работе с системой',
    technicalSupport: 'Техническая поддержка и сопровождение',
    contactInfo: 'Контактная информация',
    contactUs: 'Связаться с нами',
    contactPhone: '+998 90 123 45 67',
    contactEmail: 'info@edoline.uz',
    contactAddress: 'Ташкент, 9-й проезд, ул. А. Каххара, д.1А',
    contactPerson: 'Менеджер по продажам',
    fullName: 'ФИО',
    email: 'Электронная почта',
    message: 'Сообщение',
    send: 'Отправить',
    // Contact Modal
    closeModal: 'Закрыть',
    contactModalTitle: 'Свяжитесь с нами',
    contactModalNameLabel: 'Имя',
    contactModalNamePlaceholder: 'Введите ваше имя',
    contactModalPhoneLabel: 'Телефон',
    contactModalSubmitting: 'Отправка...',
    contactModalSuccess: 'Отправлено!',
    contactModalError: 'Ошибка отправки',
    contactModalSubmit: 'Отправить заявку',
    // Navigation
    home: 'Главная',
    features: 'Возможности',
    solutions: 'Решения',
    processes: 'Процессы',
    security: 'Безопасность',
    pricing: 'Цены',
    contacts: 'Контакты',
    navigation: 'Навигация',
    closeMenuAria: 'Закрыть меню',
    openMenuAria: 'Открыть меню',
    // Footer
    footerDescription: 'EdoLine — современная система управления документооборотом для эффективной работы вашей организации.',
    allRightsReserved: 'Все права защищены',
    electronicSignature: 'Электронная подпись',
    hrDocuments: 'HR-документы',
    knowledgeBase: 'База знаний',
    footerRights: 'Все права защищены',
    footerPrivacy: 'Политика конфиденциальности',
    footerTerms: 'Условия использования',
    // Plans
    pricingPlanBasic: 'Базовый',
    pricingPlanStandard: 'Стандартный',
    pricingPlanPremium: 'Премиум',
    basicPlanPrice: '100 000 so\'m / мес',
    standardPlanPrice: '300 000 so\'m / мес',
    premiumPlanPrice: '500 000 so\'m / мес',
    basicPlanDescription: 'Оптимальное решение для малого бизнеса',
    standardPlanDescription: 'Расширенные возможности для среднего бизнеса',
    premiumPlanDescription: 'Максимальная функциональность для крупных предприятий',
    // Loading
    loadingTitle: 'Добро пожаловать!',
    loadingSubtitle: 'Загружаем систему управления документами...',
    // Security Section
    securitySectionMainTitle: 'Безопасность и развертывание',
    securitySectionMainDesc: 'Надежная защита ваших данных с гибкими вариантами развертывания',
    onPremiseDeploymentTitle: 'Локальное развертывание',
    onPremiseDeploymentDesc: 'Полный контроль над данными и инфраструктурой',
    onPremiseFeature1: 'Развертывание на собственных серверах',
    onPremiseFeature2: 'Полный контроль над данными',
    onPremiseFeature3: 'Настройка под корпоративные стандарты',
    cloudDeploymentTitle: 'Облачное развертывание',
    cloudDeploymentDesc: 'Быстрое развертывание с минимальными затратами',
    cloudFeature1: 'Быстрый запуск и масштабирование',
    cloudFeature2: 'Автоматические обновления',
    cloudFeature3: 'Резервное копирование в облаке',
    securityBenefitConfidentialityTitle: 'Конфиденциальность',
    securityBenefitConfidentialityDesc: 'Защита корпоративной информации',
    securityBenefitControlTitle: 'Контроль доступа',
    securityBenefitControlDesc: 'Гибкое управление правами пользователей',
    securityBenefitComplianceTitle: 'Соответствие стандартам',
    securityBenefitComplianceDesc: 'Соблюдение требований безопасности',
    securityBenefitAdminTitle: 'Администрирование',
    securityBenefitAdminDesc: 'Централизованное управление системой',
    // Workflow Section
    workflowSectionSubtitle: 'Рабочие процессы',
    workflowSectionTitle: 'Автоматизация бизнес-процессов',
    workflowSectionDescription: 'Оптимизируйте работу с документами с помощью автоматизированных процессов и интеллектуальных решений.',
    workflowVoteTitle: 'Рабочие группы и комитеты',
    workflowVoteFeat1Title: 'Создание протоколов',
    workflowVoteFeat1Desc: 'Легкое создание и настройка процедур протоколирования',
    workflowVoteFeat2Title: 'Голосование',
    workflowVoteFeat2Desc: 'Подтверждение голосования с ЭЦП E-IMZO',
    workflowVoteFeat3Title: 'Результаты в реальном времени',
    workflowDynDocTitle: 'Динамические документы',
    workflowDynDocFeat1Title: 'Адаптивные формы',
    workflowDynDocFeat1Desc: 'Документы, изменяющиеся в зависимости от контекста',
    workflowDynDocFeat2Title: 'Условная логика',
    workflowDynDocFeat2Desc: 'Умные поля, зависящие от введенных данных',
    workflowDynDocFeat3Title: 'Автозаполнение',
    workflowDynDocFeat3Desc: 'Автоматическое заполнение на основе существующих данных',
    workflowHRTitle: 'Кадровые документы',
    workflowHRFeat1Title: 'Прием на работу',
    workflowHRFeat1Desc: 'Автоматизация процесса найма сотрудников',
    workflowHRFeat2Title: 'Управление отпусками',
    workflowHRFeat2Desc: 'Система подачи и одобрения заявок на отпуск',
    workflowHRFeat3Title: 'Оценка персонала',
    workflowHRFeat3Desc: 'Проведение аттестаций и оценок эффективности',
    workflowHRFeat4Title: 'Документооборот HR',
    workflowHRFeat4Desc: 'Управление кадровой документацией',
  },
  en: {
    logoAlt: 'Document Management System Logo',
    heroTitle: 'Digital Document Management',
    heroSubtitle: 'Modern system for efficient document management, approval workflows and execution control in your organization',
    heroDescription: 'Key system features:',
    heroCTA: 'Learn more',
    documentManagement: 'Document Management',
    documentManagementDesc: 'Centralized storage and organization of all documents',
    approvalRoutes: 'Approval Routes',
    approvalRoutesDesc: 'Customizable approval and authorization processes',
    executionControl: 'Execution Control',
    executionControlDesc: 'Track status and deadlines for task completion',
    // Document Management
    docMgmtTitle: 'Document Management',
    docMgmtSubtitle: 'Complete document workflow control',
    docMgmtDescription: 'Centralized document management system with creation, editing, approval and version control capabilities.',
    docMgmtFeature1Title: 'Document Creation',
    docMgmtFeature1Desc: 'Easy document creation using templates',
    docMgmtFeature2Title: 'Version Control',
    docMgmtFeature2Desc: 'Track all changes and document versions',
    docMgmtFeature3Title: 'Automation',
    docMgmtFeature3Desc: 'Automatic task assignment and notifications',
    docMgmtFeature4Title: 'Comments',
    docMgmtFeature4Desc: 'Comment system for feedback',
    docMgmtFeature5Title: 'Collaboration',
    docMgmtFeature5Desc: 'Collaborative document editing capability',
    docMgmtFeature6Title: 'Security',
    docMgmtFeature6Desc: 'Secure document storage and transmission',
    // Voting and other features
    votingTitle: 'Electronic Voting',
    votingSubtitle: 'Organize transparent and secure votings',
    votingDescription: 'Our e-voting solution ensures reliability, anonymity and ease of participation in elections and surveys.',
    transparentPath: 'Transparent Path',
    mobileVoting: 'Mobile Voting',
    speedUp: 'Speed Up the Process',
    notifications: 'Status Notifications',
    // Electronic Signature
    eSignTitle: 'Electronic Signature',
    eSignSubtitle: 'Secure and legally binding signatures',
    eSignDescription: 'Integrate reliable electronic signature tools to speed up processes and increase document security.',
    eSignFeature1Title: 'Security',
    eSignFeature1Desc: 'Cryptographic signature protection',
    eSignFeature2Title: 'Legal Force',
    eSignFeature2Desc: 'Full compliance with legislation',
    eSignFeature3Title: 'Encryption',
    eSignFeature3Desc: 'Reliable data encryption',
    eSignFeature4Title: 'QR Codes',
    eSignFeature4Desc: 'Quick authenticity verification',
    eSignTabSign: 'Signing',
    eSignTabVerify: 'Verification',
    eSignTabHistory: 'History',
    eSignTabSignTitle: 'Document Signing',
    eSignTabSignDesc: 'Fast and secure signing',
    eSignTabVerifyTitle: 'Signature Verification',
    eSignTabVerifyDesc: 'Verify signature authenticity',
    eSignTabHistoryTitle: 'Signature History',
    eSignTabHistoryDesc: 'Complete history of all operations',
    electronicSignatureTitle: 'Electronic Signature',
    electronicSignatureSubtitle: 'Secure and legally binding signatures',
    electronicSignatureDescription: 'Integrate reliable electronic signature tools to speed up processes and increase document security.',
    // Security, workflow, adaptation
    securityTitle: 'Data Security',
    securitySubtitle: 'Protecting your information is our priority',
    securityDescription: 'We provide multi-level protection of your data so that you can focus on your business.',
    encryption: 'Data Encryption',
    accessControl: 'Access Control',
    auditTrail: 'Audit Trail',
    workflowTitle: 'Workflow Automation',
    workflowSubtitle: 'Optimize your business processes',
    workflowDescription: 'Automate routine tasks to increase efficiency and reduce the likelihood of errors.',
    automation: 'Task Automation',
    integration: 'Integration with other systems',
    reporting: 'Reporting and Analytics',
    adaptationTitle: 'Adaptation to your needs',
    adaptationSubtitle: 'Flexible system configuration to your requirements',
    adaptationDescription: 'Customize the system to your unique business processes and get the most out of its use.',
    customization: 'Interface customization',
    documentTypes: 'Support for various document types',
    training: 'Staff training',
    support: 'Technical support',
    // Pricing
    pricingTitle: 'Pricing and Cost',
    pricingSubtitle: 'Choose the best plan for your business',
    pricingDescription: 'We offer flexible pricing plans so that each client can find a suitable solution.',
    choosePlan: 'Choose plan',
    tariffStart: 'Starter',
    tariffTeam: 'Team',
    tariffPro: 'Professional',
    tariffEnterprise: 'Enterprise',
    tariffCorporate: 'Corporate',
    tariffUsers5: 'Up to 5 users',
    tariffUsers20: 'Up to 20 users',
    tariffUsers50: 'Up to 50 users',
    tariffUsers100: 'Up to 100 users',
    tariffUsers100plus: 'Over 100 users',
    tariffPriceStart: '100,000 so\'m/month',
    tariffPriceTeam: '300,000 so\'m/month',
    tariffPricePro: '700,000 so\'m/month',
    tariffPriceEnterprise: '1,200,000 so\'m/month',
    tariffPriceCorporate: 'On request',
    activeUsers: 'active users',
    pricingFeatureUsers5: 'Up to 5 users',
    pricingFeatureUsers20: 'Up to 20 users',
    pricingFeatureUsers50: 'Up to 50 users',
    pricingFeatureUsers100: 'Up to 100 users',
    pricingFeatureUsers100plus: 'Unlimited users',
    pricingFeatureBasic: 'Basic functionality',
    pricingFeatureAdvanced: 'Advanced features',
    pricingFeatureAll: 'Full functionality',
    pricingFeatureCustom: 'Custom configuration',
    pricingFeatureEmailSupport: 'Email support',
    pricingFeaturePrioritySupport: 'Priority support',
    pricingFeature247Support: '24/7 support',
    pricingFeaturePersonalManager: 'Personal manager',
    pricingFeatureVipSupport: 'VIP support',
    pricingOrderBtn: 'Order',
    // Contact
    contactTitle: 'Contact us',
    contactSubtitle: 'We are ready to answer all your questions',
    contactDescription: 'Leave a request and we will contact you as soon as possible.',
    turnkeyTitle: 'Turnkey Solution',
    turnkeyDescription: 'We provide a complete solution for document workflow automation in your organization.',
    platformCustomization: 'Platform customization for your tasks',
    documentConfiguration: 'Document types configuration',
    employeeTraining: 'Employee training on the system',
    technicalSupport: 'Technical support and maintenance',
    contactInfo: 'Contact Information',
    contactUs: 'Contact Us',
    contactPhone: '+998 90 123 45 67',
    contactEmail: 'info@edoline.uz',
    contactAddress: 'Tashkent, Mustaqillik St., 15',
    contactPerson: 'Sales Manager',
    fullName: 'Full name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    // Contact Modal
    closeModal: 'Close',
    contactModalTitle: 'Contact Us',
    contactModalNameLabel: 'Name',
    contactModalNamePlaceholder: 'Enter your name',
    contactModalPhoneLabel: 'Phone',
    contactModalSubmitting: 'Submitting...',
    contactModalSuccess: 'Sent!',
    contactModalError: 'Send error',
    contactModalSubmit: 'Send request',
    // Navigation
    home: 'Home',
    features: 'Features',
    solutions: 'Solutions',
    processes: 'Processes',
    security: 'Security',
    pricing: 'Pricing',
    contacts: 'Contacts',
    navigation: 'Navigation',
    closeMenuAria: 'Close menu',
    openMenuAria: 'Open menu',
    // Footer
    footerDescription: 'EdoLine is a modern document management system for efficient operation of your organization.',
    allRightsReserved: 'All rights reserved',
    electronicSignature: 'Electronic Signature',
    hrDocuments: 'HR Documents',
    knowledgeBase: 'Knowledge Base',
    footerRights: 'All rights reserved',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of use',
    // Plans
    pricingPlanBasic: 'Basic',
    pricingPlanStandard: 'Standard',
    pricingPlanPremium: 'Premium',
    basicPlanPrice: '100 000 so\'m / month',
    standardPlanPrice: '300 000 so\'m / month',
    premiumPlanPrice: '500 000 so\'m / month',
    basicPlanDescription: 'Optimal solution for small businesses',
    standardPlanDescription: 'Advanced features for medium businesses',
    premiumPlanDescription: 'Maximum functionality for large enterprises',
    // Loading
    loadingTitle: 'Welcome!',
    loadingSubtitle: 'Loading document management system...',
    // Security Section
    securitySectionMainTitle: 'Security and Deployment',
    securitySectionMainDesc: 'Reliable protection of your data with flexible deployment options',
    onPremiseDeploymentTitle: 'On-Premise Deployment',
    onPremiseDeploymentDesc: 'Full control over data and infrastructure',
    onPremiseFeature1: 'Deploy on your own servers',
    onPremiseFeature2: 'Complete data control',
    onPremiseFeature3: 'Configure to corporate standards',
    cloudDeploymentTitle: 'Cloud Deployment',
    cloudDeploymentDesc: 'Fast deployment with minimal costs',
    cloudFeature1: 'Quick launch and scaling',
    cloudFeature2: 'Automatic updates',
    cloudFeature3: 'Cloud backup',
    securityBenefitConfidentialityTitle: 'Confidentiality',
    securityBenefitConfidentialityDesc: 'Corporate information protection',
    securityBenefitControlTitle: 'Access Control',
    securityBenefitControlDesc: 'Flexible user rights management',
    securityBenefitComplianceTitle: 'Standards Compliance',
    securityBenefitComplianceDesc: 'Meeting security requirements',
    securityBenefitAdminTitle: 'Administration',
    securityBenefitAdminDesc: 'Centralized system management',
    // Workflow Section
    workflowSectionSubtitle: 'Workflows',
    workflowSectionTitle: 'Business Process Automation',
    workflowSectionDescription: 'Optimize document work with automated processes and intelligent solutions.',
    workflowVoteTitle: 'Voting System',
    workflowVoteFeat1Title: 'Create Voting',
    workflowVoteFeat1Desc: 'Easy creation and configuration of voting procedures',
    workflowVoteFeat2Title: 'Anonymity',
    workflowVoteFeat2Desc: 'Ensuring voting confidentiality',
    workflowVoteFeat3Title: 'Real-time Results',
    workflowVoteFeat3Desc: 'Instant processing and display of results',
    workflowDynDocTitle: 'Dynamic Documents',
    workflowDynDocFeat1Title: 'Adaptive Forms',
    workflowDynDocFeat1Desc: 'Documents that change depending on context',
    workflowDynDocFeat2Title: 'Conditional Logic',
    workflowDynDocFeat2Desc: 'Smart fields that depend on entered data',
    workflowDynDocFeat3Title: 'Auto-fill',
    workflowDynDocFeat3Desc: 'Automatic filling based on existing data',
    workflowHRTitle: 'HR Processes',
    workflowHRFeat1Title: 'Hiring',
    workflowHRFeat1Desc: 'Automation of employee recruitment process',
    workflowHRFeat2Title: 'Leave Management',
    workflowHRFeat2Desc: 'System for submitting and approving leave requests',
    workflowHRFeat3Title: 'Personnel Assessment',
    workflowHRFeat3Desc: 'Conducting certifications and performance evaluations',
    workflowHRFeat4Title: 'HR Document Flow',
    workflowHRFeat4Desc: 'Management of personnel documentation',
  },
  uz: {
    logoAlt: 'Hujjatlarni boshqarish tizimi logotipi',
    heroTitle: 'Raqamli Hujjat Boshqaruvi',
    heroSubtitle: 'Tashkilotingizda hujjatlarni samarali boshqarish, tasdiqlash jarayonlari va ijro nazorati uchun zamonaviy tizim',
    heroDescription: 'Tizimning asosiy imkoniyatlari:',
    heroCTA: 'Batafsil',
    documentManagement: 'Hujjatlarni boshqarish',
    documentManagementDesc: 'Barcha hujjatlarni markazlashtirilgan saqlash va tashkil etish',
    approvalRoutes: 'Tasdiqlash yo\'llari',
    approvalRoutesDesc: 'Moslashuvchan tasdiqlash va ruxsat berish jarayonlari',
    executionControl: 'Ijro nazorati',
    executionControlDesc: 'Vazifa bajarilishi holati va muddatlarini kuzatish',
    // Document Management
    docMgmtTitle: 'Hujjatlarni boshqarish',
    docMgmtSubtitle: 'Hujjat aylanishini to\'liq nazorat qilish',
    docMgmtDescription: 'Yaratish, tahrirlash, tasdiqlash va versiyalarni nazorat qilish imkoniyatlari bilan markazlashtirilgan hujjatlarni boshqarish tizimi.',
    docMgmtFeature1Title: 'Hujjat yaratish',
    docMgmtFeature1Desc: 'Shablonlar yordamida oson hujjat yaratish',
    docMgmtFeature2Title: 'Versiyalarni nazorat',
    docMgmtFeature2Desc: 'Barcha o\'zgarishlar va hujjat versiyalarini kuzatish',
    docMgmtFeature3Title: 'Avtomatlashtirish',
    docMgmtFeature3Desc: 'Avtomatik vazifa tayinlash va bildirishnomalar',
    docMgmtFeature4Title: 'Izohlar',
    docMgmtFeature4Desc: 'Fikr-mulohaza uchun izoh tizimi',
    docMgmtFeature5Title: 'Hamkorlik',
    docMgmtFeature5Desc: 'Hujjatlarni birgalikda tahrirlash imkoniyati',
    docMgmtFeature6Title: 'Xavfsizlik',
    docMgmtFeature6Desc: 'Hujjatlarni xavfsiz saqlash va uzatish',
    // Voting and other features
    votingTitle: 'Ishchi guruhlar va qo\'mitalar',
    votingSubtitle: 'Shaffof va xavfsiz ovoz berishni tashkil qiling',
    votingDescription: 'Bizning elektron ovoz berish yechimimiz guruh qarorlarini qabul qilishda ishonchlilik va qulaylikni ta\'minlaydi.',
    transparentPath: 'Shaffof marshrut',
    mobileVoting: 'Hujjat tarixi',
    speedUp: 'Jarayonni tezlashtirish',
    notifications: 'Holat haqida bildirishnoma',
    // Electronic Signature
    eSignTitle: 'Elektron imzo E-IMZO',
    eSignSubtitle: 'Xavfsiz va qonuniy kuchga ega imzolar',
    eSignDescription: 'Jarayonlarni tezlashtirish va hujjatlar xavfsizligini oshirish uchun ishonchli elektron imzo vositalarini integratsiya qiling.',
    eSignFeature1Title: 'Xavfsizlik',
    eSignFeature1Desc: 'Kriptografik imzo himoyasi',
    eSignFeature2Title: 'Qonuniy kuch',
    eSignFeature2Desc: 'Qonunchilikka to\'liq muvofiqlik',
    eSignFeature3Title: 'Shifrlash',
    eSignFeature3Desc: 'Ishonchli ma\'lumotlar shifrlash',
    eSignFeature4Title: 'QR kodlar',
    eSignFeature4Desc: 'Tez haqiqiylik tekshiruvi',
    eSignTabSign: 'Imzolash',
    eSignTabVerify: 'Tekshirish',
    eSignTabHistory: 'Tarix',
    eSignTabSignTitle: 'Hujjat imzolash',
    eSignTabSignDesc: 'Tez va xavfsiz imzolash',
    eSignTabVerifyTitle: 'Imzo tekshiruvi',
    eSignTabVerifyDesc: 'Imzo haqiqiyligini tekshirish',
    eSignTabHistoryTitle: 'Imzolar tarixi',
    eSignTabHistoryDesc: 'Barcha operatsiyalarning to\'liq tarixi',
    electronicSignatureTitle: 'Elektron imzo',
    electronicSignatureSubtitle: 'Xavfsiz va qonuniy kuchga ega imzolar',
    electronicSignatureDescription: 'Jarayonlarni tezlashtirish va hujjatlar xavfsizligini oshirish uchun ishonchli elektron imzo vositalarini integratsiya qiling.',
    // Security, workflow, adaptation
    securityTitle: 'Ma\'lumotlar xavfsizligi',
    securitySubtitle: 'Sizning ma\'lumotlaringizni himoya qilish bizning ustuvor vazifamizdir',
    securityDescription: 'Biz sizning biznesingizga e\'tibor qaratishingiz uchun ma\'lumotlaringizni ko\'p darajali himoya qilamiz.',
    encryption: 'Ma\'lumotlarni shifrlash',
    accessControl: 'Kirishni nazorat qilish',
    auditTrail: 'Harakatlar auditi',
    workflowTitle: 'Ish jarayonini avtomatlashtirish',
    workflowSubtitle: 'Biznes jarayonlaringizni optimallashtiring',
    workflowDescription: 'Samaradorlikni oshirish va xatolik ehtimolini kamaytirish uchun kundalik vazifalarni avtomatlashtiring.',
    automation: 'Vazifalarni avtomatlashtirish',
    integration: 'Boshqa tizimlar bilan integratsiya',
    reporting: 'Hisobot va tahlil',
    adaptationTitle: 'Sizning ehtiyojlaringizga moslashish',
    adaptationSubtitle: 'Tizimni sizning talablaringizga moslashuvchan sozlash',
    adaptationDescription: 'Tizimni o\'ziga xos biznes jarayonlaringizga moslashtiring va undan maksimal darajada foyda oling.',
    customization: 'Interfeysni sozlash',
    documentTypes: 'Turli xil hujjat turlarini qo\'llab-quvvatlash',
    training: 'Xodimlarni o\'qitish',
    support: 'Texnik qo\'llab-quvvatlash',
    // Pricing
    pricingTitle: 'Tariflar va narx',
    pricingSubtitle: 'Biznesingiz uchun optimal tarifni tanlang',
    pricingDescription: 'Biz har bir mijozga mos yechim topish uchun moslashuvchan tarif rejalarini taklif etamiz.',
    choosePlan: 'Rejani tanlang',
    tariffStart: 'Boshlang\'ich',
    tariffTeam: 'Jamoa',
    tariffPro: 'Professional',
    tariffEnterprise: 'Korxona',
    tariffCorporate: 'Korporativ',
    tariffUsers5: '5 tagacha foydalanuvchi',
    tariffUsers20: '20 tagacha foydalanuvchi',
    tariffUsers50: '50 tagacha foydalanuvchi',
    tariffUsers100: '100 tagacha foydalanuvchi',
    tariffUsers100plus: '100 dan ortiq foydalanuvchi',
    tariffPriceStart: '100,000 so\'m/month',
    tariffPriceTeam: '300,000 so\'m/month',
    tariffPricePro: '700,000 so\'m/month',
    tariffPriceEnterprise: '1,200,000 so\'m/month',
    tariffPriceCorporate: 'So\'rov bo\'yicha',
    activeUsers: 'faol foydalanuvchilar',
    pricingFeatureUsers5: '5 tagacha foydalanuvchi',
    pricingFeatureUsers20: '20 tagacha foydalanuvчи',
    pricingFeatureUsers50: '50 tagacha foydalanuvчи',
    pricingFeatureUsers100: '100 tagacha foydalanuvчи',
    pricingFeatureUsers100plus: 'Cheksiz foydalanuvchilar',
    pricingFeatureBasic: 'Asosiy funksionallik',
    pricingFeatureAdvanced: 'Kengaytirilgan imkoniyatlar',
    pricingFeatureAll: 'To\'liq funksionallik',
    pricingFeatureCustom: 'Individual sozlash',
    pricingFeatureEmailSupport: 'Email orqali qo\'llab-quvvatlash',
    pricingFeaturePrioritySupport: 'Ustuvor qo\'llab-quvvatlash',
    pricingFeature247Support: '24/7 qo\'llab-quvvatlash',
    pricingFeaturePersonalManager: 'Shaxsiy menejer',
    pricingFeatureVipSupport: 'VIP qo\'llab-quvvatlash',
    pricingOrderBtn: 'Buyurtma berish',
    // Contact
    contactTitle: 'Biz bilan bog\'lanish',
    contactSubtitle: 'Biz sizning barcha savollaringizga javob berishga tayyormiz',
    contactDescription: 'So\'rov qoldiring va biz siz bilan tez orada bog\'lanamiz.',
    turnkeyTitle: '"Kalitga tayyor" yechim',
    turnkeyDescription: 'Biz tashkilotingizda hujjat aylanishini avtomatlashtirish uchun to\'liq yechim taqdim etamiz.',
    platformCustomization: 'Platformani vazifalaringizga moslashtirish',
    documentConfiguration: 'Hujjat turlarini sozlash',
    employeeTraining: 'Xodimlarni tizim bilan ishlashga o\'rgatish',
    technicalSupport: 'Texnik qo\'llab-quvvatlash va kuzatish',
    contactInfo: 'Aloqa ma\'lumotlari',
    contactUs: 'Biz bilan bog\'laning',
    contactPhone: '+998 90 123 45 67',
    contactEmail: 'info@edoline.uz',
    contactAddress: 'Toshkent, 9-o\'tish, A. Qahhor ko\'ch., 1A',
    contactPerson: 'Sotuv menejeri',
    fullName: 'To\'liq ism',
    email: 'Elektron pochta',
    message: 'Xabar',
    send: 'Yuborish',
    // Contact Modal
    closeModal: 'Yopish',
    contactModalTitle: 'Biz bilan bog\'laning',
    contactModalNameLabel: 'Ism',
    contactModalNamePlaceholder: 'Ismingizni kiriting',
    contactModalPhoneLabel: 'Telefon',
    contactModalSubmitting: 'Yuborilmoqda...',
    contactModalSuccess: 'Yuborildi!',
    contactModalError: 'Yuborishda xatolik',
    contactModalSubmit: 'So\'rov yuborish',
    // Navigation
    home: 'Bosh sahifa',
    features: 'Imkoniyatlar',
    solutions: 'Yechimlar',
    processes: 'Jarayonlar',
    security: 'Xavfsizlik',
    pricing: 'Narxlar',
    contacts: 'Kontaktlar',
    navigation: 'Navigatsiya',
    closeMenuAria: 'Menyuni yopish',
    openMenuAria: 'Menyuni ochish',
    // Footer
    footerDescription: 'EdoLine - tashkilotingizning samarali ishlashi uchun zamonaviy hujjat boshqaruv tizimi.',
    allRightsReserved: 'Barcha huquqlar himoyalangan',
    electronicSignature: 'Elektron imzo',
    hrDocuments: 'HR hujjatlar',
    knowledgeBase: 'Bilimlar bazasi',
    footerRights: 'Barcha huquqlar himoyalangan',
    footerPrivacy: 'Maxfiylik siyosati',
    footerTerms: 'Foydalanish shartlari',
    // Plans
    pricingPlanBasic: 'Asosiy',
    pricingPlanStandard: 'Standart',
    pricingPlanPremium: 'Premium',
    basicPlanPrice: '100 000 so\'m / oy',
    standardPlanPrice: '300 000 so\'m / oy',
    premiumPlanPrice: '500 000 so\'m / oy',
    basicPlanDescription: 'Kichik biznes uchun optimal yechim',
    standardPlanDescription: 'O\'rta biznes uchun kengaytirilgan imkoniyatlar',
    premiumPlanDescription: 'Yirik korxonalar uchun maksimal funksionallik',
    // Loading
    loadingTitle: 'Xush kelibsiz!',
    loadingSubtitle: 'Hujjat boshqaruv tizimi yuklanmoqda...',
    // Security Section
    securitySectionMainTitle: 'Xavfsizlik va Joylashtirish',
    securitySectionMainDesc: 'Ma\'lumotlaringizning ishonchli himoyasi va moslashuvchan joylashtirish variantlari',
    onPremiseDeploymentTitle: 'Mahalliy Joylashtirish',
    onPremiseDeploymentDesc: 'Ma\'lumotlar va infratuzilma ustidan to\'liq nazorat',
    onPremiseFeature1: 'O\'z serverlaringizda joylashtirish',
    onPremiseFeature2: 'Ma\'lumotlar ustidan to\'liq nazorat',
    onPremiseFeature3: 'Korporativ standartlarga sozlash',
    cloudDeploymentTitle: 'Bulutli Joylashtirish',
    cloudDeploymentDesc: 'Minimal xarajatlar bilan tez joylashtirish',
    cloudFeature1: 'Tez ishga tushirish va kengaytirish',
    cloudFeature2: 'Avtomatik yangilanishlar',
    cloudFeature3: 'Bulutli zaxira nusxalash',
    securityBenefitConfidentialityTitle: 'Maxfiylik',
    securityBenefitConfidentialityDesc: 'Korporativ ma\'lumotlarni himoya qilish',
    securityBenefitControlTitle: 'Kirish Nazorati',
    securityBenefitControlDesc: 'Foydalanuvchi huquqlarini moslashuvchan boshqarish',
    securityBenefitComplianceTitle: 'Standartlarga Muvofiqlik',
    securityBenefitComplianceDesc: 'Xavfsizlik talablariga javob berish',
    securityBenefitAdminTitle: 'Boshqaruv',
    securityBenefitAdminDesc: 'Markazlashtirilgan tizim boshqaruvi',
    // Workflow Section
    workflowSectionSubtitle: 'Ish Jarayonlari',
    workflowSectionTitle: 'Biznes Jarayonlarini Avtomatlashtirish',
    workflowSectionDescription: 'Avtomatlashtirilgan jarayonlar va aqlli yechimlar yordamida hujjat bilan ishlashni optimallashtiring.',
    workflowVoteTitle: 'Ishchi guruhlar va qo\'mitalar',
    workflowVoteFeat1Title: 'Protokol yaratish',
    workflowVoteFeat1Desc: 'Protokol tartiblarini oson yaratish va sozlash',
    workflowVoteFeat2Title: 'Ovoz berish',
    workflowVoteFeat2Desc: 'E-IMZO ERI bilan ovoz berishni tasdiqlash',
    workflowVoteFeat3Title: 'Haqiqiy Vaqtda Natijalar',
    workflowVoteFeat3Desc: 'Natijalarni tezkor qayta ishlash va aks ettirish',
    workflowDynDocTitle: 'Dinamik Hujjatlar',
    workflowDynDocFeat1Title: 'Moslashuvchan Formalar',
    workflowDynDocFeat1Desc: 'Kontekstga qarab o\'zgaruvchan hujjatlar',
    workflowDynDocFeat2Title: 'Shartli Mantiq',
    workflowDynDocFeat2Desc: 'Kiritilgan ma\'lumotlarga bog\'liq aqlli maydonlar',
    workflowDynDocFeat3Title: 'Avto-to\'ldirish',
    workflowDynDocFeat3Desc: 'Mavjud ma\'lumotlar asosida avtomatik to\'ldirish',
    workflowHRTitle: 'Kadrlar hujjatlari',
    workflowHRFeat1Title: 'Ishga Qabul Qilish',
    workflowHRFeat1Desc: 'Xodimlarni yollash jarayonini avtomatlashtirish',
    workflowHRFeat2Title: 'Ta\'til Boshqaruvi',
    workflowHRFeat2Desc: 'Ta\'til arizalarini topshirish va tasdiqlash tizimi',
    workflowHRFeat3Title: 'Kadrlar Baholash',
    workflowHRFeat3Desc: 'Attestatsiya va samaradorlik baholashini o\'tkazish',
    workflowHRFeat4Title: 'HR Hujjat Aylanishi',
    workflowHRFeat4Desc: 'Kadrlar hujjatlarini boshqarish',
    workflowControlTitle: 'Bilimlar bazasi',
    workflowControlFeat1Title: 'Hujjatlarni nashr qilish',
    workflowControlFeat1Desc: 'Hujjatlarni tashkilot ichida va tashqarisida nashr qilish imkoniyati',
    workflowControlFeat2Title: 'Hujjat himoyasi',
    workflowControlFeat2Desc: 'Har bir imzolangan va nashr qilingan hujjat ko\'rish uchun himoya kodiga ega',
    workflowControlFeat3Title: 'Dinamiklik',
    workflowControlFeat3Desc: 'Har bir hujjatning kirish kodini o\'zgartirish va bir martalik kirish berish',
  }
};

translations.ru.tariffPriceStart = translations.uz.tariffPriceStart;
translations.ru.tariffPriceTeam = translations.uz.tariffPriceTeam;
translations.ru.tariffPricePro = translations.uz.tariffPricePro;
translations.ru.tariffPriceEnterprise = translations.uz.tariffPriceEnterprise;
translations.ru.tariffPriceCorporate = translations.uz.tariffPriceCorporate;
translations.ru.tariffStart = translations.en.tariffStart;
translations.ru.tariffTeam = translations.en.tariffTeam;
translations.ru.tariffPro = translations.en.tariffPro;
translations.ru.tariffEnterprise = translations.en.tariffEnterprise;
translations.ru.tariffCorporate = translations.en.tariffCorporate;
translations.en.tariffPriceStart = translations.uz.tariffPriceStart;
translations.en.tariffPriceTeam = translations.uz.tariffPriceTeam;
translations.en.tariffPricePro = translations.uz.tariffPricePro;
translations.en.tariffPriceEnterprise = translations.uz.tariffPriceEnterprise;
translations.en.tariffPriceCorporate = translations.uz.tariffPriceCorporate;