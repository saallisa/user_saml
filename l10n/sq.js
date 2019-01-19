OC.L10N.register(
    "user_saml",
    {
    "Saved" : "U ruajt",
    "X.509 certificate of the Service Provider" : "Çertifikata X.509 e ofruesit të shërbimit",
    "Private key of the Service Provider" : "Çelësi privat i Ofruesit të Shërbimit",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Tregon se nameID i <samlp:logoutRequest> i dërguar nga kjo SP do të enkriptohet.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Tregon nëse mesazhet <samlp:AuthnRequest> të dërguara nga kjo SP do të firmosen. [Metadata të kësaj SP do të ofrojnë këtë informacion]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Tregon nëse mesazhet <samlp:logoutRequest> të dëguara nga ky SP do të nënshkruhen.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Tregon nëse mesazhet <samlp:logoutResponse>  të dërguara nga kjo SP do të firmosen.",
    "Whether the metadata should be signed." : "Nëse  duhet të nënshkruhet metadata",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Tregon një nevojë për elementët <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> të marra nga kjo SP për t'u nënshkruar.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Tregon një nevojë për elementet <saml:Assertion> të marra nga kjo SP për t'u nënshkruar. [Metadata të SP do të ofrojnë këtë informacion]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Tregon nje kërkesë të elementëve të marrë nga kjo SP  për tu enkriptuar.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Tregon një kërkesë për elementin NameID nëSAMLResponse e marrë nga kjo SP për tu prezantuar.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Tregon një kërkesë për EmërID të marrë nga ky PS për t'u koduar.",
    "Indicates if the SP will validate all received XML." : "Tregon nëse SP do të quaj të vlefshëm të gjitha XML e marra.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL-Kodon të dhënat SAMP në shkronja të vogla, dhe toolkit sipas parapërzgjedhjes përdor shkronja të vogla. Aktivizo pajtueshmërinë e ADFS në verifikimin e firmës.",
    "Attribute to map the UID to." : "Atributi për të identifikuar UID.",
    "Only allow authentication if an account exists on some other backend. (e.g. LDAP)" : "Lejo autentikimin vetëm nëse një llogari ekziston në një backend tjetër. (p.sh. LDAP)",
    "Attribute to map the displayname to." : "Atributi për të mapuar emrin e shfaqjes në.",
    "Attribute to map the email address to." : "Atributi për të hartuar adresën e postës elektronike në.",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Përdor vërtetimin SAML  për desktopët klient %s( kërkon ri-vërtetimin e përdoruesit)",
    "SSO & SAML authentication" : "Identifikim SSO & SAML",
    "Open documentation" : "Dokumentacion i hapur",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Ju lutem zgjidhni nëse doni të vërtetoni përdorimin e ofruesit SAML të ndërtuar në Nextcloud ose nëse dëshironi të vërtetoni kundër një ndryshoreje mjedisi.",
    "Use built-in SAML authentication" : "Përdor identifikimin me SAML",
    "Use environment variable" : "Përdor variablin e mjedisit",
    "General" : "Të përgjithshme",
    "Service Provider Data" : "Të dhënat e ofruesit të shërbimit",
    "If your Service Provider should use certificates you can optionally specify them here." : "Nëse Ofruesi i Shërbimit tuaj duhet të përdori çertifikata ju mund ti specifikoni ato këtu.",
    "Show Service Provider settings…" : "Trego konfigurimet e Ofruesit të Shërbimit",
    "Identity Provider Data" : "Identifiko Ofruesin e të Dhënave",
    "Configure your IdP settings here." : "Konfiguroni  rregullimet e IdP tuaj këtu",
    "Identifier of the IdP entity (must be a URI)" : "Identifikues i ekzistencës së IdP(duhet të jetë një URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "Targeti URL i IdP ku PS do të dërgojë Mesazhin e Kërkesës së Autentifikimit",
    "Show optional Identity Provider settings…" : "Trego konfigurimet opsionale të Dhënësit të Identitetit ...",
    "URL Location of the IdP where the SP will send the SLO Request" : "Vendndodhja URL e IDP ku PS do të dërgojë Kërkesën SLO",
    "Public X.509 certificate of the IdP" : "Çertifikatë publike X.509 e IdP",
    "Attribute mapping" : "Përcaktimi i atributeve",
    "If you want to optionally map attributes to the user you can configure these here." : "Nëse dëshironi të maponi atributet tek përdoruesi opsionalisht, ju mund t'i konfiguroni ato këtu.",
    "Show attribute mapping settings…" : "Trego konfigurimet e përcaktimit të atributeve...",
    "Security settings" : "Konfigurimet e sigurisë",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Për të rritur nivelin e sigurisë ne ju rekomandojmë të mundësoni konfigurimet në vijim nëse ato suportohen nga mjedisi juaj.",
    "Show security settings…" : "Trego konfigurimet e sigurisë...",
    "Signatures and encryption offered" : "Firmat dhe enkriptimi janë ofruara",
    "Signatures and encryption required" : "Kërkohet firma dhe enkriptimi",
    "Download metadata XML" : "Shkarko metadata XML",
    "Metadata invalid" : "Metadata jo e vlefshme",
    "Metadata valid" : "Metadata e vlefshme",
    "Account not provisioned." : "Llogaria nuk është e provizionuar",
    "Your account is not provisioned, access to this service is thus not possible." : "Llogaria juaj nuk është e provizionuar, prandaj aksesi në këtë pajisje nuk është i munduar."
},
"nplurals=2; plural=(n != 1);");
