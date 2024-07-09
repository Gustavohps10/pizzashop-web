import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  async () => {
    return HttpResponse.json({
      email: 'johndo@gmail.com',
      id: '123123123',
      name: 'John',
      phone: '2323423423442',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  },
)
