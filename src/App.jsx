import React, { useState } from 'react';
import {
  GraduationCap,
  ArrowRight,
  FolderOpen,
  Users,
  Target,
  Check,
  Home,
  CloudUpload,
  BookOpen,
  Upload,
  FileText,
  BarChart2,
  Sparkles,
  Layers,
  CheckCircle2,
  RotateCcw,
  HelpCircle
} from 'lucide-react';
import './index.css';

const SUBJECT_TOPICS = {
  'Mathematics-I (Calculus & Differential Equations)': [
    { topic: 'Radius of Curvature & Evolutes', weight: 91, repeated: '6 of last 7 exams' },
    { topic: 'Partial Derivatives & Jacobian', weight: 88, repeated: '6 of last 7 exams' },
    { topic: 'Leibniz Theorem & Maclaurin Series', weight: 84, repeated: '5 of last 7 exams' },
    { topic: 'Linear Differential Equations (Higher Order)', weight: 86, repeated: '6 of last 7 exams' },
    { topic: 'Orthogonal Trajectories & Polar Curves', weight: 78, repeated: '4 of last 7 exams' },
    { topic: 'Taylor Expansion for Two Variables', weight: 74, repeated: '4 of last 7 exams' }
  ],
  'Programming in C & Problem Solving': [
    { topic: 'Pointers, Double Pointers & Pointer Arithmetic', weight: 94, repeated: '7 of last 7 exams' },
    { topic: 'Arrays, Strings & Matrix Operations', weight: 89, repeated: '6 of last 7 exams' },
    { topic: 'Functions, Recursion & Call-by-Reference', weight: 85, repeated: '5 of last 7 exams' },
    { topic: 'Structures, Unions & Typedef', weight: 82, repeated: '5 of last 7 exams' },
    { topic: 'File Handling (fopen, fread, fwrite, fprintf)', weight: 79, repeated: '5 of last 7 exams' },
    { topic: 'Loops, Switch-Case & Operator Precedence', weight: 75, repeated: '4 of last 7 exams' }
  ],
  'Software Engineering': [
    { topic: 'SDLC & Agile / Scrum Models', weight: 92, repeated: '6 of last 7 exams' },
    { topic: 'Requirements Engineering & SRS Document', weight: 86, repeated: '6 of last 7 exams' },
    { topic: 'Software Testing (Black-Box, White-Box, JUnit)', weight: 88, repeated: '6 of last 7 exams' },
    { topic: 'Project Estimation (COCOMO & Function Point)', weight: 81, repeated: '5 of last 7 exams' },
    { topic: 'UML Diagrams (Use Case, Activity, Sequence)', weight: 79, repeated: '5 of last 7 exams' },
    { topic: 'Risk Management & Software Maintenance', weight: 73, repeated: '4 of last 7 exams' }
  ],
  'Database Management Systems': [
    { topic: 'Normalization (1NF, 2NF, 3NF, BCNF)', weight: 95, repeated: '7 of last 7 exams' },
    { topic: 'SQL Joins, Nested Queries & Triggers', weight: 89, repeated: '6 of last 7 exams' },
    { topic: 'ACID Properties & Concurrency (2PL, Timestamp)', weight: 84, repeated: '5 of last 7 exams' },
    { topic: 'ER Diagrams & Relational Schema Mapping', weight: 82, repeated: '5 of last 7 exams' },
    { topic: 'Indexing, B+ Trees & Hashing', weight: 78, repeated: '5 of last 7 exams' },
    { topic: 'Functional Dependencies & Closure Sets', weight: 80, repeated: '5 of last 7 exams' }
  ],
  'Computer Networks': [
    { topic: 'TCP Congestion Control, Flow Control & 3-Way Handshake', weight: 91, repeated: '6 of last 7 exams' },
    { topic: 'Routing Protocols (OSPF, BGP, Distance Vector)', weight: 86, repeated: '5 of last 7 exams' },
    { topic: 'IPv4 Subnetting, CIDR & ARP', weight: 85, repeated: '6 of last 7 exams' },
    { topic: 'DNS, HTTP/HTTPS, SMTP & Socket Basics', weight: 79, repeated: '4 of last 7 exams' },
    { topic: 'Sliding Window Protocols & Error Detection (CRC)', weight: 81, repeated: '5 of last 7 exams' },
    { topic: 'Physical & Data Link Framing Standards', weight: 74, repeated: '4 of last 7 exams' }
  ]
};

const PRACTICE_QUESTIONS = {
  'Mathematics-I (Calculus & Differential Equations)': [
    {
      question: 'Derive the formula for radius of curvature in Cartesian and polar coordinates.',
      module: 'Module 1 • 8–10 Marks',
      askedCount: 6,
      years: '2021, 2022, 2023, 2024, 2025'
    },
    {
      question: 'State and prove Leibniz theorem and evaluate the nth derivative of a product function.',
      module: 'Module 2 • 8 Marks',
      askedCount: 5,
      years: '2021, 2023, 2024, 2025'
    },
    {
      question: 'Find Jacobian of u, v, w with respect to x, y, z and verify functional dependence.',
      module: 'Module 3 • 8–10 Marks',
      askedCount: 5,
      years: '2022, 2023, 2024, 2025'
    },
    {
      question: 'Solve higher-order linear differential equations with constant coefficients using inverse operators.',
      module: 'Module 4 • 10 Marks',
      askedCount: 4,
      years: '2022, 2023, 2025'
    }
  ],
  'Programming in C & Problem Solving': [
    {
      question: 'Explain pointer arithmetic, pointers to arrays, and pass-by-reference with a C program.',
      module: 'Module 3 • 8–10 Marks',
      askedCount: 6,
      years: '2021, 2022, 2023, 2024, 2025'
    },
    {
      question: 'Write a C program to perform matrix multiplication and check memory/boundary conditions.',
      module: 'Module 2 • 8 Marks',
      askedCount: 5,
      years: '2021, 2023, 2024, 2025'
    },
    {
      question: 'Differentiate between Structure and Union with syntax, memory allocation, and nested example.',
      module: 'Module 4 • 6–8 Marks',
      askedCount: 5,
      years: '2022, 2023, 2024, 2025'
    },
    {
      question: 'Write a C program to copy contents from one text file to another and count lines/characters.',
      module: 'Module 5 • 8 Marks',
      askedCount: 4,
      years: '2022, 2024, 2025'
    }
  ],
  'Software Engineering': [
    {
      question: 'Compare Waterfall, Spiral, and Agile Scrum process models with suitability scenarios.',
      module: 'Module 1 • 8–10 Marks',
      askedCount: 6,
      years: '2021, 2022, 2023, 2024, 2025'
    },
    {
      question: 'Explain functional vs non-functional requirements and structure of an IEEE SRS document.',
      module: 'Module 2 • 8 Marks',
      askedCount: 5,
      years: '2021, 2023, 2024, 2025'
    },
    {
      question: 'Explain Basic COCOMO model effort and development time equations with an example.',
      module: 'Module 3 • 8–10 Marks',
      askedCount: 5,
      years: '2022, 2023, 2024, 2025'
    },
    {
      question: 'Differentiate between Black-Box and White-Box testing; explain equivalence partitioning and boundary value analysis.',
      module: 'Module 4 • 10 Marks',
      askedCount: 4,
      years: '2022, 2024, 2025'
    }
  ],
  'Database Management Systems': [
    {
      question: 'Explain 1NF, 2NF, 3NF, and BCNF with functional dependencies and decomposition examples.',
      module: 'Module 3 • 10 Marks',
      askedCount: 7,
      years: '2020, 2021, 2022, 2023, 2024, 2025'
    },
    {
      question: 'Explain ACID properties and Two-Phase Locking (2PL) / serializability in transactions.',
      module: 'Module 4 • 8–10 Marks',
      askedCount: 5,
      years: '2021, 2022, 2023, 2024, 2025'
    },
    {
      question: 'Write SQL queries using INNER/LEFT JOIN, GROUP BY, HAVING, and nested subqueries.',
      module: 'Module 2 • 8 Marks',
      askedCount: 5,
      years: '2021, 2023, 2024, 2025'
    },
    {
      question: 'Draw an ER diagram for a university/hospital system and convert weak & strong entities to relations.',
      module: 'Module 1 • 8–10 Marks',
      askedCount: 4,
      years: '2022, 2023, 2025'
    }
  ],
  'Computer Networks': [
    {
      question: 'Explain TCP congestion control phases (Slow Start, Congestion Avoidance, Fast Recovery) with cwnd graph.',
      module: 'Module 3 • 10 Marks',
      askedCount: 6,
      years: '2021, 2022, 2023, 2024, 2025'
    },
    {
      question: 'Given an IPv4 block and subnet count, calculate subnet mask, broadcast address, and usable host ranges.',
      module: 'Module 2 • 8–10 Marks',
      askedCount: 5,
      years: '2021, 2023, 2024, 2025'
    },
    {
      question: 'Compare Link State (OSPF) and Distance Vector routing; explain count-to-infinity problem.',
      module: 'Module 3 • 8 Marks',
      askedCount: 4,
      years: '2022, 2023, 2024, 2025'
    },
    {
      question: 'Explain CRC error detection with polynomial division and Go-Back-N vs Selective Repeat ARQ.',
      module: 'Module 2 • 8 Marks',
      askedCount: 4,
      years: '2021, 2024, 2025'
    }
  ]
};

const SUBJECT_NAMES = Object.keys(SUBJECT_TOPICS);

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const [semester, setSemester] = useState('1st Semester');
  const [subject, setSubject] = useState(SUBJECT_NAMES[0]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [reportData, setReportData] = useState(null);

  const goToTab = (tabName) => {
    setActiveTab(tabName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFileSelection = (file) => {
    if (!file) return;
    setSelectedFile(file);
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelection(e.target.files[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelection(e.dataTransfer.files[0]);
    }
  };

  const handleUseSamplePaper = () => {
    const sampleName = `${subject.replace(/[^a-zA-Z0-9]+/g, '_')}_VTU_QP.pdf`;
    setSelectedFile({
      name: sampleName,
      size: 1480240,
      isSample: true
    });
  };

  const handleAnalyzeSubmit = () => {
    const topics = SUBJECT_TOPICS[subject] || SUBJECT_TOPICS[SUBJECT_NAMES[0]];
    const questions =
      PRACTICE_QUESTIONS[subject] || PRACTICE_QUESTIONS[SUBJECT_NAMES[0]];
    const sourceLabel = selectedFile
      ? selectedFile.name
      : `${subject.replace(/[^a-zA-Z0-9]+/g, '_')}_VTU_Archive.pdf`;

    setReportData({
      semester,
      subject,
      sourceLabel,
      topics,
      questions
    });
  };

  const handleResetAnalysis = () => {
    setSelectedFile(null);
    setReportData(null);
  };

  return (
    <div className="page-wrapper">
      <div className="dots-top-left"></div>
      <div className="dots-bottom-right"></div>

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="brand" onClick={() => goToTab('home')}>
          <GraduationCap size={32} color="#0f294a" strokeWidth={2.2} />
          <span>VTU PYQ Analyzer</span>
        </div>

        <nav className="nav-links">
          <button
            type="button"
            className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => goToTab('home')}
          >
            Home
          </button>
          <button
            type="button"
            className={`nav-btn ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => goToTab('features')}
          >
            Features
          </button>
          <button
            type="button"
            className={`nav-btn ${activeTab === 'how-it-works' ? 'active' : ''}`}
            onClick={() => goToTab('how-it-works')}
          >
            How It Works
          </button>
          <button
            type="button"
            className={`nav-btn ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => goToTab('about')}
          >
            About
          </button>
        </nav>

        {activeTab === 'home' ? (
          <button
            type="button"
            className="btn-primary"
            onClick={() => goToTab('analyze')}
          >
            Start Analyzing <ArrowRight size={18} />
          </button>
        ) : (
          <button
            type="button"
            className="btn-navy"
            onClick={() => goToTab('home')}
          >
            <Home size={16} /> Back to Home
          </button>
        )}
      </header>

      {/* ================= HOME VIEW ================= */}
      {activeTab === 'home' && (
        <>
          <main className="hero-container">
            <div>
              <h1 className="hero-title">
                Prepare Smarter with <br />
                <span>VTU Previous-Year</span> <br />
                Question Papers
              </h1>
              <p className="hero-subtitle">
                Discover important topics, analyze trends and ace your exams with
                ease.
              </p>

              <div className="cta-wrapper">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => goToTab('analyze')}
                >
                  Start Analyzing <ArrowRight size={18} />
                </button>
                <div className="spark-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>

            <div className="laptop-wrapper">
              <div className="laptop-screen">
                <div className="chart-box">
                  <div className="chart-title">Topic Trends</div>
                  <div className="bars-container">
                    <div className="bar" style={{ height: '35%' }}></div>
                    <div className="bar" style={{ height: '48%' }}></div>
                    <div className="bar" style={{ height: '62%' }}></div>
                    <div className="bar" style={{ height: '55%' }}></div>
                    <div className="bar" style={{ height: '80%' }}></div>
                    <div className="bar" style={{ height: '95%' }}></div>
                  </div>
                </div>

                <div className="checklist-box">
                  <button
                    type="button"
                    className="check-item"
                    onClick={() => goToTab('analyze')}
                  >
                    <div className="check-icon">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>Repeated Questions</span>
                  </button>
                  <button
                    type="button"
                    className="check-item"
                    onClick={() => goToTab('features')}
                  >
                    <div className="check-icon">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>Important Topics</span>
                  </button>
                  <button
                    type="button"
                    className="check-item"
                    onClick={() => goToTab('how-it-works')}
                  >
                    <div className="check-icon">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>Year-wise Analysis</span>
                  </button>
                </div>
              </div>
              <div className="laptop-base"></div>
            </div>
          </main>

          <section className="stats-bar">
            <button
              type="button"
              className="stat-item"
              onClick={() => goToTab('how-it-works')}
            >
              <FolderOpen size={30} color="#1d63dc" />
              <div className="stat-text">
                <h4>10+</h4>
                <p>Years Analysis</p>
              </div>
            </button>

            <div className="stat-divider"></div>

            <button
              type="button"
              className="stat-item"
              onClick={() => goToTab('features')}
            >
              <Users size={30} color="#1d63dc" />
              <div className="stat-text">
                <h4>Smart Study</h4>
                <p>Made Easy</p>
              </div>
            </button>

            <div className="stat-divider"></div>

            <button
              type="button"
              className="stat-item"
              onClick={() => goToTab('analyze')}
            >
              <Target size={30} color="#1d63dc" />
              <div className="stat-text">
                <h4>Score Better</h4>
                <p>Exam Focused</p>
              </div>
            </button>
          </section>
        </>
      )}

      {/* ================= ANALYZE PAPER VIEW ================= */}
      {activeTab === 'analyze' && (
        <main className="analyze-container">
          <CloudUpload
            size={44}
            strokeWidth={2.2}
            className="cloud-header-icon"
          />
          <h1 className="analyze-title">
            Analyze Your <span>Question Paper</span>
          </h1>
          <p className="analyze-subtitle">
            Select details and upload your VTU previous-year question paper in
            PDF format.
          </p>

          <div className="form-grid">
            <div className="form-card">
              <div className="card-header">
                <GraduationCap size={22} className="card-icon" />
                <span>Select Semester</span>
              </div>
              <select
                className="custom-select"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
              >
                <option>1st Semester</option>
                <option>2nd Semester</option>
                <option>3rd Semester</option>
                <option>4th Semester</option>
                <option>5th Semester</option>
                <option>6th Semester</option>
                <option>7th Semester</option>
                <option>8th Semester</option>
              </select>
            </div>

            <div className="form-card">
              <div className="card-header">
                <BookOpen size={22} className="card-icon" />
                <span>Select Subject</span>
              </div>
              <select
                className="custom-select"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                {SUBJECT_NAMES.map((subj) => (
                  <option key={subj}>{subj}</option>
                ))}
              </select>
            </div>




            <div className="form-card">
              <div className="card-header">
                <Upload size={22} className="card-icon" />
                <span>Upload PDF</span>
              </div>
              <label
                className={`upload-zone ${isDragging ? 'drag-active' : ''}`}
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
              >
                <FileText size={26} color="#1d63dc" />
                <p>
                  {selectedFile
                    ? `Selected: ${selectedFile.name}`
                    : 'Drag & drop your PDF here or click to browse'}
                </p>
                <input
                  type="file"
                  accept=".pdf"
                  hidden
                  onChange={handleFileInputChange}
                />
              </label>
            </div>
          </div>

          <div className="action-row">
            <button
              type="button"
              className="btn-primary"
              onClick={handleAnalyzeSubmit}
            >
              <BarChart2 size={18} /> Analyze Paper <ArrowRight size={18} />
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={handleUseSamplePaper}
            >
              <Sparkles size={16} /> Use Sample VTU PDF
            </button>

            {(selectedFile || reportData) && (
              <button
                type="button"
                className="btn-secondary"
                onClick={handleResetAnalysis}
              >
                <RotateCcw size={16} /> Clear
              </button>
            )}
          </div>

          {reportData && (
            <>
              <section className="report-card">
                <div className="report-header">
                  <div>
                    <h3>{reportData.subject} — Topic & Trend Breakdown</h3>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: '#475569',
                        marginTop: '4px'
                      }}
                    >
                      {reportData.semester} • Source: {reportData.sourceLabel}
                    </p>
                  </div>
                  <span className="report-badge">
                    High-Priority Syllabus Weightage ({reportData.topics.length} Topics)
                  </span>
                </div>

                {reportData.topics.map((item) => (
                  <div key={item.topic} className="topic-row">
                    <div className="topic-meta">
                      <span>{item.topic}</span>
                      <span>
                        {item.weight}% weightage ({item.repeated})
                      </span>
                    </div>
                    <div className="progress-track">
                      <div
                        className="progress-fill"
                        style={{ width: `${item.weight}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </section>

              {/* Extra Practice Questions Section */}
              <section className="practice-card">
                <div className="practice-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <HelpCircle size={20} color="#1d63dc" />
                    <h3>Extra Practice Questions (Likely to Appear)</h3>
                  </div>
                  <span className="report-badge">
                    Based on Past Exam Frequency
                  </span>
                </div>

                <div className="practice-list">
                  {reportData.questions.map((qItem, idx) => (
                    <div key={idx} className="practice-item">
                      <div>
                        <div className="practice-q">
                          Q{idx + 1}. {qItem.question}
                        </div>
                        <div className="practice-sub">
                          {qItem.module} • Seen in: {qItem.years}
                        </div>
                      </div>
                      <span className="freq-pill">
                        Asked {qItem.askedCount} times
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </main>
      )}

      {/* ================= FEATURES VIEW ================= */}
      {activeTab === 'features' && (
        <main className="analyze-container">
          <h1 className="analyze-title">
            Platform <span>Features</span>
          </h1>
          <p className="analyze-subtitle">
            Built to help VTU engineering students prioritize high-scoring units
            from 1st to 8th semester.
          </p>

          <div className="info-grid">
            <div className="info-card">
              <Layers size={26} color="#1d63dc" />
              <h3>Repeated Question Detection</h3>
              <p>
                Highlights how many times a topic or question pattern has appeared
                across previous exam cycles.
              </p>
            </div>
            <div className="info-card">
              <BarChart2 size={26} color="#1d63dc" />
              <h3>Topic Weightage Trends</h3>
              <p>
                Shows detailed module-wise concepts and percentage weightage so
                you focus on high-return areas first.
              </p>
            </div>
            <div className="info-card">
              <CheckCircle2 size={26} color="#1d63dc" />
              <h3>Practice Question Bank</h3>
              <p>
                Provides high-probability practice questions right below the
                breakdown with repetition counts.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="btn-primary"
            onClick={() => goToTab('analyze')}
          >
            Go to Paper Analyzer <ArrowRight size={18} />
          </button>
        </main>
      )}

      {/* ================= HOW IT WORKS VIEW ================= */}
      {activeTab === 'how-it-works' && (
        <main className="analyze-container">
          <h1 className="analyze-title">
            How It <span>Works</span>
          </h1>
          <p className="analyze-subtitle">
            Three quick steps from question paper selection to focused exam
            revision.
          </p>

          <div className="info-grid">
            <div className="info-card">
              <GraduationCap size={26} color="#1d63dc" />
              <h3>1. Choose Semester & Subject</h3>
              <p>
                Select any semester from 1st to 8th and choose your subject.
              </p>
            </div>
            <div className="info-card">
              <Upload size={26} color="#1d63dc" />
              <h3>2. Upload or Load Sample PDF</h3>
              <p>
                Drop your question paper PDF or click Use Sample VTU PDF to run
                analysis right away.
              </p>
            </div>
            <div className="info-card">
              <Target size={26} color="#1d63dc" />
              <h3>3. Revise High-Yield Topics</h3>
              <p>
                Check the 6-topic breakdown and practice questions showing how
                often each was asked.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="btn-primary"
            onClick={() => goToTab('analyze')}
          >
            Start Analyzing Now <ArrowRight size={18} />
          </button>
        </main>
      )}

      {/* ================= ABOUT VIEW ================= */}
      {activeTab === 'about' && (
        <main className="analyze-container">
          <h1 className="analyze-title">
            About <span>VTU PYQ Analyzer</span>
          </h1>
          <p className="analyze-subtitle">
            A clean study companion for engineering students preparing for VTU
            semester exams.
          </p>

          <div className="info-card" style={{ marginBottom: '24px' }}>
            <h3>Focused Exam Preparation</h3>
            <p>
              VTU PYQ Analyzer helps students map syllabus topics and likely
              exam questions by past repetition frequency so revision stays
              structured and practical.
            </p>
          </div>

          <button
            type="button"
            className="btn-primary"
            onClick={() => goToTab('analyze')}
          >
            Open Analyzer <ArrowRight size={18} />
          </button>
        </main>
      )}

      {/* Bottom Official Blue Waves */}
      <svg
        className="bottom-waves"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
      >
        <path
          fill="#93c5fd"
          fillOpacity="0.45"
          d="M0,120 C320,210 520,40 920,130 C1180,185 1320,90 1440,70 L1440,220 L0,220 Z"
        />
        <path
          fill="#2563eb"
          fillOpacity="0.85"
          d="M0,165 C280,230 580,110 980,175 C1210,210 1350,130 1440,110 L1440,220 L0,220 Z"
        />
      </svg>
    </div>
  );
}
