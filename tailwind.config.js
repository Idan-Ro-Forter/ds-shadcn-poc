/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        border: {
          DEFAULT: 'hsl(var(--border))',
          primary: 'var(--border-primary)',
          brand: '#1F75F6',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        surface: {
          primary: 'var(--surface-primary)',
          // tertiary: 'hsl(var(--surface-tertiary))', // other option
          tertiary: 'var(--surface-tertiary)',
          secondary: {
            DEFAULT: 'var(--surface-secondary)',
            brand: '#DCEAFF',
            dev: 'hsl(var(--surface-secondary-dev))',
            success: 'hsl(var(--surface-secondary-success))',
            warning: 'hsl(var(--surface-secondary-warning))',
            error: 'hsl(var(--surface-secondary-error))',
          },
        },
        text: {
          secondary: 'var(--text-secondary)',
          brand: '#1F75F6',
          tertiary: 'var(--text-tertiary)',
          assistive: 'hsl(var(--text-assistive))',
          dev: 'hsl(var(--text-dev))',
          success: 'hsl(var(--text-success))',
          warning: 'hsl(var(--text-warning))',
          error: 'hsl(var(--text-error))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        bg: '0px 1px 6px 0px rgba(65, 98, 214, 0.07), 0px 6px 10px 0px rgba(65, 98, 214, 0.05)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      spacing: {
        0.5: '4px',
        1: '8px',
        1.5: '12px',
        2: '16px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
