# Project's Structure

source/
├── assets/                # Recursos estáticos (imagens, fontes, etc.)
│   ├── images/
│   ├── fonts/
│   └── icons/
│
├── components/            # Componentes reutilizáveis
│   ├── Button/
│   ├── Header/
│   └── Card/
│
├── screens/               # Telas do aplicativo
│   ├── HomeScreen/
│   ├── ProfileScreen/
│   └── SettingsScreen/
│
├── navigation/            # Navegação do aplicativo (React Navigation)
│   └── AppNavigator.ts
│
├── hooks/                 # Custom hooks
│   └── useAuth.ts
│
├── contexts/              # Contexts do React (se estiver usando)
│   └── AuthContext.ts
│
├── services/              # Serviços (APIs, etc.)
│   ├── api.ts             # Configurações gerais de API
│   ├── authService.ts     # Serviços relacionados à autenticação
│   └── network/           # Camada de rede
│       ├── apiClient.ts   # Cliente HTTP (axios, fetch, etc.)
│       ├── apiEndpoints.ts # Definições de endpoints da API
│       └── networkUtils.ts # Funções utilitárias relacionadas à rede
│
├── utils/                 # Funções utilitárias e helpers
│   └── formatDate.ts
│
├── styles/                # Estilos globais
│   └── colors.ts
│
├── config/                # Configurações do aplicativo (ex.: variáveis de ambiente)
│   └── constants.ts
│
├── App.ts                 # Ponto de entrada do aplicativo
└── app.json               # Configurações do Expo

