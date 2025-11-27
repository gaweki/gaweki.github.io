# Andrel Karunia Sitanggang - Portfolio Website

Personal website and portfolio of Andrel Karunia Sitanggang, built with Gatsby and React.

## 🚀 Setup GitHub Pages

### Setelah Repository Privat

Jika website Anda 404 setelah membuat repository privat, ikuti langkah-langkah berikut:

#### 1. Enable GitHub Pages

1. Pergi ke repository GitHub Anda
2. Klik **Settings** → **Pages**
3. Di "Build and deployment", pilih **GitHub Actions**

#### 2. Workflow Configuration

Repository ini sudah dilengkapi dengan GitHub Actions workflow di `.github/workflows/deploy.yml` yang akan:
- Build otomatis saat push ke branch `main`
- Deploy ke GitHub Pages
- Support repository privat

#### 3. Required Settings

Pastikan repository settings memiliki:
- **Actions permissions**: Enabled
- **Workflow permissions**: Read and write permissions
- **Pages permissions**: Enabled

#### 4. Custom Domain (Opsional)

Jika menggunakan custom domain `gaweki.dev`:
1. Di **Settings** → **Pages** → **Custom domain**
2. Masukkan `gaweki.dev`
3. Update DNS records:
   ```
   A record: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   CNAME: www.gaweki.dev → gaweki.github.io
   ```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run develop

# Build for production
npm run build

# Serve production build
npm run serve

# Clean cache
npm run clean
```

## 📁 Project Structure

```
src/
├── components/     # Reusable React components
├── pages/         # Page components
├── styles/        # CSS and styling
└── utils/         # Utility functions
```

## 🎨 Technologies Used

- **Gatsby** - Static Site Generator
- **React** - UI Library
- **Tailwind CSS** - CSS Framework
- **PostCSS** - CSS Processing

## 📝 Troubleshooting

### Website 404 Setelah Repository Privat

1. **Check GitHub Actions**: Pastikan workflow berjalan di tab "Actions"
2. **Verify Permissions**: Pastikan repository memiliki permissions yang benar
3. **Check Build Logs**: Lihat log build untuk error details
4. **Wait for Deployment**: Deployment bisa memakan waktu 5-10 menit

### Force Re-deploy

```bash
# Push dengan commit baru untuk trigger deployment
git commit --allow-empty -m "trigger redeploy"
git push origin main
```

## 📄 License

MIT License - see LICENSE file for details