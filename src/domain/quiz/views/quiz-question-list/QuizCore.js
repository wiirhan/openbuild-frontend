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

import { nanoid } from 'nanoid'
import clsx from 'clsx'
// import { OViewer } from '@/components/MarkDown'

export function QuizCore({
  quiz,
  setQuiz,
  page,
  submitData
}) {
  return quiz && quiz.length > 0 ? (
    <>
      <p className="text-sm mb-4">Question {page} / {quiz?.length}</p>
      <div>
        {quiz && <h2 className="text-2xl">
          <span className={clsx('rounded relative top-[-3px] px-2 py-1 mr-2 font-normal text-sm', {
            'bg-[rgba(58,171,118,0.1)] text-[#3AAB76]': quiz[page - 1].type !== 2,
            'bg-[rgba(118,82,237,0.1)] text-[#7652ED]': quiz[page - 1].type === 2
          })}>{quiz[page - 1].type === 2 ? 'Multiple' : 'Single'}</span>
          {quiz[page - 1].question}
        </h2>}
        <>
          {
            quiz ? quiz[page - 1].quiz_item.map((item) => (
              <button
                key={nanoid()}
                type="button"
                className={clsx('block min-h-[48px] py-3 border text-[15px] transition-all rounded mt-6 w-full text-left px-4 border-gray-600 hover:border-gray', {
                  '!border-gray': quiz[page - 1].answer?.includes(item.id)
                })}
                onClick={() => {
                  if (submitData) return
                  const _quiz = [...quiz]
                  if (quiz[page - 1].type === 2) {
                    if (_quiz[page - 1].answer.includes(item.id)) {
                      _quiz[page - 1].answer.splice( _quiz.indexOf(item.id), 1)
                    } else {
                      _quiz[page - 1].answer.push(item.id)
                    }
                  } else {
                    _quiz[page - 1].answer = [item.id]
                  }
                  setQuiz(_quiz)
                }}
              >
                {item.item_text}
              </button>
            )) : null
          }
        </>
      </div>
    </>
  ) : null
}
