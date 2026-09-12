export const XP_PER_LEVEL = 50

export function getLevel(xp) {
  return Math.floor(xp / XP_PER_LEVEL) + 1
}
