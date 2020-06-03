FactoryBot.define do
  
  factory :message do
    content   {Faker::Lorem.sentence}
    image  {File.open("#{Rails.root}/public/images/test.png")}
    user
    group
  end
end