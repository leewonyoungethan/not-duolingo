const PROGRESS_STORAGE_KEY = 'not-duolingo:progress'

export function getStoredProgress() {
  try {
    const stored = JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY))
    return stored && typeof stored === 'object' ? stored : {}
  } catch {
    return {}
  }
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress))
  } catch {
    // ignore write failures (e.g. private browsing)
  }
}
