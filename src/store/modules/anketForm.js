export default {
  state: {
    user: {
      name: 'Виктория',
      surname: 'Резяпова',
      age: 20,
      weight: 40,
      height: 170,
      action: 'Экстримально высокая',
      trainingGoal: 'Поддерживать тонус',
      infoSelf:
      'Мое тело - металл, противопоказаний нет, железный человек, не иначе. Мое тело - металл, противопоказаний нет, железный человек, не иначе.Мое тело - металл, противопоказаний нет, железный человек, не иначе.',
      sex: 'женский'
    }
  },
  mutations: {},
  actions: {},
  getters: {
    allInfoUser(state) {
      return state.user
    }
  }
}
