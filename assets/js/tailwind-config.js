tailwind.config = {
    theme: {
      extend: {
        colors: {
          vale: {
            green:      '#008f4c',
            'green-dk': '#00683a',
            'green-lt': '#10a861',
            'green-bg': '#e6f4ec',
            yellow:     '#fdb913',
            'yellow-dk':'#e0a000',
            'yellow-bg':'#fff6df',
            ink:        '#0e1a14',
            'ink-2':    '#1d2d24',
            slate:      '#f4f6f5',
            border:     '#dbe1dd',
          }
        },
        fontFamily: {
          sans: ['Inter','system-ui','sans-serif'],
          mono: ['JetBrains Mono','ui-monospace','monospace'],
        },
        boxShadow: {
          card:  '0 1px 2px rgba(0,0,0,.04), 0 4px 16px -4px rgba(0,0,0,.06)',
          pop:   '0 8px 32px -8px rgba(0,0,0,.18)',
          inset: 'inset 0 1px 0 rgba(255,255,255,.06)',
        }
      }
    }
  }
