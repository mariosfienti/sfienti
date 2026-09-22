# Mario Alessandro Sfienti — sito personale

Sito personale in Next.js (App Router, TypeScript, Tailwind CSS), bilingue IT/EN, con form di contatto che invia email tramite **Brevo**. Pronto per il deploy su **Coolify** tramite Dockerfile.

## Struttura del progetto

```
app/
  layout.tsx        # font auto-ospitati (Outfit, Manrope), metadata
  page.tsx           # assembla tutte le sezioni della pagina
  globals.css
  api/contact/route.ts  # invio email via Brevo (notifica + risposta automatica)
components/          # Nav, Hero, About, Experience, Projects, Skills, EducationLanguages, Contact
lib/
  content.ts          # tutti i testi del sito, in italiano e inglese
  brevo.ts             # helper per chiamare l'API di Brevo
public/               # logo e foto
Dockerfile            # build multi-stage, pronta per Coolify
```

## 1. Sviluppo locale

```bash
npm install
cp .env.example .env.local   # poi compila le variabili (vedi sotto)
npm run dev
```

Il sito è su `http://localhost:3000`.

## 2. Configurare Brevo (invio email dal form di contatto)

Il form contatti fa due invii tramite l'API transazionale di Brevo:

1. una **notifica a te** (`CONTACT_TO_EMAIL`) con nome, email e messaggio di chi scrive, con "Rispondi a" impostato sull'email del mittente, così puoi rispondere direttamente;
2. una **risposta automatica** al mittente, nella lingua che stava usando sul sito (IT/EN), per confermare la ricezione.

Passaggi su [app.brevo.com](https://app.brevo.com):

1. **Ottieni la API key**: *SMTP & API → API Keys → Genera una nuova chiave API*. Questa va in `BREVO_API_KEY`.
2. **Verifica un mittente**: *Impostazioni → Mittenti, domini e IP dedicati*. Puoi verificare un singolo indirizzo email oppure (consigliato, meno probabilità di finire in spam) l'intero dominio via record DNS (SPF/DKIM). L'indirizzo verificato va in `CONTACT_SENDER_EMAIL` — deve essere un indirizzo che controlli (es. `no-reply@tuodominio.it` o anche `mario@sfienti.it` se verifichi quel dominio).
3. Imposta `CONTACT_TO_EMAIL` con l'indirizzo dove vuoi ricevere i messaggi (default `mario@sfienti.it`).

Variabili d'ambiente (vedi `.env.example`):

```
BREVO_API_KEY=...
CONTACT_SENDER_EMAIL=no-reply@tuodominio.it
CONTACT_SENDER_NAME=Mario Alessandro Sfienti
CONTACT_TO_EMAIL=mario@sfienti.it
CONTACT_TO_NAME=Mario Alessandro Sfienti
```

Senza `BREVO_API_KEY` o `CONTACT_SENDER_EMAIL` il form risponde con un errore gestito (non manda in crash il sito): il messaggio "Qualcosa è andato storto" apparirà finché le variabili non sono configurate.

Il piano gratuito di Brevo include 300 email/giorno: più che sufficiente per un form di contatto personale.

## 3. Pubblicare un repository Git

Il progetto è già una repo git locale (vedi sotto). Per portarlo su Coolify serve che sia raggiungibile da un provider Git (GitHub, GitLab, Bitbucket) oppure puoi usare la modalità "Dockerfile" di Coolify con deploy manuale/CLI se preferisci non usare un repo remoto.

```bash
git remote add origin git@github.com:<tuo-utente>/mario-sfienti-portfolio.git
git push -u origin main
```

## 4. Deploy su Coolify

1. In Coolify: **New Resource → Application**, collega il repository (o scegli "Dockerfile" come build pack se fai deploy senza repo remoto).
2. **Build Pack**: `Dockerfile` (il Dockerfile nella root del progetto è già pronto: build multi-stage con `next build` in modalità `standalone`, immagine finale leggera basata su `node:22-alpine`).
3. **Porta esposta**: `3000` (Coolify la rileva anche da `EXPOSE 3000` nel Dockerfile).
4. **Variabili d'ambiente**: aggiungi in Coolify le stesse variabili di `.env.example` (`BREVO_API_KEY`, `CONTACT_SENDER_EMAIL`, `CONTACT_SENDER_NAME`, `CONTACT_TO_EMAIL`, `CONTACT_TO_NAME`). Segna `BREVO_API_KEY` come "secret" se l'interfaccia lo consente.
5. **Dominio**: in Coolify puoi collegare subito un dominio personalizzato (es. `mariosfienti.it`) o usare il sottodominio `*.sslip.io`/quello del tuo server assegnato automaticamente; Coolify gestisce anche il certificato SSL (Let's Encrypt) in automatico.
6. Avvia il deploy. Ogni nuovo push sul branch collegato può essere configurato per ridistribuire automaticamente il sito (webhook Git integrato in Coolify).

## 5. Verifiche dopo il deploy

- Apri il sito e controlla che logo, foto e testo si vedano correttamente in entrambe le lingue (pulsante IT/EN in alto a destra).
- Compila il form di contatto con una tua email di test: dovresti ricevere sia la notifica sia, sull'indirizzo di test, la risposta automatica.
- Controlla da mobile che tutte le sezioni si impilino correttamente (il layout è già responsive).

## Personalizzare i contenuti

Tutti i testi (italiano e inglese) sono in `lib/content.ts`. Foto e logo sono in `public/`. Per aggiornare un testo o un'esperienza lavorativa, modifica l'oggetto `CONTENT.it` e `CONTENT.en` in quel file — non serve toccare i componenti.
