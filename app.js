const navLinks = document.querySelectorAll(".nav-link");
const screens = document.querySelectorAll(".screen");
const modalTriggers = document.querySelectorAll("[data-open-modal]");
const drawerTriggers = document.querySelectorAll("[data-open-drawer]");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");
const closeDrawerButtons = document.querySelectorAll("[data-close-drawer]");
const caseTabs = document.querySelectorAll(".case-tab");
const casePanels = document.querySelectorAll(".case-panel");
const screenJumpButtons = document.querySelectorAll("[data-screen-jump]");
const langButtons = document.querySelectorAll(".lang-button");
const homeGate = document.getElementById("home-gate");
const appShell = document.querySelector(".app-shell");
const enterSystemButton = document.getElementById("enter-system-button");
const previewSystemButton = document.getElementById("preview-system-button");
const homeTitleLine1 = document.getElementById("home-title-line-1");
const homeTitleLine2 = document.getElementById("home-title-line-2");
const homeTitleLine3 = document.getElementById("home-title-line-3");
const homeCopyMain = document.getElementById("home-copy-main");
const homeQuote = document.getElementById("home-quote");
const dashboardNavPills = document.querySelectorAll(".dashboard-nav-pill");
const dashboardTodayLabel = document.getElementById("dashboard-today-label");
const dashboardFocusLabel = document.getElementById("dashboard-focus-label");
const dashboardMonthSelect = document.getElementById("dashboard-month-select");
const dashboardFySelect = document.getElementById("dashboard-fy-select");
const dashboardSummaryGrid = document.getElementById("dashboard-summary-grid");
const dashboardStatusGrid = document.getElementById("dashboard-status-grid");
const dashboardDailyFocusGrid = document.getElementById("dashboard-daily-focus-grid");
const dashboardKpiWrap = document.getElementById("dashboard-kpi-wrap");
const dashboardCriticalQueue = document.getElementById("dashboard-critical-queue");
const calendarMonthLabel = document.getElementById("calendar-month-label");
const calendarMonthSelect = document.getElementById("calendar-month-select");
const monthCalendarGrid = document.getElementById("month-calendar-grid");
const inboxMonthSelect = document.getElementById("inbox-month-select");
const inboxMonthChipsContainer = document.getElementById("inbox-month-chips");
const inboxSummaryGrid = document.getElementById("inbox-summary-grid");
const inboxChartWrap = document.getElementById("inbox-chart-wrap");
const inboxStatusMatrix = document.getElementById("inbox-status-matrix");
const inboxServiceTotalsBody = document.getElementById("inbox-service-totals-body");
const inboxWorkerGrid = document.getElementById("inbox-worker-grid");
const inboxOwnerTotalsBody = document.getElementById("inbox-owner-totals-body");
const inboxCaseRegistryBody = document.getElementById("inbox-case-registry-body");
const inboxReferralBody = document.getElementById("inbox-referral-body");
const inboxWardBody = document.getElementById("inbox-ward-body");
const inboxDoctorBody = document.getElementById("inbox-doctor-body");
const inboxAreaCloud = document.getElementById("inbox-area-cloud");
const caseDetailTitle = document.querySelector("#case-detail .section-heading h2");
const caseDetailStatusChips = document.querySelector("#case-detail .detail-status");
const caseDetailProfileName = document.querySelector("#case-detail .profile-panel h3");
const caseDetailProfileMeta = document.querySelector("#case-detail .profile-panel .muted");
const caseDetailMetaLine = document.getElementById("case-detail-meta-line");
const caseDetailCaseNo = document.getElementById("case-detail-case-no");
const caseDetailPatientName = document.getElementById("case-detail-patient-name");
const caseDetailChannel = document.getElementById("case-detail-channel");
const caseDetailProblem = document.getElementById("case-detail-problem");
const caseDetailStatusText = document.getElementById("case-detail-status-text");
const caseDetailOwner = document.getElementById("case-detail-owner");
const caseDetailArea = document.getElementById("case-detail-area");
const caseDetailPhone = document.getElementById("case-detail-phone");
const caseDetailRelative = document.getElementById("case-detail-relative");
const caseDetailLastContact = document.getElementById("case-detail-last-contact");
const caseDetailHn = document.getElementById("case-detail-hn");
const caseDetailAge = document.getElementById("case-detail-age");
const caseDetailAddress = document.getElementById("case-detail-address");
const caseDetailWard = document.getElementById("case-detail-ward");
const caseDetailMd = document.getElementById("case-detail-md");
const caseDetailDx = document.getElementById("case-detail-dx");
const caseDetailConsult = document.getElementById("case-detail-consult");
const caseDetailPriority = document.getElementById("case-detail-priority");
const caseDetailSummary = document.getElementById("case-detail-summary");
const caseDetailNote = document.getElementById("case-detail-note");
const caseDetailCaseDate = document.getElementById("case-detail-case-date");
const caseDetailOwnerInline = document.getElementById("case-detail-owner-inline");
const caseDetailAdmitDate = document.getElementById("case-detail-admit-date");
const caseDetailUpdatedDate = document.getElementById("case-detail-updated-date");
const caseDetailWardDate = document.getElementById("case-detail-ward-date");
const caseDetailClosedDate = document.getElementById("case-detail-closed-date");
const caseDetailTimelineList = document.getElementById("case-detail-timeline-list");
const caseDetailProblemList = document.getElementById("case-detail-problem-list");
const caseDetailPlanList = document.getElementById("case-detail-plan-list");
const caseDetailReminderGrid = document.getElementById("case-detail-reminder-grid");
const caseDetailReminderCards = document.getElementById("case-detail-reminder-cards");
const intakeCaseId = document.getElementById("intake-case-id");
const intakeOwner = document.getElementById("intake-owner");
const intakeCaseDate = document.getElementById("intake-case-date");
const intakeChannel = document.getElementById("intake-channel");
const intakePatientName = document.getElementById("intake-patient-name");
const intakeHn = document.getElementById("intake-hn");
const intakeAge = document.getElementById("intake-age");
const intakeAddress = document.getElementById("intake-address");
const intakeArea = document.getElementById("intake-area");
const intakeAdmitDate = document.getElementById("intake-admit-date");
const intakeWard = document.getElementById("intake-ward");
const intakeMd = document.getElementById("intake-md");
const intakeDx = document.getElementById("intake-dx");
const intakeConsult = document.getElementById("intake-consult");
const intakeSummary = document.getElementById("intake-summary");
const intakePriority = document.getElementById("intake-priority");
const intakePhone = document.getElementById("intake-phone");
const intakeStatus = document.getElementById("intake-status");
const intakeUpdatedDate = document.getElementById("intake-updated-date");
const intakeClosedDate = document.getElementById("intake-closed-date");
const intakeWardDate = document.getElementById("intake-ward-date");
const intakeNote = document.getElementById("intake-note");
const saveIntakeDraftButton = document.getElementById("save-intake-draft-button");
const createIntakeCaseButton = document.getElementById("create-intake-case-button");
const reminderTitleInput = document.getElementById("reminder-title-input");
const reminderDateInput = document.getElementById("reminder-date-input");
const reminderTimeInput = document.getElementById("reminder-time-input");
const reminderAlertInput = document.getElementById("reminder-alert-input");
const reminderNoteInput = document.getElementById("reminder-note-input");
const createReminderButton = document.getElementById("create-reminder-button");
const taskTitleInput = document.getElementById("task-title-input");
const taskAssignerInput = document.getElementById("task-assigner-input");
const taskAssigneeInput = document.getElementById("task-assignee-input");
const taskDeadlineInput = document.getElementById("task-deadline-input");
const taskFileInput = document.getElementById("task-file-input");
const taskStatusInput = document.getElementById("task-status-input");
const taskNoteInput = document.getElementById("task-note-input");
const saveTaskButton = document.getElementById("save-task-button");
const quickNoteType = document.getElementById("quick-note-type");
const quickNoteText = document.getElementById("quick-note-text");
const saveQuickNoteButton = document.getElementById("save-quick-note-button");
const exportSummaryText = document.getElementById("export-summary-text");
const printExportSummaryButton = document.getElementById("print-export-summary-button");
const toastStack = document.getElementById("toast-stack");
const saveNotesPageButton = document.getElementById("save-notes-page-button");
const exportNotesSummaryButton = document.getElementById("export-notes-summary-button");
const notesHistoryBody = document.getElementById("notes-history-body");
const notesTimelineList = document.getElementById("notes-timeline-list");
const reminderHistoryBody = document.getElementById("reminder-history-body");
const exportRemindersSummaryButton = document.getElementById("export-reminders-summary-button");
const createReferralButton = document.getElementById("create-referral-button");
const saveReferralButton = document.getElementById("save-referral-button");
const exportReferralSummaryButton = document.getElementById("export-referral-summary-button");
const referralHistoryBody = document.getElementById("referral-history-body");
const coordinationExportButton = document.getElementById("coordination-export-button");
const coordinationMonthSelect = document.getElementById("coordination-month-select");
const coordinationFySelect = document.getElementById("coordination-fy-select");
const coordinationTypeFilter = document.getElementById("coordination-type-filter");
const coordinationStatusFilter = document.getElementById("coordination-status-filter");
const coordinationFamilyBody = document.getElementById("coordination-family-body");
const coordinationNetworkBody = document.getElementById("coordination-network-body");
const coordinationOwnerInput = document.getElementById("coordination-owner-input");
const coordinationDateInput = document.getElementById("coordination-date-input");
const coordinationSubjectInput = document.getElementById("coordination-subject-input");
const coordinationTargetInput = document.getElementById("coordination-target-input");
const coordinationResultInput = document.getElementById("coordination-result-input");
const coordinationReceivedInput = document.getElementById("coordination-received-input");
const coordinationTypeInput = document.getElementById("coordination-type-input");
const coordinationStatusInput = document.getElementById("coordination-status-input");
const coordinationFileInput = document.getElementById("coordination-file-input");
const coordinationNoteInput = document.getElementById("coordination-note-input");
const saveCoordinationButton = document.getElementById("save-coordination-button");
const coordinationLogBody = document.getElementById("coordination-log-body");
const coordinationExcellentBody = document.getElementById("coordination-excellent-body");
const coordinationDifficultBody = document.getElementById("coordination-difficult-body");
const referralId = document.getElementById("referral-id");
const referralDate = document.getElementById("referral-date");
const referralType = document.getElementById("referral-type");
const referralDestination = document.getElementById("referral-destination");
const referralContactPerson = document.getElementById("referral-contact-person");
const referralContactPhone = document.getElementById("referral-contact-phone");
const referralService = document.getElementById("referral-service");
const referralPriority = document.getElementById("referral-priority");
const referralReason = document.getElementById("referral-reason");
const referralSummary = document.getElementById("referral-summary");
const notesComposerType = document.getElementById("notes-composer-type");
const notesContactMode = document.getElementById("notes-contact-mode");
const notesPhoneFrom = document.getElementById("notes-phone-from");
const notesPhoneTo = document.getElementById("notes-phone-to");
const notesSubject = document.getElementById("notes-subject");
const notesDestination = document.getElementById("notes-destination");
const notesStartDatetime = document.getElementById("notes-start-datetime");
const notesEndDatetime = document.getElementById("notes-end-datetime");
const notesOwner = document.getElementById("notes-owner");
const notesAssignee = document.getElementById("notes-assignee");
const notesCoOwner = document.getElementById("notes-co-owner");
const notesFile = document.getElementById("notes-file");
const notesComposerText = document.getElementById("notes-composer-text");
const saveAssessmentButton = document.getElementById("save-assessment-button");
const assessmentSaveState = document.getElementById("assessment-save-state");
const assessmentReviewState = document.getElementById("assessment-review-state");
const assessmentProgressBar = document.getElementById("assessment-progress-bar");
const assessmentProgressLabel = document.getElementById("assessment-progress-label");
const assessmentProgressCopy = document.getElementById("assessment-progress-copy");
const assessmentChecklistState = document.getElementById("assessment-checklist-state");
const assessmentChecklistCompletion = document.getElementById("assessment-checklist-completion");
const assessmentAutoRiskScore = document.getElementById("assessment-auto-risk-score");
const assessmentAutoRiskLevel = document.getElementById("assessment-auto-risk-level");
const assessmentAutoRiskNote = document.getElementById("assessment-auto-risk-note");
const assessmentOutputRequired = document.getElementById("assessment-output-required");
const assessmentOutputProblems = document.getElementById("assessment-output-problems");
const assessmentOutputPriority = document.getElementById("assessment-output-priority");
const assessmentOutputBarrier = document.getElementById("assessment-output-barrier");
const assessmentOutputReferral = document.getElementById("assessment-output-referral");
const assessmentOutputReview = document.getElementById("assessment-output-review");
const assessmentPresentingProblem = document.getElementById("assessment-presenting-problem");
const assessmentPrimaryProblem = document.getElementById("assessment-primary-problem");
const assessmentUrgency = document.getElementById("assessment-urgency");
const assessmentImmediateIssues = document.getElementById("assessment-immediate-issues");
const assessmentCaregiver = document.getElementById("assessment-caregiver");
const assessmentCaregiverReadiness = document.getElementById("assessment-caregiver-readiness");
const assessmentHomeSafety = document.getElementById("assessment-home-safety");
const assessmentRiskLevel = document.getElementById("assessment-risk-level");
const assessmentStrengths = document.getElementById("assessment-strengths");
const assessmentSummary = document.getElementById("assessment-summary");
const assessmentRecommendation = document.getElementById("assessment-recommendation");
const assessmentChecklistInputs = document.querySelectorAll("[data-assessment-check]");
const syncCarePlanButton = document.getElementById("sync-care-plan-button");
const saveCarePlanButton = document.getElementById("save-care-plan-button");
const carePlanSyncState = document.getElementById("care-plan-sync-state");
const carePlanProblemCount = document.getElementById("care-plan-problem-count");
const carePlanGoalCount = document.getElementById("care-plan-goal-count");
const carePlanInterventionCount = document.getElementById("care-plan-intervention-count");
const carePlanReviewDate = document.getElementById("care-plan-review-date");
const carePlanProblemPrimary = document.getElementById("care-plan-problem-primary");
const carePlanProblemPrimaryNote = document.getElementById("care-plan-problem-primary-note");
const carePlanProblemSecondary = document.getElementById("care-plan-problem-secondary");
const carePlanProblemSecondaryNote = document.getElementById("care-plan-problem-secondary-note");
const carePlanMatrixBody = document.getElementById("care-plan-matrix-body");
const carePlanAgreementReview = document.getElementById("care-plan-agreement-review");
const carePlanClientAgreement = document.getElementById("care-plan-client-agreement");
const carePlanFamilyAgreement = document.getElementById("care-plan-family-agreement");
const carePlanStatus = document.getElementById("care-plan-status");
const carePlanBarrier = document.getElementById("care-plan-barrier");
const carePlanExpectedOutcome = document.getElementById("care-plan-expected-outcome");
const carePlanOutcomeIndicator = document.getElementById("care-plan-outcome-indicator");
const carePlanProgressNote = document.getElementById("care-plan-progress-note");
const careConferenceMonthBadge = document.getElementById("care-conference-month-badge");
const careConferenceSw = document.getElementById("care-conference-sw");
const careConferencePatientName = document.getElementById("care-conference-patient-name");
const careConferenceIntake = document.getElementById("care-conference-intake");
const careConferenceConsultDate = document.getElementById("care-conference-consult-date");
const careConferenceSex = document.getElementById("care-conference-sex");
const careConferenceAdmitDate = document.getElementById("care-conference-admit-date");
const careConferenceAge = document.getElementById("care-conference-age");
const careConferenceHn = document.getElementById("care-conference-hn");
const careConferenceDx = document.getElementById("care-conference-dx");
const careConferenceWard = document.getElementById("care-conference-ward");
const careConferenceMd = document.getElementById("care-conference-md");
const careConferenceCommunityDetail = document.getElementById("care-conference-community-detail");
const careConferenceDate = document.getElementById("care-conference-date");
const careConferenceTime = document.getElementById("care-conference-time");
const careConferenceLocation = document.getElementById("care-conference-location");
const careConferenceProgress = document.getElementById("care-conference-progress");
const saveCareConferenceButton = document.getElementById("save-care-conference-button");
const careConferenceHistoryBody = document.getElementById("care-conference-history-body");
const communityPrepMonthBadge = document.getElementById("community-prep-month-badge");
const communityPrepSw = document.getElementById("community-prep-sw");
const communityPrepPatientName = document.getElementById("community-prep-patient-name");
const communityPrepIntake = document.getElementById("community-prep-intake");
const communityPrepConsultDate = document.getElementById("community-prep-consult-date");
const communityPrepSex = document.getElementById("community-prep-sex");
const communityPrepAdmitDate = document.getElementById("community-prep-admit-date");
const communityPrepAge = document.getElementById("community-prep-age");
const communityPrepHn = document.getElementById("community-prep-hn");
const communityPrepDx = document.getElementById("community-prep-dx");
const communityPrepWard = document.getElementById("community-prep-ward");
const communityPrepMd = document.getElementById("community-prep-md");
const communityPrepDetail = document.getElementById("community-prep-detail");
const communityPrepAddress = document.getElementById("community-prep-address");
const communityPrepSubdistrict = document.getElementById("community-prep-subdistrict");
const communityPrepDistrict = document.getElementById("community-prep-district");
const communityPrepProvince = document.getElementById("community-prep-province");
const communityPrepDate = document.getElementById("community-prep-date");
const communityPrepInternalTeam = document.getElementById("community-prep-internal-team");
const communityPrepExternalNetwork = document.getElementById("community-prep-external-network");
const communityPrepAn = document.getElementById("community-prep-an");
const communityPrepRound = document.getElementById("community-prep-round");
const communityPrepStay6m = document.getElementById("community-prep-stay-6m");
const communityPrepStrong = document.getElementById("community-prep-strong");
const communityPrepWeak = document.getElementById("community-prep-weak");
const communityPrepNote = document.getElementById("community-prep-note");
const saveCommunityPrepButton = document.getElementById("save-community-prep-button");
const communityPrepHistoryBody = document.getElementById("community-prep-history-body");
const closeCaseMonthBadge = document.getElementById("close-case-month-badge");
const closeCaseSummaryGrid = document.getElementById("close-case-summary-grid");
const closeCaseId = document.getElementById("close-case-id");
const closeCasePatient = document.getElementById("close-case-patient");
const closeCaseOwner = document.getElementById("close-case-owner");
const closeCaseDate = document.getElementById("close-case-date");
const closeCaseType = document.getElementById("close-case-type");
const closeCaseReason = document.getElementById("close-case-reason");
const closeCaseFollowup = document.getElementById("close-case-followup");
const closeCasePostStatus = document.getElementById("close-case-post-status");
const closeCaseReconsult = document.getElementById("close-case-reconsult");
const closeCaseReadmit = document.getElementById("close-case-readmit");
const closeCaseStable6m = document.getElementById("close-case-stable6m");
const closeCaseReturnDate = document.getElementById("close-case-return-date");
const closeCaseSummary = document.getElementById("close-case-summary");
const closeCasePlan = document.getElementById("close-case-plan");
const saveCloseCaseDraftButton = document.getElementById("save-close-case-draft-button");
const saveCloseCaseButton = document.getElementById("save-close-case-button");
const closeCaseTabs = document.querySelectorAll(".close-case-tab");
const closeCaseHistoryBody = document.getElementById("close-case-history-body");
const closeCaseWatchlistBody = document.getElementById("close-case-watchlist-body");
const generateReportButton = document.getElementById("generate-report-button");
const printReportButton = document.getElementById("print-report-button");
const reportPeriodBadge = document.getElementById("report-period-badge");
const reportFyBadge = document.getElementById("report-fy-badge");
const reportCoverTitle = document.getElementById("report-cover-title");
const reportCoverCopy = document.getElementById("report-cover-copy");
const reportTopStats = document.getElementById("report-top-stats");
const reportExecutiveSummary = document.getElementById("report-executive-summary");
const reportWorkflowMetrics = document.getElementById("report-workflow-metrics");
const reportRiskSummary = document.getElementById("report-risk-summary");
const reportRecommendationSummary = document.getElementById("report-recommendation-summary");
const reportOwnerTableBody = document.querySelector("#report-owner-table tbody");
const reportProblemList = document.getElementById("report-problem-list");
const reportReferralMetrics = document.getElementById("report-referral-metrics");
const reportFooterNote = document.getElementById("report-footer-note");

const translations = [
  { th: "JVK SWMS ต้นแบบระบบ", en: "JVK SWMS Prototype" },
  { th: "SECURE JVK SWMS ACCESS", en: "SECURE JVK SWMS ACCESS" },
  { th: "Department of Mental Health", en: "Department of Mental Health" },
  { th: "พัฒนาระบบฐานข้อมูลกลุ่มงานสังคมสงเคราะห์", en: "Social Work Database Development Platform" },
  { th: "ยกระดับงาน", en: "Elevating" },
  { th: "สังคมสงเคราะห์ จิตเวช", en: "Psychiatric Social Work" },
  { th: "สู่ดิจิทัล", en: "Into Digital Care" },
  { th: "แพลตฟอร์มดิจิทัลครบวงจรสำหรับงานสังคมสงเคราะห์จิตเวช", en: "An end-to-end digital platform for psychiatric social work." },
  { th: "สร้างระบบที่ทำให้ นักสังคมสงเคราะห์จิตเวช มีเวลามากขึ้นสำหรับ สิ่งที่สำคัญที่สุด — การดูแลผู้ป่วยและครอบครัว", en: "Built so psychiatric social workers can spend more time on what matters most — caring for patients and families." },
  { th: "เข้าสู่ระบบเพื่อดู dashboard, case intake, care plan, referrals และรายงานสถิติ", en: "Sign in to access the dashboard, case intake, care plans, referrals, and reporting." },
  { th: "เข้าสู่ระบบ Sign in", en: "Sign in" },
  { th: "ดูระบบตัวอย่าง Preview", en: "Open Preview" },
  { th: "ระบบจัดการเคส Case Management", en: "Case Management Platform" },
  { th: "ข้อมูลสถิติของกลุ่มงานสังคมสงเคราะห์", en: "Social Work Statistics Dashboard" },
  { th: "SW KPI Real-time Dashboard", en: "SW KPI Real-time Dashboard" },
  { th: "แพลตฟอร์มดิจิทัลครบวงจรพัฒนาโดยกลุ่มงานสังคมสงเคราะห์จิตเวช รวมการจัดการเคส ติดตามผล รายงาน KPI และการสื่อสารทีมไว้ในระบบเดียว การเปลี่ยนแปลงที่วัดได้ เมื่อนักสังคมสงเคราะห์ทำงานได้ง่ายขึ้น เวลาที่เพิ่มขึ้นจะถูกนำไปดูแลผู้ป่วยได้มากขึ้น", en: "An integrated digital platform developed by the psychiatric social work team, combining case management, follow-up, KPI reporting, and team communication in one system. As work becomes easier for social workers, more time can be redirected to patient care." },
  { th: "Human-centered", en: "Human-centered" },
  { th: "Trusted Data Layer", en: "Trusted Data Layer" },
  { th: "Username", en: "Username" },
  { th: "Password", en: "Password" },
  { th: "socialwork.admin", en: "socialwork.admin" },
  { th: "JVKSWMS2026", en: "JVKSWMS2026" },
  { th: "Department of Mental Health", en: "Department of Mental Health" },
  { th: "Social Work Database Platform · JVK SWMS", en: "Social Work Database Platform · JVK SWMS" },
  { th: "ระบบจัดการเคส Case Management", en: "Case Management Platform" },
  { th: "แดชบอร์ด Dashboard", en: "Dashboard" },
  { th: "ภาพรวมทีม", en: "Team pulse" },
  { th: "กล่องเคส Case Inbox", en: "Case Inbox" },
  { th: "งานเคสที่กำลังดำเนินการ", en: "All active work" },
  { th: "รับเคสใหม่ Intake", en: "New Intake" },
  { th: "บันทึกข้อมูลตั้งต้น", en: "Structured entry" },
  { th: "รายละเอียดเคส", en: "Case Detail" },
  { th: "ข้อมูลหลักของเคส", en: "Single source of truth" },
  { th: "การประเมิน Assessment", en: "Assessment" },
  { th: "ประเมินปัญหาสังคมและครอบครัว", en: "Psychosocial review" },
  { th: "แผนช่วยเหลือ Care Plan", en: "Care Plan" },
  { th: "เป้าหมายและการดำเนินงาน", en: "Goals and actions" },
  { th: "การส่งต่อ Referrals", en: "Referrals" },
  { th: "ภายในและภายนอก", en: "Internal and external" },
  { th: "รายงาน Reports", en: "Reports" },
  { th: "สถิติและผลลัพธ์", en: "Stats and outcomes" },
  { th: "งานติดตาม Tasks", en: "Tasks" },
  { th: "ติดตามงานและกำหนดนัด", en: "Follow-up engine" },
  { th: "บันทึกเคส Case Notes", en: "Case Notes" },
  { th: "ไทม์ไลน์และบันทึกการติดต่อ", en: "Timeline and logs" },
  { th: "การประสานงาน Coordination", en: "Coordination" },
  { th: "ญาติและทีม MDT", en: "Family and MDT" },
  { th: "ปิดเคส Close Case", en: "Close Case" },
  { th: "ยุติเคสหรือส่งต่อ", en: "Terminate or transfer" },
  { th: "แนวทางดีไซน์", en: "Design direction" },
  { th: "ค้นหาเลขเคส, HN, ชื่อผู้ป่วย, เบอร์โทร", en: "Search case no, HN, patient, phone" },
  { th: "ตัวกรอง Filters", en: "Filters" },
  { th: "ส่งออก Export", en: "Export Snapshot" },
  { th: "+ รับเคสใหม่", en: "+ New Intake" },
  { th: "แดชบอร์ดหน่วยสังคมสงเคราะห์", en: "Social Work Unit Dashboard" },
  { th: "ภาพรวมที่อ่านง่าย สำหรับงานเคสที่ซับซ้อน", en: "Calm overview for complex case coordination." },
  { th: "หน้านี้เน้นให้เห็นเคสเร่งด่วน งานที่ค้างติดตาม และผลลัพธ์ของบริการ โดยไม่ทำให้หน้าจอดูแน่นหรือแข็งเกินไป", en: "The dashboard foregrounds urgent work, inactive cases, and service outcomes without feeling dense or institutional." },
  { th: "วันนี้", en: "Today" },
  { th: "โฟกัสของทีม", en: "Team focus" },
  { th: "มี 14 เคสที่ต้องติดตามใกล้ชิด", en: "14 high-touch cases need action" },
  { th: "เคสใหม่", en: "New Cases" },
  { th: "เพิ่มขึ้น 3 เคสจากเมื่อวาน", en: "+3 since yesterday" },
  { th: "เคสที่กำลังดำเนินการ", en: "Active Cases" },
  { th: "26 เคสอยู่ในขั้นประสานงาน", en: "26 in coordination" },
  { th: "งานติดตามเกินกำหนด", en: "Overdue Follow-up" },
  { th: "2 เคสเป็นระดับวิกฤต", en: "2 critical priority" },
  { th: "งานส่งต่อที่รออยู่", en: "Pending Referrals" },
  { th: "6 รายการครบกำหนดใน 24 ชม.", en: "6 due within 24 hrs" },
  { th: "คิวเร่งด่วน", en: "Urgent Queue" },
  { th: "เคสที่ต้องทบทวนทันที", en: "Cases needing immediate review" },
  { th: "เสี่ยงสูง", en: "High Risk" },
  { th: "ยังไม่ยืนยันผู้ดูแลสำหรับการจำหน่ายวันพรุ่งนี้", en: "No caregiver confirmed for discharge tomorrow" },
  { th: "ใกล้จำหน่าย", en: "Ready for discharge" },
  { th: "ผู้ป่วยสูงอายุที่ติดต่อญาติไม่สำเร็จหลายครั้ง", en: "Elderly patient with repeated failed family contact" },
  { th: "ไม่มีอัปเดต 48 ชม.", en: "No update 48 hrs" },
  { th: "ปัญหาการเงินทำให้การส่งต่อไปศูนย์ฟื้นฟูล่าช้า", en: "Financial barrier delaying transfer to rehabilitation center" },
  { th: "รอตอบจากภายนอก", en: "Pending external" },
  { th: "งานของฉัน", en: "My Tasks" },
  { th: "รายการติดตามวันนี้", en: "Today's follow-up" },
  { th: "โทรหาบุตรสาวเพื่อยืนยันแผนผู้ดูแล", en: "Call daughter for caregiver plan" },
  { th: "ประชุม MDT เรื่องอุปสรรคก่อนจำหน่าย", en: "MDT conference for discharge barrier" },
  { th: "ส่งเอกสาร referral ไปหน่วยงานที่พักชั่วคราว", en: "Send referral packet to shelter partner" },
  { th: "ภาพรวมสถานะเคส", en: "Case Funnel" },
  { th: "ดูว่าเคสอยู่ในขั้นตอนไหน", en: "Where cases are sitting now" },
  { th: "รับเคส Intake 54", en: "Intake 54" },
  { th: "ประเมิน Assessment 41", en: "Assessment 41" },
  { th: "ประสานงาน Coordination 26", en: "Coordination 26" },
  { th: "รอภายนอกตอบ 17", en: "Pending External 17" },
  { th: "ใกล้ปิดเคส 9", en: "Closing 9" },
  { th: "แนวโน้มปัญหาสังคม", en: "Social Trends" },
  { th: "หมวดปัญหาหลักที่พบบ่อย", en: "Primary problem categories" },
  { th: "ผู้ดูแล / ครอบครัว", en: "Caregiver / family" },
  { th: "ที่อยู่อาศัย / shelter", en: "Housing / shelter" },
  { th: "การเงิน / สิทธิประโยชน์", en: "Finance / benefits" },
  { th: "อุปสรรคก่อนจำหน่าย", en: "Discharge barrier" },
  { th: "สุขภาพจิต / emotional support", en: "Mental health support" },
  { th: "ศูนย์ควบคุมงาน", en: "Operational Control" },
  { th: "ทั้งหมด", en: "All" },
  { th: "ระหว่างประเมิน", en: "Under Assessment" },
  { th: "ระหว่างประสานงาน", en: "Coordination" },
  { th: "สถานะ", en: "Status" },
  { th: "ระดับความเร่งด่วน", en: "Priority" },
  { th: "ผู้รับผิดชอบ", en: "Owner" },
  { th: "ความเสี่ยง", en: "Risk" },
  { th: "บันทึกมุมมอง", en: "Save View" },
  { th: "มอบหมายรายการที่เลือก", en: "Assign Selected" },
  { th: "เลขเคส", en: "Case No" },
  { th: "ผู้ป่วย", en: "Patient" },
  { th: "ปัญหาหลัก", en: "Primary Problem" },
  { th: "ความเร่งด่วน", en: "Priority" },
  { th: "อัปเดตล่าสุด", en: "Last Update" },
  { th: "สถานะสุขภาพเคส", en: "Health" },
  { th: "72 ปี / Ward 5A", en: "72 yrs / Ward 5A" },
  { th: "ไม่มีผู้ดูแลรองรับการจำหน่าย", en: "No caregiver available for discharge" },
  { th: "วันนี้ 11:32", en: "Today 11:32" },
  { th: "58 ปี / Ortho", en: "58 yrs / Ortho" },
  { th: "ปัญหาการเงินในการส่งต่อไป rehab", en: "Financial barrier to rehab transfer" },
  { th: "กำลังประสานงาน", en: "Active Coordination" },
  { th: "เร่งด่วน", en: "Urgent" },
  { th: "เมื่อวาน 16:10", en: "Yesterday 16:10" },
  { th: "81 ปี / Med Ward", en: "81 yrs / Med Ward" },
  { th: "สภาพบ้านไม่พร้อมและยังติดต่อญาติไม่ได้", en: "Home environment unsafe and family unavailable" },
  { th: "2 วันที่แล้ว", en: "2 days ago" },
  { th: "44 ปี / OPD", en: "44 yrs / OPD" },
  { th: "ปัญหาสิทธิประโยชน์และวิกฤตด้านงาน", en: "Benefit eligibility and employment crisis" },
  { th: "วางแผนช่วยเหลือ", en: "Care Planning" },
  { th: "ปกติ", en: "Routine" },
  { th: "วันนี้ 09:20", en: "Today 09:20" },
  { th: "บันทึกรับเคสแบบมีโครงสร้าง", en: "Structured Entry" },
  { th: "รับเคสใหม่ New Intake", en: "New Intake Case" },
  { th: "1 แหล่งที่มา", en: "1 Source" },
  { th: "2 ผู้ป่วย", en: "2 Patient" },
  { th: "3 ปัญหา", en: "3 Problem" },
  { th: "4 มอบหมาย", en: "4 Assign" },
  { th: "แหล่งที่มาของเคส", en: "Referral Source" },
  { th: "เคสนี้เข้าระบบจากช่องทางใด", en: "How the case entered the system" },
  { th: "หอผู้ป่วย Ward", en: "Ward" },
  { th: "ญาติ Family", en: "Family" },
  { th: "ชุมชน Community", en: "Community" },
  { th: "หน่วยงานภายนอก", en: "External Agency" },
  { th: "ผู้ส่งเคส", en: "Referred by" },
  { th: "พยาบาล case manager", en: "Nurse case manager" },
  { th: "เบอร์ติดต่อ", en: "Contact number" },
  { th: "วันที่ / เวลา", en: "Date / Time" },
  { th: "ปัญหาที่ส่งปรึกษา", en: "Presenting Problem" },
  { th: "บริบทเบื้องต้นและความเร่งด่วน", en: "Immediate context and urgency" },
  { th: "บันทึกอัตโนมัติแล้ว", en: "Autosaved" },
  { th: "สรุปปัญหา", en: "Summary" },
  { th: "ผู้ป่วยสูงอายุมีแผนจำหน่ายภายใน 24 ชั่วโมง แต่ยังไม่มีผู้ดูแลที่ยืนยันแล้ว ความพร้อมของบ้านยังไม่ชัดเจน และการติดต่อญาติยังไม่ครบถ้วน", en: "Elderly patient with planned discharge in 24 hours, no confirmed caregiver, uncertain home readiness, and family contact remains incomplete." },
  { th: "สูง", en: "High" },
  { th: "สถานะ consent", en: "Consent status" },
  { th: "ได้รับ consent ทางวาจา", en: "Verbal consent" },
  { th: "ไม่มีผู้ดูแล", en: "No caregiver" },
  { th: "ไร้ที่อยู่อาศัย", en: "Homelessness" },
  { th: "การเงิน", en: "Financial" },
  { th: "เสี่ยงถูกกระทำ", en: "Abuse concern" },
  { th: "วิกฤตสุขภาพจิต", en: "Mental health crisis" },
  { th: "บันทึกแบบร่าง", en: "Save Draft" },
  { th: "สร้างเคส Intake", en: "Create Intake" },
  { th: "เคส SW-240221", en: "Case SW-240221" },
  { th: "ภาพรวม", en: "Overview" },
  { th: "ไทม์ไลน์", en: "Timeline" },
  { th: "แผนช่วยเหลือ", en: "Plan" },
  { th: "เอกสาร", en: "Documents" },
  { th: "อายุ 72 ปี · Ward 5A", en: "72 years · Ward 5A" },
  { th: "โทรศัพท์", en: "Phone" },
  { th: "ชื่อญาติและเบอร์ติดต่อ", en: "Relative name and contact" },
  { th: "Piyada P. · 08X-XXX-4455", en: "Piyada P. · 08X-XXX-4455" },
  { th: "ติดต่อครั้งล่าสุด", en: "Last contact" },
  { th: "ความปลอดภัยที่บ้าน", en: "Home safety" },
  { th: "ไทม์ไลน์เคส", en: "Case Timeline" },
  { th: "เห็นลำดับเหตุการณ์ทั้งหมดในที่เดียว", en: "Everything in one flow" },
  { th: "เพิ่มบันทึก", en: "Add Note" },
  { th: "11:32 ประเมินเบื้องต้นเสร็จแล้ว", en: "11:32 Initial assessment completed" },
  { th: "แรงสนับสนุนจากครอบครัวยังไม่ชัดเจน ยังไม่ยืนยันผู้ดูแล และความพร้อมของบ้านยังต้องประเมินต่อ", en: "Family support weak, caregiver not confirmed, home readiness uncertain." },
  { th: "10:10 โทรหาบุตรสาว", en: "10:10 Attempted call to daughter" },
  { th: "ยังไม่มีผู้รับสาย กำหนดติดตามอีกครั้งเวลา 13:00", en: "No answer. Follow-up scheduled for 13:00." },
  { th: "09:20 สร้างเคสจากการส่งปรึกษาของ ward", en: "09:20 Intake created from ward referral" },
  { th: "มีแผนจำหน่ายวันพรุ่งนี้และต้องการ social work support แบบเร่งด่วน", en: "Discharge expected tomorrow. Social work support requested urgently." },
  { th: "รายการปัญหา", en: "Problem List" },
  { th: "การติดต่อญาติยังไม่ครบ", en: "Family contact incomplete" },
  { th: "ต้องประเมินความพร้อมของบ้านเพิ่มเติม", en: "Home readiness needs review" },
  { th: "สรุปแผนช่วยเหลือ", en: "Plan Snapshot" },
  { th: "โทรหาบุตรสาวและบุตรชาย", en: "Call daughter and son" },
  { th: "นัดประชุม MDT ก่อนจำหน่าย", en: "Schedule MDT discharge meeting" },
  { th: "เตรียม referral สำรองไปชุมชน", en: "Prepare backup community referral" },
  { th: "รายการงานสำคัญ", en: "Action Rail" },
  { th: "สิ่งที่ควรทำต่อ", en: "Next best actions" },
  { th: "กำหนดวันนี้", en: "Due today" },
  { th: "โทรหาญาติก่อน 13:00", en: "Call family before 13:00" },
  { th: "เตรียม referral สำรอง", en: "Prepare referral backup" },
  { th: "หน่วยงานสนับสนุนระยะยาวในชุมชน", en: "Community long-stay support" },
  { th: "เปิด consult MDT", en: "Open MDT consult" },
  { th: "ทบทวนอุปสรรคก่อนจำหน่าย", en: "Discharge barrier review" },
  { th: "แผงตัวกรอง", en: "Filter Panel" },
  { th: "ปรับรายการงานที่ต้องการดู", en: "Refine the worklist" },
  { th: "ทุกสถานะ", en: "All statuses" },
  { th: "ทุกระดับ", en: "All priorities" },
  { th: "ทุกคน", en: "Any worker" },
  { th: "แท็กความเสี่ยง", en: "Risk tags" },
  { th: "ไม่มีผู้ดูแล, อุปสรรคก่อนจำหน่าย", en: "caregiver, discharge barrier" },
  { th: "ล้างค่า", en: "Clear" },
  { th: "ใช้ตัวกรอง", en: "Apply Filters" },
  { th: "เมนูลัด", en: "Quick Action" },
  { th: "สร้างรายการใหม่อย่างรวดเร็ว", en: "Create something new" },
  { th: "รับเคสใหม่", en: "New Intake" },
  { th: "เริ่มเคสใหม่จากการส่งปรึกษา", en: "Start a fresh case from referral" },
  { th: "บันทึกด่วน", en: "Quick Note" },
  { th: "บันทึกการโทร การอัปเดตจากญาติ หรือการประชุม", en: "Document a call, family update, or meeting" },
  { th: "สร้างงานใหม่", en: "New Task" },
  { th: "สร้างงานติดตามและกำหนดวันครบกำหนด", en: "Create follow-up work and due dates" },
  { th: "สร้าง Referral", en: "Create Referral" },
  { th: "เตรียมการประสานงานภายในหรือภายนอก", en: "Prepare internal or external coordination" },
  { th: "เพิ่มรายการในไทม์ไลน์", en: "Add timeline entry" },
  { th: "ประเภทบันทึก", en: "Note type" },
  { th: "บันทึกการโทร", en: "Call note" },
  { th: "ประชุมญาติ", en: "Family conference" },
  { th: "ประชุม MDT", en: "MDT meeting" },
  { th: "สรุปสาระสำคัญ", en: "Summary" },
  { th: "พูดคุยกับตัวแทนครอบครัวแล้ว ขณะนี้รอการยืนยันขั้นสุดท้ายเรื่องการดูแลผู้ป่วยในเช้าวันพรุ่งนี้", en: "Spoke with family representative. Waiting for final confirmation about caregiving arrangement tomorrow morning." },
  { th: "ยกเลิก", en: "Cancel" },
  { th: "บันทึก Note", en: "Save Note" },
  { th: "อัปโหลดเอกสาร", en: "Upload Document" },
  { th: "เพิ่มไฟล์ประกอบเคส", en: "Add supporting file" },
  { th: "ประเภทเอกสาร", en: "Document type" },
  { th: "สรุปเคส", en: "Summary" },
  { th: "ชื่อไฟล์", en: "File name" },
  { th: "อัปโหลด", en: "Upload" }
];

function getTranslation(text, targetLang) {
  const cleaned = text.trim();
  const match = translations.find((item) => item.th === cleaned || item.en === cleaned);
  if (!match) return null;
  return targetLang === "th" ? match.th : match.en;
}

function replacePreservingWhitespace(original, replacement) {
  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  return `${leading}${replacement}${trailing}`;
}

function translateTextNodes(targetLang) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const parentTag = node.parentElement?.tagName;
      if (["SCRIPT", "STYLE"].includes(parentTag)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  while (walker.nextNode()) {
    const node = walker.currentNode;
    const translated = getTranslation(node.nodeValue, targetLang);
    if (translated) {
      node.nodeValue = replacePreservingWhitespace(node.nodeValue, translated);
    }
  }
}

function translateAttributes(targetLang) {
  document.querySelectorAll("input, textarea").forEach((field) => {
    if (field.placeholder) {
      const translated = getTranslation(field.placeholder, targetLang);
      if (translated) field.placeholder = translated;
    }

    if (field.value) {
      const translated = getTranslation(field.value, targetLang);
      if (translated) field.value = translated;
    }
  });

  document.querySelectorAll("option").forEach((option) => {
    const translated = getTranslation(option.textContent, targetLang);
    if (translated) option.textContent = translated;
  });

  const translatedTitle = getTranslation(document.title, targetLang);
  if (translatedTitle) document.title = translatedTitle;
}

function applyLanguage(targetLang) {
  document.documentElement.lang = targetLang === "th" ? "th" : "en";
  translateTextNodes(targetLang);
  translateAttributes(targetLang);

  if (homeTitleLine1 && homeTitleLine2 && homeTitleLine3) {
    if (targetLang === "th") {
      homeTitleLine1.textContent = "ยกระดับงาน";
      homeTitleLine2.textContent = "สังคมสงเคราะห์ จิตเวช";
      homeTitleLine3.textContent = "สู่ดิจิทัล";
    } else {
      homeTitleLine1.textContent = "Elevating";
      homeTitleLine2.textContent = "Psychiatric Social Work";
      homeTitleLine3.textContent = "Into Digital Care";
    }
  }

  if (homeCopyMain) {
    homeCopyMain.textContent =
      targetLang === "th"
        ? "แพลตฟอร์มดิจิทัลครบวงจรสำหรับงานสังคมสงเคราะห์จิตเวช"
        : "An end-to-end digital platform for psychiatric social work.";
  }

  if (homeQuote) {
    homeQuote.innerHTML =
      targetLang === "th"
        ? '<p class="vision-label">Vision</p><p class="home-quote">สร้างระบบที่ทำให้ <strong>นักสังคมสงเคราะห์จิตเวช</strong> มีเวลามากขึ้นสำหรับสิ่งที่สำคัญที่สุด <strong>การดูแลผู้ป่วยและครอบครัว</strong></p>'
        : '<p class="vision-label">Vision</p><p class="home-quote">Built so <strong>psychiatric social workers</strong> can spend more time on what matters most <strong>caring for patients and families</strong>.</p>';
  }

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === targetLang);
  });
  localStorage.setItem("jvk-swms-lang", targetLang);
}

function enterSystem() {
  if (homeGate) homeGate.style.display = "none";
  if (appShell) appShell.classList.remove("app-shell-hidden");
  setActiveScreen("dashboard");
}

function setActiveScreen(screenId) {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.screen === screenId);
  });

  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === screenId);
  });
}

function toggleOverlay(id, isOpen) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.toggle("open", isOpen);
}

function setActiveCaseTab(tabId) {
  caseTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.caseTab === tabId);
  });

  casePanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === tabId);
  });
}

const thaiMonthNames = [
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม"
];

const thaiWeekdays = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];

const thaiCalendarData = {
  "april-2026": {
    monthIndex: 3,
    year: 2026,
    selectedDay: 22,
    holidays: {
      6: "วันจักรี",
      13: "สงกรานต์",
      14: "สงกรานต์",
      15: "สงกรานต์"
    },
    cases: {
      1: 4, 2: 4, 3: 5, 4: 2, 5: 1, 7: 3, 8: 5, 9: 4, 10: 7,
      11: 6, 16: 8, 17: 6, 18: 2, 19: 1, 20: 7, 21: 8, 22: 9,
      23: 5, 24: 6, 25: 3, 26: 2, 27: 6, 28: 5, 29: 7, 30: 4
    }
  },
  "may-2026": {
    monthIndex: 4,
    year: 2026,
    selectedDay: 12,
    holidays: {
      1: "วันแรงงาน",
      4: "วันฉัตรมงคล",
      11: "วันพืชมงคล"
    },
    cases: {
      1: 2, 2: 1, 5: 6, 6: 5, 7: 8, 8: 6, 9: 2, 10: 1,
      12: 7, 13: 6, 14: 4, 15: 5, 18: 8, 19: 7, 20: 9, 21: 6,
      22: 5, 25: 7, 26: 4, 27: 6, 28: 5, 29: 3
    }
  },
  "june-2026": {
    monthIndex: 5,
    year: 2026,
    selectedDay: 18,
    holidays: {
      3: "เฉลิมพระชนมพรรษา"
    },
    cases: {
      1: 5, 2: 4, 4: 6, 5: 5, 8: 7, 9: 8, 10: 6, 11: 4,
      12: 3, 15: 7, 16: 8, 17: 7, 18: 10, 19: 6, 22: 5, 23: 7,
      24: 5, 25: 4, 26: 3, 29: 6, 30: 4
    }
  }
};

const sharedInboxReferrals = [
  "บ้านเมตตาจังหวัดนครราชสีมา",
  "ศูนย์คุ้มครองและพัฒนาคุณภาพชีวิตจังหวัดนครราชสีมา",
  "บ้านพักเด็กจังหวัดนครราชสีมา",
  "บ้านพักเด็กจังหวัดชัยภูมิ",
  "สถานสงเคราะห์วัดม่วง",
  "สถานคุ้มครองและพัฒนาคนพิการบ้ากึ่งวิถี (ชาย)",
  "สถานคุ้มครองและพัฒนาคนพิการบ้ากึ่งวิถี (หญิง)",
  "มูลนิธิสวนแก้ว สาขาบุรีรัมย์",
  "สถานสงเคราะห์คนชราบ้านธรรมปกรณ์โพธิ์กลาง",
  "สถานบำบัดเอกชน"
];

const sharedInboxWards = ["Homeward", "ชัยพฤกษ์", "พุทธรักษา", "พวงชมพู", "พิรุณทอง", "กรองจิต", "เฟื่องฟ้า", "ทองอุไร"];
const sharedInboxDoctors = ["นพ.รัฐพล", "พญ.กานต์ธิมา", "พญ.ภรฑิตา", "พญ.อัญชลี", "พญ.รวิสุดา", "นพ.ปวริศร", "พญ.เวธนี", "นพ.ณฐกร", "พญ.สายสุดา", "พญ.กรองกาญจน์", "นพ.ภัทรพล"];
const sharedInboxAreas = ["อ.เมืองนครราชสีมา","บุรีรัมย์","ชัยภูมิ","สุรินทร์","โนนสูง","สูงเนิน","จักราช","โนนไทย","ชุมพวง","ปักธงชัย","บัวลาย","วังน้ำเขียว","ลำทะเมนชัย","บ้านเหลื่อม","ขามทะเลสอ","พระทองคำ","ขามสะแกแสง","ครบุรี","โชคชัย","พิมาย","ปากช่อง","ห้วยแถลง","แก้งสนามนาง","เมืองยาง","เทพารักษ์","เฉลิมพระเกียรติ","เสิงสาง","สีคิ้ว","ด่านขุนทด","บัวใหญ่","หนองบุญนาก","ประทาย","คง","สีดา","โนนแดง","ขอนแก่น","อุดรธานี","เลย","หนองบัวลำภู","หนองคาย","บึงกาฬ","สกลนคร","นครพนม","มุกดาหาร","กาฬสินธุ์","มหาสารคาม","ร้อยเอ็ด","ยโสธร","อำนาจเจริญ","อุบลราชธานี","ศรีสะเกษ","เชียงใหม่","เชียงราย","แม่ฮ่องสอน","ลำพูน","ลำปาง","พะเยา","แพร่","น่าน","อุตรดิตถ์","ตาก","สุโขทัย","พิษณุโลก","พิจิตร","กำแพงเพชร","เพชรบูรณ์","กรุงเทพมหานคร","นนทบุรี","ปทุมธานี","สมุทรปราการ","สมุทรสาคร","สมุทรสงคราม","นครปฐม","พระนครศรีอยุธยา","ลพบุรี","สระบุรี","สิงห์บุรี","อ่างทอง","ชัยนาท","นครสวรรค์","อุทัยธานี","กาญจนบุรี","ราชบุรี","เพชรบุรี","ประจวบคีรีขันธ์","สุพรรณบุรี","ชลบุรี","ระยอง","จันทบุรี","ตราด","ฉะเชิงเทรา","ปราจีนบุรี","สระแก้ว","นครนายก","ชุมพร","ระนอง","สุราษฎร์ธานี","กระบี่","พังงา","ภูเก็ต","นครศรีธรรมราช","ตรัง","สตูล","พัทลุง","สงขลา","ปัตตานี","ยะลา","นราธิวาส"];

const inboxBaseMonthData = {
  "april-2026": {
    label: "เมษายน 2569",
    summary: [
      ["Total cases", "1,286", "ทั้งหมดในระบบ"],
      ["Total cases เดือนนี้", "126", "เมษายน 2569"],
      ["Total Male ทั้งหมด", "684", "ยอดสะสม"],
      ["Total Female ทั้งหมด", "602", "ยอดสะสม"],
      ["Total Male เดือนนี้", "68", "รับเข้าเดือนนี้"],
      ["Total Female เดือนนี้", "58", "รับเข้าเดือนนี้"]
    ],
    chart: { weekly: [22, 28, 34, 42], newCases: 126, conferences: 24, community: 19, donut: [66, 41, 19] },
    statuses: [["สถานะจำนวนเคสใหม่",22],["เคสที่รอดำเนินการ",31],["เคสที่กำลังดำเนินการ In-Progress",74],["เคสที่ดำเนินการเสร็จแล้ว Terminate case / D/C",19],["เคสที่รอ SW พบ patient",14],["เคสรอเข้าเขียนแผนใบสหวิชาชีพครบ 5 วันทำงาน",9],["เคสที่เข้าเขียนแผนใบสหวิชาชีพตึกครบ 5 วันทำการ",7],["เคสที่รอประสานงานเครือข่าย",18],["เคสเตรียม Conference กับสหวิชาชีพ",11],["เคสที่รอเตรียมชุมชน",13],["เคสที่รอ D/C แพทย์มี Order D/C",8],["เคสที่รอประเมินส่งกลับภูมิลำเนา",6],["เคสที่รอทำหนังสือราชการ",5],["เคสที่ late 5 วันทำการเข้าตึก",4]],
    serviceTotals: [["Total OPD",722,58],["Total IPD",418,41],["Total ER",146,12],["Total OPD เด็ก",98,8],["Total นิติจิตเวช OPD",74,5],["Total นิติจิตเวช IPD",39,2],["Total Case Conferences",116,24],["Total การเตรียมชุมชน",91,19]],
    owners: [
      { name:"คุณศิริพร ปรางปรุ", subtitle:"Siriporn - Head of Social Work Department", active:34, conference:6, late:2, totalAll:198, totalMonth:16, inProgress:34, opd:18, ipd:14, er:2, referral:9 },
      { name:"คุณกิตติมาพร", subtitle:"SW-Kittimaporn", active:22, conference:3, late:1, totalAll:154, totalMonth:15, inProgress:22, opd:8, ipd:5, er:2, referral:6 },
      { name:"คุณนัทธมน", subtitle:"SW-Natthamon", active:18, conference:3, late:1, totalAll:129, totalMonth:12, inProgress:18, opd:5, ipd:6, er:1, referral:5 },
      { name:"คุณสุภาภรณ์", subtitle:"SW-Supaporn", active:17, conference:2, late:0, totalAll:121, totalMonth:11, inProgress:17, opd:4, ipd:5, er:2, referral:6 },
      { name:"คุณพงศธร", subtitle:"SW-Pongsatorn", active:15, conference:1, late:1, totalAll:114, totalMonth:10, inProgress:15, opd:3, ipd:4, er:3, referral:4 },
      { name:"คุณกนกวรรณ", subtitle:"SW-Kanokwan", active:13, conference:2, late:0, totalAll:108, totalMonth:9, inProgress:13, opd:4, ipd:3, er:1, referral:4 },
      { name:"คุณจุฑาพร", subtitle:"SW-Juthaporn", active:16, conference:4, late:0, totalAll:117, totalMonth:11, inProgress:16, opd:6, ipd:3, er:1, referral:5 },
      { name:"คุณวิฏฐิรษา", subtitle:"SW-Witthirasa", active:21, conference:3, late:1, totalAll:145, totalMonth:14, inProgress:21, opd:7, ipd:4, er:2, referral:6 }
    ],
    cases: [
      { id:"SWMS-260422-018", patient:"Somjai P.", meta:"72 ปี / HN 00047291", channel:"IPD", problem:"สัมพันธภาพในครอบครัว / ปัญหาการดูแล", status:"In-Progress", statusClass:"chip-violet", updated:"วันนี้ 11:32", owner:"คุณศิริพร ปรางปรุ", area:"อ.เมืองนครราชสีมา" },
      { id:"SWMS-260421-014", patient:"Prasit K.", meta:"58 ปี / HN 00041882", channel:"ER", problem:"ปัญหาสุราและยาเสพติด", status:"เคสที่รอ SW พบ patient", statusClass:"chip-warning", updated:"เมื่อวาน 16:10", owner:"คุณกิตติมาพร", area:"ชัยภูมิ" },
      { id:"SWMS-260419-009", patient:"Arthit T.", meta:"81 ปี / HN 00040172", channel:"IPD", problem:"ที่อยู่อาศัย/สถานสงเคราะห์", status:"เคสที่รอประสานงานเครือข่าย", statusClass:"chip-info", updated:"2 วันที่แล้ว", owner:"คุณนัทธมน", area:"บุรีรัมย์" },
      { id:"SWMS-260418-006", patient:"Rattanaporn C.", meta:"44 ปี / HN 00039281", channel:"OPD", problem:"การเงิน/เศรษฐกิจ/อาชีพ", status:"Fact Finding", statusClass:"chip-soft", updated:"วันนี้ 09:20", owner:"คุณวิฏฐิรษา", area:"กรุงเทพมหานคร" }
    ],
    referrals: [24,19,16,11,9,8,7,6,5,14],
    wards: [22,17,14,16,11,13,15,9],
    doctors: [26,18,21,19,15,17,16,14,13,12,11],
    areas: sharedInboxAreas
  },
  "march-2026": {
    label: "มีนาคม 2569",
    summary: [["Total cases","1,160","ทั้งหมดในระบบ"],["Total cases เดือนนี้","112","มีนาคม 2569"],["Total Male ทั้งหมด","618","ยอดสะสม"],["Total Female ทั้งหมด","542","ยอดสะสม"],["Total Male เดือนนี้","60","รับเข้าเดือนนี้"],["Total Female เดือนนี้","52","รับเข้าเดือนนี้"]],
    chart: { weekly: [18, 24, 31, 39], newCases: 112, conferences: 20, community: 16, donut: [58, 37, 17] },
    statuses: [["สถานะจำนวนเคสใหม่",19],["เคสที่รอดำเนินการ",27],["เคสที่กำลังดำเนินการ In-Progress",66],["เคสที่ดำเนินการเสร็จแล้ว Terminate case / D/C",17],["เคสที่รอ SW พบ patient",12],["เคสรอเข้าเขียนแผนใบสหวิชาชีพครบ 5 วันทำงาน",8],["เคสที่เข้าเขียนแผนใบสหวิชาชีพตึกครบ 5 วันทำการ",6],["เคสที่รอประสานงานเครือข่าย",15],["เคสเตรียม Conference กับสหวิชาชีพ",9],["เคสที่รอเตรียมชุมชน",10],["เคสที่รอ D/C แพทย์มี Order D/C",7],["เคสที่รอประเมินส่งกลับภูมิลำเนา",5],["เคสที่รอทำหนังสือราชการ",4],["เคสที่ late 5 วันทำการเข้าตึก",3]],
    serviceTotals: [["Total OPD",664,53],["Total IPD",377,36],["Total ER",134,10],["Total OPD เด็ก",92,7],["Total นิติจิตเวช OPD",69,4],["Total นิติจิตเวช IPD",37,2],["Total Case Conferences",102,20],["Total การเตรียมชุมชน",82,16]],
    owners: [
      { name:"คุณศิริพร ปรางปรุ", subtitle:"Siriporn - Head of Social Work Department", active:31, conference:5, late:1, totalAll:182, totalMonth:14, inProgress:31, opd:16, ipd:12, er:2, referral:8 },
      { name:"คุณกิตติมาพร", subtitle:"SW-Kittimaporn", active:21, conference:3, late:1, totalAll:141, totalMonth:14, inProgress:21, opd:7, ipd:5, er:2, referral:5 },
      { name:"คุณนัทธมน", subtitle:"SW-Natthamon", active:16, conference:2, late:1, totalAll:117, totalMonth:11, inProgress:16, opd:5, ipd:5, er:1, referral:4 },
      { name:"คุณสุภาภรณ์", subtitle:"SW-Supaporn", active:16, conference:2, late:0, totalAll:110, totalMonth:10, inProgress:16, opd:4, ipd:4, er:2, referral:5 },
      { name:"คุณพงศธร", subtitle:"SW-Pongsatorn", active:14, conference:1, late:1, totalAll:103, totalMonth:9, inProgress:14, opd:3, ipd:4, er:2, referral:4 },
      { name:"คุณกนกวรรณ", subtitle:"SW-Kanokwan", active:12, conference:1, late:0, totalAll:99, totalMonth:8, inProgress:12, opd:4, ipd:2, er:1, referral:3 },
      { name:"คุณจุฑาพร", subtitle:"SW-Juthaporn", active:14, conference:3, late:0, totalAll:106, totalMonth:10, inProgress:14, opd:5, ipd:3, er:1, referral:4 },
      { name:"คุณวิฏฐิรษา", subtitle:"SW-Witthirasa", active:19, conference:2, late:1, totalAll:130, totalMonth:12, inProgress:19, opd:6, ipd:4, er:2, referral:5 }
    ],
    cases: [
      { id:"SWMS-260331-021", patient:"Nalinee K.", meta:"54 ปี / HN 00046502", channel:"OPD", problem:"ปัญหาการดูแล", status:"In-Progress", statusClass:"chip-violet", updated:"31 มี.ค. 14:20", owner:"คุณศิริพร ปรางปรุ", area:"นครราชสีมา" },
      { id:"SWMS-260329-017", patient:"Somporn L.", meta:"66 ปี / HN 00045189", channel:"IPD", problem:"ชุมชนหวาดกลัว", status:"เคสเตรียม Conference กับสหวิชาชีพ", statusClass:"chip-warning", updated:"30 มี.ค. 10:05", owner:"คุณกิตติมาพร", area:"สุรินทร์" },
      { id:"SWMS-260327-011", patient:"Wirot T.", meta:"47 ปี / HN 00044177", channel:"ER", problem:"OSCC", status:"เคสที่รอทำหนังสือราชการ", statusClass:"chip-info", updated:"28 มี.ค. 16:35", owner:"คุณนัทธมน", area:"ชัยภูมิ" },
      { id:"SWMS-260325-008", patient:"Kanya R.", meta:"32 ปี / HN 00043310", channel:"นิติจิตเวชOPD", problem:"นิติจิตเวช", status:"Fact Finding", statusClass:"chip-soft", updated:"27 มี.ค. 09:40", owner:"คุณวิฏฐิรษา", area:"กรุงเทพมหานคร" }
    ],
    referrals: [21,17,14,10,8,7,6,5,4,12],
    wards: [20,16,13,15,10,12,13,8],
    doctors: [24,17,19,17,14,15,14,13,11,10,9],
    areas: sharedInboxAreas.slice(0, 80)
  },
  "february-2026": {
    label: "กุมภาพันธ์ 2569",
    summary: [["Total cases","1,048","ทั้งหมดในระบบ"],["Total cases เดือนนี้","98","กุมภาพันธ์ 2569"],["Total Male ทั้งหมด","558","ยอดสะสม"],["Total Female ทั้งหมด","490","ยอดสะสม"],["Total Male เดือนนี้","54","รับเข้าเดือนนี้"],["Total Female เดือนนี้","44","รับเข้าเดือนนี้"]],
    chart: { weekly: [16, 21, 27, 34], newCases: 98, conferences: 18, community: 14, donut: [51, 32, 15] },
    statuses: [["สถานะจำนวนเคสใหม่",16],["เคสที่รอดำเนินการ",24],["เคสที่กำลังดำเนินการ In-Progress",59],["เคสที่ดำเนินการเสร็จแล้ว Terminate case / D/C",15],["เคสที่รอ SW พบ patient",10],["เคสรอเข้าเขียนแผนใบสหวิชาชีพครบ 5 วันทำงาน",7],["เคสที่เข้าเขียนแผนใบสหวิชาชีพตึกครบ 5 วันทำการ",5],["เคสที่รอประสานงานเครือข่าย",13],["เคสเตรียม Conference กับสหวิชาชีพ",8],["เคสที่รอเตรียมชุมชน",8],["เคสที่รอ D/C แพทย์มี Order D/C",6],["เคสที่รอประเมินส่งกลับภูมิลำเนา",4],["เคสที่รอทำหนังสือราชการ",3],["เคสที่ late 5 วันทำการเข้าตึก",2]],
    serviceTotals: [["Total OPD",611,49],["Total IPD",341,31],["Total ER",124,9],["Total OPD เด็ก",88,6],["Total นิติจิตเวช OPD",65,4],["Total นิติจิตเวช IPD",35,2],["Total Case Conferences",91,18],["Total การเตรียมชุมชน",74,14]],
    owners: [
      { name:"คุณศิริพร ปรางปรุ", subtitle:"Siriporn - Head of Social Work Department", active:28, conference:4, late:1, totalAll:168, totalMonth:13, inProgress:28, opd:14, ipd:11, er:2, referral:7 },
      { name:"คุณกิตติมาพร", subtitle:"SW-Kittimaporn", active:18, conference:2, late:1, totalAll:127, totalMonth:12, inProgress:18, opd:6, ipd:4, er:2, referral:4 },
      { name:"คุณนัทธมน", subtitle:"SW-Natthamon", active:15, conference:2, late:0, totalAll:106, totalMonth:10, inProgress:15, opd:4, ipd:4, er:1, referral:4 },
      { name:"คุณสุภาภรณ์", subtitle:"SW-Supaporn", active:14, conference:2, late:0, totalAll:100, totalMonth:9, inProgress:14, opd:4, ipd:3, er:1, referral:4 },
      { name:"คุณพงศธร", subtitle:"SW-Pongsatorn", active:13, conference:1, late:1, totalAll:94, totalMonth:8, inProgress:13, opd:3, ipd:3, er:2, referral:3 },
      { name:"คุณกนกวรรณ", subtitle:"SW-Kanokwan", active:11, conference:1, late:0, totalAll:90, totalMonth:7, inProgress:11, opd:3, ipd:2, er:1, referral:3 },
      { name:"คุณจุฑาพร", subtitle:"SW-Juthaporn", active:13, conference:2, late:0, totalAll:96, totalMonth:8, inProgress:13, opd:4, ipd:2, er:1, referral:3 },
      { name:"คุณวิฏฐิรษา", subtitle:"SW-Witthirasa", active:17, conference:2, late:1, totalAll:118, totalMonth:10, inProgress:17, opd:5, ipd:3, er:2, referral:4 }
    ],
    cases: [
      { id:"SWMS-260228-014", patient:"Prapa S.", meta:"69 ปี / HN 00042840", channel:"IPD", problem:"ที่อยู่อาศัย/สถานสงเคราะห์", status:"เคสที่รอเตรียมชุมชน", statusClass:"chip-info", updated:"28 ก.พ. 13:05", owner:"คุณศิริพร ปรางปรุ", area:"บุรีรัมย์" },
      { id:"SWMS-260226-010", patient:"Anan C.", meta:"39 ปี / HN 00041762", channel:"ER", problem:"ปัญหาสุราและยาเสพติด", status:"เคสที่รอ SW พบ patient", statusClass:"chip-warning", updated:"27 ก.พ. 17:12", owner:"คุณกิตติมาพร", area:"สุรินทร์" },
      { id:"SWMS-260224-007", patient:"Maliwan P.", meta:"51 ปี / HN 00040980", channel:"OPDเด็ก", problem:"ปัญหาการดูแล", status:"In-Progress", statusClass:"chip-violet", updated:"25 ก.พ. 11:50", owner:"คุณกนกวรรณ", area:"นครราชสีมา" },
      { id:"SWMS-260221-005", patient:"Witaya R.", meta:"43 ปี / HN 00040121", channel:"นิติจิตเวชIPD", problem:"นิติจิตเวช", status:"Fact Finding", statusClass:"chip-soft", updated:"22 ก.พ. 08:45", owner:"คุณวิฏฐิรษา", area:"กรุงเทพมหานคร" }
    ],
    referrals: [18,14,13,9,7,6,5,4,4,10],
    wards: [18,14,11,13,9,11,12,7],
    doctors: [21,15,17,16,13,14,13,12,10,9,8],
    areas: sharedInboxAreas.slice(0, 60)
  }
};

function formatMonthKey(date) {
  return `${thaiMonthNames[date.getMonth()]}-${date.getFullYear()}`;
}

function formatMonthSlug(date) {
  const slugMonths = ["january","february","march","april","may","june","july","august","september","october","november","december"];
  return `${slugMonths[date.getMonth()]}-${date.getFullYear()}`;
}

function cloneMonthData(data) {
  return JSON.parse(JSON.stringify(data));
}

function buildGeneratedInboxMonthData() {
  const generated = {};
  const start = new Date(2025, 9, 1);
  const end = new Date(2031, 11, 1);
  const fallbackTemplates = [
    cloneMonthData(inboxBaseMonthData["february-2026"]),
    cloneMonthData(inboxBaseMonthData["march-2026"]),
    cloneMonthData(inboxBaseMonthData["april-2026"])
  ];

  let cursor = new Date(start);
  let index = 0;
  while (cursor <= end) {
    const slug = formatMonthSlug(cursor);
    const label = formatThaiMonthYear(cursor.getMonth(), cursor.getFullYear());
    const template = cloneMonthData(
      inboxBaseMonthData[slug] || fallbackTemplates[index % fallbackTemplates.length]
    );
    const yearOffset = cursor.getFullYear() - 2026;
    const monthOffset = cursor.getMonth() - 3;
    const shift = yearOffset * 7 + monthOffset;

    template.label = label;
    template.summary[0][1] = `${Math.max(620, Number(template.summary[0][1].replace(/,/g, "")) + shift * 36).toLocaleString("en-US")}`;
    template.summary[1][1] = `${Math.max(54, Number(template.summary[1][1]) + shift * 2)}`;
    template.summary[1][2] = label;
    template.summary[2][1] = `${Math.max(320, Number(template.summary[2][1].replace(/,/g, "")) + shift * 19).toLocaleString("en-US")}`;
    template.summary[3][1] = `${Math.max(300, Number(template.summary[3][1].replace(/,/g, "")) + shift * 17).toLocaleString("en-US")}`;
    template.summary[4][1] = `${Math.max(28, Number(template.summary[4][1]) + shift)}`;
    template.summary[5][1] = `${Math.max(24, Number(template.summary[5][1]) + shift)}`;

    template.chart.newCases = Math.max(54, template.chart.newCases + shift * 2);
    template.chart.conferences = Math.max(10, template.chart.conferences + Math.round(shift * 0.7));
    template.chart.community = Math.max(8, template.chart.community + Math.round(shift * 0.6));
    template.chart.weekly = template.chart.weekly.map((value, valueIndex) => Math.max(10, value + shift * 2 + valueIndex));
    template.chart.donut = template.chart.donut.map((value, valueIndex) => Math.max(8, value + Math.round(shift * (valueIndex === 0 ? 1.2 : 0.8))));

    template.statuses = template.statuses.map(([name, value], statusIndex) => [name, Math.max(1, value + shift + (statusIndex % 3 === 0 ? 1 : 0))]);
    template.serviceTotals = template.serviceTotals.map(([name, total, month]) => [name, Math.max(10, total + shift * 24), Math.max(1, month + Math.round(shift * 1.2))]);
    template.referrals = template.referrals.map((value, valueIndex) => Math.max(1, value + Math.round(shift * 0.5) - (valueIndex % 2)));
    template.wards = template.wards.map((value) => Math.max(1, value + Math.round(shift * 0.45)));
    template.doctors = template.doctors.map((value, valueIndex) => Math.max(1, value + Math.round(shift * 0.4) - (valueIndex % 3 === 0 ? 0 : 1)));

    template.owners = template.owners.map((owner, ownerIndex) => ({
      ...owner,
      active: Math.max(6, owner.active + Math.round(shift * 0.45)),
      conference: Math.max(1, owner.conference + Math.round(shift * 0.2)),
      referral: Math.max(1, owner.referral + Math.round(shift * 0.18)),
      totalAll: Math.max(42, owner.totalAll + shift * 16),
      totalMonth: Math.max(4, owner.totalMonth + Math.round(shift * 0.75)),
      inProgress: Math.max(4, owner.inProgress + Math.round(shift * 0.45)),
      opd: Math.max(1, owner.opd + Math.round(shift * 0.22)),
      ipd: Math.max(1, owner.ipd + Math.round(shift * 0.18)),
      er: Math.max(1, owner.er + Math.round(shift * 0.1) + (ownerIndex % 2 === 0 ? 1 : 0))
    }));

    template.cases = template.cases.map((item, caseIndex) => ({
      ...item,
      id: `SWMS-${String(cursor.getFullYear()).slice(-2)}${String(cursor.getMonth() + 1).padStart(2, "0")}${String(28 - caseIndex * 2).padStart(2, "0")}-${String(20 - caseIndex * 3).padStart(3, "0")}`,
      updated: `${28 - caseIndex * 2} ${thaiMonthNames[cursor.getMonth()]} ${cursor.getFullYear() + 543}`,
      area: sharedInboxAreas[(caseIndex * 11 + Math.max(0, shift + 14)) % sharedInboxAreas.length],
      owner: template.owners[caseIndex % template.owners.length].name
    }));

    template.areas = sharedInboxAreas.slice(0, Math.max(30, Math.min(sharedInboxAreas.length, 60 + shift * 2)));
    generated[slug] = template;

    cursor.setMonth(cursor.getMonth() + 1);
    index += 1;
  }

  return generated;
}

const inboxMonthData = buildGeneratedInboxMonthData();
const inboxMonthKeys = Object.keys(inboxMonthData);
let currentPeriod = {
  monthKey: "april-2026",
  fy: getFiscalYearFromDate(parseMonthSlug("april-2026"))
};
let currentCaseContext = {
  id: "SWMS-260422-018",
  owner: "คุณศิริพร ปรางปรุ",
  patient: "Somjai Prasert",
  hn: "HN 00047291",
  age: "72 ปี",
  channel: "IPD",
  area: "อ.เมืองนครราชสีมา",
  summary: "ผู้ป่วยมีอุปสรรคด้านการดูแลต่อเนื่องหลังจำหน่าย ครอบครัวยังไม่พร้อมรับกลับ และต้องประเมินเครือข่ายในพื้นที่ร่วมกับทีมสหวิชาชีพเพิ่มเติม",
  note: "ประสานทีมดูแลเบื้องต้นแล้ว รอพบญาติและสรุปแผนร่วมกับแพทย์เจ้าของไข้ก่อนเข้าสู่กระบวนการดูแลระยะถัดไป",
  phone: "08X-XXX-1198",
  relative: "Piyada P. · 08X-XXX-4455",
  lastContact: "วันนี้ 11:32",
  consult: "สัมพันธภาพในครอบครัว / ปัญหาการดูแล",
  priority: "เร่งด่วนสูง",
  status: "In-Progress",
  statusClass: "chip-violet",
  address: "123/4 ต.ในเมือง อ.เมืองนครราชสีมา จ.นครราชสีมา",
  ward: "Homeward",
  md: "นพ.รัฐพล",
  dx: "Schizophrenia with psychosocial discharge barrier",
  caseDate: "22 เมษายน 2569",
  admitDate: "21 เมษายน 2569",
  updatedDate: "22 เมษายน 2569",
  wardDate: "21 เมษายน 2569",
  closedDate: "-",
  timeline: [
    { title: "11:32 ประเมินเบื้องต้นเสร็จแล้ว", note: "แรงสนับสนุนจากครอบครัวยังไม่ชัดเจน ยังไม่ยืนยันผู้ดูแล และความพร้อมของบ้านยังต้องประเมินต่อ", gradient: true },
    { title: "10:10 โทรหาบุตรสาว", note: "ยังไม่มีผู้รับสาย กำหนดติดตามอีกครั้งเวลา 13:00" },
    { title: "09:20 สร้างเคสจากการส่งปรึกษาของ ward", note: "มีแผนจำหน่ายวันพรุ่งนี้และต้องการ social work support แบบเร่งด่วน" }
  ],
  problems: ["ยังไม่มีผู้ดูแล", "การติดต่อญาติยังไม่ครบ", "ต้องประเมินความพร้อมของบ้านเพิ่มเติม"],
  plans: ["โทรหาบุตรสาวและบุตรชาย", "นัดประชุม MDT ก่อนจำหน่าย", "เตรียม referral สำรองไปชุมชน"],
  notes: [
    {
      type: "บันทึกการโทร",
      mode: "โทรศัพท์กลุ่มงานฯ",
      phoneFrom: "044-XXX-210 ต่อ 118",
      phoneTo: "08X-XXX-4455",
      subject: "ติดตาม caregiver plan",
      destination: "ญาติผู้ป่วย",
      startAt: "23 เมษายน 2569 · 10:30 น.",
      endAt: "23 เมษายน 2569 · 10:45 น.",
      owner: "คุณศิริพร ปรางปรุ",
      assignee: "คุณกิตติมาพร",
      coOwner: "คุณวิฏฐิรษา",
      file: "family-call-log.pdf",
      text: "พูดคุยกับตัวแทนครอบครัวแล้ว ขณะนี้รอการยืนยันขั้นสุดท้ายเรื่องการดูแลผู้ป่วยในเช้าวันพรุ่งนี้"
    }
  ],
  referrals: [
    { id: "RF-260423-004", date: "23 เมษายน 2569", destination: "บ้านเมตตาจังหวัดนครราชสีมา", priority: "เร่งด่วนสูง", reason: "ผู้ป่วยยังไม่มีผู้ดูแลที่ยืนยันได้ชัดเจน", status: "Sent" }
  ],
  coordinationLogs: [
    {
      date: "23 เมษายน 2569 · 13:40 น.",
      subject: "ติดตามความพร้อมรับผู้ป่วยต่อเนื่องหลังจำหน่าย",
      owner: "คุณศิริพร ปรางปรุ",
      target: "ศูนย์คุ้มครองและพัฒนาคุณภาพชีวิตจังหวัดนครราชสีมา",
      result: "หน่วยงานรับทราบและขอเอกสารประกอบเพิ่มเติม",
      receivedAt: "23 เมษายน 2569 · 14:10 น.",
      type: "ประสานผ่านโทรศัพท์",
      status: "waiting",
      file: "coordination-letter-v1.pdf",
      note: "ติดตามเอกสารเพิ่มเติมก่อนนัดรับ case"
    }
  ],
  reminders: [
    { title: "โทรหาญาติก่อน 13:00", when: "Today 13:00", deadline: "23 เมษายน 2569 · 13:00 น.", note: "ติดตามการยืนยันเรื่องผู้ดูแลและความพร้อมกลับบ้าน", alert: "แจ้งเตือนล่วงหน้า 30 นาที", chip: "chip-warning", assigner: "คุณศิริพร ปรางปรุ", assignee: "คุณกิตติมาพร", status: "กำลังทำอยู่", file: "family-followup-note.pdf" },
    { title: "เตรียม referral สำรอง", when: "23 เม.ย. 09:30", deadline: "23 เมษายน 2569 · 09:30 น.", note: "จัดชุดเอกสารส่งต่อและเตรียมรายชื่อเครือข่ายที่พร้อมรับต่อ", alert: "แจ้งเตือนเช้าวันนัด", chip: "chip-info", assigner: "คุณศิริพร ปรางปรุ", assignee: "คุณนัทธมน", status: "ประสานหัวหน้า", file: "referral-packet-v1.pdf" },
    { title: "เปิด consult MDT", when: "23 เม.ย. 14:00", deadline: "23 เมษายน 2569 · 14:00 น.", note: "ทบทวนอุปสรรคก่อนจำหน่ายกับแพทย์ พยาบาล case manager และญาติ", alert: "แจ้งเตือนก่อนประชุม 1 ชั่วโมง", chip: "chip-violet", assigner: "คุณศิริพร ปรางปรุ", assignee: "คุณวิฏฐิรษา", status: "ห้องแพทย์", file: "mdt-agenda.docx" }
  ]
};
let pendingNoteEditIndex = null;
let pendingReminderEditIndex = null;
let pendingReferralEditIndex = null;
let activeCloseCaseTab = "all";

const staffDirectory = [
  "คุณศิริพร ปรางปรุ (Siriporn - Head of Social Work Department)",
  "คุณกิตติมาพร (SW-Kittimaporn)",
  "คุณนัทธมน (SW-Natthamon)",
  "คุณสุภาภรณ์ (SW-Supaporn)",
  "คุณพงศธร (SW-Pongsatorn)",
  "คุณกนกวรรณ (SW-Kanokwan)",
  "คุณจุฑาพร (SW-Juthaporn)",
  "คุณวิฏฐิรษา (SW-Witthirasa)",
  "คุณศิริพร (AO-Siriporn)"
];

const conferenceSwDirectory = [
  "คุณศิริพร",
  "คุณกิตติมาพร",
  "คุณนัทธมน",
  "คุณสุภาภรณ์",
  "คุณพงศธร",
  "คุณกนกวรรณ",
  "คุณจุฑาพร",
  "คุณวิฏฐิรษา"
];

function normalizeOwnerName(ownerText = "") {
  return ownerText.split(" (")[0].trim();
}

function setSelectByPrefix(selectElement, value) {
  if (!selectElement || !value) return;
  const match = Array.from(selectElement.options).find((option) => option.value.startsWith(value));
  if (match) selectElement.value = match.value;
}

function populateSelectWithOptions(selectElement, values, placeholder) {
  if (!selectElement) return;
  selectElement.innerHTML = `${placeholder ? `<option>${placeholder}</option>` : ""}${values.map((value) => `<option>${value}</option>`).join("")}`;
}

function getMultiSelectValues(selectElement) {
  if (!selectElement) return [];
  if ("selectedOptions" in selectElement) {
    return Array.from(selectElement.selectedOptions).map((option) => option.value);
  }
  return Array.from(selectElement.querySelectorAll('input[type="checkbox"]:checked')).map((input) => input.value);
}

function setMultiSelectValues(selectElement, values = []) {
  if (!selectElement) return;
  const wanted = new Set(values);
  if ("options" in selectElement) {
    Array.from(selectElement.options).forEach((option) => {
      option.selected = wanted.has(option.value);
    });
    return;
  }
  Array.from(selectElement.querySelectorAll('input[type="checkbox"]')).forEach((input) => {
    input.checked = wanted.has(input.value);
  });
}

function getConferenceSwByOwner(owner = "") {
  const normalized = normalizeOwnerName(owner);
  return conferenceSwDirectory.find((name) => normalized.startsWith(name)) || conferenceSwDirectory[0];
}

function intakeStorageKey(monthKey) {
  return `jvk-swms-intake-${monthKey}`;
}

function monthCasesStorageKey(monthKey) {
  return `jvk-swms-month-cases-${monthKey}`;
}

function caseContextStorageKey(monthKey) {
  return `jvk-swms-case-context-${monthKey}`;
}

function getDefaultIntakeState() {
  return {
    caseId: "SWMS-260422-018",
    owner: "คุณศิริพร ปรางปรุ (Siriporn - Head of Social Work Department)",
    caseDate: "22 เมษายน 2569",
    channel: "IPD",
    patientName: "Somjai Prasert",
    hn: "HN 00047291",
    age: "72 ปี",
    address: "123/4 ต.ในเมือง อ.เมืองนครราชสีมา จ.นครราชสีมา",
    area: "อ.เมืองนครราชสีมา",
    admitDate: "21 เมษายน 2569",
    ward: "Homeward",
    md: "นพ.รัฐพล",
    dx: "Schizophrenia with psychosocial discharge barrier",
    consult: "สัมพันธภาพในครอบครัว",
    summary: "ผู้ป่วยมีอุปสรรคด้านการดูแลต่อเนื่องหลังจำหน่าย ครอบครัวยังไม่พร้อมรับกลับ และต้องประเมินเครือข่ายในพื้นที่ร่วมกับทีมสหวิชาชีพเพิ่มเติม",
    priority: "เร่งด่วนสูง",
    phone: "08X-XXX-4455",
    status: "เคสที่กำลังดำเนินการ In-Progress",
    updatedDate: "22 เมษายน 2569",
    closedDate: "-",
    wardDate: "21 เมษายน 2569",
    note: "ประสานทีมดูแลเบื้องต้นแล้ว รอพบญาติและสรุปแผนร่วมกับแพทย์เจ้าของไข้ก่อนเข้าสู่กระบวนการดูแลระยะถัดไป"
  };
}

function buildLinePath(values) {
  const xCoords = [20, 180, 340, 500];
  const max = Math.max(...values, 1);
  const yCoords = values.map((value) => 180 - ((value / max) * 120));
  return `M${xCoords[0]} ${yCoords[0]} C86 ${yCoords[0] - 18}, 118 ${yCoords[1] + 12}, ${xCoords[1]} ${yCoords[1]} S274 ${yCoords[2] - 22}, ${xCoords[2]} ${yCoords[2]} S430 ${yCoords[3] + 16}, ${xCoords[3]} ${yCoords[3]}`;
}

function renderInboxSummary(data) {
  if (!inboxSummaryGrid) return;
  inboxSummaryGrid.innerHTML = data.summary
    .map(([label, value, note], index) => `
      <article class="stat-card ${index === 0 ? "gradient-border" : ""}">
        <span class="stat-label">${label}</span>
        <strong>${value}</strong>
        <small>${note}</small>
      </article>
    `)
    .join("");
}

function renderInboxCharts(data) {
  if (!inboxChartWrap) return;
  const linePath = buildLinePath(data.chart.weekly);
  const areaPath = `${linePath} L500 220 L20 220 Z`;
  inboxChartWrap.innerHTML = `
    <div class="line-chart-card">
      <svg viewBox="0 0 520 220" class="line-chart-svg" aria-label="Monthly inbox trend line chart">
        <defs>
          <linearGradient id="inboxLineStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#18c7b8"></stop>
            <stop offset="50%" stop-color="#49a7ff"></stop>
            <stop offset="100%" stop-color="#ff64d8"></stop>
          </linearGradient>
          <linearGradient id="inboxLineFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="rgba(73, 167, 255, 0.24)"></stop>
            <stop offset="100%" stop-color="rgba(73, 167, 255, 0)"></stop>
          </linearGradient>
        </defs>
        <line x1="20" y1="180" x2="500" y2="180" class="grid-line"></line>
        <line x1="20" y1="135" x2="500" y2="135" class="grid-line"></line>
        <line x1="20" y1="90" x2="500" y2="90" class="grid-line"></line>
        <line x1="20" y1="45" x2="500" y2="45" class="grid-line"></line>
        <path d="${linePath}" class="line-path" style="stroke:url(#inboxLineStroke)"></path>
        <path d="${areaPath}" class="line-area" style="fill:url(#inboxLineFill)"></path>
      </svg>
      <div class="chart-meta-row">
        <div class="chart-kpi-chip"><span>รับเคสใหม่</span><strong>${data.chart.newCases}</strong></div>
        <div class="chart-kpi-chip"><span>Case Conferences</span><strong>${data.chart.conferences}</strong></div>
        <div class="chart-kpi-chip"><span>เตรียมชุมชน</span><strong>${data.chart.community}</strong></div>
      </div>
      <div class="chart-axis-labels"><span>สัปดาห์ 1</span><span>สัปดาห์ 2</span><span>สัปดาห์ 3</span><span>สัปดาห์ 4</span></div>
    </div>
    <div class="donut-chart-wrap">
      <div class="donut-card stacked">
        <div class="donut-shell">
          <svg viewBox="0 0 120 120" class="donut-svg" aria-label="Service channel mix donut chart">
            <circle cx="60" cy="60" r="42" class="donut-base"></circle>
            <circle cx="60" cy="60" r="42" class="donut-segment seg-a"></circle>
            <circle cx="60" cy="60" r="42" class="donut-segment seg-b"></circle>
            <circle cx="60" cy="60" r="42" class="donut-segment seg-c"></circle>
          </svg>
          <div class="donut-center">
            <strong>${data.chart.newCases}</strong>
            <span>Cases เดือนนี้</span>
          </div>
        </div>
        <div class="donut-legend">
          <span><i class="legend-dot dot-a"></i>OPD / OPD เด็ก ${data.chart.donut[0]}</span>
          <span><i class="legend-dot dot-b"></i>IPD / นิติจิตเวช IPD ${data.chart.donut[1]}</span>
          <span><i class="legend-dot dot-c"></i>ER / นิติจิตเวช OPD ${data.chart.donut[2]}</span>
        </div>
      </div>
    </div>
  `;
}

function renderInboxStatuses(data) {
  if (!inboxStatusMatrix) return;
  inboxStatusMatrix.innerHTML = data.statuses
    .map(([label, value]) => `<div class="status-item"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");
}

function renderSimpleRows(target, rows) {
  if (!target) return;
  target.innerHTML = rows.map(([name, total, month]) => `<tr><td>${name}</td><td>${total}</td><td>${month}</td></tr>`).join("");
}

function renderInboxOwners(data) {
  if (inboxWorkerGrid) {
    inboxWorkerGrid.innerHTML = data.owners
      .map((owner) => `<div class="worker-card"><strong>${owner.name}</strong><p>${owner.subtitle}</p><span>${owner.active} active · ${owner.conference} conference · ${owner.referral} referral</span></div>`)
      .join("");
  }

  if (inboxOwnerTotalsBody) {
    inboxOwnerTotalsBody.innerHTML = data.owners
      .map((owner) => `<tr><td>${owner.name}</td><td>${owner.totalAll}</td><td>${owner.totalMonth}</td><td>${owner.inProgress}</td><td>${owner.opd}</td><td>${owner.ipd}</td><td>${owner.er}</td><td>${owner.conference}</td><td>${owner.referral}</td></tr>`)
      .join("");
  }
}

function getCustomMonthCases(monthKey) {
  const saved = localStorage.getItem(monthCasesStorageKey(monthKey));
  return saved ? JSON.parse(saved) : [];
}

function saveCustomMonthCases(monthKey, cases) {
  localStorage.setItem(monthCasesStorageKey(monthKey), JSON.stringify(cases));
}

function renderInboxCases(data) {
  if (!inboxCaseRegistryBody) return;
  const allCases = [...getCustomMonthCases(currentPeriod.monthKey), ...data.cases];
  inboxCaseRegistryBody.innerHTML = allCases
    .map((item) => `
      <tr class="case-row-clickable" data-case-id="${item.id}" data-patient="${item.patient}" data-meta="${item.meta}" data-status="${item.status}" data-status-class="${item.statusClass}" data-owner="${item.owner}" data-channel="${item.channel}" data-problem="${item.problem}" data-area="${item.area}" data-hn="${item.hn || ""}" data-age="${item.age || ""}" data-address="${item.address || ""}" data-ward="${item.ward || ""}" data-md="${item.md || ""}" data-dx="${item.dx || ""}" data-priority="${item.priority || ""}" data-summary="${item.summary || ""}" data-note="${item.note || ""}" data-phone="${item.phone || ""}" data-case-date="${item.caseDate || ""}" data-admit-date="${item.admitDate || ""}" data-updated-date="${item.updatedDate || item.updated || ""}" data-ward-date="${item.wardDate || ""}" data-closed-date="${item.closedDate || "-"}">
        <td>${item.id}</td>
        <td><strong>${item.patient}</strong><p>${item.meta}</p></td>
        <td>${item.channel}</td>
        <td>${item.problem}</td>
        <td><span class="chip ${item.statusClass}">${item.status}</span></td>
        <td>${item.updated}</td>
        <td>${item.owner}</td>
        <td>${item.area}</td>
      </tr>
    `)
    .join("");
}

function captureIntakeState() {
  return {
    caseId: intakeCaseId?.value || "",
    owner: intakeOwner?.value || "",
    caseDate: intakeCaseDate?.value || "",
    channel: intakeChannel?.value || "",
    patientName: intakePatientName?.value || "",
    hn: intakeHn?.value || "",
    age: intakeAge?.value || "",
    address: intakeAddress?.value || "",
    area: intakeArea?.value || "",
    admitDate: intakeAdmitDate?.value || "",
    ward: intakeWard?.value || "",
    md: intakeMd?.value || "",
    dx: intakeDx?.value || "",
    consult: intakeConsult?.value || "",
    summary: intakeSummary?.value || "",
    priority: intakePriority?.value || "",
    phone: intakePhone?.value || "",
    status: intakeStatus?.value || "",
    updatedDate: intakeUpdatedDate?.value || "",
    closedDate: intakeClosedDate?.value || "",
    wardDate: intakeWardDate?.value || "",
    note: intakeNote?.value || ""
  };
}

function applyIntakeState(state) {
  if (!state) return;
  if (intakeCaseId) intakeCaseId.value = state.caseId || "";
  if (intakeOwner) intakeOwner.value = state.owner || intakeOwner.value;
  if (intakeCaseDate) intakeCaseDate.value = state.caseDate || "";
  if (intakeChannel) intakeChannel.value = state.channel || intakeChannel.value;
  if (intakePatientName) intakePatientName.value = state.patientName || "";
  if (intakeHn) intakeHn.value = state.hn || "";
  if (intakeAge) intakeAge.value = state.age || "";
  if (intakeAddress) intakeAddress.value = state.address || "";
  if (intakeArea) intakeArea.value = state.area || intakeArea.value;
  if (intakeAdmitDate) intakeAdmitDate.value = state.admitDate || "";
  if (intakeWard) intakeWard.value = state.ward || intakeWard.value;
  if (intakeMd) intakeMd.value = state.md || intakeMd.value;
  if (intakeDx) intakeDx.value = state.dx || "";
  if (intakeConsult) intakeConsult.value = state.consult || intakeConsult.value;
  if (intakeSummary) intakeSummary.value = state.summary || "";
  if (intakePriority) intakePriority.value = state.priority || intakePriority.value;
  if (intakePhone) intakePhone.value = state.phone || "";
  if (intakeStatus) intakeStatus.value = state.status || intakeStatus.value;
  if (intakeUpdatedDate) intakeUpdatedDate.value = state.updatedDate || "";
  if (intakeClosedDate) intakeClosedDate.value = state.closedDate || "";
  if (intakeWardDate) intakeWardDate.value = state.wardDate || "";
  if (intakeNote) intakeNote.value = state.note || "";
}

function saveIntakeState() {
  localStorage.setItem(intakeStorageKey(currentPeriod.monthKey), JSON.stringify(captureIntakeState()));
  showToast("บันทึกแบบร่างแล้ว", `ข้อมูล Intake ถูกเก็บไว้ใน ${inboxMonthData[currentPeriod.monthKey]?.label || ""}`);
}

function loadIntakeState() {
  const saved = localStorage.getItem(intakeStorageKey(currentPeriod.monthKey));
  applyIntakeState(saved ? JSON.parse(saved) : getDefaultIntakeState());
}

function syncAssessmentFromCurrentCase() {
  if (!currentCaseContext) return;
  if (assessmentPresentingProblem) assessmentPresentingProblem.value = currentCaseContext.summary || assessmentPresentingProblem.value;
  if (assessmentPrimaryProblem) assessmentPrimaryProblem.value = currentCaseContext.consult || assessmentPrimaryProblem.value;
  if (assessmentUrgency) assessmentUrgency.value = currentCaseContext.priority?.includes("สูง") ? "เร่งด่วนสูง" : currentCaseContext.priority || assessmentUrgency.value;
  if (assessmentImmediateIssues) assessmentImmediateIssues.value = currentCaseContext.note || assessmentImmediateIssues.value;
  if (assessmentCaregiver) assessmentCaregiver.value = currentCaseContext.relative || assessmentCaregiver.value;
  if (assessmentSummary) assessmentSummary.value = currentCaseContext.summary || assessmentSummary.value;
  if (assessmentRecommendation && !assessmentRecommendation.value.trim()) {
    assessmentRecommendation.value = "1) ประเมิน caregiver plan 2) ทบทวนความพร้อมกลับบ้าน 3) เตรียม care plan และติดตามเครือข่าย";
  }
}

function createInboxCaseFromIntake(state) {
  return {
    id: state.caseId,
    patient: state.patientName,
    meta: `${state.age} / ${state.hn}`,
    channel: state.channel,
    problem: state.consult,
    status: state.status,
    statusClass: getStatusChipClass(state.status),
    updated: state.updatedDate,
    owner: normalizeOwnerName(state.owner),
    area: state.area,
    hn: state.hn,
    age: state.age,
    address: state.address,
    ward: state.ward,
    md: state.md,
    dx: state.dx,
    priority: state.priority,
    summary: state.summary,
    note: state.note,
    phone: state.phone,
    caseDate: state.caseDate,
    admitDate: state.admitDate,
    updatedDate: state.updatedDate,
    wardDate: state.wardDate,
    closedDate: state.closedDate
  };
}

function commitIntakeToWorkflow() {
  const intakeState = captureIntakeState();
  saveIntakeState();
  const monthCases = getCustomMonthCases(currentPeriod.monthKey).filter((item) => item.id !== intakeState.caseId);
  monthCases.unshift(createInboxCaseFromIntake(intakeState));
  saveCustomMonthCases(currentPeriod.monthKey, monthCases);
  currentCaseContext = buildCaseContextFromIntake(intakeState);
  localStorage.setItem(caseContextStorageKey(currentPeriod.monthKey), JSON.stringify(currentCaseContext));
  renderCurrentCaseDetail();
  syncAssessmentFromCurrentCase();
  saveAssessmentState();
  syncCarePlanFromAssessment({ persist: true });
  renderInboxMonth(currentPeriod.monthKey);
  renderExecutiveReport();
  showToast("สร้างเคสสำเร็จ", `${intakeState.caseId} ถูกเพิ่มเข้า Case Inbox แล้ว`);
}

function createReminderFromInputs() {
  const title = reminderTitleInput?.value?.trim();
  if (!title) return;
  const when = `${reminderDateInput?.value || ""} · ${reminderTimeInput?.value || ""}`.trim();
  const reminderRecord = {
    title,
    when,
    note: reminderNoteInput?.value || "",
    alert: reminderAlertInput?.value || "",
    chip: "chip-teal"
  };
  const reminders = [...(currentCaseContext.reminders || [])];
  if (pendingReminderEditIndex !== null) {
    reminders[pendingReminderEditIndex] = reminderRecord;
    currentCaseContext.timeline = [
      { title: `${when} แก้ไข reminder`, note: reminderRecord.note || title, gradient: true },
      ...(currentCaseContext.timeline || [])
    ];
  } else {
    reminders.unshift(reminderRecord);
    currentCaseContext.timeline = [
      { title: `${when} สร้าง reminder ใหม่`, note: reminderRecord.note || title, gradient: true },
      ...(currentCaseContext.timeline || [])
    ];
  }
  currentCaseContext.reminders = reminders;
  pendingReminderEditIndex = null;
  localStorage.setItem(caseContextStorageKey(currentPeriod.monthKey), JSON.stringify(currentCaseContext));
  renderCurrentCaseDetail();
  renderExecutiveReport();
  showToast("เพิ่ม Reminder แล้ว", title);
}

function saveTaskAssignment() {
  const title = taskTitleInput?.value?.trim();
  if (!title) return;
  const taskRecord = {
    title,
    when: taskDeadlineInput?.value || "",
    deadline: taskDeadlineInput?.value || "",
    note: taskNoteInput?.value || "",
    alert: "ติดตามตาม deadline",
    chip: "chip-teal",
    assigner: normalizeOwnerName(taskAssignerInput?.value || ""),
    assignee: normalizeOwnerName(taskAssigneeInput?.value || ""),
    status: taskStatusInput?.value || "ยังไม่ได้ทำ",
    file: taskFileInput?.value || "-"
  };
  const reminders = [...(currentCaseContext.reminders || [])];
  if (pendingReminderEditIndex !== null) {
    reminders[pendingReminderEditIndex] = taskRecord;
    pendingReminderEditIndex = null;
  } else {
    reminders.unshift(taskRecord);
  }
  currentCaseContext.reminders = reminders;
  currentCaseContext.timeline = [
    { title: `มอบหมายงาน: ${taskRecord.title}`, note: `${taskRecord.assigner} -> ${taskRecord.assignee} | ${taskRecord.status}`, gradient: true },
    ...(currentCaseContext.timeline || [])
  ];
  localStorage.setItem(caseContextStorageKey(currentPeriod.monthKey), JSON.stringify(currentCaseContext));
  renderCurrentCaseDetail();
  renderExecutiveReport();
  showToast("บันทึกงานมอบหมายแล้ว", taskRecord.title);
}

function saveQuickNoteToCase() {
  const type = quickNoteType?.value || "บันทึกการโทร";
  const text = quickNoteText?.value?.trim();
  if (!text) return;
  const notes = [...(currentCaseContext.notes || [])];
  const noteRecord = {
    type,
    mode: "โทรศัพท์ส่วนตัว",
    phoneFrom: currentCaseContext.phone || "-",
    phoneTo: currentCaseContext.relative || "-",
    subject: type,
    destination: currentCaseContext.patient || "-",
    startAt: currentCaseContext.updatedDate || "-",
    endAt: currentCaseContext.updatedDate || "-",
    owner: currentCaseContext.owner || "-",
    assignee: currentCaseContext.owner || "-",
    coOwner: "-",
    file: "-",
    text
  };
  if (pendingNoteEditIndex !== null) {
    notes[pendingNoteEditIndex] = noteRecord;
  } else {
    notes.unshift(noteRecord);
  }
  currentCaseContext.notes = notes;
  currentCaseContext.timeline = [
    { title: `${type} ${pendingNoteEditIndex !== null ? "ถูกแก้ไข" : "ถูกบันทึก"}`, note: text, gradient: true },
    ...(currentCaseContext.timeline || [])
  ];
  pendingNoteEditIndex = null;
  currentCaseContext.note = text;
  localStorage.setItem(caseContextStorageKey(currentPeriod.monthKey), JSON.stringify(currentCaseContext));
  renderCurrentCaseDetail();
  renderExecutiveReport();
  showToast("บันทึก Note แล้ว", type);
}

function saveNotesComposerToCase() {
  const type = notesComposerType?.value || "บันทึกการโทร";
  const text = notesComposerText?.value?.trim();
  if (!text) return;
  const noteRecord = {
    type,
    mode: notesContactMode?.value || "-",
    phoneFrom: notesPhoneFrom?.value || "-",
    phoneTo: notesPhoneTo?.value || "-",
    subject: notesSubject?.value || "-",
    destination: notesDestination?.value || "-",
    startAt: notesStartDatetime?.value || "-",
    endAt: notesEndDatetime?.value || "-",
    owner: normalizeOwnerName(notesOwner?.value || ""),
    assignee: normalizeOwnerName(notesAssignee?.value || ""),
    coOwner: normalizeOwnerName(notesCoOwner?.value || ""),
    file: notesFile?.value || "-",
    text
  };
  currentCaseContext.notes = [noteRecord, ...(currentCaseContext.notes || [])];
  currentCaseContext.timeline = [
    { title: `${type} · ${noteRecord.mode}`, note: `${noteRecord.subject} | ${text}`, gradient: true },
    ...(currentCaseContext.timeline || [])
  ];
  currentCaseContext.note = text;
  localStorage.setItem(caseContextStorageKey(currentPeriod.monthKey), JSON.stringify(currentCaseContext));
  renderCurrentCaseDetail();
  renderExecutiveReport();
  showToast("เพิ่มบันทึกจากหน้า Notes แล้ว", type);
}

function saveReferralToCase() {
  const referralRecord = {
    id: referralId?.value || "RF-NEW",
    date: referralDate?.value || "",
    destination: referralDestination?.value || "",
    priority: referralPriority?.value || "",
    reason: referralReason?.value || "",
    status: "Sent"
  };
  const referrals = [...(currentCaseContext.referrals || [])];
  if (pendingReferralEditIndex !== null) {
    referrals[pendingReferralEditIndex] = referralRecord;
  } else {
    referrals.unshift(referralRecord);
  }
  currentCaseContext.referrals = referrals;
  currentCaseContext.timeline = [
    { title: `${referralRecord.date} ${pendingReferralEditIndex !== null ? "แก้ไข" : "บันทึก"} referral ${referralRecord.id}`, note: `${referralRecord.destination} · ${referralRecord.reason}`, gradient: true },
    ...(currentCaseContext.timeline || [])
  ];
  pendingReferralEditIndex = null;
  currentCaseContext.plans = [
    `ติดตามผล referral: ${referralRecord.destination}`,
    ...(currentCaseContext.plans || [])
  ].slice(0, 4);
  localStorage.setItem(caseContextStorageKey(currentPeriod.monthKey), JSON.stringify(currentCaseContext));
  renderCurrentCaseDetail();
  renderExecutiveReport();
  showToast("บันทึก Referral แล้ว", referralRecord.destination);
}

function deleteCaseNote(index) {
  currentCaseContext.notes = (currentCaseContext.notes || []).filter((_, itemIndex) => itemIndex !== index);
  localStorage.setItem(caseContextStorageKey(currentPeriod.monthKey), JSON.stringify(currentCaseContext));
  renderNotesAndTasksViews();
  renderExecutiveReport();
  showToast("ลบบันทึกแล้ว", "รายการ note ถูกนำออกจากเคส");
}

function deleteCaseReminder(index) {
  currentCaseContext.reminders = (currentCaseContext.reminders || []).filter((_, itemIndex) => itemIndex !== index);
  localStorage.setItem(caseContextStorageKey(currentPeriod.monthKey), JSON.stringify(currentCaseContext));
  renderCurrentCaseDetail();
  renderNotesAndTasksViews();
  renderExecutiveReport();
  showToast("ลบ Reminder แล้ว", "รายการแจ้งเตือนถูกนำออกจากเคส");
}

function deleteCaseReferral(index) {
  currentCaseContext.referrals = (currentCaseContext.referrals || []).filter((_, itemIndex) => itemIndex !== index);
  localStorage.setItem(caseContextStorageKey(currentPeriod.monthKey), JSON.stringify(currentCaseContext));
  renderReferralsView();
  renderExecutiveReport();
  showToast("ลบ Referral แล้ว", "รายการส่งต่อถูกนำออกจากเคส");
}

function editCaseNote(index) {
  const note = currentCaseContext.notes?.[index];
  if (!note) return;
  pendingNoteEditIndex = index;
  if (quickNoteType) quickNoteType.value = note.type;
  if (quickNoteText) quickNoteText.value = note.text;
  if (notesComposerType) notesComposerType.value = note.type || notesComposerType.value;
  if (notesContactMode) notesContactMode.value = note.mode || notesContactMode.value;
  if (notesPhoneFrom) notesPhoneFrom.value = note.phoneFrom || "";
  if (notesPhoneTo) notesPhoneTo.value = note.phoneTo || "";
  if (notesSubject) notesSubject.value = note.subject || "";
  if (notesDestination) notesDestination.value = note.destination || "";
  if (notesStartDatetime) notesStartDatetime.value = note.startAt || "";
  if (notesEndDatetime) notesEndDatetime.value = note.endAt || "";
  setSelectByPrefix(notesOwner, note.owner);
  setSelectByPrefix(notesAssignee, note.assignee);
  setSelectByPrefix(notesCoOwner, note.coOwner);
  if (notesFile) notesFile.value = note.file || "";
  if (notesComposerText) notesComposerText.value = note.text || "";
  toggleOverlay("quick-note-modal", true);
  showToast("พร้อมแก้ไข Note", "ข้อมูลถูกนำกลับเข้า quick note แล้ว");
}

function editCaseReminder(index) {
  const reminder = currentCaseContext.reminders?.[index];
  if (!reminder) return;
  pendingReminderEditIndex = index;
  if (reminderTitleInput) reminderTitleInput.value = reminder.title;
  if (reminderDateInput) reminderDateInput.value = reminder.when.split("·")[0]?.trim() || reminder.when;
  if (reminderTimeInput) reminderTimeInput.value = reminder.when.split("·")[1]?.trim() || "";
  if (reminderAlertInput) reminderAlertInput.value = reminder.alert;
  if (reminderNoteInput) reminderNoteInput.value = reminder.note;
  if (taskTitleInput) taskTitleInput.value = reminder.title;
  setSelectByPrefix(taskAssignerInput, reminder.assigner);
  setSelectByPrefix(taskAssigneeInput, reminder.assignee);
  if (taskDeadlineInput) taskDeadlineInput.value = reminder.deadline || reminder.when || "";
  if (taskFileInput) taskFileInput.value = reminder.file || "";
  if (taskStatusInput) taskStatusInput.value = reminder.status || taskStatusInput.value;
  if (taskNoteInput) taskNoteInput.value = reminder.note || "";
  setActiveScreen("case-detail");
  setActiveCaseTab("overview-tab");
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  showToast("พร้อมแก้ไข Reminder", reminder.title);
}

function editCaseReferral(index) {
  const referral = currentCaseContext.referrals?.[index];
  if (!referral) return;
  pendingReferralEditIndex = index;
  if (referralId) referralId.value = referral.id;
  if (referralDate) referralDate.value = referral.date;
  if (referralDestination) referralDestination.value = referral.destination;
  if (referralPriority) referralPriority.value = referral.priority;
  if (referralReason) referralReason.value = referral.reason;
  if (referralSummary) referralSummary.value = referral.reason;
  setActiveScreen("referrals");
  window.scrollTo({ top: 0, behavior: "smooth" });
  showToast("พร้อมแก้ไข Referral", referral.id);
}

function renderNotesAndTasksViews() {
  if (notesTimelineList) {
    notesTimelineList.innerHTML = (currentCaseContext.timeline || []).map((item) => `
      <div class="timeline-item">
        <span class="timeline-dot ${item.gradient ? "dot-gradient" : ""}"></span>
        <div>
          <strong>${item.title}</strong>
          <p>${item.note}</p>
        </div>
      </div>
    `).join("");
  }

  if (notesHistoryBody) {
    const notes = currentCaseContext.notes || [];
    notesHistoryBody.innerHTML = notes.length ? notes.map((item, index) => `
      <tr>
        <td>${item.startAt || "-"}</td>
        <td>${item.endAt || "-"}</td>
        <td>${item.type}</td>
        <td>${item.mode || "-"}</td>
        <td>${item.subject || "-"}<br><small>${item.destination || "-"}</small></td>
        <td>${item.text}</td>
        <td>${item.owner || currentCaseContext.owner}</td>
        <td>${item.assignee || "-"}</td>
        <td>${item.file || "-"}</td>
        <td class="table-actions">
          <button class="ghost-button table-action-button" data-note-edit="${index}">Edit</button>
          <button class="ghost-button table-action-button" data-note-delete="${index}">Delete</button>
        </td>
      </tr>
    `).join("") : `<tr><td colspan="10"><div class="empty-table-state"><strong>ยังไม่มีบันทึกของเคสนี้</strong><span>เริ่มจากฟอร์ม Case Notes เพื่อบันทึกการโทร การประสานภายใน หรือหนังสือราชการได้เลย</span></div></td></tr>`;
  }

  if (reminderHistoryBody) {
    const reminders = currentCaseContext.reminders || [];
    reminderHistoryBody.innerHTML = reminders.length ? reminders.map((item, index) => `
      <tr>
        <td>${item.title}</td>
        <td>${item.assigner || "-"}</td>
        <td>${item.assignee || "-"}</td>
        <td>${item.deadline || item.when}</td>
        <td>${item.status || item.alert || "-"}</td>
        <td>${item.file || "-"}</td>
        <td class="table-actions">
          <button class="ghost-button table-action-button" data-reminder-edit="${index}">Edit</button>
          <button class="ghost-button table-action-button" data-reminder-delete="${index}">Delete</button>
        </td>
      </tr>
    `).join("") : `<tr><td colspan="6"><div class="empty-table-state"><strong>ยังไม่มีงานมอบหมาย</strong><span>เริ่มจากฟอร์ม Task Assignment เพื่อสร้างงานและกำหนด deadline ให้ทีม</span></div></td></tr>`;
  }
}

function renderReferralsView() {
  if (referralHistoryBody) {
    const referrals = currentCaseContext.referrals || [];
    referralHistoryBody.innerHTML = referrals.length ? referrals.map((item, index) => `
      <tr>
        <td>${item.id}</td>
        <td>${item.date}</td>
        <td>${item.destination}</td>
        <td>${item.priority}</td>
        <td>${item.status}</td>
        <td class="table-actions">
          <button class="ghost-button table-action-button" data-referral-edit="${index}">Edit</button>
          <button class="ghost-button table-action-button" data-referral-delete="${index}">Delete</button>
        </td>
      </tr>
    `).join("") : `<tr><td colspan="6"><div class="empty-table-state"><strong>ยังไม่มี referral ของเคสนี้</strong><span>กรอก Referral Form แล้วบันทึกเข้าสู่ระบบเพื่อเริ่มติดตามสถานะ</span></div></td></tr>`;
  }
}

function renderCoordinationView() {
  if (coordinationMonthSelect) coordinationMonthSelect.value = currentPeriod.monthKey;
  if (coordinationFySelect) coordinationFySelect.value = String(currentPeriod.fy);

  if (coordinationFamilyBody) {
    coordinationFamilyBody.innerHTML = `
      <tr><td>Piyada P.</td><td>บุตรสาว</td><td>08X-XXX-4455</td><td>ประสานหลักหลังจำหน่าย</td></tr>
      <tr><td>Somchai P.</td><td>บุตรชาย</td><td>09X-XXX-2291</td><td>ติดต่อช่วงเย็น</td></tr>
    `;
  }

  if (coordinationNetworkBody) {
    coordinationNetworkBody.innerHTML = `
      <tr><td>ศูนย์คุ้มครองและพัฒนาคุณภาพชีวิตจังหวัดนครราชสีมา</td><td>044-XXX-901</td><td>อ.เมืองนครราชสีมา</td><td>นักสังคมสงเคราะห์ชำนาญการ</td></tr>
      <tr><td>บ้านเมตตาจังหวัดนครราชสีมา</td><td>044-XXX-557</td><td>อ.เมืองนครราชสีมา</td><td>หัวหน้าศูนย์</td></tr>
      <tr><td>มูลนิธิสวนแก้ว สาขาบุรีรัมย์</td><td>044-XXX-774</td><td>บุรีรัมย์</td><td>ผู้ประสานงานเครือข่าย</td></tr>
    `;
  }

  const typeFilter = coordinationTypeFilter?.value || "ทั้งหมด";
  const statusFilter = coordinationStatusFilter?.value || "ทั้งหมด";
  const logs = (currentCaseContext.coordinationLogs || []).filter((item) => {
    const passType = typeFilter === "ทั้งหมด" || item.type === typeFilter;
    const passStatus = statusFilter === "ทั้งหมด" || item.status === statusFilter;
    return passType && passStatus;
  });

  if (coordinationLogBody) {
    coordinationLogBody.innerHTML = logs.length ? logs.map((item) => `
      <tr>
        <td>${item.date}</td>
        <td>${item.subject}</td>
        <td>${item.owner}</td>
        <td>${item.target}</td>
        <td>${item.result}</td>
        <td>${item.receivedAt}</td>
        <td>${item.type}</td>
        <td>${item.status}</td>
        <td>${item.file}</td>
      </tr>
    `).join("") : `<tr><td colspan="9"><div class="empty-table-state"><strong>ยังไม่มีประวัติการประสานงานในเงื่อนไขที่เลือก</strong><span>ลองเปลี่ยนเดือน ปี หรือประเภทการประสานงานเพื่อดูข้อมูลเพิ่มเติม</span></div></td></tr>`;
  }

  if (coordinationExcellentBody) {
    coordinationExcellentBody.innerHTML = `
      <tr><td>บ้านเมตตาจังหวัดนครราชสีมา</td><td>044-XXX-557</td><td>อ.เมืองนครราชสีมา</td><td>หัวหน้าศูนย์</td></tr>
      <tr><td>ศูนย์คุ้มครองและพัฒนาคุณภาพชีวิตจังหวัดนครราชสีมา</td><td>044-XXX-901</td><td>อ.เมืองนครราชสีมา</td><td>นักสังคมสงเคราะห์ชำนาญการ</td></tr>
      <tr><td>บ้านพักเด็กจังหวัดชัยภูมิ</td><td>044-XXX-337</td><td>ชัยภูมิ</td><td>นักพัฒนาสังคม</td></tr>
    `;
  }

  if (coordinationDifficultBody) {
    coordinationDifficultBody.innerHTML = `
      <tr><td>หน่วยงานเครือข่ายตัวอย่าง A</td><td>044-XXX-440</td><td>บุรีรัมย์</td><td>ผู้ประสานงานภาคสนาม</td></tr>
      <tr><td>หน่วยงานเครือข่ายตัวอย่าง B</td><td>044-XXX-562</td><td>สุรินทร์</td><td>เจ้าหน้าที่รับเรื่อง</td></tr>
      <tr><td>หน่วยงานเครือข่ายตัวอย่าง C</td><td>044-XXX-713</td><td>กรุงเทพมหานคร</td><td>ฝ่ายประสานบริการ</td></tr>
    `;
  }
}

function saveCoordinationLog() {
  const record = {
    date: coordinationDateInput?.value || "",
    subject: coordinationSubjectInput?.value || "",
    owner: normalizeOwnerName(coordinationOwnerInput?.value || ""),
    target: coordinationTargetInput?.value || "",
    result: coordinationResultInput?.value || "",
    receivedAt: coordinationReceivedInput?.value || "",
    type: coordinationTypeInput?.value || "",
    status: coordinationStatusInput?.value || "",
    file: coordinationFileInput?.value || "-",
    note: coordinationNoteInput?.value || ""
  };
  currentCaseContext.coordinationLogs = [record, ...(currentCaseContext.coordinationLogs || [])];
  currentCaseContext.timeline = [
    { title: `Coordination log · ${record.type}`, note: `${record.target} | ${record.result}`, gradient: true },
    ...(currentCaseContext.timeline || [])
  ];
  localStorage.setItem(caseContextStorageKey(currentPeriod.monthKey), JSON.stringify(currentCaseContext));
  renderCurrentCaseDetail();
  renderCoordinationView();
  renderExecutiveReport();
  showToast("บันทึก Coordination แล้ว", record.subject);
}

function exportCurrentSummary(type) {
  const prefix = type === "notes" ? "Notes Summary" : type === "reminders" ? "Reminder Summary" : type === "referrals" ? "Referral Summary" : "Coordination Summary";
  const items = type === "notes"
    ? (currentCaseContext.notes || []).map((item, index) => `${index + 1}. [${item.type}] ${item.text}`)
    : type === "reminders"
      ? (currentCaseContext.reminders || []).map((item, index) => `${index + 1}. ${item.title} | ${item.when} | ${item.alert}`)
      : type === "referrals"
        ? (currentCaseContext.referrals || []).map((item, index) => `${index + 1}. ${item.id} | ${item.destination} | ${item.priority} | ${item.status}`)
        : (currentCaseContext.coordinationLogs || []).map((item, index) => `${index + 1}. ${item.date} | ${item.subject} | ${item.owner} | ${item.target} | ${item.status}`);
  const summaryText = `${prefix}\nCase: ${currentCaseContext.id}\nPatient: ${currentCaseContext.patient}\nOwner: ${currentCaseContext.owner}\nMonth: ${inboxMonthData[currentPeriod.monthKey]?.label || ""}\n\n${items.join("\n") || "No data"}`;
  if (exportSummaryText) exportSummaryText.value = summaryText;
  toggleOverlay("export-summary-modal", true);
  showToast("เตรียม Export Summary แล้ว", prefix);
}

function showToast(title, message) {
  if (!toastStack) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<strong>${title}</strong><span>${message}</span>`;
  toastStack.appendChild(toast);
  window.setTimeout(() => {
    toast.remove();
  }, 2600);
}

function getStatusChipClass(status = "") {
  if (status.includes("In-Progress") || status.includes("กำลังดำเนินการ")) return "chip-violet";
  if (status.includes("รอ") || status.includes("Conference")) return "chip-warning";
  if (status.includes("ประสาน") || status.includes("Fact")) return "chip-info";
  if (status.includes("Terminate") || status.includes("D/C")) return "chip-teal";
  return "chip-soft";
}

function buildCaseContextFromIntake(state) {
  return {
    id: state.caseId,
    owner: normalizeOwnerName(state.owner),
    patient: state.patientName,
    hn: state.hn,
    age: state.age,
    channel: state.channel,
    area: state.area,
    summary: state.summary,
    note: state.note,
    phone: state.phone,
    relative: `ญาติผู้ประสาน · ${state.phone}`,
    lastContact: state.updatedDate,
    consult: state.consult,
    priority: state.priority,
    status: state.status,
    statusClass: getStatusChipClass(state.status),
    address: state.address,
    ward: state.ward,
    md: state.md,
    dx: state.dx,
    caseDate: state.caseDate,
    admitDate: state.admitDate,
    updatedDate: state.updatedDate,
    wardDate: state.wardDate,
    closedDate: state.closedDate,
    timeline: [
      { title: `${state.updatedDate} บันทึกรับเคสและทบทวนข้อมูลตั้งต้น`, note: state.note, gradient: true },
      { title: `${state.caseDate} รับเคสเข้าสู่ระบบ`, note: `${state.channel} · ${state.consult}` },
      { title: `${state.wardDate} เริ่มติดตามข้อมูลจากตึก/หน่วยบริการ`, note: `${state.ward} · ${state.md}` }
    ],
    problems: [state.consult, state.summary, `ระดับความเร่งด่วน: ${state.priority}`],
    plans: ["เริ่ม Assessment และวินิจฉัยปัญหาทางสังคม", "เชื่อมผลประเมินไปหน้า Care Plan", "เตรียมรายงานและ referral หากจำเป็น"],
    notes: currentCaseContext.notes || [],
    referrals: currentCaseContext.referrals || [],
    reminders: currentCaseContext.reminders
  };
}

function renderCurrentCaseDetail() {
  const c = currentCaseContext;
  if (caseDetailTitle) caseDetailTitle.textContent = `เคส ${c.id}`;
  if (caseDetailProfileName) caseDetailProfileName.textContent = c.patient;
  if (caseDetailProfileMeta) caseDetailProfileMeta.textContent = `${c.hn} · อายุ ${c.age} · ${c.ward}`;
  if (caseDetailMetaLine) caseDetailMetaLine.textContent = `${c.hn} · อายุ ${c.age} · ${c.ward}`;
  if (caseDetailCaseNo) caseDetailCaseNo.textContent = c.id;
  if (caseDetailCaseDate) caseDetailCaseDate.textContent = c.caseDate;
  if (caseDetailPatientName) caseDetailPatientName.textContent = c.patient;
  if (caseDetailHn) caseDetailHn.textContent = c.hn;
  if (caseDetailAge) caseDetailAge.textContent = c.age;
  if (caseDetailChannel) caseDetailChannel.textContent = c.channel || "-";
  if (caseDetailAddress) caseDetailAddress.textContent = c.address || "-";
  if (caseDetailAdmitDate) caseDetailAdmitDate.textContent = c.admitDate || "-";
  if (caseDetailWard) caseDetailWard.textContent = c.ward || "-";
  if (caseDetailMd) caseDetailMd.textContent = c.md || "-";
  if (caseDetailDx) caseDetailDx.textContent = c.dx || "-";
  if (caseDetailConsult) caseDetailConsult.textContent = c.consult || "-";
  if (caseDetailPriority) caseDetailPriority.textContent = c.priority || "-";
  if (caseDetailProblem) caseDetailProblem.textContent = c.consult || c.summary || "-";
  if (caseDetailSummary) caseDetailSummary.textContent = c.summary || "-";
  if (caseDetailNote) caseDetailNote.textContent = c.note || "-";
  if (caseDetailStatusText) caseDetailStatusText.textContent = c.status || "-";
  if (caseDetailOwner) caseDetailOwner.textContent = c.owner || "-";
  if (caseDetailOwnerInline) caseDetailOwnerInline.textContent = c.owner || "-";
  if (caseDetailArea) caseDetailArea.textContent = c.area || "-";
  if (caseDetailPhone) caseDetailPhone.textContent = c.phone || "-";
  if (caseDetailRelative) caseDetailRelative.textContent = c.relative || "-";
  if (caseDetailLastContact) caseDetailLastContact.textContent = c.lastContact || "-";
  if (caseDetailUpdatedDate) caseDetailUpdatedDate.textContent = c.updatedDate || "-";
  if (caseDetailWardDate) caseDetailWardDate.textContent = c.wardDate || "-";
  if (caseDetailClosedDate) caseDetailClosedDate.textContent = c.closedDate || "-";
  if (caseDetailStatusChips) {
    caseDetailStatusChips.innerHTML = `<span class="chip ${c.statusClass || "chip-soft"}">${c.status}</span><span class="chip chip-danger">ต้องติดตาม</span>`;
  }
  if (caseDetailTimelineList) {
    caseDetailTimelineList.innerHTML = (c.timeline || []).map((item) => `
      <div class="timeline-item">
        <span class="timeline-dot ${item.gradient ? "dot-gradient" : ""}"></span>
        <div>
          <strong>${item.title}</strong>
          <p>${item.note}</p>
        </div>
      </div>
    `).join("");
  }
  if (caseDetailProblemList) {
    caseDetailProblemList.innerHTML = (c.problems || []).map((item) => `<li>${item}</li>`).join("");
  }
  if (caseDetailPlanList) {
    caseDetailPlanList.innerHTML = (c.plans || []).map((item) => `<li>${item}</li>`).join("");
  }
  if (caseDetailReminderCards) {
    const remindersMarkup = (c.reminders || []).map((item) => `
      <div class="list-item cardlet reminder-card">
        <div class="reminder-card-top">
          <strong>${item.title}</strong>
          <span class="chip ${item.chip || "chip-soft"}">${item.when}</span>
        </div>
        <p>โน้ต: ${item.note}</p>
        <small>Reminder: ${item.alert}</small>
      </div>
    `).join("");
    caseDetailReminderCards.innerHTML = remindersMarkup;
  }
  renderNotesAndTasksViews();
  renderReferralsView();
  renderCoordinationView();
  renderCloseCaseView();
}

function openCaseFromRow(row) {
  if (!row) return;
  currentCaseContext = {
    ...currentCaseContext,
    id: row.dataset.caseId,
    owner: row.dataset.owner || currentCaseContext.owner,
    patient: row.dataset.patient || currentCaseContext.patient,
    hn: row.dataset.hn || row.dataset.meta?.split("/")[1]?.trim() || currentCaseContext.hn,
    age: row.dataset.age || row.dataset.meta?.split("/")[0]?.trim() || currentCaseContext.age,
    channel: row.dataset.channel || currentCaseContext.channel,
    area: row.dataset.area || currentCaseContext.area,
    summary: row.dataset.summary || row.dataset.problem || currentCaseContext.summary,
    note: row.dataset.note || currentCaseContext.note,
    phone: row.dataset.phone || currentCaseContext.phone,
    lastContact: row.dataset.updatedDate || currentCaseContext.lastContact,
    consult: row.dataset.problem || currentCaseContext.consult,
    priority: row.dataset.priority || currentCaseContext.priority,
    status: row.dataset.status || currentCaseContext.status,
    statusClass: row.dataset.statusClass || currentCaseContext.statusClass,
    address: row.dataset.address || currentCaseContext.address,
    ward: row.dataset.ward || currentCaseContext.ward,
    md: row.dataset.md || currentCaseContext.md,
    dx: row.dataset.dx || currentCaseContext.dx,
    caseDate: row.dataset.caseDate || currentCaseContext.caseDate,
    admitDate: row.dataset.admitDate || currentCaseContext.admitDate,
    updatedDate: row.dataset.updatedDate || currentCaseContext.updatedDate,
    wardDate: row.dataset.wardDate || currentCaseContext.wardDate,
    closedDate: row.dataset.closedDate || currentCaseContext.closedDate
  };
  localStorage.setItem(caseContextStorageKey(currentPeriod.monthKey), JSON.stringify(currentCaseContext));
  renderCurrentCaseDetail();
  renderExecutiveReport();
  setActiveScreen("case-detail");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderInboxMonth(monthKey) {
  const data = inboxMonthData[monthKey];
  if (!data) return;
  renderInboxSummary(data);
  renderInboxCharts(data);
  renderInboxStatuses(data);
  renderSimpleRows(inboxServiceTotalsBody, data.serviceTotals);
  renderInboxOwners(data);
  renderInboxCases(data);
  renderSimpleRows(inboxReferralBody, sharedInboxReferrals.map((name, index) => [name, data.referrals[index], Math.max(1, Math.floor(data.referrals[index] / 8))]));
  renderSimpleRows(inboxWardBody, sharedInboxWards.map((name, index) => [name, data.wards[index], Math.max(1, Math.floor(data.wards[index] / 7))]));
  renderSimpleRows(inboxDoctorBody, sharedInboxDoctors.map((name, index) => [name, data.doctors[index], Math.max(1, Math.floor(data.doctors[index] / 6))]));

  if (inboxAreaCloud) {
    inboxAreaCloud.innerHTML = data.areas.map((area) => `<span>${area}</span>`).join("");
  }

  if (inboxMonthSelect) inboxMonthSelect.value = monthKey;
  syncInboxMonthChips(monthKey);
}

function syncGlobalPeriod(monthKey, fy) {
  currentPeriod = { monthKey, fy: Number(fy) };
  renderDashboard(currentPeriod.monthKey, currentPeriod.fy);
  renderInboxMonth(currentPeriod.monthKey);
  loadWorkflowStateForMonth();
}

function buildInboxMonthControls() {
  if (inboxMonthSelect) {
    inboxMonthSelect.innerHTML = inboxMonthKeys
      .slice()
      .reverse()
      .map((key) => `<option value="${key}">ดูข้อมูลเดือน${inboxMonthData[key].label}</option>`)
      .join("");
  }
  syncInboxMonthChips("april-2026");
}

function syncInboxMonthChips(activeMonthKey) {
  if (!inboxMonthChipsContainer) return;
  const allKeys = inboxMonthKeys.slice().reverse();
  const activeIndex = allKeys.indexOf(activeMonthKey);
  const start = Math.max(0, activeIndex - 1);
  const visibleKeys = allKeys.slice(start, start + 4);

  inboxMonthChipsContainer.innerHTML = visibleKeys
    .map((key) => `<button class="chip chip-soft inbox-month-chip ${key === activeMonthKey ? "active" : ""}" data-inbox-month="${key}">${inboxMonthData[key].label}</button>`)
    .join("");

  inboxMonthChipsContainer.querySelectorAll(".inbox-month-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      syncGlobalPeriod(chip.dataset.inboxMonth, getFiscalYearFromDate(parseMonthSlug(chip.dataset.inboxMonth)));
    });
  });
}

function buildDashboardControls() {
  const monthOptions = inboxMonthKeys
    .slice()
    .reverse()
    .map((key) => `<option value="${key}">${inboxMonthData[key].label}</option>`)
    .join("");

  if (dashboardMonthSelect) dashboardMonthSelect.innerHTML = monthOptions;
  if (calendarMonthSelect) calendarMonthSelect.innerHTML = monthOptions;

  if (dashboardFySelect) {
    const fyValues = [...new Set(inboxMonthKeys.map((key) => getFiscalYearFromDate(parseMonthSlug(key))))].sort((a, b) => a - b);
    dashboardFySelect.innerHTML = fyValues.map((fy) => `<option value="${fy}">FY${fy}</option>`).join("");
  }

  if (coordinationMonthSelect) coordinationMonthSelect.innerHTML = monthOptions;
  if (coordinationFySelect && dashboardFySelect) {
    coordinationFySelect.innerHTML = dashboardFySelect.innerHTML;
  }
  populateSelectWithOptions(coordinationOwnerInput, staffDirectory);
}

function aggregateFiscalYear(fy) {
  const monthKeys = inboxMonthKeys.filter((key) => getFiscalYearFromDate(parseMonthSlug(key)) === Number(fy));
  const dataList = monthKeys.map((key) => inboxMonthData[key]);
  const totalFromSummary = (rowIndex, itemIndex) =>
    dataList.reduce((sum, item) => sum + Number(String(item.summary[rowIndex][itemIndex]).replace(/,/g, "")), 0);
  const totalFromService = (label) =>
    dataList.reduce((sum, item) => sum + (item.serviceTotals.find((entry) => entry[0] === label)?.[1] || 0), 0);

  return {
    totalCases: totalFromSummary(1, 1),
    totalMale: totalFromSummary(4, 1),
    totalFemale: totalFromSummary(5, 1),
    totalOPD: totalFromService("Total OPD"),
    totalIPD: totalFromService("Total IPD"),
    totalER: totalFromService("Total ER"),
    totalChild: totalFromService("Total OPD เด็ก"),
    totalForensic: totalFromService("Total นิติจิตเวช OPD") + totalFromService("Total นิติจิตเวช IPD")
  };
}

function aggregateOwnerForFiscalYear(ownerName, fy) {
  const monthKeys = inboxMonthKeys.filter((key) => getFiscalYearFromDate(parseMonthSlug(key)) === Number(fy));
  return monthKeys.reduce(
    (summary, key) => {
      const owner = inboxMonthData[key]?.owners?.find((item) => item.name === ownerName);
      if (!owner) return summary;
      summary.totalAll += owner.totalAll;
      summary.totalMonth += owner.totalMonth;
      summary.inProgress += owner.inProgress;
      summary.referral += owner.referral;
      summary.conference += owner.conference;
      return summary;
    },
    { totalAll: 0, totalMonth: 0, inProgress: 0, referral: 0, conference: 0 }
  );
}

function workflowStorageKey(type, monthKey) {
  return `jvk-swms-${type}-${monthKey}`;
}

function getAssessmentFieldMap() {
  return {
    presentingProblem: assessmentPresentingProblem,
    primaryProblem: assessmentPrimaryProblem,
    urgency: assessmentUrgency,
    immediateIssues: assessmentImmediateIssues,
    caregiver: assessmentCaregiver,
    caregiverReadiness: assessmentCaregiverReadiness,
    homeSafety: assessmentHomeSafety,
    riskLevel: assessmentRiskLevel,
    strengths: assessmentStrengths,
    summary: assessmentSummary,
    recommendation: assessmentRecommendation
  };
}

function captureAssessmentState() {
  const fields = getAssessmentFieldMap();
  return {
    fields: Object.fromEntries(
      Object.entries(fields).map(([key, element]) => [key, element ? element.value : ""])
    ),
    checklist: Array.from(assessmentChecklistInputs).map((input) => ({
      key: input.dataset.assessmentCheck,
      checked: input.checked
    }))
  };
}

function applyAssessmentState(state) {
  if (!state) return;
  const fields = getAssessmentFieldMap();
  Object.entries(state.fields || {}).forEach(([key, value]) => {
    if (fields[key]) fields[key].value = value;
  });
  (state.checklist || []).forEach((item) => {
    const checkbox = document.querySelector(`[data-assessment-check="${item.key}"]`);
    if (checkbox) checkbox.checked = Boolean(item.checked);
  });
  updateAssessmentDerivedState();
}

function getAssessmentDefaults() {
  return {
    fields: {
      presentingProblem: "มีแผนจำหน่าย แต่ครอบครัวยังไม่ยืนยันผู้ดูแลและยังต้องประเมินความพร้อมกลับบ้าน",
      primaryProblem: "สัมพันธภาพในครอบครัว / ปัญหาการดูแล",
      urgency: "เร่งด่วนสูง",
      immediateIssues: "ยืนยันผู้ดูแล ประเมินความพร้อมของบ้าน และจัดแผนสำรองกรณีครอบครัวไม่พร้อมรับกลับ",
      caregiver: "บุตรสาว (ยังไม่ยืนยัน)",
      caregiverReadiness: "ยังไม่พร้อม / ต้องติดตาม",
      homeSafety: "ต้องประเมินเพิ่มเติม",
      riskLevel: "High",
      strengths: "ผู้ป่วยให้ความร่วมมือดี ญาติหลักยังติดต่อได้ ทีม ward พร้อมช่วยประสาน และมีเครือข่ายในพื้นที่ที่สามารถประเมินต่อได้",
      summary: "ปัญหาหลักคือความไม่พร้อมของผู้ดูแลและความไม่ชัดเจนของแผนกลับบ้าน ส่งผลให้การจำหน่ายมีความเสี่ยง จำเป็นต้องประเมินทรัพยากรครอบครัวและเครือข่ายในพื้นที่ร่วมกับทีมสหวิชาชีพ",
      recommendation: "1) ติดตามญาติหลักเพื่อยืนยัน caregiver plan 2) ประชุม MDT ก่อนจำหน่าย 3) เตรียม referral สำรอง 4) ประสานเครือข่ายชุมชนและติดตามหลังจำหน่าย"
    },
    checklist: [
      { key: "presenting-problem", checked: true },
      { key: "caregiver", checked: true },
      { key: "housing", checked: true },
      { key: "risk", checked: true },
      { key: "summary", checked: true },
      { key: "recommendation", checked: false }
    ]
  };
}

function getRiskProfile() {
  const fields = captureAssessmentState().fields;
  let score = 0;
  score += fields.riskLevel === "High" ? 4 : fields.riskLevel === "Moderate" ? 2 : 1;
  score += fields.caregiverReadiness.includes("ยังไม่พร้อม") ? 3 : fields.caregiverReadiness.includes("บางส่วน") ? 2 : 1;
  score += fields.homeSafety.includes("ต้องประเมิน") ? 2 : fields.homeSafety.includes("พอใช้") ? 1 : 0;
  score += fields.urgency.includes("สูง") ? 2 : fields.urgency.includes("เร่งด่วน") ? 1 : 0;
  const level = score >= 8 ? "High risk" : score >= 5 ? "Moderate risk" : "Low risk";
  const barrier = fields.caregiverReadiness.includes("พร้อมรับกลับ")
    ? "ติดตามหลังจำหน่าย"
    : fields.homeSafety.includes("พร้อมกลับบ้าน")
      ? "Caregiver"
      : "Caregiver + housing";
  const referral = barrier === "Caregiver + housing" ? "Community / shelter backup" : "Community follow-up";
  const note = level === "High risk"
    ? "เคสนี้มีความเสี่ยงสูงจากความไม่ชัดเจนของผู้ดูแล ความพร้อมกลับบ้าน และงานเร่งด่วนก่อนจำหน่าย"
    : level === "Moderate risk"
      ? "เคสนี้ยังต้องติดตามผู้ดูแลและเครือข่ายต่อเนื่องก่อนเข้าสู่แผนจำหน่าย"
      : "เคสนี้มีความเสี่ยงต่ำลงและเริ่มพร้อมเข้าสู่การติดตามตามแผน";
  return { score: Math.min(10, score), level, barrier, referral, note };
}

function updateAssessmentDerivedState() {
  const state = captureAssessmentState();
  const requiredFieldKeys = ["presentingProblem", "primaryProblem", "urgency", "immediateIssues", "caregiver", "riskLevel", "summary", "recommendation"];
  const filledCount = requiredFieldKeys.filter((key) => String(state.fields[key] || "").trim()).length;
  const requiredPercent = Math.round((filledCount / requiredFieldKeys.length) * 100);
  const checkedCount = state.checklist.filter((item) => item.checked).length;
  const riskProfile = getRiskProfile();
  const problemCount = 2 + (state.fields.immediateIssues.includes("ประเมิน") ? 1 : 0) + (state.fields.recommendation ? 1 : 0);
  const reviewLabel = `${inboxMonthData[currentPeriod.monthKey]?.label || ""} · review +7 วัน`;

  if (assessmentProgressBar) assessmentProgressBar.style.width = `${requiredPercent}%`;
  if (assessmentProgressLabel) assessmentProgressLabel.textContent = `Assessment Completion ${requiredPercent}%`;
  if (assessmentProgressCopy) assessmentProgressCopy.textContent = checkedCount >= 5 ? "พร้อมส่งต่อไปหน้า Care Plan และรายงานผู้บริหาร" : "ควรตรวจทาน checklist ให้ครบก่อนส่งต่อไปแผนช่วยเหลือ";
  if (assessmentChecklistState) assessmentChecklistState.textContent = checkedCount === state.checklist.length ? "ครบทุกหัวข้อ" : "ยังไม่ครบทุกหัวข้อ";
  if (assessmentChecklistCompletion) assessmentChecklistCompletion.textContent = `${checkedCount} / ${state.checklist.length}`;
  if (assessmentAutoRiskScore) assessmentAutoRiskScore.textContent = `${riskProfile.score} / 10`;
  if (assessmentAutoRiskLevel) assessmentAutoRiskLevel.textContent = riskProfile.level;
  if (assessmentAutoRiskNote) assessmentAutoRiskNote.textContent = riskProfile.note;
  if (assessmentOutputRequired) assessmentOutputRequired.textContent = `${requiredPercent}%`;
  if (assessmentOutputProblems) assessmentOutputProblems.textContent = `${problemCount} ประเด็นสำคัญ`;
  if (assessmentOutputPriority) assessmentOutputPriority.textContent = state.fields.riskLevel;
  if (assessmentOutputBarrier) assessmentOutputBarrier.textContent = riskProfile.barrier;
  if (assessmentOutputReferral) assessmentOutputReferral.textContent = riskProfile.referral;
  if (assessmentOutputReview) assessmentOutputReview.textContent = reviewLabel;
  return { requiredPercent, checkedCount, riskProfile, problemCount, reviewLabel, state };
}

function saveAssessmentState() {
  localStorage.setItem(workflowStorageKey("assessment", currentPeriod.monthKey), JSON.stringify(captureAssessmentState()));
  updateAssessmentDerivedState();
  if (assessmentSaveState) assessmentSaveState.textContent = `Saved ${inboxMonthData[currentPeriod.monthKey]?.label || ""}`;
  if (assessmentReviewState) assessmentReviewState.textContent = `Checklist ${assessmentChecklistCompletion?.textContent || ""}`;
}

function loadAssessmentState() {
  const saved = localStorage.getItem(workflowStorageKey("assessment", currentPeriod.monthKey));
  applyAssessmentState(saved ? JSON.parse(saved) : getAssessmentDefaults());
}

function captureCareConferenceFormState() {
  return {
    sw: careConferenceSw?.value || "",
    patientName: careConferencePatientName?.value || "",
    intake: careConferenceIntake?.value || "",
    consultDate: careConferenceConsultDate?.value || "",
    sex: careConferenceSex?.value || "",
    admitDate: careConferenceAdmitDate?.value || "",
    age: careConferenceAge?.value || "",
    hn: careConferenceHn?.value || "",
    dx: careConferenceDx?.value || "",
    ward: careConferenceWard?.value || "",
    md: careConferenceMd?.value || "",
    communityDetail: careConferenceCommunityDetail?.value || "",
    conferenceDate: careConferenceDate?.value || "",
    conferenceTime: careConferenceTime?.value || "",
    location: careConferenceLocation?.value || "",
    progress: careConferenceProgress?.value || ""
  };
}

function applyCareConferenceFormState(state = {}) {
  if (careConferenceSw && state.sw) careConferenceSw.value = state.sw;
  if (careConferencePatientName) careConferencePatientName.value = state.patientName || "";
  if (careConferenceIntake && state.intake) careConferenceIntake.value = state.intake;
  if (careConferenceConsultDate) careConferenceConsultDate.value = state.consultDate || "";
  if (careConferenceSex && state.sex) careConferenceSex.value = state.sex;
  if (careConferenceAdmitDate) careConferenceAdmitDate.value = state.admitDate || "";
  if (careConferenceAge) careConferenceAge.value = state.age || "";
  if (careConferenceHn) careConferenceHn.value = state.hn || "";
  if (careConferenceDx) careConferenceDx.value = state.dx || "";
  if (careConferenceWard && state.ward) careConferenceWard.value = state.ward;
  if (careConferenceMd && state.md) careConferenceMd.value = state.md;
  if (careConferenceCommunityDetail) careConferenceCommunityDetail.value = state.communityDetail || "";
  if (careConferenceDate) careConferenceDate.value = state.conferenceDate || "";
  if (careConferenceTime) careConferenceTime.value = state.conferenceTime || "";
  if (careConferenceLocation) careConferenceLocation.value = state.location || "";
  if (careConferenceProgress) careConferenceProgress.value = state.progress || "";
}

function captureCommunityPrepFormState() {
  return {
    sw: communityPrepSw?.value || "",
    patientName: communityPrepPatientName?.value || "",
    intake: communityPrepIntake?.value || "",
    consultDate: communityPrepConsultDate?.value || "",
    sex: communityPrepSex?.value || "",
    admitDate: communityPrepAdmitDate?.value || "",
    age: communityPrepAge?.value || "",
    hn: communityPrepHn?.value || "",
    dx: communityPrepDx?.value || "",
    ward: communityPrepWard?.value || "",
    md: communityPrepMd?.value || "",
    detail: communityPrepDetail?.value || "",
    address: communityPrepAddress?.value || "",
    subdistrict: communityPrepSubdistrict?.value || "",
    district: communityPrepDistrict?.value || "",
    province: communityPrepProvince?.value || "",
    prepDate: communityPrepDate?.value || "",
    internalTeam: getMultiSelectValues(communityPrepInternalTeam),
    externalNetwork: getMultiSelectValues(communityPrepExternalNetwork),
    an: communityPrepAn?.value || "",
    round: communityPrepRound?.value || "",
    stay6m: communityPrepStay6m?.value || "",
    strong: communityPrepStrong?.value || "",
    weak: communityPrepWeak?.value || "",
    note: communityPrepNote?.value || ""
  };
}

function applyCommunityPrepFormState(state = {}) {
  if (communityPrepSw && state.sw) communityPrepSw.value = state.sw;
  if (communityPrepPatientName) communityPrepPatientName.value = state.patientName || "";
  if (communityPrepIntake && state.intake) communityPrepIntake.value = state.intake;
  if (communityPrepConsultDate) communityPrepConsultDate.value = state.consultDate || "";
  if (communityPrepSex && state.sex) communityPrepSex.value = state.sex;
  if (communityPrepAdmitDate) communityPrepAdmitDate.value = state.admitDate || "";
  if (communityPrepAge) communityPrepAge.value = state.age || "";
  if (communityPrepHn) communityPrepHn.value = state.hn || "";
  if (communityPrepDx) communityPrepDx.value = state.dx || "";
  if (communityPrepWard && state.ward) communityPrepWard.value = state.ward;
  if (communityPrepMd && state.md) communityPrepMd.value = state.md;
  if (communityPrepDetail) communityPrepDetail.value = state.detail || "";
  if (communityPrepAddress) communityPrepAddress.value = state.address || "";
  if (communityPrepSubdistrict) communityPrepSubdistrict.value = state.subdistrict || "";
  if (communityPrepDistrict) communityPrepDistrict.value = state.district || "";
  if (communityPrepProvince) communityPrepProvince.value = state.province || "";
  if (communityPrepDate) communityPrepDate.value = state.prepDate || "";
  setMultiSelectValues(communityPrepInternalTeam, state.internalTeam || []);
  setMultiSelectValues(communityPrepExternalNetwork, state.externalNetwork || []);
  if (communityPrepAn) communityPrepAn.value = state.an || "";
  if (communityPrepRound && state.round) communityPrepRound.value = state.round;
  if (communityPrepStay6m && state.stay6m) communityPrepStay6m.value = state.stay6m;
  if (communityPrepStrong && state.strong) communityPrepStrong.value = state.strong;
  if (communityPrepWeak && state.weak) communityPrepWeak.value = state.weak;
  if (communityPrepNote) communityPrepNote.value = state.note || "";
}

function getDefaultConferenceRecord() {
  return {
    monthLabel: inboxMonthData[currentPeriod.monthKey]?.label || "",
    sw: getConferenceSwByOwner(currentCaseContext.owner),
    patientName: currentCaseContext.patient || "",
    intake: currentCaseContext.channel || "IPD",
    consultDate: currentCaseContext.caseDate || "",
    sex: "Male",
    admitDate: currentCaseContext.admitDate || "",
    age: currentCaseContext.age || "",
    hn: currentCaseContext.hn || "",
    dx: currentCaseContext.dx || "",
    ward: currentCaseContext.ward || sharedInboxWards[0],
    md: currentCaseContext.md || sharedInboxDoctors[0],
    communityDetail: currentCaseContext.summary || currentCaseContext.consult || "",
    conferenceDate: currentCaseContext.updatedDate || "",
    conferenceTime: "13:30 น.",
    location: "ห้องประชุม MDT ชั้น 2",
    progress: "เตรียมสรุป social assessment, discharge barrier และทางเลือกการส่งต่อสำหรับการประชุมสหวิชาชีพ"
  };
}

function getDefaultCommunityPrepRecord() {
  return {
    monthLabel: inboxMonthData[currentPeriod.monthKey]?.label || "",
    sw: getConferenceSwByOwner(currentCaseContext.owner),
    patientName: currentCaseContext.patient || "",
    intake: currentCaseContext.channel || "IPD",
    consultDate: currentCaseContext.caseDate || "",
    sex: "Male",
    admitDate: currentCaseContext.admitDate || "",
    age: currentCaseContext.age || "",
    hn: currentCaseContext.hn || "",
    dx: currentCaseContext.dx || "",
    ward: currentCaseContext.ward || sharedInboxWards[0],
    md: currentCaseContext.md || sharedInboxDoctors[0],
    detail: currentCaseContext.summary || currentCaseContext.consult || "",
    address: currentCaseContext.address || "",
    subdistrict: "ในเมือง",
    district: currentCaseContext.area || "เมืองนครราชสีมา",
    province: "นครราชสีมา",
    prepDate: currentCaseContext.updatedDate || "",
    internalTeam: ["นักสังคมสงเคราะห์", "พยาบาลประจำหอผู้ป่วย"],
    externalNetwork: ["รพช.", "อสม.", "ผู้ใหญ่บ้าน/ผู้นำชุมชน"],
    an: "AN 690412",
    round: "เตรียมครั้งที่ 1",
    stay6m: "ติ๊กถูก",
    strong: "ติ๊กถูก",
    weak: "ไม่เลือก",
    note: "ติดตามประสานชุมชนเพิ่มเติมก่อนวันจำหน่าย"
  };
}

function getDefaultCloseCaseState() {
  return {
    form: {
      id: currentCaseContext.id || "",
      patient: currentCaseContext.patient || "",
      owner: staffDirectory.find((item) => item.startsWith(normalizeOwnerName(currentCaseContext.owner || ""))) || staffDirectory[0],
      closeDate: currentCaseContext.closedDate && currentCaseContext.closedDate !== "-" ? currentCaseContext.closedDate : (inboxMonthData[currentPeriod.monthKey]?.label || ""),
      type: "D/C to community",
      reason: "เป้าหมายสำเร็จ / ครอบครัวรับกลับ",
      followup: "ติดตามใน 72 ชั่วโมง",
      postStatus: "อยู่ชุมชนต่อเนื่อง",
      reconsult: "ไม่มี",
      readmit: "ไม่มี",
      stable6m: "อยู่ระหว่างติดตาม",
      returnDate: "-",
      summary: "ครอบครัวรับกลับและทีมสหวิชาชีพยืนยันแผนต่อเนื่องหลังจำหน่ายแล้ว",
      plan: "ติดตามทางโทรศัพท์ภายใน 72 ชั่วโมง และประเมินซ้ำที่ 1 เดือน กับ 6 เดือน"
    },
    records: [
      {
        id: "SWMS-260331-011",
        patient: "Mali S.",
        owner: "คุณกิตติมาพร (SW-Kittimaporn)",
        closeDate: inboxMonthData[currentPeriod.monthKey]?.label || "",
        type: "D/C to community",
        reason: "จำหน่ายกลับชุมชนพร้อมติดตาม",
        followup: "ติดตามใน 7 วัน",
        postStatus: "ปิดเคสแล้วไม่กลับมาเกิน 6 เดือน",
        reconsult: "ไม่มี",
        readmit: "ไม่มี",
        stable6m: "ใช่",
        returnDate: "-",
        summary: "ผู้ป่วยกลับสู่ชุมชนต่อเนื่องและไม่กลับมาซ้ำ",
        plan: "ติดตามโดยเครือข่ายชุมชน"
      },
      {
        id: "SWMS-260327-007",
        patient: "Anan K.",
        owner: "คุณศิริพร ปรางปรุ (Siriporn - Head of Social Work Department)",
        closeDate: inboxMonthData[currentPeriod.monthKey]?.label || "",
        type: "Terminate case",
        reason: "ส่งต่อหน่วยงานภายนอกต่อเนื่อง",
        followup: "ติดตามใน 1 เดือน",
        postStatus: "กลับมาปรึกษาซ้ำ Re-consult",
        reconsult: "มี",
        readmit: "ไม่มี",
        stable6m: "ไม่ใช่",
        returnDate: "18 พฤษภาคม 2569",
        summary: "กลับมาปรึกษาซ้ำเรื่อง caregiver burden หลังปิดเคส",
        plan: "เปิดติดตามซ้ำร่วมกับเครือข่าย"
      },
      {
        id: "SWMS-260315-004",
        patient: "Suda P.",
        owner: "คุณวิฏฐิรษา (SW-Witthirasa)",
        closeDate: inboxMonthData[currentPeriod.monthKey]?.label || "",
        type: "Refer out and close",
        reason: "ส่งต่อหน่วยงานภายนอกต่อเนื่อง",
        followup: "ติดตามใน 72 ชั่วโมง",
        postStatus: "กลับมานอนซ้ำ Re-Admitted",
        reconsult: "มี",
        readmit: "มี",
        stable6m: "ไม่ใช่",
        returnDate: "12 มิถุนายน 2569",
        summary: "กลับมานอนซ้ำหลัง discharge ภายในช่วงติดตาม",
        plan: "ทบทวน discharge barrier และ referral pathway ใหม่"
      }
    ]
  };
}

function captureCloseCaseFormState() {
  return {
    id: closeCaseId?.value || "",
    patient: closeCasePatient?.value || "",
    owner: closeCaseOwner?.value || "",
    closeDate: closeCaseDate?.value || "",
    type: closeCaseType?.value || "",
    reason: closeCaseReason?.value || "",
    followup: closeCaseFollowup?.value || "",
    postStatus: closeCasePostStatus?.value || "",
    reconsult: closeCaseReconsult?.value || "",
    readmit: closeCaseReadmit?.value || "",
    stable6m: closeCaseStable6m?.value || "",
    returnDate: closeCaseReturnDate?.value || "",
    summary: closeCaseSummary?.value || "",
    plan: closeCasePlan?.value || ""
  };
}

function applyCloseCaseFormState(state = {}) {
  if (closeCaseId) closeCaseId.value = state.id || "";
  if (closeCasePatient) closeCasePatient.value = state.patient || "";
  if (closeCaseOwner && state.owner) closeCaseOwner.value = state.owner;
  if (closeCaseDate) closeCaseDate.value = state.closeDate || "";
  if (closeCaseType && state.type) closeCaseType.value = state.type;
  if (closeCaseReason && state.reason) closeCaseReason.value = state.reason;
  if (closeCaseFollowup && state.followup) closeCaseFollowup.value = state.followup;
  if (closeCasePostStatus && state.postStatus) closeCasePostStatus.value = state.postStatus;
  if (closeCaseReconsult && state.reconsult) closeCaseReconsult.value = state.reconsult;
  if (closeCaseReadmit && state.readmit) closeCaseReadmit.value = state.readmit;
  if (closeCaseStable6m && state.stable6m) closeCaseStable6m.value = state.stable6m;
  if (closeCaseReturnDate) closeCaseReturnDate.value = state.returnDate || "";
  if (closeCaseSummary) closeCaseSummary.value = state.summary || "";
  if (closeCasePlan) closeCasePlan.value = state.plan || "";
}

function getSavedCloseCaseState() {
  const saved = localStorage.getItem(workflowStorageKey("close-case", currentPeriod.monthKey));
  return saved ? JSON.parse(saved) : null;
}

function buildCloseCaseSummary(records = []) {
  const totalClosed = records.length;
  const reconsult = records.filter((item) => item.reconsult === "มี").length;
  const readmit = records.filter((item) => item.readmit === "มี").length;
  const stable6m = records.filter((item) => item.stable6m === "ใช่" || item.postStatus.includes("6 เดือน")).length;
  const community = records.filter((item) => item.postStatus.includes("ชุมชน") || item.type.includes("community")).length;
  return [
    ["ปิดเคสทั้งหมดเดือนนี้", String(totalClosed), "เคสที่ยุติการดูแลแล้ว"],
    ["กลับมาปรึกษาซ้ำ Re-consult", String(reconsult), "หลังปิดเคสแล้ว"],
    ["กลับมานอนซ้ำ Re-Admitted", String(readmit), "ต้องเฝ้าระวังซ้ำ"],
    ["อยู่ชุมชนเกิน 6 เดือน", String(stable6m), "ตัวชี้วัดผลลัพธ์เชิงบวก"],
    ["คืนสู่ชุมชนได้", String(community), "ติดตามต่อหลังปิดเคส"]
  ];
}

function renderCloseCaseSummary(records = []) {
  if (!closeCaseSummaryGrid) return;
  closeCaseSummaryGrid.innerHTML = buildCloseCaseSummary(records).map(([label, value, note], index) => `
    <article class="stat-card ${index === 0 ? "gradient-border" : ""}">
      <span class="stat-label">${label}</span>
      <strong>${value}</strong>
      <small>${note}</small>
    </article>
  `).join("");
}

function renderCloseCaseHistory(records = []) {
  if (!closeCaseHistoryBody) return;
  const filteredRecords = records.filter((item) => {
    if (activeCloseCaseTab === "reconsult") return item.reconsult === "มี";
    if (activeCloseCaseTab === "readmit") return item.readmit === "มี";
    if (activeCloseCaseTab === "stable6m") return item.stable6m === "ใช่" || String(item.postStatus || "").includes("6 เดือน");
    return true;
  });
  if (!filteredRecords.length) {
    closeCaseHistoryBody.innerHTML = `<tr><td colspan="4">ยังไม่มีข้อมูลในหมวดนี้ของเดือนนี้</td></tr>`;
    return;
  }
  closeCaseHistoryBody.innerHTML = filteredRecords.map((item) => `
    <tr>
      <td>
        <div class="record-stack">
          <strong>${item.patient || "-"}</strong>
          <span>${item.id || "-"}</span>
          <span>${item.owner || "-"}</span>
        </div>
      </td>
      <td>
        <div class="record-stack">
          <strong>${item.type || "-"}</strong>
          <span>ปิดเคส: ${item.closeDate || "-"}</span>
          <span>เหตุผล: ${item.reason || "-"}</span>
          <span>ติดตาม: ${item.followup || "-"}</span>
        </div>
      </td>
      <td>
        <div class="record-stack">
          <span>สถานะ: ${item.postStatus || "-"}</span>
          <span>Re-consult: ${item.reconsult || "-"}</span>
          <span>Re-admitted: ${item.readmit || "-"}</span>
          <span>อยู่ชุมชนเกิน 6 เดือน: ${item.stable6m || "-"}</span>
          <span>วันที่กลับมาซ้ำล่าสุด: ${item.returnDate || "-"}</span>
        </div>
      </td>
      <td><div class="record-stack"><span>${item.summary || "-"}</span></div></td>
    </tr>
  `).join("");
}

function renderCloseCaseWatchlist(records = []) {
  if (!closeCaseWatchlistBody) return;
  const watchlist = records.filter((item) => item.reconsult === "มี" || item.readmit === "มี");
  if (!watchlist.length) {
    closeCaseWatchlistBody.innerHTML = `<tr><td colspan="4">ยังไม่มีเคสที่กลับมาซ้ำหลังปิดเคสในเดือนนี้</td></tr>`;
    return;
  }
  closeCaseWatchlistBody.innerHTML = watchlist.map((item) => `
    <tr>
      <td>
        <div class="record-stack">
          <strong>${item.patient || "-"}</strong>
          <span>${item.id || "-"}</span>
          <span>${item.owner || "-"}</span>
        </div>
      </td>
      <td>
        <div class="record-stack">
          <strong>${item.readmit === "มี" ? "Re-Admitted" : "Re-consult"}</strong>
          <span>วันที่กลับมา: ${item.returnDate || "-"}</span>
          <span>สถานะหลังปิดเคส: ${item.postStatus || "-"}</span>
        </div>
      </td>
      <td><div class="record-stack"><span>${item.plan || "-"}</span></div></td>
      <td><div class="record-stack"><span>${item.summary || "-"}</span></div></td>
    </tr>
  `).join("");
}

function renderCloseCaseView() {
  const state = getSavedCloseCaseState() || getDefaultCloseCaseState();
  applyCloseCaseFormState(state.form);
  renderCloseCaseSummary(state.records || []);
  renderCloseCaseHistory(state.records || []);
  renderCloseCaseWatchlist(state.records || []);
  if (closeCaseMonthBadge) closeCaseMonthBadge.textContent = `สรุปผลรายเดือน · ${inboxMonthData[currentPeriod.monthKey]?.label || ""}`;
}

function saveCloseCaseState(mode = "draft") {
  const existing = getSavedCloseCaseState() || getDefaultCloseCaseState();
  const form = captureCloseCaseFormState();
  const nextState = {
    form,
    records: mode === "close"
      ? [
          form,
          ...(existing.records || []).filter((item) => item.id !== form.id || item.closeDate !== form.closeDate)
        ]
      : (existing.records || [])
  };
  localStorage.setItem(workflowStorageKey("close-case", currentPeriod.monthKey), JSON.stringify(nextState));
  if (mode === "close") {
    currentCaseContext.closedDate = form.closeDate || currentCaseContext.closedDate;
    currentCaseContext.status = form.type === "Transfer out" ? "Referred Out" : "Terminated / Closed";
    currentCaseContext.statusClass = "chip-success";
    currentCaseContext.timeline = [
      {
        title: `${form.closeDate || inboxMonthData[currentPeriod.monthKey]?.label || ""} ปิดเคสแล้ว`,
        note: `${form.type} · ${form.reason} · ${form.postStatus}`,
        gradient: true
      },
      ...(currentCaseContext.timeline || [])
    ];
    localStorage.setItem(caseContextStorageKey(currentPeriod.monthKey), JSON.stringify(currentCaseContext));
    const monthCases = getCustomMonthCases(currentPeriod.monthKey).map((item) => (
      item.id === form.id
        ? {
            ...item,
            status: form.type === "Transfer out" ? "Referred Out" : "Terminated / Closed",
            statusClass: "chip-success",
            updated: form.closeDate || item.updated,
            updatedDate: form.closeDate || item.updatedDate,
            closedDate: form.closeDate || item.closedDate,
            note: form.summary || item.note,
            summary: form.summary || item.summary
          }
        : item
    ));
    saveCustomMonthCases(currentPeriod.monthKey, monthCases);
    renderCurrentCaseDetail();
    renderInboxMonth(currentPeriod.monthKey);
  }
  renderCloseCaseView();
  renderExecutiveReport();
  showToast(mode === "close" ? "ปิดเคสแล้ว" : "บันทึกแบบร่างแล้ว", form.patient || form.id || "Close Case");
}

function hydrateCarePlanOperationalForms() {
  const conferenceDefaults = getDefaultConferenceRecord();
  const communityDefaults = getDefaultCommunityPrepRecord();
  applyCareConferenceFormState(conferenceDefaults);
  applyCommunityPrepFormState(communityDefaults);
  if (careConferenceMonthBadge) careConferenceMonthBadge.textContent = `ประวัติรายเดือน · ${conferenceDefaults.monthLabel}`;
  if (communityPrepMonthBadge) communityPrepMonthBadge.textContent = `งานสังคมสงเคราะห์จิตเวชชุมชน · ${communityDefaults.monthLabel}`;
}

function renderCareConferenceHistory(records = []) {
  if (!careConferenceHistoryBody) return;
  if (!records.length) {
    careConferenceHistoryBody.innerHTML = `<tr><td colspan="5">ยังไม่มีข้อมูลการประชุมสหวิชาชีพในเดือนนี้</td></tr>`;
    return;
  }
  careConferenceHistoryBody.innerHTML = records.map((item) => `
    <tr>
      <td>${item.monthLabel || "-"}</td>
      <td>
        <div class="record-stack">
          <strong>${item.patientName || "-"}</strong>
          <span>${item.sw || "-"} · ${item.intake || "-"} · ${item.sex || "-"} · อายุ ${item.age || "-"}</span>
          <span>${item.hn || "-"} · ${item.ward || "-"} · ${item.md || "-"}</span>
          <span>Consult: ${item.consultDate || "-"}</span>
        </div>
      </td>
      <td>
        <div class="record-stack">
          <strong>${item.conferenceDate || "-"} ${item.conferenceTime || ""}</strong>
          <span>${item.location || "-"}</span>
        </div>
      </td>
      <td><div class="record-stack"><span>${item.communityDetail || "-"}</span></div></td>
      <td><div class="record-stack"><span>${item.progress || "-"}</span></div></td>
    </tr>
  `).join("");
}

function renderCommunityPrepHistory(records = []) {
  if (!communityPrepHistoryBody) return;
  if (!records.length) {
    communityPrepHistoryBody.innerHTML = `<tr><td colspan="5">ยังไม่มีข้อมูลการเตรียมชุมชนในเดือนนี้</td></tr>`;
    return;
  }
  communityPrepHistoryBody.innerHTML = records.map((item) => `
    <tr>
      <td>${item.monthLabel || "-"}</td>
      <td>
        <div class="record-stack">
          <strong>${item.patientName || "-"}</strong>
          <span>${item.sw || "-"} · ${item.intake || "-"} · ${item.hn || "-"} / ${item.an || "-"}</span>
          <span>${item.ward || "-"} · ${item.md || "-"}</span>
          <span>Consult: ${item.consultDate || "-"}</span>
        </div>
      </td>
      <td>
        <div class="record-stack">
          <strong>${item.prepDate || "-"}</strong>
          <span>${item.round || "-"}</span>
          <span>${[item.address, item.subdistrict, item.district, item.province].filter(Boolean).join(" · ") || "-"}</span>
        </div>
      </td>
      <td>
        <div class="record-stack">
          <span><strong>ทีมภายใน:</strong> ${(item.internalTeam || []).join(", ") || "-"}</span>
          <span><strong>เครือข่าย:</strong> ${(item.externalNetwork || []).join(", ") || "-"}</span>
        </div>
      </td>
      <td>
        <div class="record-stack">
          <span>อยู่ได้ 6 เดือน: ${item.stay6m || "-"}</span>
          <span>ชุมชนเข้มแข็ง: ${item.strong || "-"}</span>
          <span>ชุมชนไม่เข้มแข็ง: ${item.weak || "-"}</span>
          ${item.note ? `<span>Note: ${item.note}</span>` : ""}
        </div>
      </td>
      <td><div class="record-stack"><span>${item.detail || "-"}</span></div></td>
    </tr>
  `).join("");
}

function captureCarePlanState() {
  return {
    problemCount: carePlanProblemCount?.textContent || "",
    goalCount: carePlanGoalCount?.textContent || "",
    interventionCount: carePlanInterventionCount?.textContent || "",
    reviewDate: carePlanReviewDate?.textContent || "",
    primaryProblem: carePlanProblemPrimary?.textContent || "",
    primaryNote: carePlanProblemPrimaryNote?.textContent || "",
    secondaryProblem: carePlanProblemSecondary?.textContent || "",
    secondaryNote: carePlanProblemSecondaryNote?.textContent || "",
    matrixHtml: carePlanMatrixBody?.innerHTML || "",
    agreementReview: carePlanAgreementReview?.textContent || "",
    clientAgreement: carePlanClientAgreement?.textContent || "",
    familyAgreement: carePlanFamilyAgreement?.textContent || "",
    planStatus: carePlanStatus?.textContent || "",
    barrier: carePlanBarrier?.textContent || "",
    expectedOutcome: carePlanExpectedOutcome?.value || "",
    outcomeIndicator: carePlanOutcomeIndicator?.value || "",
    progressNote: carePlanProgressNote?.value || "",
    conferenceForm: captureCareConferenceFormState(),
    conferenceRecords: (() => {
      const saved = localStorage.getItem(workflowStorageKey("care-plan", currentPeriod.monthKey));
      if (!saved) return [];
      try {
        return JSON.parse(saved).conferenceRecords || [];
      } catch {
        return [];
      }
    })(),
    communityPrepForm: captureCommunityPrepFormState(),
    communityPrepRecords: (() => {
      const saved = localStorage.getItem(workflowStorageKey("care-plan", currentPeriod.monthKey));
      if (!saved) return [];
      try {
        return JSON.parse(saved).communityPrepRecords || [];
      } catch {
        return [];
      }
    })()
  };
}

function applyCarePlanState(state) {
  if (!state) return;
  if (carePlanProblemCount) carePlanProblemCount.textContent = state.problemCount;
  if (carePlanGoalCount) carePlanGoalCount.textContent = state.goalCount;
  if (carePlanInterventionCount) carePlanInterventionCount.textContent = state.interventionCount;
  if (carePlanReviewDate) carePlanReviewDate.textContent = state.reviewDate;
  if (carePlanProblemPrimary) carePlanProblemPrimary.textContent = state.primaryProblem;
  if (carePlanProblemPrimaryNote) carePlanProblemPrimaryNote.textContent = state.primaryNote;
  if (carePlanProblemSecondary) carePlanProblemSecondary.textContent = state.secondaryProblem;
  if (carePlanProblemSecondaryNote) carePlanProblemSecondaryNote.textContent = state.secondaryNote;
  if (carePlanMatrixBody) carePlanMatrixBody.innerHTML = state.matrixHtml;
  if (carePlanAgreementReview) carePlanAgreementReview.textContent = state.agreementReview;
  if (carePlanClientAgreement) carePlanClientAgreement.textContent = state.clientAgreement;
  if (carePlanFamilyAgreement) carePlanFamilyAgreement.textContent = state.familyAgreement;
  if (carePlanStatus) carePlanStatus.textContent = state.planStatus;
  if (carePlanBarrier) carePlanBarrier.textContent = state.barrier;
  if (carePlanExpectedOutcome) carePlanExpectedOutcome.value = state.expectedOutcome;
  if (carePlanOutcomeIndicator) carePlanOutcomeIndicator.value = state.outcomeIndicator;
  if (carePlanProgressNote) carePlanProgressNote.value = state.progressNote;
  if (state.conferenceForm) applyCareConferenceFormState(state.conferenceForm);
  renderCareConferenceHistory(state.conferenceRecords || []);
  if (state.communityPrepForm) applyCommunityPrepFormState(state.communityPrepForm);
  renderCommunityPrepHistory(state.communityPrepRecords || []);
}

function buildCarePlanMatrixRows(assessmentState, derived) {
  const owner = currentCaseContext.owner || "คุณศิริพร ปรางปรุ";
  const primaryProblem = assessmentState.fields.primaryProblem || "ปัญหาทางสังคม";
  const immediate = assessmentState.fields.immediateIssues || "ติดตามประเด็นเร่งด่วน";
  const recommendation = assessmentState.fields.recommendation || "ประสานงานตามแผน";
  return `
    <tr>
      <td>${primaryProblem}</td>
      <td>ลดอุปสรรคหลักก่อนจำหน่าย</td>
      <td>${immediate}</td>
      <td>${owner}</td>
      <td>${derived.reviewLabel}</td>
      <td><span class="chip chip-warning">In progress</span></td>
      <td>กำลังติดตาม</td>
    </tr>
    <tr>
      <td>${derived.riskProfile.barrier}</td>
      <td>เตรียม discharge plan ที่ปลอดภัย</td>
      <td>${recommendation.split("2)").join(" / 2)")}</td>
      <td>${owner}</td>
      <td>${derived.reviewLabel}</td>
      <td><span class="chip chip-info">Scheduled</span></td>
      <td>รอทบทวนกับ MDT</td>
    </tr>
  `;
}

function syncCarePlanFromAssessment(options = {}) {
  const { persist = true } = options;
  const derived = updateAssessmentDerivedState();
  const assessmentState = derived.state;
  const primaryProblem = assessmentState.fields.primaryProblem || "ปัญหาทางสังคม";
  const secondaryProblem = derived.riskProfile.barrier === "Caregiver + housing" ? "Problem 2: ความพร้อมของบ้านและแผนรองรับยังไม่ชัดเจน" : "Problem 2: ต้องติดตามเครือข่ายหลังจำหน่าย";

  applyCarePlanState({
    problemCount: String(derived.problemCount),
    goalCount: derived.riskProfile.level === "High risk" ? "3" : "2",
    interventionCount: derived.riskProfile.level === "High risk" ? "6" : "4",
    reviewDate: derived.reviewLabel,
    primaryProblem: `Problem 1: ${primaryProblem}`,
    primaryNote: assessmentState.fields.immediateIssues || "ติดตามประเด็นหลักของเคส",
    secondaryProblem,
    secondaryNote: assessmentState.fields.summary || "สรุปจากการประเมินสังคมสงเคราะห์",
    matrixHtml: buildCarePlanMatrixRows(assessmentState, derived),
    agreementReview: derived.reviewLabel,
    clientAgreement: "Yes",
    familyAgreement: assessmentState.fields.caregiverReadiness.includes("พร้อมรับกลับ") ? "Confirmed" : "Pending",
    planStatus: derived.riskProfile.level === "High risk" ? "Active - close monitoring" : "Active",
    barrier: derived.riskProfile.barrier,
    expectedOutcome: `ผู้ป่วยมีแผนดูแลที่ปลอดภัยสำหรับ ${primaryProblem}`,
    outcomeIndicator: `Checklist ${derived.checkedCount}/6 · Risk ${derived.riskProfile.level} · Review ${derived.reviewLabel}`,
    progressNote: assessmentState.fields.recommendation || "ติดตามตามผลการประเมิน"
  });

  if (carePlanSyncState) carePlanSyncState.textContent = `Synced ${inboxMonthData[currentPeriod.monthKey]?.label || ""}`;
  if (persist) localStorage.setItem(workflowStorageKey("care-plan", currentPeriod.monthKey), JSON.stringify(captureCarePlanState()));
}

function loadCarePlanState() {
  const saved = localStorage.getItem(workflowStorageKey("care-plan", currentPeriod.monthKey));
  if (saved) {
    const parsed = JSON.parse(saved);
    applyCarePlanState(parsed);
    if (!parsed.conferenceForm) applyCareConferenceFormState(getDefaultConferenceRecord());
    if (!parsed.conferenceRecords?.length) renderCareConferenceHistory([getDefaultConferenceRecord()]);
    if (!parsed.communityPrepForm) applyCommunityPrepFormState(getDefaultCommunityPrepRecord());
    if (!parsed.communityPrepRecords?.length) renderCommunityPrepHistory([getDefaultCommunityPrepRecord()]);
  } else {
    syncCarePlanFromAssessment({ persist: false });
    hydrateCarePlanOperationalForms();
    renderCareConferenceHistory([getDefaultConferenceRecord()]);
    renderCommunityPrepHistory([getDefaultCommunityPrepRecord()]);
  }
  if (careConferenceMonthBadge) careConferenceMonthBadge.textContent = `ประวัติรายเดือน · ${inboxMonthData[currentPeriod.monthKey]?.label || ""}`;
  if (communityPrepMonthBadge) communityPrepMonthBadge.textContent = `งานสังคมสงเคราะห์จิตเวชชุมชน · ${inboxMonthData[currentPeriod.monthKey]?.label || ""}`;
}

function saveCarePlanState() {
  localStorage.setItem(workflowStorageKey("care-plan", currentPeriod.monthKey), JSON.stringify(captureCarePlanState()));
  if (carePlanSyncState) carePlanSyncState.textContent = `Saved ${inboxMonthData[currentPeriod.monthKey]?.label || ""}`;
}

function saveCareConferenceRecord() {
  const state = captureCarePlanState();
  const record = {
    ...captureCareConferenceFormState(),
    monthLabel: inboxMonthData[currentPeriod.monthKey]?.label || ""
  };
  state.conferenceForm = record;
  state.conferenceRecords = [record, ...(state.conferenceRecords || [])];
  localStorage.setItem(workflowStorageKey("care-plan", currentPeriod.monthKey), JSON.stringify(state));
  renderCareConferenceHistory(state.conferenceRecords);
  if (carePlanSyncState) carePlanSyncState.textContent = `Conference saved ${inboxMonthData[currentPeriod.monthKey]?.label || ""}`;
  showToast("บันทึกการประชุมสหวิชาชีพแล้ว", record.patientName || "Case Conference");
}

function saveCommunityPrepRecord() {
  const state = captureCarePlanState();
  const record = {
    ...captureCommunityPrepFormState(),
    monthLabel: inboxMonthData[currentPeriod.monthKey]?.label || ""
  };
  state.communityPrepForm = record;
  state.communityPrepRecords = [record, ...(state.communityPrepRecords || [])];
  localStorage.setItem(workflowStorageKey("care-plan", currentPeriod.monthKey), JSON.stringify(state));
  renderCommunityPrepHistory(state.communityPrepRecords);
  if (carePlanSyncState) carePlanSyncState.textContent = `Community prep saved ${inboxMonthData[currentPeriod.monthKey]?.label || ""}`;
  showToast("บันทึกข้อมูลการเตรียมชุมชนแล้ว", record.patientName || "Community Preparation");
}

function renderExecutiveReport() {
  const data = inboxMonthData[currentPeriod.monthKey];
  if (!data) return;
  const fy = currentPeriod.fy;
  const fiscal = aggregateFiscalYear(fy);
  const assessmentDerived = updateAssessmentDerivedState();
  const planState = captureCarePlanState();
  const topReferral = sharedInboxReferrals
    .map((name, index) => ({ name, total: data.referrals[index] || 0 }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 3);

  if (reportPeriodBadge) reportPeriodBadge.textContent = data.label;
  if (reportFyBadge) reportFyBadge.textContent = `FY${fy}`;
  if (reportCoverTitle) reportCoverTitle.textContent = `รายงานสรุปผลการดำเนินงานกลุ่มงานสังคมสงเคราะห์จิตเวช ${data.label}`;
  if (reportCoverCopy) reportCoverCopy.textContent = `สรุปข้อมูลเคส การประเมิน แผนช่วยเหลือ การส่งต่อ และภาระงานของนักสังคมสงเคราะห์ สำหรับเดือน ${data.label} และภาพรวมปีงบประมาณ FY${fy}`;
  if (reportTopStats) {
    reportTopStats.innerHTML = `
      <article class="stat-card gradient-border"><span class="stat-label">Total Cases</span><strong>${data.summary[1][1]}</strong><small>${data.label}</small></article>
      <article class="stat-card"><span class="stat-label">Assessment Complete</span><strong>${assessmentDerived.requiredPercent}%</strong><small>จาก required fields</small></article>
      <article class="stat-card"><span class="stat-label">Current Case</span><strong>${currentCaseContext.id}</strong><small>${currentCaseContext.patient}</small></article>
      <article class="stat-card"><span class="stat-label">FY Total Cases</span><strong>${fiscal.totalCases.toLocaleString("en-US")}</strong><small>ยอดสะสมปีงบประมาณ</small></article>
    `;
  }
  if (reportExecutiveSummary) {
    reportExecutiveSummary.innerHTML = `
      <p>เดือน <strong>${data.label}</strong> กลุ่มงานสังคมสงเคราะห์มีเคสใหม่ <strong>${data.summary[1][1]}</strong> เคส และมีเคสอยู่ระหว่างดำเนินการ <strong>${data.statuses.find(([label]) => label.includes("In-Progress"))?.[1] || 0}</strong> เคส โดยเคสที่กำลังเปิดติดตามอยู่ในรายงานนี้คือ <strong>${currentCaseContext.id}</strong> ของผู้ป่วย <strong>${currentCaseContext.patient}</strong></p>
      <p>เคสดังกล่าวมีประเด็นหลักคือ <strong>${assessmentDerived.state.fields.primaryProblem}</strong> ระดับความเสี่ยงล่าสุดอยู่ที่ <strong>${assessmentDerived.riskProfile.level}</strong> และแผนช่วยเหลือถูกเชื่อมจาก Assessment ไปยัง Care Plan แล้วโดยมีผู้รับผิดชอบหลักคือ <strong>${currentCaseContext.owner}</strong></p>
    `;
  }
  if (reportWorkflowMetrics) {
    reportWorkflowMetrics.innerHTML = `
      <div class="metric-row"><span>Assessment completion</span><strong>${assessmentDerived.requiredPercent}%</strong></div>
      <div class="metric-row"><span>Checklist completion</span><strong>${assessmentDerived.checkedCount} / 6</strong></div>
      <div class="metric-row"><span>Care Plan goals</span><strong>${planState.goalCount}</strong></div>
      <div class="metric-row"><span>Care Plan interventions</span><strong>${planState.interventionCount}</strong></div>
      <div class="metric-row"><span>Notes in timeline</span><strong>${currentCaseContext.notes?.length || 0}</strong></div>
      <div class="metric-row"><span>Coordination logs</span><strong>${currentCaseContext.coordinationLogs?.length || 0}</strong></div>
      <div class="metric-row"><span>Referral records</span><strong>${currentCaseContext.referrals?.length || 0}</strong></div>
      <div class="metric-row"><span>Active reminders</span><strong>${currentCaseContext.reminders?.length || 0}</strong></div>
      <div class="metric-row"><span>Review date</span><strong>${planState.reviewDate}</strong></div>
      <div class="metric-row"><span>Referral recommended</span><strong>${assessmentDerived.riskProfile.referral}</strong></div>
    `;
  }
  if (reportRiskSummary) {
    reportRiskSummary.innerHTML = `<p class="eyebrow">Risk Overview</p><strong>${assessmentDerived.riskProfile.level}</strong><p>${assessmentDerived.riskProfile.note}</p>`;
  }
  if (reportRecommendationSummary) {
    reportRecommendationSummary.innerHTML = `<p class="eyebrow">Recommendation</p><strong>แนวทางดำเนินงาน</strong><p>${assessmentDerived.state.fields.recommendation}</p>`;
  }
  if (reportOwnerTableBody) {
    reportOwnerTableBody.innerHTML = data.owners
      .map((owner) => {
        const fySummary = aggregateOwnerForFiscalYear(owner.name, fy);
        return `<tr><td>${owner.name}</td><td>${fySummary.totalAll}</td><td>${owner.totalMonth}</td><td>${owner.inProgress}</td><td>${owner.referral}</td><td>${owner.conference}</td></tr>`;
      })
      .join("");
  }
  if (reportProblemList) {
    reportProblemList.innerHTML = `
      <div class="metric-row"><span>Primary problem</span><strong>${assessmentDerived.state.fields.primaryProblem}</strong></div>
      <div class="metric-row"><span>Immediate issues</span><strong>${assessmentDerived.problemCount} ประเด็น</strong></div>
      <div class="metric-row"><span>Discharge barrier</span><strong>${assessmentDerived.riskProfile.barrier}</strong></div>
      <div class="metric-row"><span>Priority level</span><strong>${assessmentDerived.state.fields.riskLevel}</strong></div>
      <div class="metric-row"><span>Latest note</span><strong>${currentCaseContext.notes?.[0]?.type || "ยังไม่มี"}</strong></div>
    `;
  }
  if (reportReferralMetrics) {
    reportReferralMetrics.innerHTML = `
      <div class="metric-row"><span>Current case referral</span><strong>${currentCaseContext.referrals?.[0]?.destination || "-"}</strong></div>
      <div class="metric-row"><span>Current case status</span><strong>${currentCaseContext.referrals?.[0]?.status || "-"}</strong></div>
      <div class="metric-row"><span>Coordination ล่าสุด</span><strong>${currentCaseContext.coordinationLogs?.[0]?.target || "-"}</strong></div>
      <div class="metric-row"><span>Top referral 1</span><strong>${topReferral[0]?.name || "-"} · ${topReferral[0]?.total || 0}</strong></div>
      <div class="metric-row"><span>Top referral 2</span><strong>${topReferral[1]?.name || "-"} · ${topReferral[1]?.total || 0}</strong></div>
      <div class="metric-row"><span>Top referral 3</span><strong>${topReferral[2]?.name || "-"} · ${topReferral[2]?.total || 0}</strong></div>
      <div class="metric-row"><span>Case Conferences</span><strong>${data.chart.conferences}</strong></div>
    `;
  }
  if (reportFooterNote) {
    reportFooterNote.textContent = `รายงานฉบับนี้อ้างอิงช่วงเวลา ${data.label} / FY${fy} พร้อมสรุปข้อมูลของเคส ${currentCaseContext.id} (${currentCaseContext.patient}) รวมถึง Assessment, Care Plan, KPI รายบุคคล และสถิติการส่งต่อ เพื่อใช้ส่งผู้บริหารในรูปแบบ PDF A4`;
  }
}

function loadWorkflowStateForMonth() {
  loadIntakeState();
  const savedCaseContext = localStorage.getItem(caseContextStorageKey(currentPeriod.monthKey));
  currentCaseContext = savedCaseContext ? JSON.parse(savedCaseContext) : buildCaseContextFromIntake(captureIntakeState());
  renderCurrentCaseDetail();
  syncAssessmentFromCurrentCase();
  loadAssessmentState();
  loadCarePlanState();
  renderCloseCaseView();
  renderExecutiveReport();
}

function renderDashboard(monthKey, fy) {
  const data = inboxMonthData[monthKey];
  if (!data) return;
  const fiscal = aggregateFiscalYear(fy);

  if (dashboardMonthSelect) dashboardMonthSelect.value = monthKey;
  if (dashboardFySelect) dashboardFySelect.value = String(fy);
  if (calendarMonthSelect) calendarMonthSelect.value = monthKey;
  if (dashboardTodayLabel) dashboardTodayLabel.textContent = data.label;
  if (dashboardFocusLabel) {
    const priority = data.statuses.find(([name]) => name === "เคสที่รอ SW พบ patient")?.[1] || 0;
    dashboardFocusLabel.textContent = `FY${fy} มี ${priority} เคสที่ต้องติดตามใกล้ชิด`;
  }

  if (dashboardSummaryGrid) {
    dashboardSummaryGrid.innerHTML = `
      <article class="stat-card gradient-border"><span class="stat-label">Total cases FY${fy}</span><strong>${fiscal.totalCases.toLocaleString("en-US")}</strong><small>ยอดสะสมปีงบประมาณ</small></article>
      <article class="stat-card"><span class="stat-label">Total cases เดือนนี้</span><strong>${data.summary[1][1]}</strong><small>${data.label}</small></article>
      <article class="stat-card"><span class="stat-label">Male / Female FY${fy}</span><strong>${fiscal.totalMale} / ${fiscal.totalFemale}</strong><small>ยอดสะสมปีงบประมาณ</small></article>
      <article class="stat-card"><span class="stat-label">Male / Female เดือนนี้</span><strong>${data.summary[4][1]} / ${data.summary[5][1]}</strong><small>เคสใหม่เดือนที่เลือก</small></article>
      <article class="stat-card"><span class="stat-label">OPD / IPD / ER FY${fy}</span><strong>${fiscal.totalOPD} / ${fiscal.totalIPD} / ${fiscal.totalER}</strong><small>ยอดสะสมปีงบประมาณ</small></article>
      <article class="stat-card"><span class="stat-label">OPD เด็ก / นิติจิตเวช FY${fy}</span><strong>${fiscal.totalChild} / ${fiscal.totalForensic}</strong><small>รวม OPD และ IPD</small></article>
    `;
  }

  if (dashboardStatusGrid) {
    dashboardStatusGrid.innerHTML = data.statuses.slice(0, 4)
      .map(([label, value]) => `<div class="status-pill-card"><span>${label.replace("สถานะจำนวน", "")}</span><strong>${value}</strong></div>`)
      .join("");
  }

  if (dashboardDailyFocusGrid) {
    dashboardDailyFocusGrid.innerHTML = `
      <div class="overview-highlight-card"><span>รับเคสเดือนนี้</span><strong>${data.summary[1][1]}</strong><small>${data.label}</small></div>
      <div class="overview-highlight-card"><span>Conference รอจัด</span><strong>${data.chart.conferences}</strong><small>เตรียมสหวิชาชีพ</small></div>
      <div class="overview-highlight-card"><span>Network pending</span><strong>${data.statuses.find(([name]) => name === "เคสที่รอประสานงานเครือข่าย")?.[1] || 0}</strong><small>รอประสานเครือข่าย</small></div>
      <div class="overview-highlight-card"><span>D/C prep</span><strong>${data.statuses.find(([name]) => name === "เคสที่รอ D/C แพทย์มี Order D/C")?.[1] || 0}</strong><small>แพทย์มี order แล้ว</small></div>
    `;
  }

  if (dashboardKpiWrap) {
    const linePath = buildLinePath(data.chart.weekly);
    const areaPath = `${linePath} L500 220 L20 220 Z`;
    dashboardKpiWrap.innerHTML = `
      <div class="line-chart-card">
        <svg viewBox="0 0 520 220" class="line-chart-svg" aria-label="KPI trend line chart">
          <defs>
            <linearGradient id="lineStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#18c7b8"></stop>
              <stop offset="50%" stop-color="#49a7ff"></stop>
              <stop offset="100%" stop-color="#8b5cff"></stop>
            </linearGradient>
            <linearGradient id="lineFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="rgba(73, 167, 255, 0.28)"></stop>
              <stop offset="100%" stop-color="rgba(73, 167, 255, 0)"></stop>
            </linearGradient>
          </defs>
          <line x1="20" y1="180" x2="500" y2="180" class="grid-line"></line>
          <line x1="20" y1="135" x2="500" y2="135" class="grid-line"></line>
          <line x1="20" y1="90" x2="500" y2="90" class="grid-line"></line>
          <line x1="20" y1="45" x2="500" y2="45" class="grid-line"></line>
          <path d="${linePath}" class="line-path"></path>
          <path d="${areaPath}" class="line-area"></path>
        </svg>
        <div class="chart-meta-row">
          <div class="chart-kpi-chip"><span>รับเคสใหม่</span><strong>${data.chart.newCases}</strong></div>
          <div class="chart-kpi-chip"><span>ปีงบประมาณ</span><strong>FY${fy}</strong></div>
          <div class="chart-kpi-chip"><span>เฉลี่ยต่อสัปดาห์</span><strong>${Math.round(data.chart.newCases / 4)} เคส</strong></div>
        </div>
        <div class="chart-axis-labels"><span>สัปดาห์ 1</span><span>สัปดาห์ 2</span><span>สัปดาห์ 3</span><span>สัปดาห์ 4</span></div>
      </div>
      <div class="donut-chart-wrap">
        <div class="donut-card stacked">
          <div class="donut-shell">
            <svg viewBox="0 0 120 120" class="donut-svg" aria-label="Service mix donut chart">
              <circle cx="60" cy="60" r="42" class="donut-base"></circle>
              <circle cx="60" cy="60" r="42" class="donut-segment seg-a"></circle>
              <circle cx="60" cy="60" r="42" class="donut-segment seg-b"></circle>
              <circle cx="60" cy="60" r="42" class="donut-segment seg-c"></circle>
            </svg>
            <div class="donut-center"><strong>${data.chart.newCases}</strong><span>เคสเดือนนี้</span></div>
          </div>
          <div class="donut-legend"><span><i class="legend-dot dot-a"></i>OPD ${data.chart.donut[0]}</span><span><i class="legend-dot dot-b"></i>IPD ${data.chart.donut[1]}</span><span><i class="legend-dot dot-c"></i>ER ${data.chart.donut[2]}</span></div>
        </div>
        <div class="donut-card stacked">
          <div class="donut-shell">
            <svg viewBox="0 0 120 120" class="donut-svg" aria-label="Workflow outcome donut chart">
              <circle cx="60" cy="60" r="42" class="donut-base"></circle>
              <circle cx="60" cy="60" r="42" class="donut-segment seg-d"></circle>
              <circle cx="60" cy="60" r="42" class="donut-segment seg-e"></circle>
              <circle cx="60" cy="60" r="42" class="donut-segment seg-f"></circle>
            </svg>
            <div class="donut-center"><strong>${data.statuses.find(([name]) => name === "เคสที่กำลังดำเนินการ In-Progress")?.[1] || 0}</strong><span>In-Progress</span></div>
          </div>
          <div class="donut-legend"><span><i class="legend-dot dot-d"></i>อยู่ระหว่างประเมิน</span><span><i class="legend-dot dot-e"></i>ประสานงาน</span><span><i class="legend-dot dot-f"></i>เตรียม D/C</span></div>
        </div>
      </div>
      <div class="wave-caption"><strong>KPI Pulse ประจำเดือน${data.label}</strong><p>สรุป trend รายเดือนและมุมมองปีงบประมาณ FY${fy} ในหน้าเดียว</p></div>
    `;
  }

  if (dashboardCriticalQueue) {
    dashboardCriticalQueue.innerHTML = data.statuses.slice(4, 14)
      .map(([label, value]) => `<div class="metric-row"><span>${label}</span><strong>${value}</strong></div>`)
      .join("");
  }

  const ownerFiscalCards = data.owners
    .map((owner) => {
      const summary = aggregateOwnerForFiscalYear(owner.name, fy);
      return `
        <div class="worker-card">
          <strong>${owner.name}</strong>
          <p>${owner.subtitle}</p>
          <span>FY${fy} · ${summary.totalAll} เคส · In-Progress ${summary.inProgress}</span>
        </div>
      `;
    })
    .join("");

  const dashboardTeamSection = document.querySelector("#dashboard-team .worker-grid");
  if (dashboardTeamSection) dashboardTeamSection.innerHTML = ownerFiscalCards;

  renderThaiCalendar(monthKey);
}

function formatThaiMonthYear(monthIndex, year) {
  return `${thaiMonthNames[monthIndex]} ${year + 543}`;
}

function parseMonthSlug(slug) {
  const [name, yearText] = slug.split("-");
  const slugMonths = ["january","february","march","april","may","june","july","august","september","october","november","december"];
  return new Date(Number(yearText), slugMonths.indexOf(name), 1);
}

function getFiscalYearFromDate(date) {
  return date.getMonth() >= 9 ? date.getFullYear() + 544 : date.getFullYear() + 543;
}

function formatThaiShortDate(day, monthIndex) {
  const shortNames = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
  return `${day} ${shortNames[monthIndex]}`;
}

function renderThaiCalendar(monthKey) {
  if (!monthCalendarGrid || !calendarMonthLabel) return;
  const date = parseMonthSlug(monthKey);
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const selectedDay = Math.min(22, new Date(year, monthIndex + 1, 0).getDate());
  const currentMonthData = inboxMonthData[monthKey];
  const holidays = {};
  if (monthIndex === 3) holidays[13] = "สงกรานต์";
  if (monthIndex === 3) holidays[14] = "สงกรานต์";
  if (monthIndex === 3) holidays[15] = "สงกรานต์";
  if (monthIndex === 4) holidays[1] = "วันแรงงาน";
  if (monthIndex === 7) holidays[12] = "วันแม่แห่งชาติ";
  if (monthIndex === 11) holidays[5] = "วันพ่อแห่งชาติ";
  const cases = {};
  const casesPerMonth = currentMonthData ? Number(String(currentMonthData.summary[1][1]).replace(/,/g, "")) : 80;
  const avgPerDay = Math.max(1, Math.round(casesPerMonth / 22));
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  for (let day = 1; day <= daysInMonth; day += 1) {
    const weekday = new Date(year, monthIndex, day).getDay();
    if (weekday !== 0 && weekday !== 6) cases[day] = Math.max(1, avgPerDay + ((day % 4) - 1));
  }

  const firstDay = new Date(year, monthIndex, 1).getDay();
  const prevMonthLastDay = new Date(year, monthIndex, 0).getDate();
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;

  calendarMonthLabel.textContent = formatThaiMonthYear(monthIndex, year);
  monthCalendarGrid.innerHTML = "";

  thaiWeekdays.forEach((day) => {
    const el = document.createElement("div");
    el.className = "calendar-weekday";
    el.textContent = day;
    monthCalendarGrid.appendChild(el);
  });

  for (let index = 0; index < totalCells; index += 1) {
    const calendarCell = document.createElement("div");
    calendarCell.className = "calendar-day";

    let displayDay;
    let cellMonthIndex = monthIndex;
    let cellLabel = "";

    if (index < firstDay) {
      displayDay = prevMonthLastDay - firstDay + index + 1;
      cellMonthIndex = monthIndex === 0 ? 11 : monthIndex - 1;
      calendarCell.classList.add("muted-day");
      cellLabel = formatThaiShortDate(displayDay, cellMonthIndex);
    } else if (index >= firstDay + daysInMonth) {
      displayDay = index - firstDay - daysInMonth + 1;
      cellMonthIndex = monthIndex === 11 ? 0 : monthIndex + 1;
      calendarCell.classList.add("muted-day");
      cellLabel = formatThaiShortDate(displayDay, cellMonthIndex);
    } else {
      displayDay = index - firstDay + 1;
      cellLabel = formatThaiShortDate(displayDay, monthIndex);

      if (holidays[displayDay]) {
        calendarCell.classList.add("holiday");
      }

      if (displayDay === selectedDay) {
        calendarCell.classList.add("active-day-card");
      }
    }

    const title = document.createElement("span");
    title.textContent = cellLabel;
    calendarCell.appendChild(title);

    const detail = document.createElement("small");
    if (!calendarCell.classList.contains("muted-day") && holidays[displayDay]) {
      detail.textContent = holidays[displayDay];
    } else if (!calendarCell.classList.contains("muted-day") && cases[displayDay]) {
      detail.textContent = displayDay === selectedDay ? `วันนี้ · รับเคส ${cases[displayDay]}` : `รับเคส ${cases[displayDay]}`;
    } else {
      detail.textContent = "";
    }
    calendarCell.appendChild(detail);
    monthCalendarGrid.appendChild(calendarCell);
  }
}

function setActiveDashboardAnchor(sectionId) {
  dashboardNavPills.forEach((pill) => {
    pill.classList.toggle("active", pill.dataset.scrollTarget === sectionId);
  });
}

function initializeDashboardNav() {
  if (!dashboardNavPills.length) return;

  dashboardNavPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const target = document.getElementById(pill.dataset.scrollTarget);
      if (!target) return;
      const offset = 110;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveDashboardAnchor(pill.dataset.scrollTarget);
    });
  });

  const observedSections = [...dashboardNavPills]
    .map((pill) => document.getElementById(pill.dataset.scrollTarget))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target?.id) {
        setActiveDashboardAnchor(visible.target.id);
      }
    },
    { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.3, 0.5] }
  );

  observedSections.forEach((section) => observer.observe(section));
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setActiveScreen(link.dataset.screen);
  });
});

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    toggleOverlay(trigger.dataset.openModal, true);
  });
});

drawerTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    toggleOverlay(trigger.dataset.openDrawer, true);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal-backdrop");
    if (modal) modal.classList.remove("open");
  });
});

closeDrawerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const drawer = button.closest(".drawer-backdrop");
    if (drawer) drawer.classList.remove("open");
  });
});

caseTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveCaseTab(tab.dataset.caseTab);
  });
});

screenJumpButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal-backdrop");
    if (modal) modal.classList.remove("open");
    setActiveScreen(button.dataset.screenJump);
  });
});

document.querySelectorAll(".modal-backdrop, .drawer-backdrop").forEach((overlay) => {
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      overlay.classList.remove("open");
    }
  });
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

if (enterSystemButton) {
  enterSystemButton.addEventListener("click", enterSystem);
}

if (previewSystemButton) {
  previewSystemButton.addEventListener("click", enterSystem);
}

if (calendarMonthSelect) {
  calendarMonthSelect.addEventListener("change", (event) => {
    syncGlobalPeriod(event.target.value, getFiscalYearFromDate(parseMonthSlug(event.target.value)));
  });
}

if (inboxMonthSelect) {
  inboxMonthSelect.addEventListener("change", (event) => {
    syncGlobalPeriod(event.target.value, getFiscalYearFromDate(parseMonthSlug(event.target.value)));
  });
}

if (inboxCaseRegistryBody) {
  inboxCaseRegistryBody.addEventListener("click", (event) => {
    const row = event.target.closest(".case-row-clickable");
    if (row) openCaseFromRow(row);
  });
}

if (dashboardMonthSelect) {
  dashboardMonthSelect.addEventListener("change", (event) => {
    syncGlobalPeriod(event.target.value, getFiscalYearFromDate(parseMonthSlug(event.target.value)));
  });
}

if (dashboardFySelect) {
  dashboardFySelect.addEventListener("change", (event) => {
    const targetFy = Number(event.target.value);
    const available = inboxMonthKeys.filter((key) => getFiscalYearFromDate(parseMonthSlug(key)) === targetFy).sort();
    const selectedMonth = available[available.length - 1] || inboxMonthKeys[inboxMonthKeys.length - 1];
    syncGlobalPeriod(selectedMonth, targetFy);
  });
}

if (saveIntakeDraftButton) {
  saveIntakeDraftButton.addEventListener("click", () => {
    saveIntakeState();
    renderExecutiveReport();
  });
}

if (createIntakeCaseButton) {
  createIntakeCaseButton.addEventListener("click", () => {
    commitIntakeToWorkflow();
    setActiveCaseTab("overview-tab");
    setActiveScreen("case-detail");
  });
}

if (createReminderButton) {
  createReminderButton.addEventListener("click", () => {
    createReminderFromInputs();
  });
}

if (saveTaskButton) {
  saveTaskButton.addEventListener("click", () => {
    saveTaskAssignment();
  });
}

if (saveQuickNoteButton) {
  saveQuickNoteButton.addEventListener("click", () => {
    saveQuickNoteToCase();
  });
}

if (saveNotesPageButton) {
  saveNotesPageButton.addEventListener("click", () => {
    saveNotesComposerToCase();
  });
}

if (exportNotesSummaryButton) {
  exportNotesSummaryButton.addEventListener("click", () => exportCurrentSummary("notes"));
}

if (exportRemindersSummaryButton) {
  exportRemindersSummaryButton.addEventListener("click", () => exportCurrentSummary("reminders"));
}

if (createReferralButton) {
  createReferralButton.addEventListener("click", () => {
    setActiveScreen("referrals");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (saveReferralButton) {
  saveReferralButton.addEventListener("click", () => {
    saveReferralToCase();
  });
}

if (exportReferralSummaryButton) {
  exportReferralSummaryButton.addEventListener("click", () => exportCurrentSummary("referrals"));
}

if (coordinationExportButton) {
  coordinationExportButton.addEventListener("click", () => exportCurrentSummary("coordination"));
}

if (saveCoordinationButton) {
  saveCoordinationButton.addEventListener("click", () => {
    saveCoordinationLog();
  });
}

if (coordinationMonthSelect) {
  coordinationMonthSelect.addEventListener("change", (event) => {
    syncGlobalPeriod(event.target.value, getFiscalYearFromDate(parseMonthSlug(event.target.value)));
  });
}

if (coordinationFySelect) {
  coordinationFySelect.addEventListener("change", (event) => {
    const targetFy = Number(event.target.value);
    const available = inboxMonthKeys.filter((key) => getFiscalYearFromDate(parseMonthSlug(key)) === targetFy).sort();
    const selectedMonth = available[available.length - 1] || inboxMonthKeys[inboxMonthKeys.length - 1];
    syncGlobalPeriod(selectedMonth, targetFy);
  });
}

if (coordinationTypeFilter) {
  coordinationTypeFilter.addEventListener("change", renderCoordinationView);
}

if (coordinationStatusFilter) {
  coordinationStatusFilter.addEventListener("change", renderCoordinationView);
}

if (printExportSummaryButton) {
  printExportSummaryButton.addEventListener("click", () => {
    window.print();
  });
}

if (notesHistoryBody) {
  notesHistoryBody.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-note-edit]");
    const deleteButton = event.target.closest("[data-note-delete]");
    if (editButton) editCaseNote(Number(editButton.dataset.noteEdit));
    if (deleteButton) deleteCaseNote(Number(deleteButton.dataset.noteDelete));
  });
}

if (reminderHistoryBody) {
  reminderHistoryBody.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-reminder-edit]");
    const deleteButton = event.target.closest("[data-reminder-delete]");
    if (editButton) editCaseReminder(Number(editButton.dataset.reminderEdit));
    if (deleteButton) deleteCaseReminder(Number(deleteButton.dataset.reminderDelete));
  });
}

if (referralHistoryBody) {
  referralHistoryBody.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-referral-edit]");
    const deleteButton = event.target.closest("[data-referral-delete]");
    if (editButton) editCaseReferral(Number(editButton.dataset.referralEdit));
    if (deleteButton) deleteCaseReferral(Number(deleteButton.dataset.referralDelete));
  });
}

Object.values(getAssessmentFieldMap()).forEach((field) => {
  if (!field) return;
  field.addEventListener("input", () => {
    updateAssessmentDerivedState();
    renderExecutiveReport();
  });
  field.addEventListener("change", () => {
    updateAssessmentDerivedState();
    renderExecutiveReport();
  });
});

assessmentChecklistInputs.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    updateAssessmentDerivedState();
    renderExecutiveReport();
  });
});

if (saveAssessmentButton) {
  saveAssessmentButton.addEventListener("click", () => {
    saveAssessmentState();
    syncCarePlanFromAssessment({ persist: true });
    renderExecutiveReport();
  });
}

if (syncCarePlanButton) {
  syncCarePlanButton.addEventListener("click", () => {
    syncCarePlanFromAssessment({ persist: true });
    renderExecutiveReport();
  });
}

if (saveCarePlanButton) {
  saveCarePlanButton.addEventListener("click", () => {
    saveCarePlanState();
    renderExecutiveReport();
  });
}

if (saveCareConferenceButton) {
  saveCareConferenceButton.addEventListener("click", () => {
    saveCareConferenceRecord();
    renderExecutiveReport();
  });
}

if (saveCommunityPrepButton) {
  saveCommunityPrepButton.addEventListener("click", () => {
    saveCommunityPrepRecord();
    renderExecutiveReport();
  });
}

if (saveCloseCaseDraftButton) {
  saveCloseCaseDraftButton.addEventListener("click", () => {
    saveCloseCaseState("draft");
  });
}

if (saveCloseCaseButton) {
  saveCloseCaseButton.addEventListener("click", () => {
    saveCloseCaseState("close");
  });
}

closeCaseTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeCloseCaseTab = tab.dataset.closeTab || "all";
    closeCaseTabs.forEach((item) => item.classList.toggle("active", item === tab));
    renderCloseCaseView();
  });
});

[carePlanExpectedOutcome, carePlanOutcomeIndicator, carePlanProgressNote].forEach((field) => {
  if (!field) return;
  field.addEventListener("input", renderExecutiveReport);
});

if (generateReportButton) {
  generateReportButton.addEventListener("click", renderExecutiveReport);
}

if (printReportButton) {
  printReportButton.addEventListener("click", () => {
    renderExecutiveReport();
    window.print();
  });
}

initializeDashboardNav();
buildInboxMonthControls();
buildDashboardControls();
syncGlobalPeriod("april-2026", getFiscalYearFromDate(parseMonthSlug("april-2026")));

applyLanguage(localStorage.getItem("jvk-swms-lang") || "th");
