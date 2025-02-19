import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const cardData = [
    {
      title: "Dínamo ",
      content: "Generador de corrent continu que converteix energia mecànica en elèctrica. Va ser àmpliament utilitzat abans dels alternadors i rectificadors i encara es troba en aplicacions que requereixen un subministrament estable de corrent continu.",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIVFhUXGB4ZGBgWGB4aHRobGhoaGBgaGBsaHSogHxslGxoaITEhJikrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABJEAABAwIEAgcFBAgEBQIHAAABAgMRACEEEjFBBVEGEyJhcYGRMqGxwfAjQlLRFDNicoKSsuEHFcLxFiRDU6Kz0hc0NURzdIP/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAArEQACAgICAQMDAwUBAAAAAAAAAQIRITEDEkEEE1EikfAyYYFCcbHR8SP/2gAMAwEAAhEDEQA/AFVXD0qsCJ5Kt79KiUy60YBI7jcV1vi/QBlebqyUErAtdPMWPhzpT4h0TxTUwnrE5vu9q0X7Oo8qxPo1pi0xxlSfbBHeLii/DOKwS5N9Ed3NX13ULfwwmCkpMkR4ayDce+qrnDVRmQdN0n5VqQHNraG3D4zvogzi65+3jXEajMOYsaKYPjqTqb8jY0lNDqSY9McQI0NHmOOhpvrHlFStEJnU8/AfXdzrC8SB7StNhua3fxpWZJ8OQHIVro2y9xrirj6ytZ8BsO6g6xP19fl3VstytaUcD8Y4Sh24EL5jfxG/xpQxmEW2opWCDXSm1hPsiVc/y5Dvqvj+E9cDnF9o209adWTlRzR0350/cFwQAsPq9KHHMCWXVNkzEXHh310LhCPs0nmKYFllKYrZI+vKpwwfh8SKkaw+nl/Sa1AK6U/KrWGwpUQOcirWF4eVCe4Gq+M6S4TDmM/WrBHZbvfkVaVjZYe4fgQMpO4V7gaq9JnUJYyFaQpSYSkkSbzYb2pNxfS7GP8AZYT1Sf2RKv5j8gKqYDgDgX1zqiVDWTJkgak+NGwSjh2C8VxhOHcXLCHVSMhWTlTAuSn7xmOWlWP07FYxKCtasio7CeygaD2RtM6zVHj+Fl5Y5LHyFPvRLgU4fDk7gH/yNAnxSSQIwHRI9krMBZtF7QVfKmbAdH0pzAIHZEBW/si/jTfheEAJaEaR/SavN4QDOfrSjRVtsVmuCSlE7ZfgaJMcIEi2x+NHeqAyeXwrEDtHw+dEAObwCZJjl8BVhhgCT+0fjU6Rr9bCvGdPM/GsAjZT2B4Vjf6sfu/Ktkfq/KvP+n/D/prGMwvsI8B8q0wQ+zHn8TXqXEobSpaglOUXUQBpzNqoYXi7WRIRndMf9JCljX8YGT1VWNRUxg7avE1lROYhZJP6O5cnVTYOvco/GsrGodli5/eB91ahkSLffPvqQo18vdXpH9U0CwGxvAWXgOsbSrsmCRcGdiL0ncX/AMPAJOHcKTCUgK5m/tC45b10j+9arTb+U+lYxwri/A32jDrUjNAULjTmPnS1icNaRym9fRePw4J0+8fhSVxnouysE5Ak5U3Tb70+FARwTONKfcSfaPgasM8cI1Bpm4/0TWlSikZhmcuNbGQCPWl/hnRtxzOtZ6tlGYKWrUlIMobTqpfuG5G4wwrssFnDcW6w5UCT8KN4bCKIlZivOEcA6sZ0JEFIzEqKsskjMVRcDQwlOhttW/GuPtoW2jC5nVNqCldiZVoCECTA1E0I09FOSEo1YRxjHUNpWoZQq6Z3AiT7xB0M91WOEuhSwhcAqAKe+SIFrUs4zheMxeMbacdWEPSOtWgkD7NS8pBIucsC491GcHwhTHVMrcKz1ailwJKRqSkTJuFJ5706om1WxG6ctZcY6O/5mnvoy1LKP3R/QDSd0kxOHcxvWYguhtSAshpIKySSMqcxgXm5mw0o5guO4pxARgWBhWoACyc7hAAF1qFrR7IFYRLA641LbIzvLQ0mbZzBMOE9lPtHs8hSxi+lyAQnCNKdUIGZYhMgZQQkX3OpFQ4XogVnO+4txZ1JJPIam9NfC+j6EEZUgeHnN6AcIS3sNjcX+ucKUHRA7KReB2R86KcP6IIF4KjfXSRYWp4w/DUpAtsPdV9tgDajRnJgHD8CAsAAIEAd1ScUwKUMuGNh/pHypiCdPChfSIf8u54D4iiJLRx7jA+2Ueax8q650ST/AMnhv3E1yLih+0P74+Vde6J//J4b9xNKiHFsak/c+tjWmy/raocRjW28mdxKbfeUBsdBVU8TkK6tp1feE5BpzcKQR4TTHUE1D2PrY1o37Z+tzVB13EHLPUsjmolwxG47AB8zQjGcVwzZPX41Sv2UKCN9uqAV6qNK5RW2MoOWkHXsQhsKU4tKBOqiEjTmaptcVQU/Zpcd1/VoJTrstUI/8qCYbi7ck4XAOuKJ/WdXl9XF/nU6HeJOJ7LbDCb+2rOr0SCPfS+4npNje01tpfyE+txCkdlptAy6uLKlafgQI/8AOquKOVH22MI7PsoytjTulf8A51UX0efWjM/jnTacrSQ2NNL5vlUv/CWEQgqLWdUauKUvbkTl91C5vSo1ca27/sv9lBfHeHNERDrsahJdXMfiVKte+pG+P4paQMPgXSNlOw2D39si1MTWHQ23DaEoGXRKQkad1SYf2E+Ao9JPb+wPcgtR+4ngcTVcJwyZJsVKkXvomspowiZSD3n4msoe0vl/c3vP4X2LLXHG4M50XI7QzDQEaTzq4nFvBIV1QcBAIyKgmbzCrR50qIacFyhVik+ydNDt3U78PP2aLEdka91qEW2Vmkil/njI/WEtd7qSkeSz2T5GriVJUJSoEEWIMipltJOoBoNjOEsdYkJzIWuYLcjQT2imDsdTenyJRZxriU3UdTYakmNABcnwoDxNl1Ta1XaAQSIgrMXEnRPgJPeKpcWxisA4px53OpSAlJySSAtUJ1EEAi8mY3sAv/8AFDjrj3WEjtBLaQ4oBCMvalCLKJP4xvtFlcl5KQ428ov8b4q20QhIC3YJgnSYJzX1jme80g8a6TxKlHrTPsgykKBMEqBE2iybd+1R8bbcW51JdCW1qVKURIIuCqFGSQBZUazG5odH322sWyAiCEAKBvJCCSTFpIE+dK2WhGsDZgcS+3h8pZV2hZLYKsoOqcqfZuRbcibmaiYwzzT2HW6pzIqW1NOIUUSpPZUEJ7IjWVQZTc3JoViuHOBZIdbyJNi6CtSU66m58K8wOOdcUUsgjKJKlAt5j3BK7A8pNT7Uy7411VhpeUvuFH2fbCgWwEnWUFPKBaL6nxPmKwzilJV1zmVJOVGZJGoKoBTMzEwd++g+M4w42TdSVHsiXVlII1VJNxaa3wzmKWEFbi1dr7pADg1EzoR3QYvtfdmtGXHB0mhe6UYJWfPdUAgnL7ICpAtaO18a6L0SZCmh4D/0xQLiTAS2tajmEDrASEn2gIF77TbcDejnQTiDbwUlpKglAFzpcRA8MtU4uTtg5PVem9v6lr4HFDAG2/8AqFTpFaOvJT7SgnlJAm4051CrHJEQlZn9nLpJ1XA0qxx0XE1KmguK4yhFlONI8VZj/KkD41X/AMzWv2E4hzT2EBpJ/iXfzCqHZDdWMbjoSJUQBzJge+gnSDHIUw4E5iI9oJJTqPvaH1qJnC4lRBDbDRvCllTzg9f/AHVU4/gHUsOOOYp1RSmYSAhOvKCffQbfhAajWWI2IwoUSUsuLMg5lEIQLD1/mpz4RxJoMNNlTrikpALTGYhJ/CC3c+ajXOccslVyTce0SeXOurdGOJMpwmHSXU5ggSkGSPEC9Ku3yJB8d4T/AMfn3JMM7iesnD4BLQKYzOlKZ71ZZXJnQjarR4fjXJ6zFobG6WUTt+NRH9NEBxRJ9lDqo5NqHvUAK0OOcIMMEd7i0J/pKjR6Ly2W9x+El+fuVkdE2CR1q3njv1jhj0RlEUS4fwxhpR6pltHelIB1O8TQvF8eyRnfwbUfidK//ZQrE9M8Km6uICT/ANhqR5SF/GioxWkByk9sckb+NRgw3JtY6+dc/wAV09wQtOMdJvZWQGe5Kk/CqS+mbalQ1wwuHZThzR/4q+NGxep0DEcXYCMvXN5svshQKtPwgzUeI4olSCG0PLMRZpYH8ywB76Rk9LOKKMNYJDSe9tQt3SQPdVVWM404e06Gx3dWP6QTRN1OhrxjykkJwyxaJcWhO0fcKjUa8S+lIzqwzUD7ylL08clc6HR7iDhBdxqyOXWOH3WFa/8Aw/E5nHyrf2L89So1g0h1b4y2gZf8ywlu5Pju5WUpK6C4bdTp80j3ZaysakdzrKysoFCu/iQlQSSBIJzEiLECPHtfGh2HUMzeVWb/AJhyTmnVt1Qv4RbYAUQdMOt94Un+lX+mhOIaCnLgDLiQJGpBYFpiQJVpWGRzz/Ejixe6ope1QFFLQhSEqIzJzkkE94jQ2tFKWGUht0FLYKSCqZIN0j2iNRMna1MH+IfCP0d95KQpLCuq6tIkAAiHcilAoB7PO0CRpKw7iE55bbCAsDIHFKXlaAQhQBV2CTuuJg/dqEnk6eNYwZxJKl43b7NUmBlACiNSSbXsCSbmqXCMMpTnWjLZREdxESDOu0d1EMTi8mJJSLyVLUkyYAAAggRzsT5RVFrHCHXUhMQNQATzzAWmZt60l4LVktYRpQGVSR1iArMFZswCu3r7M2FuUGrvRrBLcQ4ooSApJyExpsSRprrrahfA8Yha1HMASCQgWA7JkATbnrUPD8bicO0XHGnCzAVOUjWyb3sbD0rO2ZdY7YKxLajiSlbJKkntJk3POSJgiNaZWXXUrQnqClCiJ7QMXFx4UO4RiFOuKfWBmUQbbAAAD0FNeKNkn60pZS8FYcaqxQ4nxIJQtKULC3CEkkx7C83Zgzp8adv8PsIkMgye0SqxIGwEgG/nS/jOHKdfQlGGD5MnKXOqsICiVSI1HfTBhsBj0AJZw3D2UiwC1uvG/eSR7qtwpVdHB6ubc+t6HRbiGkk9lNiYsmfZPrQTB4FLyUuvqccWoZiE58iZMhICNgI11iaFnh2PKVFWMQhIF0stJSCLSJgHnUH/AA2XE5nMXiSCJyhcJE7AXFvCqPLo5kqV2NzLrDFwhtsXuS236yoH3VWf6X4ZOuIY29lSnPclPzpQVwNhlxpDTCXHXFEZniVJSI7SsuhMcxtTAnA4ZbhQrCsJdSBOVACVRooJ0BIIoXmg9VVmr/T/AAw0ddXrHVMhPj+tJoNxfpWX2lJTh8UUqHtuKypSOZSgZTTlhcKlHstpFjASkDY8qpdKUK/RXZmySaclKurETguBxaip1hnDuAwkdfcJIFyAL014XCcXISP0jDMjfq0T6Zk1H0ESeoOntnfwptZPeJ8/yrLQOPEULCuj2PWPteKOX/AnLHmlQqNzoG2oZncS+5lE9pc7xuDzpt6xM5c1zoP9zWKeQJCiq4iye8Hn3VsD5FbB9CcGLZCecqN/Qii+F6L4RP8A9uggA+0Arb9qaItloAqAUY8BUqXwdEHzV/aiYrt8LaT7LSB4JAqQsVaDs7CoOuPIfH40QGgQOWn5T86gcSO6rPW/u/yj8qjW/lE5UnxA+VYxjDVoqJ4iT4xHhUDuJMWVUAXzUT51jFjIe/0rKgOIPM+6soZMdOrKysoFSrjD22f/AMh/9NyhuLMKc/8A2GD/ADdW3VvjmEecbAw7qWnAoELUjOBqD2ZvrSniuh/EF9pXEEqUIP6soBUlWZBsoxHK80rb+CkEvLLH+IPRz9ILRaUlD65bCjoQELWmRvcEedcGxf6S271a2FtrEIW2UEEJtCkz+Ltd1t66F0la4o0VNF5T5SoZFNhfZcWCoxb2urVJvYK7zSNxd/ibJDmI/ScslIzkj2bkAxtMxNTeXotF0qs1xWAxJxS1Bla29xmySCkA3kHWpldCsQ24sktQJIQM7gUFTYFLZTIB1JGnfQniHSBTqphSLAdlZ27wAahbxCyQAt4k6Q4r86CTQzcW8MIcM4S8y+IbcAyqBWUK/CeVhJAgSdadumPSFPW4VtkgpDCM8CAklRTB/aFjB5C1c5dLl4cdtcgqM/GrPDVOKV1ZdVlN7iTJ01k68qGsmnHtSQ08JwBy3K1Gbleo0tJJOsnXc0TcIzJSoRrANp2qpwuUjKFlajYgTqkCTE2J1MgUcYwhVHWEmLxNh4mpVbOnsoxS/wCgvCuhOMaMfjSL6/qzy7qbDiQSDluL3P5CgeN4yyycqE53OSRoe8/R7qEv8Wxi9ClA7hPxt7qrHk6qjkn6d8k3IcXcT2FdkXSfhVZGIVkQIEBIFhrAFKIOKNy9PiE/JNWG+MYhuziSU80EgjlYnTzHhRXKrM/RySww68opWl0IkonTXe457z4ivOApdeecxKgU5+yhO8JsZHkKq40h7DkKUpJWmUFU+vMUa6JupbZQ0kGUjtKA9o8yTvEa0za7Wc9NKvIQOCcKtIFtT3fnVfjXB1uMrQFISVCCSTA8TFb8U4yloCQVKOg+ZNJvGuPKIK3VnKPuj4Ac6e7J9QrwRtOFb6tbrajJJ6sqPxSKJ/5u0STmIk7j8q5NjulCwYDYSoiYVJIB0kDS1/MV5guOvOT9owlQiy5SkiQLK2N9OQom6JYOjLS2k4nFOLCj/wBNUzkA9gJG0n4xTJw3DlTSFrsSkEi9pEwYrl/C+NhXtrYCu5xJB8L+6ug8A4nnQtKhCiRB2IE0qpMZ20FVsWICkj63tWzDJA1BHjp7qgVhyqwNzp7z9eFWMMw4M0jaB6iqEyQjb++1RZBzH151u5hl/hPoa0/RVclelYB6YBg2Ntufga8VhQr2lgeA/vXuOwzilkwY8OVQjDq76xj04FvZZJ09n+9eOYFpJgqJ8BFbtNKChY6itcaglaoHdRMZ1DPf6j8q9qEIPL3VlY1nQ6ytFrAEm1U3MeJ7MqI17JAiCfaIjakckipfryaBO9I8v/RUfA/mKGcQ6ZlKFqTh12BIJKCLfxT7tqR8kfkZRZ5wJLy8aXFKb6sBxwgJOY9YvqWlSVRdvD8rAkXmQn/4yOuO4lpoAZUAZb6lZzL1gDsoA12q/wAN6VOMpehmChKEJkTIQjKlM5xfNNwFCVGl/iHFFYh0uYgZXP2LgdmB2bkdnu3NTlPGC0IPsIDXBQS6YIA0H7USY/L6AvAoVmtva1proTjCEoMKSoEkk6GVEkzyH9qAcAZHVqXlJsSIEzG1BTLe2C28xGpNz6SR8vfRvgOLfkQtRMwkQDJnsi499Tp4ehKBMFQTfSZjT3Ux9GuCpSQ4faIyjXQTJiYk6T3HnQ7AlGlbC2DCggB0pUv7ywhKR4dlI7I2m9BeIY1Tyi20cqQe0v5Dv76s9IMTlHVJPaVqeX+wPqe6hYxSW0hKfAUrkU4uPyYtltgAaq5b+JOwoDi+MPKcUhOVvKfuiSdxcjl3UYGPVBTCdZki58TudvSgCmZxC40gfAUFktJNINYjheMS2lxnEZ1ZQVIUlI2nsk2PKDHjtRfoshxbS38alDaEGEzKSozF0nvsANTNo1ucHBLbYI0SJN9rHemdzEJSgJygyBEiwjcd/fXQ4Rqzzvf5E3GwZxDh6FrRmcCSRATIkgSSQNd/fVxtsIASAI5CvHVtk5gkZoid45eE0OxeKyAqJ8uc2A8/zrInszpFxFLbSoSlSkpmFAGBue1bnA7j585Z4q2pasqc8qzJDl0g6WTGu4112qLpBjHcQ+cOhSTKu2oaDTski5AtbnAGlbK4qxhR1eFgrHt4hcFRO4aGiR3i/fvTJUZ5Kn+QvB1xbyktpUFEKeVlKpQROUSuJ3y6ULZ4Y1MDFoUeQbcj1KR8KK/5Wt5YeW4UhVhIzOLF5hOsRNzbnUuB4SltWYYV5aQNVuJmYNylq42337qa0LTNsdwrDowyyVpU5aCEqBG59oDu0oJwjiziDkS4sJOmVRSQeaSCPTQ00cXacdZyhLTdssfaKI3OYpbMwPve6lHHYFTSszclAsHEKB1EGcplMzEGNaJhm4RxxxnEoL7y3GiqVdorAzCyhJPMEgQbR3V1bDEKQlSQbifW964pwLg7uJGRoJEWlRgA6xob7117othH8OzkeWFKEARcQAAIzJnT4UIgnoP4NcBQ07JHuqLPGlYnFnkPQCvErEaD3/nTEzzrlfiI8DVhThKAZOt/IW+NRh1Atk88x9alS83oUkDWx50TFcOkaKPrXi8So/eNTlTc6KA8QakSMORqR9eFYxW/TVjf4/nXtSBLXNXpXlYwWbLxbBxq0JMyG2xcgCImTzvytcVIhTrgKW0hpvlIlQ7yCfd6mhGD4bledeC1POPZf1hlCAkWSibm5UeV7CpcRxEIVlQesdOp1Sk953PcP7Ui4ynajzEcNcQqS3bmCY84n560r8Vw5SmFOgAkTCFxA7R07geVPfDcQ9KcxknUdwEaaAd+3fQ/pVxzDoBTkQ45IBUYAQVHLci5OunKpz4Ijw5H4OR4vjbmWEM57yDm1zEqNiJte+lhzoiyCoQdyCee0W5RQzHYpSlqzCFCxERpVd/GrSApKZUCBIF40En8I75jaKT2l4LR5mnkJY3Cgrm11ZU91gdhJGtpi1RLw60EIbUQDcBIEATfkR4XqsxxM5gXIETbv0sd/wC9XcM8SFKT2iEnLO52HupGmjohKMtHvWqEJWhCztGttLK300plwrgEKIslNvr61oK2mXApXIet9KtYjEEJPeIj3/KlByLKQNfUVrWs6m35++aWnMWXHSArsgwPLejinsrZM6CaRDiIWSm19hHuFqaMbHc+qQ8Yfh7i4hQmtmlNshWYAuZoUuezawCdCY0OkEamgPD+MqyKkwQIB8THqKnwLqX3QwpHZ0kHVNGMROXmfhj7wtZ6sKMCRmtIttYk+PnVgvT5VWxDgACEiBbT3VG68BPIX9BVtHFbbtgnpRxhaVBttUACVmY128hfzpSe6YLuDmMCUGRZUWJ5iCZHeascdeKmnVTdWvmQI98UPxPBFFCdRAEHxANx5++jHJmqBh4iUp+zMKUCFKi99YPfz115ybHBAylK1uArUmAlNgJMxbUgRJjw3oZ+jkKykQZjzo5hsKGkBzVZ/VgjTms+G3fHKi/gAWGLKJzmVRJTsnuV+JUfd9lPI7U8VxJa9FSI+oFDidqYOCcJLl5hA33V4ToO+ilQrZSwyFiM089KsPYdKzn7IczAZjoe5wfeT47d1qaRw5rKR1QMbkqn1mqq+DAiEyO4XvtEiTRAmVsDh0YDF9TclwhSYMgFMqUiTeAQYmZC03kGejuYtspjKoDx/MVz/G9Gw2827iMU00pF+rcV2jbKBY9nwUBTjh2gpAOcaC4uDbZQkEd4oJqwy0i8nIbZj5p099StpTstPv8Ayqk20eaT5itkYdY+6fSmELww++dJ84+IrzqTzHkR+dVDI1qRl2bcqJiYtK/CT5TXikEaisDlbt4gjcjzrAI6ypDiVc/UD51lCwjTjeCZ28qHFIO5H3u47geBoexwhLCSXlJCAb3geQF5OnfVvpJ0oYwie2oFw+yif6jsO+k7ox0gVxBCn3BdLhSlOyRlSRA0m5vrWcmlY6im6DOO4gpchtJabOsWWod5+6nuF/ClLENAvwpNswIBH3W0dkj/APo4aZnlATelThoDquslSiEm0mxWpRUL7AQB/tXNySfk6ElFYBPGuG5lE6HY/n3Up8QXlSsL1BEa6yCIty+NOnSDEOpBU2jPAPYG52M8uY1pHHD8UtSi8lSQoTqkidBYydD3UYStCyzomS8CdJHfVlnElJ7BygnS8fn86Hv4RTZmcyecR6jatkrqmGSymNGDxySIXYxbcH0+u+tcfiCABz/vQFt0iiTjuZIP1epTilovCbk8lTFrUWXBH3T8KTkoJMAEkmAAJJJ0A75p/ABBH1BqHheBawgLy1BbpHZOyAeU/eI38hvIhKky805NUDMbwMsYdGcw5cqHIkkgeI37686NYoqezZQA2k3jmIE+pNU+NcaU6SE6c/ypi6MYPqk5Fsy6syuSdASUggaQDNoM60Ve2S5uukGP0gk+WtQY90hs99h60QxDabgLQlRsJIt30H4uqFJTyF/HSfOs5MnGK2K3E3wpaWtAIUvuAvWjXSBYkWylUxyvIA8KocX/AFrigbKN7/hsPhQtbk1WKoVtML9f1+IKojMrQbDf3VNxHESpRGg7KfAa1Q4VZRVyBNaPKP130fIrCfD2OtcSkab+G9dAZdSlISm1otypJ6OHKkqO5jy3pgTiZGtMIw2nFp51FxjpD+hoQdHXR7Q1ZbItlH/dWLn8KTHOR+DWlTiUqHZEqWP2EDMoeBgJ/ipeeWMY64p6bLJCgbkqN0+AgAUkpDxQGf4yvtpI7K151STmm1s3hA0ps6J8dyuySQ0+5lCZEJXB7UbEqgRvM0A4xwFfWJ6pKlFwhKECCc0Xki0WmTGvnTLwjoU5hcjuIUlwZv1LTmU5iDBzKTBIjQeRrKtoZvwx0WTyqfB4rKoSYG94qLEBSm0uobU23MnM4FEIiScqZkA8iTE2rA60pEh/DujkkHN4ERI8wBT9iXUtJxi/xk+N/jU4xRjtZfQD4VRaeB+p+NXm2W9ZvzKfmJoim8gnNljKnY8ynn9WFehxJ/EPQ1q6kzCSkje+3d3zFQxeN6xi0HQN5/hNZVWKytRhM4wwp3GOtFRJISoFRn7oCvfTB/h5hSynEMn7riVCOSk2/pjypd47iuq4iy7soJ8wqQfrup94e2lLhKf+okDzRJHuUfSlawS4Z/8Aor8l5wUCc4YM6iFKE7Cw91MJRzqFxupNWekhdd4Z3SeZodicAo7U2rT3VTdavQqh1Qmr4YrlQ7F9HlEFTUZhq3YEjmgbn9n05U7YhG2lDn0jesm0GXGpI5/mq7gsWiza7WMKHvBH5Uc4tgm3f2FjRex2AWP9Q9DSfxfCuNKAWkg6gi4Pekixp6U1RzZgxiQdxqLK7+SvruqbD8LYxJ6t95TIkQtKc3iDe3jBoHw3G2SSb3B9YijLcWy786nCP1UVnyfRaHfA/wCFfD0IzguvmMyVF0RMSCA2EjXmTSfhuLKbMLCVEiTBGbcX9DrFWsJxh1hf2ThTB2Nj4g2oey6HVLeSlCM6iAECBANiNYvNtPAU0045Iw+rDLzeKYW4XFuBItCTbb60qninWM+ZTwVOyATA5XtQXGMFKRmJkazAn5elV28ShI9keKjPoBFImmrKNZF/ibTSXFwVE5lcgNaoE3tRZ5TC8SrrSpLZjtIAkGANDaKqY/DNpWQytS0DQqEH3fGuiyNGYZ8AQAb2M+6Klf8AaNUWjfwNX309sxpb4UABDBOw2ANZNSN41YMEVT4cu+U8/jV5bk0QXRcRjoafXvkSgfxKzK9yPfQBPESb2BubWE1cLn2bo/aQY/n/ADpfz86Wh06Oj9DMZlaUozJPtcvq1E+lXEczCUEgjtKUk7kZQnzFz50h8DfcQsZCUgkFN52BvTXxDiLjkB9sFQEZm4BNwdI5igkCTyNHQ/jwDMLy9kBISDeBpabDYeFMjHUozO5UZzckD4fCa5Y7xhAUO06ZAEHQRz5n8zRQ8cCwEJULnQTMAd4pk62K43oPYvizCnQ2gJComZAUeZCfw1ebWbfP5VyDgWJU5j0uEm5USf2QggfIV07CY9ESHRbvI2tIUAB6mh3rYXD4DAmtQ6RoTUAxgyZ1KQE6TmTfTv8AKvUYhJvMjmIIqiaYjTQRTjYET7+d+dZQ3rhzFeVgCf03BT+jL3CI/kI/OuhlUSU3KTI/qA80mKQ+nCPsm/2VEfzAH5Ux8F4hmWEzdTLSx/LlP9PvoHNLCf7MbQqQCNCJFRrVVbAO2Uj8Jt+6q6fmPKrPlSUenxy7RUiFVQOJq0tJqIJ76UqgbimpJqg+1R1bKVG1ifShzrW1I0Ui7wBnmJm1D8VhXVJKRJTyOnvpjU3UZbrDOKezn2M4LiGklSGisDZN1DyFyPCiLCCEpC0kEAAgiCDuCDyNOABFwYPdQ/HcOC5IMKN/E7xOh+u+jGVM5+Tg8xFfHOZUKO8GPHQe+ibGGyNpRySB5xf31GeGKKkhQgAgkEieyQRbXWPWrOMNHkl4JQXkF8aP2ZA1tFLzqRHj9EUe4ivbeJoLjE++9T0VQHcbBdg2Bj8vlWuJyoMJvWmNXeRqKqOrk+NdCIy2azeryFSAfI+VDiL1M25l10Ov50whYzwZFW2cYP8AeqGblpW7TOagBovqc1j7wjzBkfl51WZbZJl0rm9kxB89RUwZABzGwG3MVo9w9cJMplW037pEb0Ghk8BvgbjKiQhUZBIBG19D3fOjz2IGuUKGx8dBSr0f4eoFxYvlEWOpkTHPl50cTAAQUqCtDO8WBHK4oLAJZKHGXPtETeECq2ExYS6k6CYN+Yj0mrWNwZcIM30+VWOG8CTClumYAIG1zEnnWaCi/wAL4GJW622XARlUR7IEeyIi1tr0RDeHJgoeYUREiHEnxS5Cx/Maaf8ADvGoR1iL9qCkDS0z8qP8WwGdMhltcyezCT3ApNjSy47GjyJYZyvGcDGqVpWNewrKR/CsfA0LLycKoLV1xvZOSJO09v2dpBmumYnomISsJUgnXIZg729mPKguM6POpUYU2sciCg93MfCkqUStKSwLmF4284hKygAkCYJAtadTrE1lG2ei+JKQRIBGwT5++sprF6GnTNE4eeSh8CPnVPAYoocwKhPaayH+En8hRvimH61KWyOypQCjy7/W3nQPEsFp7C5oyIxASkD8MomZ5kqqzwedLMqHxK8qkL2PYPgq6T60UUD/ALUGS1KVNHaU+l0mivDns7aVb6K/eFjQkX9JKrgzaTFaLTViRymoXbQb30pTuRCgmbGPdUT7c7g3uefzqR5YNoiO/uqNYEEdnS9vq9K0Mio+wpIkp+vCqvVnW1X23yBAMjcEaeBqDEoJClJSpUJnKLkxsAd4pWM3WysED6Fe4gIDa7woJJHpSyOkxWoIQEtkgwpzuuYtExeDyrTCvyTldL0yFKPPkO786zpKyMuS8IkY4gVq+0AChaYifE1o8q9Q4jBrcyqQqCJzJO4MR51WD5SopWNNP7Gp3asWL8EXFUdvyoUtufaIHfrHpTT1SFIzjtAawCY8heq/+T5xI7II1UIPoYNNTsPbBz/GMwspSrNyMRNu+qMZfHQd3OmrjuBZYyrDmdYIzgXBB5ciKFONoeClTCpgADWdJqqZN5BDIvVp9AsJqJtuDcaV6TJpxTXq7q7hPvH51thnlAEDxnkBM+tvStpAmJvreLbg+leMtnMCmw11+HfRAE+HYRTgcWr2ECVEm5J9lI3zHYd1++hxALzldwCeyZ2207vnRPC51LCEIKrAKyiALe0TpJi5P9qJI4G1q6orvZpE38VC58qVySYxV6MYtWVWnZt46m/rRXBrKnCtSpJVPaPnbzJog9whQQkhoNjZIERfcc973qng8LCjI2V52NFMRm+Sw8vhU6FEiJMaR4VuwxMRt8qJYbBAXUYAohL/AEUeW2pRBAtoU5pibC4g6X7q6FgnEuJCxuNNYO4rm6XVKGVsZU7qNrfXnTR0bxYQ0UwTlPZOkzeees0UxGrGDiLxS0pIE9kxOsi6Y3tb0pWXxNRB60nswDn79ACR3bcqJuYhSmnFn8KoHgD/ALUr4TjicQQWftLH2tRtCidNtfjUOV27RXjbigicYnl76yvFYEbhB7wD86yp/UdFzB77mVBOmWD/ACm9CunDoSlBGziVD0J/00W4mky+jUdsT4ZrX+vGgXSH7XBtuckifHQ11s8qf6kx7xdnQrZxMj95P9oqTh7mV1SNljOnxsFD4elD2FlWDacGreVXkQJ37/dU2KXAS4nVBCh3pVqPiPOhWKGnL2+VS+fxhxaeRv8AVvGo1rSqxO4i29StpzAEK7JEjwP18a2W2BoLDlHupT0bKTjd7DXeq6WQVBJMX15Dc1dxJESmQfcdt6rncHYfKd6UdMW+MNYlK1AJOS+U7EWixNzYi43MWiL/AAEOt5i5fkNI8RoPKJor+lSggAJOh3Pv0qnJ0k/7fHzoUJ18sW+kfA0qWcTkCiTJSdBNiUiL2O+mvOhPBMOlpCUBJCRMKO5JmT48top2XSvx3AFGZxE5CO0lImCIIITysJNyPDScoCyh5RCh0pUSQAAnfc1Hj20LRyIM87fnaqWA4mFkoVZSfqRzHd9G7i/ugeBjQgRB8dvKlhadMmDGnlsypBIPu8CKE8c40+5lGbUiEgWPiN/CnDFYZLgvI2Mb6UG4vw/9EW04yC4pQJzEZsumqdCIm0+lWjFrQXJMB4nBphWYFS4s3IGU+1fcjWI7tb0Ge4c61K1lCBt2gcxN4SBrE+VN2DfDxysQklfbfUjWLgJnQ62NvGanYlbi0MjOylQzvLjKSDKbREhckZeZpr8M1fAkWIEiDrf6uKrqETenfifCWgtRK+vcUmVOLSAhvaAgdkm1hNvispw6EG56w+ifzNHQuyDBslSSUjuJJgepqVlqVAJBdUDokGO6SNfhUWMxKlWGg2GlHOiJKUEx7SvWwA99LJtKwpFxbD2QB1QQALIED4W+NXOF4vIkFvsqvCuY0NxcHwo8nout1AUsZERBCjB+YG2tW3ejiEoS22jug3AnUyYMzuP7UkU9tGbVGYHjLa5S8Mhy9kWOY9ypAvygX3qy9gWgmQe0oWEXvzpb4jwh1C0iLezBEjxkD8qscOxD6wpIaLeWxKgRrrdWgpk1sVqy2G0tiDdXL861Th1uGTYbf2qfD4dAFiVm0qIteZyjy1PpRHDIAkkgQN/KnjkDwVuHcK6pJBWopJJlRJgmLCdqO4ZaUAidfz19KoLfBGYkBI3On9zWjT3WRIIRyIgnx5DuoSl4QYRcmX31rX2G4CSn9YdCm4OUbk3FaYLBNtJytoAm5I1UQAJUdzAqVDtq9SkTI+NIo0dcIKJ4FK5fXpWVvPIGspg0AuMH/m3h+9S81/8ATz/H/UaysqrPH5fA19Hz/wAokbdQLfwVawl2RP8A2z8RXlZWN6nUf5DXBhOFbnkfiqpHv1fmfjWVlKz0eL9CPAPskneqWOMIEWsflWVlKViQnTy+VRq+vSvaysE0AqNe3jWVlAzOR8TGXFJy9mHiBFoGbQRt3U2qPZ/i+dZWUkvBzEyD2B4n51LiLtqB0y1lZT8Yszn/AEhOTIlHZBQCQmwJ7VyBqaaulZjg2Ci3bm1ryoT6V7WU0vAyKPDTmUArtAlMg3mYmZpQ4qIdcAsAtQAGwzGsrKwWG+j7Kc6OyLoJNhrFdH6IYZAUqEJGVPZhItfblWVlJH9Qshi4idqlwyR1emht7qysqxLwSOspIukegpD4jZZSLC1hpvtWVlTW2Oi9w35j4Gp8fpWVlN/SDyDuKHttJ2ygxtPOOdEcMfhWVlTWjq4tBBGpqRVZWUxUiXrXtZWVjH//2Q==",
    },
    {
      title: `Motor d’Excitació Independent`,
      content: `Motor de corrent continu amb bobinatges separats, cosa que permet un control precís de la velocitat. És útil en aplicacions que requereixen estabilitat i resposta ràpida, com grues i trens elèctrics.`,
      image: `https://picsum.photos/seed/2/800/400`,
    },
    {
      title: `Motor d’Excitació en Sèrie`,
      content: `Motor amb bobinatge d’excitació en sèrie amb l’induït, que proporciona un alt parell d’arrencada però una velocitat que disminueix amb la càrrega. Ideal per tramvies, ascensors i muntacàrregues, però perillós sense càrrega.`,
      image: `https://picsum.photos/seed/3/800/400`,
    },
    {
      title: `Motor d’Excitació en Derivació (Shunt)`,
      content: `Motor amb bobinatge en paral·lel amb l’induït, fet que permet mantenir una velocitat constant. És eficient i estable en aplicacions com màquines industrials, bombes i ventiladors.`,
      image: `https://picsum.photos/seed/4/800/400`,
    },
    {
      title: `Motor d’Excitació Composta`,
      content: `Combina característiques dels motors en sèrie i en derivació, oferint un bon equilibri entre parell d’arrencada i estabilitat de velocitat. Utilitzat en tracció elèctrica, generadors i equips industrials.`,
      image: `https://picsum.photos/seed/5/800/400`,
    },
  ]
  const cardData2 = [
    {
      title: `Motors Síncrons `,
      content: `Els motors síncrons funcionen a una velocitat constant sincronitzada amb la freqüència del corrent altern. A causa del seu funcionament, necessiten sistemes externs per a l’arrencada, com ara excitació addicional o variadors de freqüència, per assolir la velocitat de sincronització.`,
      image: `https://picsum.photos/seed/1/800/400`,
    },
    {
      title: `Motors Asíncrons`,
      content: `Els motors asíncrons són els més utilitzats a la indústria per la seva simplicitat i resistència. Són resistents, econòmics i requereixen poc manteniment. Poden tenir un rotor de gàbia d'esquirol, que és el més comú per la seva robustesa i economia, o un rotor bobinat, que permet un millor control de l'arrencada. Són habituals en aplicacions com ventiladors, bombes d’aigua i refrigeradors.`,
      image: `https://picsum.photos/seed/2/800/400`,
    },
  ]
  const cardData3 = [
    {
      title: `Motors Monofàsics i Universals`,
      content: `Els motors monofàsics es fan servir en habitatges i petits comerços. Els motors d'inducció amb bobinatge auxiliar tenen un bobinatge addicional per facilitar l’arrencada i, en alguns casos, un condensador per millorar el procés. Els motors de condensador poden tenir un condensador permanent, que funciona sempre, o un condensador d’arrencada, que es desconnecta després d’engegar-se. Aquests motors es troben en electrodomèstics com rentadores, aires condicionats i refrigeradors. Els motors universals poden funcionar tant amb corrent continu com altern, tenen una velocitat molt alta i s’utilitzen en aspiradores, trepants i liquadores.`,
      image: `https://picsum.photos/seed/1/800/400`,
    },
  ]
  const cardData4 = [
    {
      title: `Motors Pas a Pas `,
      content: `Els motors pas a pas es mouen en petits passos en lloc de girar contínuament, fet que permet un control precís del moviment. Requereixen un controlador electrònic per al seu funcionament. Hi ha dos tipus principals: els de reluctància variable, on el rotor no té imants, només ferro, i els híbrids, que combinen reluctància i imants permanents per millorar la precisió. Són comuns en impressores, robots i maquinària de control numèric.`,
      image: "https://picsum.photos/seed/1/800/400",
    },
    
  ]

  return (
    <>
      <header className="mb-8 text-center p-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Motors elèctrics</h1>
        <p className="text-xl text-gray-600 a mx-auto">
        Els motors elèctrics transformen l'energia elèctrica en energia mecànica, permetent el moviment. Es fan servir en tot tipos d'àmbits, com la indústria, els electrodomèstics i la robòtica. Segons el seu disseny i el tipus de corrent amb què funcionen, es divideixen en diverses categories.
        </p>
      </header>
        <div><h1 className="text-4xl font-bold mb-4 text-gray-800 b">Motors de corrent continu</h1></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={`Image for ${card.title}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>{card.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div><h1 className="text-4xl font-bold mb-4 text-gray-800 b">Motors de corrent altern</h1></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData2.map((card, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={`Image for ${card.title}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>{card.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div><h1 className="text-4xl font-bold mb-4 text-gray-800 b">Motors Monofàsics i Universals</h1></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData3.map((card, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={`Image for ${card.title}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>{card.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div><h1 className="text-4xl b font-bold mb-4 text-gray-800 b">Motors Pas a Pas</h1></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData4.map((card, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={`Image for ${card.title}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>{card.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

