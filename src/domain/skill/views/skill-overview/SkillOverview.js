/*
 * Copyright 2024 OpenBuild
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import clsx from 'clsx'
import useSWR from 'swr'

import { fetcher } from '@/utils/request'
import { useAllSkills } from '#/state/application/hooks'

import SkillInsight from '../../widgets/skill-insight'

function SkillOverviewView({ userId }) {
  const skills = useAllSkills()
  const { data } = useSWR(userId ? `ts/v1/hub/general/skills/${userId}` : null, fetcher)

  return (
    <div>
      <div className="mb-4 flex items-center justify-between mt-6">
        <h3 className="text-sm font-semibold">Skills</h3>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {data?.skill_datas?.map(i => (
          <div key={`skill-${i.id}`} className="rounded-lg border border-gray-400 p-4">
            <div className="flex items-start justify-between">
              <div>
                <h6 className="mb-2 text-base">{skills?.find(f => f.value === i.skill)?.label}</h6>
                <div className="text-xs">
                  {i.level && (
                    <span
                      className={clsx('mr-2 rounded-sm px-1 py-[2px] capitalize', {
                        'bg-[rgba(58,171,118,0.1)] text-[#3AAB76]': i.level === 'generally',
                        'bg-[rgba(24,160,251,0.1)] text-[#18A0FB]': i.level === 'well',
                        'bg-[rgba(216,97,65,0.1)] text-[#D86141]': i.level === 'proficient',
                        'bg-[rgba(118,82,237,0.1)] text-[#7652ED]': i.level === 'skilled',
                      })}
                    >
                      {i.level}
                    </span>
                  )}
                  <span className="opacity-80">Usage time {i.time}Y</span>
                </div>
              </div>
              <svg width="20" height="20" viewBox="0 0 440 440">
                <circle
                  cx="220"
                  cy="220"
                  r="170"
                  strokeWidth="40"
                  stroke="rgba(16,16,16,0.1)"
                  fill="none"
                ></circle>
                <circle
                  cx="220"
                  cy="220"
                  r="170"
                  strokeWidth="40"
                  stroke="rgba(16,16,16,0.4)"
                  fill="none"
                  transform="matrix(0,-1,1,0,0,440)"
                  style={{
                    strokeDasharray:
                      i.level === 'generally'
                        ? '267 1069'
                        : i.level === 'well'
                        ? '534 1069'
                        : i.level === 'proficient'
                        ? '801 1069'
                        : '1069 1069',
                  }}
                ></circle>
              </svg>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-gray-400 pt-3 text-xs">
              <p className="opacity-80">Estimated cost</p>
              <p>
                <strong>
                  ${Number(i.cost_min).toFixed(2)}-${Number(i.cost_max).toFixed(2)}
                </strong>{' '}
                / Hourly
              </p>
            </div>
          </div>
        ))}
      </div>
      {data?.aspecta_show && (
        <SkillInsight
          data={data?.skill_user.user_extra_skills}
          headerClassName="mt-9"
          titleClassName="text-sm font-semibold"
        />
      )}
    </div>
  )
}

export default SkillOverviewView
