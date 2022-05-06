# starWars
## Architecture

```
src
   ├── Data
   |       ├── Repositories // Acess internal backend (CRUD)
   |       |      └── Authentication
   |       |              ├── Mocks // For test your cases
   |       |              └── usecases // Use cases for Repository
   |       └── Vendors // Acess external services
   |               └── Authentication
   |                        ├── Mocks
   |                        └── usecases 
   |                                 ├── FirebaseAuthentication
   |                                 └── GoogleAuthentication
   ├── Providers // Implements external libs to use in your component 
   |       └── HttpProvider
   |                └── usecases 
   |                         ├── AxiosHttp
   |                         └── FetchHttp
   ├── Presentation
   |       ├── Assets // Images, fonts, etc...
   |       ├── Components // Custom components
   |       ├── Pages // Implements Pages
   |       |      └── PageName
   |       |              ├── index
   |       |              ├── styles
   |       |              └── Resources // Custom resoucers used only on this page
   |       |                       ├── Contents // Content used only on this page
   |       |                       ├── Factories // Make custom function used only on this page
   |       |                       ├── Typings // Typings used in your custom contents
   |       |                       └── Validations // Validations used only on this page
   |       └── Styles
   |              ├── index.less // Export all custom styles (Variables, Animations, etc..).
   |              ├── Variables // CSS Variables used in your aplication.
   |              └── Animations // CSS Animations Mixins
   ├── Shared
   |      ├── Errors // Export errors used in your application.
   |      ├── Entities // Export data entities used in your application.
   |      ├── Protocols // Data Protocols, used to implements Data or Providers, for exemple AuthenticationProtocol.
   |      └── Status // Export http status or others status used in your application.
   └── Main
           ├── @Types
           ├── Configs
           ├── Routes
           ├── App
           └──  Factories // Create Factories to make the usecases
