'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react'

interface Question {
  id: number
  title: string
  subtitle: string
  type: 'text' | 'radio' | 'select'
  options?: string[]
}

const questions: Question[] = [
  {
    id: 1,
    title: "What&apos;s your name?",
    subtitle: "Please enter your full name",
    type: 'text'
  },
  {
    id: 2,
    title: "What&apos;s your team?",
    subtitle: "Select your primary team",
    type: 'radio',
    options: ['Reports', 'Design', 'Photoshoots', 'Content Writing']
  },
  {
    id: 3,
    title: "What&apos;s your Feather email?",
    subtitle: "Please enter your Feather email",
    type: 'text'}
]

export default function Questionnaire() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isCompleted, setIsCompleted] = useState(false)

  const currentQuestion = questions[currentStep]

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      setIsCompleted(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }))
  }

  const isLastStep = currentStep === questions.length - 1

  if (isCompleted) {
    return <CongratulationsPage answers={answers} />
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <Card className="w-full max-w-lg p-8">
        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>

        {/* Question */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">{currentQuestion.title}</h2>
            <p className="text-gray-500 mt-2">{currentQuestion.subtitle}</p>
          </div>

          {/* Input Section */}
          <div className="space-y-4">
            {currentQuestion.type === 'text' && (
              <Input
                placeholder="Type your answer here"
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => handleAnswer(e.target.value)}
                className="w-full"
              />
            )}

            {currentQuestion.type === 'radio' && currentQuestion.options?.map((option, index) => (
              <div
                key={index}
                onClick={() => handleAnswer(option)}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  answers[currentQuestion.id] === option
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-400'
                }`}
              >
                {option}
              </div>
            ))}

            {currentQuestion.type === 'select' && currentQuestion.options?.map((option, index) => (
              <div
                key={index}
                onClick={() => handleAnswer(option)}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  answers[currentQuestion.id] === option
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-400'
                }`}
              >
                {option}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between pt-6">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              variant="outline"
              className="px-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!answers[currentQuestion.id]}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
              {isLastStep ? 'Submit' : 'Next'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Step indicator */}
          <div className="text-center text-sm text-gray-500">
            Step {currentStep + 1} of {questions.length}
          </div>
        </div>
      </Card>
    </div>
  )
}

interface CongratulationsPageProps {
  answers: Record<number, string>
}

function CongratulationsPage({ answers }: CongratulationsPageProps) {
  const name = answers[1] || 'there'
  const role = answers[2] || 'team member'

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <Card className="w-full max-w-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Hi {name}, the {role}. Welcome onboard!
        </h2>
        <p className="text-xl text-gray-700 mb-8">You've completed your first step in the onboarding process.</p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
          Continue to Main page! 💛
        </Button>
      </Card>
    </div>
  )
}

