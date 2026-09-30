/**
 * DadStudio AI 2026.9 — Birthday Vibe Edition
 * Core Interactive Application Engine
 */

// ==========================================================
// 1. Files & Code Content Database
// ==========================================================
const CODE_FILES = {
  'birthday_protocol.ts': {
    lang: 'typescript',
    content: `import { DadCore, Love, Wisdom, Tea } from '@universe/dad-foundation';
import { ConfettiEngine } from '@effects/birthday-vibe';

/**
 * World's Best Dad System Protocol
 * Version: vLatest.Infinite (Zero Breaking Changes)
 */
export class SuperDadProtocol extends DadCore {
  public readonly name = "Dad (The Ultimate Architect)";
  public readonly uptime = "100.00% (Flawless Reliability)";
  public readonly wisdomTokens = Infinity;
  public readonly unhandledExceptions = 0;

  /**
   * Main birthday execution pipeline
   */
  public async executeBirthdayCelebration(): Promise<CelebrationResult> {
    console.log("[AGENT] Initializing Birthday Protocol...");
    
    // Steep fresh pot of premium tea
    await Tea.steep({
      blend: 'Earl Grey & Jasmine Imperial',
      temperature: '95°C',
      zenLevel: 'Maximum'
    });
    
    // Overfit model with 100% appreciation & gratitude
    const dadVibes = await Agent.synthesizeVibes({
      love: Love.UNCONDITIONAL,
      wisdom: Wisdom.MAX_CAPACITY,
      dadJokes: { enabled: true, frequency: 'Continuous' },
      goodTimes: [
        'Endless laughter & great stories',
        'Masterful tech advice & troubleshooting',
        'Unbeatable life guidance',
        'Relaxing tea sessions & top-tier vibes'
      ]
    });

    // Deploy celebration to production
    await ConfettiEngine.burst({ particles: 1000, spread: 'Worldwide' });

    return {
      status: 'SUCCESS',
      message: 'Happy Birthday to the greatest Dad in the galaxy! 🚀🎂'
    };
  }
}

// Instantiate and launch
const dad = new SuperDadProtocol();
dad.executeBirthdayCelebration();`
  },

  'dad_neural_weights.py': {
    lang: 'python',
    content: `import torch
import torch.nn as nn
from universe.family import UnconditionalLove

class DadNeuralArchitecture(nn.Module):
    """
    State-of-the-art Dad Foundation Model
    Trained on decades of life wisdom, troubleshooting, and jokes.
    """
    def __init__(self, context_window=1_000_000):
        super().__init__()
        self.wisdom_layer = nn.Linear(context_window, 4096)
        self.dad_joke_conv = nn.Conv1d(in_channels=1, out_channels=32, kernel_size=3)
        self.patience_attention = nn.MultiheadAttention(embed_dim=4096, num_heads=32)
        self.tea_zen_activation = nn.LeakyReLU(negative_slope=0.01) # Optimal steep activation
        self.love_residual = UnconditionalLove()

    def forward(self, life_situation):
        # 1. Process problem with maximum patience
        calm_state = self.patience_attention(life_situation, life_situation, life_situation)
        
        # 2. Apply warm tea zen boost
        boosted = self.tea_zen_activation(calm_state)
        
        # 3. Generate optimal advice + witty dad joke
        advice = self.wisdom_layer(boosted)
        joke = self.dad_joke_conv(boosted)
        
        # 4. Residual connection: Unconditional Love always added
        return self.love_residual(advice, joke)

# Benchmark Test
model = DadNeuralArchitecture()
print("Model Benchmark: 10/10 Stars Across All Life Metrics ⭐⭐⭐⭐⭐")`
  },

  'vibe_config.yaml': {
    lang: 'yaml',
    content: `# DadStudio System Configuration & Environment
version: "2026.09-birthday-pro"
profile:
  role: "World's Best Dad & Senior Life Architect"
  experience_level: "Legendary"
  license: "Unlimited Hugs & High Fives"

hyperparameters:
  dad_joke_temperature: 0.98
  tea_intake_cups: 4
  tea_blend: "Earl Grey / Jasmine / Oolong"
  patience_level: "Unlimited"
  tech_savviness: "Over 9000"
  bug_tolerance: 0.00
  fun_multiplier: 10.0

dependencies:
  - unconditional_love: ">=1.0.0"
  - great_memories: "latest"
  - healthy_long_life: "infinity"

environment_variables:
  HAPPINESS: "MAXIMUM"
  ZEN_LEVEL: "100%"
  FAVORITE_SONG: "Happy Birthday Chiptune Anthem"`
  },

  'achievements.json': {
    lang: 'json',
    content: `{
  "recipient": "Dad",
  "milestones": [
    {
      "badge": "🏆 10x Dad Architect",
      "description": "Consistently delivers world-class parenting, wisdom, and support with 0 downtime.",
      "unlocked": true
    },
    {
      "badge": "🍵 Master of the Perfect Steep",
      "description": "Master of brewing motivation, calmness, and converting fine tea into clean solutions.",
      "unlocked": true
    },
    {
      "badge": "🛠️ Fix-It Guru",
      "description": "Capable of debugging any hardware, software, or household anomaly in record time.",
      "unlocked": true
    },
    {
      "badge": "🤣 Hall of Fame Dad Jokes",
      "description": "High-temperature humor that induces maximum groans and smiles.",
      "unlocked": true
    }
  ],
  "rating": "⭐⭐⭐⭐⭐ 100% Five-Star Lifetime Achievement"
}`
  },

  'dad_jokes_dataset.csv': {
    lang: 'csv',
    content: `id,setup,punchline,temperature,groan_rating
1,"Why do Python programmers wear glasses?","Because they can't C#!",0.5,10/10
2,"Why do programmers prefer dark mode?","Because light attracts bugs!",0.7,9.5/10
3,"Why was the JavaScript developer sad?","Because they didn't Node how to Express themselves!",0.9,9.8/10
4,"How many programmers does it take to change a light bulb?","None, that's a hardware problem!",0.8,9.5/10
5,"Why did the developer go broke?","Because they used up all their cache!",0.85,9.2/10
6,"What kind of tea is the hardest to swallow?","Reali-tea!",0.9,10/10
7,"Why did the neural network go to therapy?","It had too many unresolved weights and deep bias!",1.2,10/10
8,"What is a programmer's favorite hangout spot?","Foo Bar!",0.6,9.0/10`
  }
};

// ==========================================================
// 2. High Quality Dad Jokes Engine (Curated & Coherent)
// ==========================================================
const DAD_JOKES_DB = [
  {
    s: "Why do Python programmers wear glasses?",
    p: "Because they can't C#!",
    tag: "Programming Classic"
  },
  {
    s: "Why do programmers prefer dark mode?",
    p: "Because light attracts bugs!",
    tag: "Bug Hunting"
  },
  {
    s: "Why was the JavaScript developer sad?",
    p: "Because they didn't Node how to Express themselves!",
    tag: "Web Dev"
  },
  {
    s: "How many software engineers does it take to change a lightbulb?",
    p: "None — that's a hardware problem!",
    tag: "Hardware vs Software"
  },
  {
    s: "What kind of tea is the hardest to swallow?",
    p: "Reali-tea!",
    tag: "Dad Tea Wisdom"
  },
  {
    s: "Why did the developer go broke?",
    p: "Because they used up all their cache!",
    tag: "Memory Management"
  },
  {
    s: "Why did the neural network go to therapy?",
    p: "It had too many unresolved weights and deep-seated bias!",
    tag: "Machine Learning"
  },
  {
    s: "What is an algorithm?",
    p: "A word engineers use when they don't want to explain what they just did!",
    tag: "Tech Reality"
  },
  {
    s: "There are 10 types of people in the world...",
    p: "Those who understand binary, and those who don't!",
    tag: "Binary Legend"
  },
  {
    s: "What do you call a computer that can sing?",
    p: "A Dell!",
    tag: "Certified Groaner"
  }
];

// ==========================================================
// 3. Web Audio Synthesizer (8-Bit Chiptune Birthday Anthem)
// ==========================================================
class SoundSynth {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.isPlayingMusic = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return !this.muted;
  }

  playTone(freq, type = 'square', duration = 0.15, gainVal = 0.1) {
    if (this.muted) return;
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  playClick() {
    this.playTone(800, 'sine', 0.04, 0.04);
  }

  playSuccess() {
    if (this.muted) return;
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'triangle', 0.2, 0.08), idx * 80);
    });
  }

  playBlowSound() {
    if (this.muted) return;
    this.init();
    this.playTone(150, 'sawtooth', 0.4, 0.06);
  }

  playBirthdaySong() {
    if (this.isPlayingMusic) return;
    this.init();
    this.isPlayingMusic = true;

    const melody = [
      { f: 261.63, d: 0.25 }, { f: 261.63, d: 0.25 }, { f: 293.66, d: 0.5 }, { f: 261.63, d: 0.5 }, { f: 349.23, d: 0.5 }, { f: 329.63, d: 0.9 },
      { f: 261.63, d: 0.25 }, { f: 261.63, d: 0.25 }, { f: 293.66, d: 0.5 }, { f: 261.63, d: 0.5 }, { f: 392.00, d: 0.5 }, { f: 349.23, d: 0.9 },
      { f: 261.63, d: 0.25 }, { f: 261.63, d: 0.25 }, { f: 523.25, d: 0.5 }, { f: 440.00, d: 0.5 }, { f: 349.23, d: 0.5 }, { f: 329.63, d: 0.5 }, { f: 293.66, d: 0.8 },
      { f: 466.16, d: 0.25 }, { f: 466.16, d: 0.25 }, { f: 440.00, d: 0.5 }, { f: 349.23, d: 0.5 }, { f: 392.00, d: 0.5 }, { f: 349.23, d: 1.2 }
    ];

    let timeOffset = 0;
    melody.forEach((note, idx) => {
      setTimeout(() => {
        if (!this.muted) {
          this.playTone(note.f, 'square', note.d * 0.85, 0.1);
          this.playTone(note.f / 2, 'triangle', note.d * 0.9, 0.06);
        }
        if (idx === melody.length - 1) {
          setTimeout(() => { this.isPlayingMusic = false; }, 1500);
        }
      }, timeOffset * 1000);
      timeOffset += note.d * 0.95;
    });
  }
}

const synth = new SoundSynth();

// ==========================================================
// 4. Ultra-Crisp Canvas Confetti System
// ==========================================================
class ConfettiCannon {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.animationFrame = null;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(count = 150, originX = window.innerWidth / 2, originY = window.innerHeight / 2) {
    const colors = ['#58a6ff', '#bc8cff', '#3fb950', '#d29922', '#ff7b72', '#f778ba', '#52b788', '#fbbf24'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 12 + 6;
      this.particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 4,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 15,
        gravity: 0.25,
        opacity: 1,
        decay: Math.random() * 0.01 + 0.005,
        shape: Math.random() > 0.3 ? 'rect' : 'circle'
      });
    }

    if (!this.animationFrame) {
      this.update();
    }
  }

  update() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.99;
      p.rotation += p.rotationSpeed;
      p.opacity -= p.decay;

      if (p.opacity <= 0 || p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = p.opacity;
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;

      if (p.shape === 'rect') {
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      } else {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      }
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      this.animationFrame = requestAnimationFrame(() => this.update());
    } else {
      this.animationFrame = null;
    }
  }
}

// ==========================================================
// 5. Interactive 3D/Canvas Neural Cake Renderer
// ==========================================================
class NeuralCakeRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.candleCount = 5;
    this.candlesLit = true;
    this.theme = 'cyber';
    this.time = 0;
    this.sparkles = [];
    this.wishesCount = 42;
    this.initCanvas();
    this.animate();

    this.canvas.addEventListener('click', (e) => {
      this.toggleCandles();
      confetti.burst(60, e.clientX, e.clientY);
    });
  }

  initCanvas() {
    this.canvas.width = 540;
    this.canvas.height = 380;
  }

  setCandles(count) {
    this.candleCount = Math.max(1, Math.min(10, count));
  }

  setTheme(theme) {
    this.theme = theme;
  }

  toggleCandles() {
    this.candlesLit = !this.candlesLit;
    const hudStatus = document.getElementById('hudCandleStatus');
    if (this.candlesLit) {
      synth.playSuccess();
      hudStatus.textContent = 'LIT & WARM';
      hudStatus.style.color = '#3fb950';
      this.addTerminalLog('[CAKE] Candles reignited with laser flame 🔥');
    } else {
      synth.playBlowSound();
      hudStatus.textContent = 'BLOWN OUT ✨ (WISH COMPILED)';
      hudStatus.style.color = '#bc8cff';
      this.wishesCount++;
      document.getElementById('hudWishCount').textContent = this.wishesCount;
      this.addTerminalLog('[CAKE] Candles blown out! Birthday wish compiled successfully ✨');
    }
  }

  addTerminalLog(text) {
    const term = document.getElementById('terminalOutput');
    if (term) {
      const line = document.createElement('div');
      line.className = 'term-line celebrate';
      line.textContent = text;
      term.appendChild(line);
      term.scrollTop = term.scrollHeight;
    }
  }

  getThemeColors() {
    switch (this.theme) {
      case 'matcha':
        return { base: '#1b382b', icing: '#52b788', accent: '#7ee787', glow: 'rgba(82, 183, 136, 0.4)' };
      case 'matrix':
        return { base: '#0d2818', icing: '#00ff66', accent: '#52b788', glow: 'rgba(0, 255, 102, 0.4)' };
      case 'sunset':
        return { base: '#3d1c06', icing: '#ff9e00', accent: '#ff6000', glow: 'rgba(255, 158, 0, 0.4)' };
      case 'choco':
        return { base: '#2b1b17', icing: '#6f4e37', accent: '#f778ba', glow: 'rgba(247, 120, 186, 0.3)' };
      case 'cyber':
      default:
        return { base: '#161b22', icing: '#58a6ff', accent: '#bc8cff', glow: 'rgba(88, 166, 255, 0.4)' };
    }
  }

  animate() {
    this.time += 0.04;
    this.render();
    requestAnimationFrame(() => this.animate());
  }

  render() {
    const { ctx, canvas, time } = this;
    const colors = this.getThemeColors();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const baseY = 310;

    // Pedestal Plate
    ctx.save();
    ctx.shadowColor = colors.glow;
    ctx.shadowBlur = 25;
    ctx.fillStyle = '#21262d';
    ctx.beginPath();
    ctx.ellipse(centerX, baseY + 18, 175, 38, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = colors.accent;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    // Bottom Layer
    this.drawCakeTier(centerX, baseY, 145, 68, colors.base, colors.icing, colors.accent);

    // Top Layer
    this.drawCakeTier(centerX, baseY - 58, 100, 52, colors.base, colors.icing, colors.accent);

    // Candles
    const candleSpacing = 150 / (this.candleCount + 1);
    const startX = centerX - 75 + candleSpacing;

    for (let i = 0; i < this.candleCount; i++) {
      const cx = startX + i * candleSpacing;
      const cy = baseY - 110;
      this.drawCandle(cx, cy, time + i);
    }

    // Sparkles
    if (this.candlesLit && Math.random() > 0.7) {
      this.sparkles.push({
        x: centerX + (Math.random() - 0.5) * 240,
        y: baseY - 120 - Math.random() * 80,
        alpha: 1,
        radius: Math.random() * 2 + 1,
        color: colors.icing
      });
    }

    for (let i = this.sparkles.length - 1; i >= 0; i--) {
      const s = this.sparkles[i];
      s.y -= 0.5;
      s.alpha -= 0.02;
      if (s.alpha <= 0) {
        this.sparkles.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.globalAlpha = s.alpha;
      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  drawCakeTier(x, y, radius, height, baseColor, icingColor, accentColor) {
    const { ctx } = this;
    ctx.save();
    ctx.fillStyle = baseColor;
    ctx.beginPath();
    ctx.ellipse(x, y, radius, radius * 0.35, 0, 0, Math.PI);
    ctx.lineTo(x - radius, y - height);
    ctx.ellipse(x, y - height, radius, radius * 0.35, 0, Math.PI, 0, true);
    ctx.lineTo(x + radius, y);
    ctx.fill();

    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = icingColor;
    ctx.beginPath();
    ctx.ellipse(x, y - height, radius, radius * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();

    const drips = 6;
    for (let i = 0; i < drips; i++) {
      const dripX = x - radius + (radius * 2 / drips) * (i + 0.5);
      ctx.beginPath();
      ctx.arc(dripX, y - height + 4, 8, 0, Math.PI);
      ctx.fill();
    }
    ctx.restore();
  }

  drawCandle(x, y, seed) {
    const { ctx, candlesLit } = this;
    ctx.save();
    ctx.fillStyle = '#f0f6fc';
    ctx.fillRect(x - 3, y, 6, 26);
    ctx.strokeStyle = '#bc8cff';
    ctx.lineWidth = 1;
    ctx.strokeRect(x - 3, y, 6, 26);

    // Wick
    ctx.strokeStyle = '#333';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 5);
    ctx.stroke();

    // Flame
    if (candlesLit) {
      const flicker = Math.sin(seed * 5) * 2;
      ctx.shadowColor = '#ffbd2e';
      ctx.shadowBlur = 12;
      ctx.fillStyle = '#ff7b72';
      ctx.beginPath();
      ctx.ellipse(x + flicker * 0.5, y - 10, 4, 8, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffbd2e';
      ctx.beginPath();
      ctx.ellipse(x, y - 9, 2.5, 5, 0, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillStyle = 'rgba(200, 200, 200, 0.3)';
      ctx.beginPath();
      ctx.arc(x + Math.sin(seed) * 3, y - 10 - (this.time % 2) * 5, 3, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }
}

// ==========================================================
// 6. Memory Vault (RAG Embeddings Gallery)
// ==========================================================
const DEFAULT_MEMORIES = [
  {
    id: '#DAD-VEC-001',
    title: 'The Great Troubleshooting Master',
    desc: 'Always ready to debug anything from tech to life problems with infinite patience.',
    icon: '🛠️',
    similarity: '1.000 (Exact Match)',
    date: 'Decades of Mastery'
  },
  {
    id: '#DAD-VEC-002',
    title: 'High-Temperature Dad Jokes',
    desc: 'Pioneered humor that makes everyone groan and smile at the exact same time.',
    icon: '😄',
    similarity: '0.999 (High Resonance)',
    date: 'Daily Stream'
  },
  {
    id: '#DAD-VEC-003',
    title: 'Master of the Perfect Tea Steep',
    desc: 'Converts premium Earl Grey & herbal tea into world-class wisdom and tranquility.',
    icon: '🍵',
    similarity: '0.998 (Optimal Zen)',
    date: 'Daily Ritual'
  },
  {
    id: '#DAD-VEC-004',
    title: 'World-Class Mentor & Father',
    desc: 'Unconditional love, steadfast support, and the best life architect anyone could ask for.',
    icon: '❤️',
    similarity: '1.000 (Infinite Gratitude)',
    date: 'Always & Forever'
  }
];

class MemoryVault {
  constructor(gridElement, countElement) {
    this.grid = gridElement;
    this.countEl = countElement;
    this.memories = [...DEFAULT_MEMORIES];
    this.render();
  }

  render() {
    this.grid.innerHTML = '';
    this.memories.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'memory-card';
      
      const imgContent = item.imgUrl
        ? `<img src="${item.imgUrl}" alt="${item.title}" />`
        : `<div class="memory-placeholder">${item.icon}</div>`;

      card.innerHTML = `
        <div class="memory-img-wrapper">${imgContent}</div>
        <div class="memory-info">
          <div class="memory-title">${item.title}</div>
          <div class="memory-desc">${item.desc}</div>
          <div class="memory-meta">
            <span>Cosine: ${item.similarity}</span>
            <span>${item.id}</span>
          </div>
        </div>
      `;
      this.grid.appendChild(card);
    });

    if (this.countEl) {
      this.countEl.textContent = `${this.memories.length} Vectors Indexed`;
    }
  }

  addPhoto(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const newMemory = {
        id: `#DAD-VEC-00${this.memories.length + 1}`,
        title: file.name.replace(/\.[^/.]+$/, ''),
        desc: 'Family snapshot embedded into high-dimensional gratitude vector space.',
        imgUrl: e.target.result,
        similarity: '1.000 (Unconditional Love)',
        date: 'Custom Upload'
      };
      this.memories.unshift(newMemory);
      this.render();
      synth.playSuccess();
      confetti.burst(60);
    };
    reader.readAsDataURL(file);
  }
}

// ==========================================================
// 7. Copilot AI & Vibe Prompt Engine
// ==========================================================
class CopilotEngine {
  constructor(messagesContainer, inputEl, sendBtn) {
    this.container = messagesContainer;
    this.input = inputEl;
    this.sendBtn = sendBtn;
    this.isStreaming = false;

    this.sendBtn.addEventListener('click', () => this.handleSend());
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.handleSend();
      }
    });

    document.querySelectorAll('.chip-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const prompt = btn.getAttribute('data-prompt');
        this.input.value = prompt;
        this.handleSend();
      });
    });
  }

  handleSend() {
    const text = this.input.value.trim();
    if (!text || this.isStreaming) return;
    this.input.value = '';
    synth.playClick();

    this.appendMessage('user', text);
    this.processPrompt(text);
  }

  appendMessage(role, text, codeSnippet = null) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${role === 'user' ? 'user-bubble' : 'agent-bubble'}`;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let inner = `
      <div class="bubble-sender">${role === 'user' ? 'You' : 'DadCopilot AI'}</div>
      <div class="bubble-content">${text}</div>
    `;

    if (codeSnippet) {
      inner += `<pre class="copilot-code-block"><code>${codeSnippet}</code></pre>`;
    }

    inner += `<div class="bubble-time">${now}</div>`;
    bubble.innerHTML = inner;
    this.container.appendChild(bubble);
    this.container.scrollTop = this.container.scrollHeight;
    return bubble;
  }

  processPrompt(prompt) {
    const lower = prompt.toLowerCase();
    this.isStreaming = true;
    const tempVal = parseFloat(document.getElementById('temperatureSlider')?.value || '0.98');

    setTimeout(() => {
      let reply = '';
      let code = null;

      if (lower.includes('poem') || lower.includes('rhyme')) {
        reply = `✨ <strong>A Birthday Poem for the 10x Dad:</strong><br><br>
        <em>Lines of code and cups of tea,<br>
        The greatest dad in history.<br>
        With gentle patience, zen and grace,<br>
        You make our world a brighter place.<br>
        Zero errors, pure prestige,<br>
        Happy Birthday to our favorite VIP!</em> 🚀🎉🍵`;
        confetti.burst(80);
        synth.playSuccess();
      } else if (lower.includes('cake') || lower.includes('bake')) {
        reply = `🎂 <strong>Neural Cake Synthesized!</strong><br>
        I have warmed the layers and embedded ${cakeRenderer.candleCount} glowing neural candles. Switching your view to the <strong>Neural Cake Studio</strong> now!`;
        setMainViewMode('cake');
        confetti.burst(100);
        synth.playSuccess();
      } else if (lower.includes('tea') || lower.includes('steep') || lower.includes('earl grey') || lower.includes('matcha')) {
        reply = `🍵 <strong>Premium Tea Steeping in Progress!</strong><br>
        Steeped a fresh pot of royal Earl Grey & Jasmine blend at precisely 95°C. Zen levels maximized, mental clarity overclocked, latency reduced to 0.00ms!`;
        document.getElementById('sidebarTeaText').textContent = '100% (Zen Optimal)';
        document.getElementById('sidebarTeaBar').style.width = '100%';
        synth.playSuccess();
      } else if (lower.includes('joke') || lower.includes('funny')) {
        // Pick a genuinely funny, coherent dad joke from database
        const joke = DAD_JOKES_DB[Math.floor(Math.random() * DAD_JOKES_DB.length)];
        reply = `🤣 <strong>Dad Joke (Temperature: ${tempVal.toFixed(2)} • ${joke.tag}):</strong><br><br>
        <strong>Q:</strong> ${joke.s}<br>
        <strong>A:</strong> <em>${joke.p}</em><br><br>
        <em>[Groan Rating: 10/10 — Certified Dad Standard]</em>`;
        synth.playTone(600, 'sine', 0.1);
      } else if (lower.includes('performance') || lower.includes('review')) {
        reply = `🏆 <strong>Dad's Annual Executive Performance Review:</strong><br>
        • <strong>Uptime:</strong> 100.00% (Flawless Reliability)<br>
        • <strong>Problem Solving:</strong> 10/10 (Always finds a way)<br>
        • <strong>Tea Connoisseurship:</strong> 100% S-Tier<br>
        • <strong>Verdict:</strong> Promoted to <em>Grand Architect of Awesomeness</em> with infinite stock in our hearts. ⭐⭐⭐⭐⭐`;
        confetti.burst(90);
        synth.playSuccess();
      } else if (lower.includes('letter') || lower.includes('card')) {
        reply = `💌 Opening your official Birthday Letter modal right now!`;
        document.getElementById('birthdayCardModal').style.display = 'flex';
        synth.playSuccess();
      } else {
        reply = `⚡ <strong>Vibe Analysis Complete:</strong><br>
        Executing prompt: <em>"${prompt}"</em>.<br><br>
        Result: <strong>100% Dad Awesomeness Verified.</strong> All systems report green, spirits are high, tea is hot, and the vibes are unmatched! Happy Birthday! 🎉`;
        confetti.burst(60);
        synth.playSuccess();
      }

      this.appendMessage('agent', reply, code);
      this.isStreaming = false;
    }, 450);
  }
}

// ==========================================================
// 8. Syntax Highlighter & Code Renderer
// ==========================================================
function highlightCode(text, lang) {
  let escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  escaped = escaped.replace(/(\/\/.*$|\/\*[\s\S]*?\*\/|#.*$)/gm, '<span class="token-comment">$1</span>');
  escaped = escaped.replace(/(['"`])(.*?)\1/g, '<span class="token-string">$1$2$1</span>');
  escaped = escaped.replace(/\b(import|export|class|const|let|var|function|async|await|return|public|readonly|from|new|def|class|super|print|true|false|null|None|True|False)\b/g, '<span class="token-keyword">$1</span>');
  escaped = escaped.replace(/\b(\d+[\d_]*\.?\d*)\b/g, '<span class="token-number">$1</span>');
  escaped = escaped.replace(/\b([A-Z][a-zA-Z0-9_]+)\b/g, '<span class="token-class">$1</span>');

  return escaped;
}

function renderCodeEditor(fileName) {
  const fileData = CODE_FILES[fileName];
  if (!fileData) return;

  const codeArea = document.getElementById('codeRenderArea');
  const lineNums = document.getElementById('lineNumbers');

  const lines = fileData.content.split('\n');
  lineNums.innerHTML = lines.map((_, i) => `<span class="gutter-num">${i + 1}</span>`).join('');
  codeArea.innerHTML = highlightCode(fileData.content, fileData.lang);
}

// ==========================================================
// 9. Navigation & View Switcher (Pill System)
// ==========================================================
let currentViewMode = 'cake';
let currentActiveFile = 'birthday_protocol.ts';

function setMainViewMode(mode) {
  currentViewMode = mode;
  synth.playClick();

  document.querySelectorAll('.mode-pill-btn').forEach(btn => {
    if (btn.getAttribute('data-view-mode') === mode) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.querySelectorAll('.activity-btn').forEach(btn => {
    const tab = btn.getAttribute('data-tab');
    if ((mode === 'cake' && tab === 'cake') ||
        (mode === 'gallery' && tab === 'rag-vault') ||
        (mode === 'code' && tab === 'explorer')) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.querySelectorAll('.sidebar-view').forEach(v => v.classList.remove('active'));
  if (mode === 'cake') document.getElementById('view-cake').classList.add('active');
  else if (mode === 'gallery') document.getElementById('view-rag-vault').classList.add('active');
  else if (mode === 'code') document.getElementById('view-explorer').classList.add('active');

  const cakeViewport = document.getElementById('visualCakeViewport');
  const galleryViewport = document.getElementById('visualGalleryViewport');
  const codeEditor = document.getElementById('codeEditor');
  const codeSubtabs = document.getElementById('codeSubtabsGroup');

  if (mode === 'cake') {
    cakeViewport.style.display = 'flex';
    galleryViewport.style.display = 'none';
    codeEditor.style.display = 'none';
    codeSubtabs.classList.remove('visible');
  } else if (mode === 'gallery') {
    cakeViewport.style.display = 'none';
    galleryViewport.style.display = 'flex';
    codeEditor.style.display = 'none';
    codeSubtabs.classList.remove('visible');
  } else if (mode === 'code') {
    cakeViewport.style.display = 'none';
    galleryViewport.style.display = 'none';
    codeEditor.style.display = 'flex';
    codeSubtabs.classList.add('visible');
    renderCodeEditor(currentActiveFile);
  }
}

function switchCodeFile(fileName) {
  currentActiveFile = fileName;
  synth.playClick();

  document.querySelectorAll('.file-subtab').forEach(t => {
    if (t.getAttribute('data-file') === fileName) t.classList.add('active');
    else t.classList.remove('active');
  });

  document.querySelectorAll('.tree-item').forEach(i => {
    if (i.getAttribute('data-file') === fileName) i.classList.add('active');
    else i.classList.remove('active');
  });

  renderCodeEditor(fileName);
}

// ==========================================================
// 10. App Initialization & Event Listeners
// ==========================================================
let confetti, cakeRenderer, memoryVault, copilot;

window.addEventListener('DOMContentLoaded', () => {
  confetti = new ConfettiCannon(document.getElementById('confettiCanvas'));
  cakeRenderer = new NeuralCakeRenderer(document.getElementById('cakeCanvas'));
  memoryVault = new MemoryVault(
    document.getElementById('memoryCardsGrid'),
    document.getElementById('memoryCount')
  );
  copilot = new CopilotEngine(
    document.getElementById('copilotMessages'),
    document.getElementById('copilotInput'),
    document.getElementById('copilotSendBtn')
  );

  setMainViewMode('cake');

  const dateDisplay = document.getElementById('currentDateDisplay');
  if (dateDisplay) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = new Date().toLocaleDateString(undefined, options).toUpperCase();
  }

  document.querySelectorAll('.mode-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-view-mode');
      setMainViewMode(mode);
    });
  });

  document.querySelectorAll('.file-subtab').forEach(tab => {
    tab.addEventListener('click', () => {
      const file = tab.getAttribute('data-file');
      switchCodeFile(file);
    });
  });

  document.querySelectorAll('.activity-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      if (tab === 'cake') setMainViewMode('cake');
      else if (tab === 'rag-vault') setMainViewMode('gallery');
      else if (tab === 'explorer') setMainViewMode('code');
      else if (tab === 'hyperparams') {
        synth.playClick();
        document.querySelectorAll('.sidebar-view').forEach(v => v.classList.remove('active'));
        document.getElementById('view-hyperparams').classList.add('active');
        document.querySelectorAll('.activity-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  });

  document.querySelectorAll('.tree-item').forEach(item => {
    item.addEventListener('click', () => {
      const file = item.getAttribute('data-file');
      setMainViewMode('code');
      switchCodeFile(file);
    });
  });

  const runBtn = document.getElementById('runCodeBtn');
  runBtn.addEventListener('click', () => {
    synth.playSuccess();
    confetti.burst(150);

    const term = document.getElementById('terminalOutput');
    const logs = [
      `[EXEC] Compiling ${currentActiveFile}...`,
      `[TEA ENGINE] Optimal 95°C temperature verified. Zen level: 100%.`,
      `[VIBE] Loading Dad-Core weights (Infinite Wisdom & Love)...`,
      `[PERF] Latency: 0.00ms (Instant Telepathy)`,
      `[DEPLOY] 🎉 DEPLOYED BIRTHDAY HAPPINESS TO PRODUCTION! 🚀`,
      `[STATUS] Certified 100% GOAT Dad. Zero bugs found.`
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        const line = document.createElement('div');
        line.className = index === 4 ? 'term-line celebrate' : 'term-line success';
        line.textContent = log;
        term.appendChild(line);
        term.scrollTop = term.scrollHeight;
      }, index * 200);
    });
  });

  const soundToggleBtn = document.getElementById('soundToggleBtn');
  soundToggleBtn.addEventListener('click', () => {
    const isUnmuted = synth.toggleMute();
    soundToggleBtn.querySelector('.btn-label').textContent = isUnmuted ? 'Sound: ON' : 'Sound: OFF';
    soundToggleBtn.querySelector('.btn-icon').textContent = isUnmuted ? '🔊' : '🔇';
  });

  const playThemeBtn = document.getElementById('playThemeBtn');
  playThemeBtn.addEventListener('click', () => {
    confetti.burst(100);
    synth.playBirthdaySong();
    const term = document.getElementById('terminalOutput');
    const line = document.createElement('div');
    line.className = 'term-line celebrate';
    line.textContent = '🎵 Playing 8-Bit Chiptune Birthday Anthem for Dad!';
    term.appendChild(line);
    term.scrollTop = term.scrollHeight;
  });

  const openCardBtn = document.getElementById('openCardBtn');
  const closeCardBtn = document.getElementById('closeCardBtn');
  const cardModal = document.getElementById('birthdayCardModal');

  openCardBtn.addEventListener('click', () => {
    synth.playSuccess();
    confetti.burst(120);
    cardModal.style.display = 'flex';
  });

  closeCardBtn.addEventListener('click', () => {
    synth.playClick();
    cardModal.style.display = 'none';
  });

  cardModal.addEventListener('click', (e) => {
    if (e.target === cardModal) {
      cardModal.style.display = 'none';
    }
  });

  document.getElementById('cardConfettiBtn')?.addEventListener('click', () => {
    synth.playSuccess();
    confetti.burst(200);
  });

  document.getElementById('editLetterBtn')?.addEventListener('click', () => {
    const sender = prompt("Enter your name or signature for the card:", "Matthew ❤️");
    if (sender) {
      document.getElementById('cardSenderName').textContent = sender;
    }
  });

  document.getElementById('cardSenderName')?.addEventListener('click', () => {
    const sender = prompt("Enter your name or signature for the card:", "Matthew ❤️");
    if (sender) {
      document.getElementById('cardSenderName').textContent = sender;
    }
  });

  document.getElementById('candleCountSlider')?.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    document.getElementById('candleCountLabel').textContent = `${val} Candles`;
    cakeRenderer.setCandles(val);
  });

  document.getElementById('frostingTheme')?.addEventListener('change', (e) => {
    cakeRenderer.setTheme(e.target.value);
  });

  document.getElementById('lightAllCandlesBtn')?.addEventListener('click', () => {
    if (!cakeRenderer.candlesLit) cakeRenderer.toggleCandles();
    confetti.burst(60);
  });

  document.getElementById('blowCandlesBtn')?.addEventListener('click', () => {
    if (cakeRenderer.candlesLit) cakeRenderer.toggleCandles();
  });

  document.getElementById('burstConfettiBtn')?.addEventListener('click', () => {
    synth.playSuccess();
    confetti.burst(180);
  });

  document.getElementById('teaSlider')?.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    document.getElementById('teaValue').textContent = `${val} Cups (Optimal Zen)`;
    document.getElementById('sidebarTeaText').textContent = `${val} Cups Fresh`;
    const pct = Math.min(100, (val / 6) * 100);
    document.getElementById('sidebarTeaBar').style.width = `${pct}%`;
  });

  document.getElementById('temperatureSlider')?.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    let desc = 'Mild';
    if (val > 1.4) desc = '🔥 Overload';
    else if (val > 0.8) desc = '🌶️ Spicy Dad Humor';
    else desc = 'Groan Worthy';
    document.getElementById('tempValue').textContent = `${val.toFixed(2)} (${desc})`;
  });

  const dropZone = document.getElementById('photoDropZone');
  const fileInput = document.getElementById('photoUploadInput');
  const uploadBtnHeader = document.getElementById('uploadPhotoBtnHeader');

  uploadBtnHeader?.addEventListener('click', () => fileInput?.click());
  dropZone?.addEventListener('click', () => fileInput?.click());
  fileInput?.addEventListener('change', (e) => {
    if (e.target.files) {
      Array.from(e.target.files).forEach(file => memoryVault.addPhoto(file));
    }
  });

  dropZone?.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  });

  dropZone?.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));

  dropZone?.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    if (e.dataTransfer.files) {
      Array.from(e.dataTransfer.files).forEach(file => memoryVault.addPhoto(file));
    }
  });

  document.getElementById('clearTerminalBtn')?.addEventListener('click', () => {
    document.getElementById('terminalOutput').innerHTML = '<div class="term-line system">[INFO] Terminal buffer cleared. Ready for next prompt.</div>';
  });

  const toggleTermBtn = document.getElementById('toggleTerminalBtn');
  const termPanel = document.getElementById('terminalPanel');
  toggleTermBtn?.addEventListener('click', () => {
    termPanel.classList.toggle('collapsed');
    toggleTermBtn.textContent = termPanel.classList.contains('collapsed') ? '□' : '_';
  });

  setTimeout(() => {
    confetti.burst(120);
  }, 500);
});
